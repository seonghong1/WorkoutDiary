import { ISavedEvent } from "types";

// TODO :: 종목별 options 데이터 만들기
export const OPTIONS_DATA: any = {
  등: [
    "와이드 그립 렛풀다운",
    "와이드 맥그립 렛풀다운",
    "클로즈 맥그립 렛풀다운",
    "티바 로우(머신)",
    "암풀다운",
    "뉴트럴 그립 로우 머신",
    "하이 로우 머신",
    "와이드 풀다운 머신",
    "시티드 케이블 로우",
    "풀업",
    "컨벤셔널 데드리프트",
  ],
  가슴: [
    "인클라인 벤치프레스 (프리웨이트)",
    "인클라인 벤치프레스 (머신)",
    "벤치프레스 (프리웨이트)",
    "벤치프레스 (머신)",
    "체스트 프레스 머신",
    "펙덱 플라이 (머신)",
    "시티드 딥스 머신",
    "딥스 (어시스트 머신)",
  ],
  하체: [
    "스쿼트",
    "레그 익스텐션",
    "레그 컬",
    "이너타이",
    "아웃타이",
    "불가리안 스플릿 스쿼트",
    "워킹 런지",
    "컨벤셔널 데드리프트",
  ],
  어깨: [
    "오버 헤드 프레스",
    "덤벨 프레스",
    "리버스 펙덱플라이",
    "케이블 페이스풀",
    "사이드 레터럴 레이즈",
    "프론트 레이즈",
  ],
  이두: ["바벨컬", "덤벨컬", "헤머컬", "암컬머신", "케이블컬", "케이블 헤머컬"],
  삼두: [
    "케이블 프레스 다운",
    "케이블 로프 프레스 다운",
    "딥스 (어시스트 머신)",
    "클로즈 그립 벤치프레스",
  ],
};

export const DUMMY_DATA: ISavedEvent = {
  "2024_5": [
    {
      title: "가슴",
      start: new Date("2024-05-09"),
      end: new Date("2024-05-09"),
      resource: [
        { title: "가슴", category: "test", repetition: 2, sets: 2, weight: 3 },
        { title: "등", category: "test", repetition: 2, sets: 2, weight: 3 },
        { title: "삼두", category: "test", repetition: 2, sets: 2, weight: 3 },
      ],
    },
    {
      title: "삼두",
      start: new Date("2024-05-09"),
      end: new Date("2024-05-09"),
      resource: [
        { title: "가슴", category: "test", repetition: 2, sets: 2, weight: 3 },
        { title: "등", category: "test", repetition: 2, sets: 2, weight: 3 },
        { title: "삼두", category: "test", repetition: 2, sets: 2, weight: 3 },
      ],
    },
  ],
  "2024_4": [
    {
      title: "가슴",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: [
        { title: "가슴", category: "tes1t1111", repetition: 2, sets: 2, weight: 3 },
        { title: "등", category: "test222222", repetition: 2, sets: 2, weight: 3 },
        { title: "삼두", category: "test33333", repetition: 2, sets: 2, weight: 3 },
      ],
    },
    {
      title: "삼두",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: [
        { title: "가슴", category: "test0999999", repetition: 2, sets: 2, weight: 3 },
        { title: "등", category: "test1231231312312", repetition: 2, sets: 2, weight: 3 },
      ],
    },
  ],
};
