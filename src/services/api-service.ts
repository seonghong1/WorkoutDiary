import { IEvent, IEventResource, TCategory, TEventResource } from "types";

export class ApiService {
  /* 현재 날짜의 이벤트를 가져오는 함수 */
  static getTodaysEvents(
    eventList: IEvent[],
    setCurrentDate: (currentDate: Date) => void,
    setWorkoutList: (workoutList: IEvent[]) => void,
    date: Date
  ) {
    setCurrentDate(date);

    const filterdData = eventList?.filter((event: IEvent) => {
      if (event) {
        if (new Date(event.start!)?.toDateString() === date.toDateString()) {
          return event;
        }
      }
    });

    setWorkoutList(filterdData || []);
  }

  /* 이벤트를 갖고오는 함수 */
  static getEvents(
    setCurrentDate: (currentDate: Date) => void,
    setEventList: (eventList: IEvent[]) => void,
    date?: Date
  ) {
    const dateValue = date || new Date();
    setCurrentDate(dateValue);

    const localstorage = JSON.parse(localStorage.getItem("WorkoutDiary") || "{}");
    if (localstorage) {
      setEventList(localstorage[`${dateValue!.getFullYear()}_${dateValue!.getMonth() + 1}`]);
    }
  }

  /* 이벤트를 요소를 업데이트하는 함수 */
  static updateEvents(currentDate: Date, workoutList: IEvent[], eventList: IEvent[]) {
    if (currentDate && workoutList) {
      const key = `${currentDate!.getFullYear()}_${currentDate!.getMonth() + 1}`;
      const data = { [key]: eventList };

      const localstorage = JSON.parse(localStorage.getItem("WorkoutDiary") || "{}");

      localStorage.setItem("WorkoutDiary", JSON.stringify({ ...localstorage, ...data }));
    }
  }
  /* 신규 이벤트를 생성하는 함수 */
  static createEvent(
    selectBoxRef: any,
    currentDate: Date,
    workoutList: IEvent[],
    setWorkoutList: (eventList: IEvent[]) => void
  ) {
    if (selectBoxRef.current!.value) {
      const data: IEvent[] = [
        {
          title: selectBoxRef.current!.value as TCategory,
          start: currentDate,
          end: currentDate,
          resource: [],
        },
      ];
      if (workoutList) {
        setWorkoutList([...workoutList, ...data]);
      }
    }
  }

  /* 신규 이벤트를 저장하는 함수 */
  static insertEvents(
    eventList: IEvent[],
    setEventList: (eventList: IEvent[]) => void,
    workoutList: IEvent[],
    currentDate: Date
  ) {
    const arr = JSON.parse(JSON.stringify(eventList || []));
    const filteredArr = arr.filter((event: IEvent) => {
      if (new Date(event.start!).toDateString() !== currentDate.toDateString()) {
        return event;
      }
    });
    setEventList([...filteredArr, ...workoutList]);
  }

  /* 이벤트 요소를 삭제하는 함수 */
  static deleteEvent(
    workoutList: IEvent[],
    setWorkoutList: (eventList: IEvent[]) => void,
    eventIndex: number
  ) {
    if (eventIndex === 0) {
      setWorkoutList(workoutList!.slice(1));
    } else {
      setWorkoutList([...workoutList!.slice(0, eventIndex), ...workoutList!.slice(eventIndex + 1)]);
    }
  }

  /* 이벤트 내부 새로운 카테고리를 생성하는 함수 */
  static createInputItems(
    workoutList: IEvent[],
    setWorkoutList: (eventList: IEvent[]) => void,
    eventIndex: number
  ) {
    const arr: IEvent[] = JSON.parse(JSON.stringify(workoutList));
    const data = {
      title: arr[eventIndex].title,
      category: "",
      repetition: 0,
      sets: 0,
      weight: 0,
    } as IEventResource;
    arr[eventIndex].resource.push(data);
    setWorkoutList(arr);
  }

  /* 이벤트 내부 카테고리를 삭제하는 함수 */
  static deleteInputItems(
    workoutList: IEvent[],
    setWorkoutList: (eventList: IEvent[]) => void,
    eventIndex: number,
    resourceIndex: number
  ) {
    const arr: IEvent[] = JSON.parse(JSON.stringify(workoutList));

    if (resourceIndex === 0) {
      arr[eventIndex].resource = arr![eventIndex].resource.slice(1);
      setWorkoutList(arr);
    } else {
      const resource = [
        ...arr![eventIndex].resource.slice(0, resourceIndex),
        ...arr![eventIndex].resource.slice(resourceIndex + 1),
      ];

      arr[eventIndex].resource = resource;
      setWorkoutList(arr);
    }
  }

  /* 이벤트 내부 인풋 요소들의 값을 업데이트 하는 함수 */
  static updateInputValue(
    workoutList: IEvent[],
    setWorkoutList: (eventList: IEvent[]) => void,
    eventIndex: number,
    resourceIndex: number,
    data: { key: TEventResource; value: number | string }
  ) {
    const arr: IEvent[] = JSON.parse(JSON.stringify(workoutList));
    arr[eventIndex].resource![resourceIndex][data.key] = data.value;

    setWorkoutList(arr);
  }
}
