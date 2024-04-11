import { Event } from "react-big-calendar";

type TCategory = "가슴" | "등" | "히체" | "어깨" | "이두" | "삼두";

/* workout form에 종목별 각각의 컨테이너 인터페이스 정의 */
export interface IWorkoutData {
  title: TCategory;
  category: string;
  weight: number;
  repetition: number;
  sets: number;
}

/* 
    react-big-calendar에서 제공되는 Event인터페이스 확장, 
    저장될 resource 타입 재정의 
*/
export interface IEvent extends Event {
  title: TCategory;
  resource: IWorkoutData[];
}

/*
    최종적으로 Event요소가 저장될 형태 
    [key: string] 키값은 YYYY_MM 형태
*/
export interface ISavedEvent {
  [key: string]: IEvent[];
}
