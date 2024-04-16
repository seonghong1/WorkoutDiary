import { ISavedEvent } from "types";

export const THEME_COLOR = {
  등: "#3d61e1",
  가슴: "#f1424c",
  하체: "#de3de1",
  어깨: "#3082b1d6",
  이두: "#3d55aa",
  삼두: "#bb5b5b",
};

export const TITLE_LIST = ["등", "가슴", "하체", "어깨", "이두", "삼두"];

/* category select-box에 사용되는 options 요소 */
export const CATEGORY_OPTIONS_DATA: { [key: string]: string[] } = {
  등: [
    "뉴트럴 그립 로우 머신",
    "와이드 그립 렛풀다운",
    "와이드 맥그립 렛풀다운",
    "와이드 풀다운 머신",
    "암풀다운",
    "시티드 케이블 로우",
    "클로즈 맥그립 렛풀다운",
    "컨벤셔널 데드리프트",
    "티바 로우(머신)",
    "풀업",
    "하이 로우 머신",
  ],
  가슴: [
    "벤치프레스 (머신)",
    "벤치프레스 (프리웨이트)",
    "딥스 (어시스트 머신)",
    "시티드 딥스 머신",
    "인클라인 벤치프레스 (머신)",
    "인클라인 벤치프레스 (프리웨이트)",
    "체스트 프레스 머신",
    "펙덱 플라이 (머신)",
  ],
  하체: [
    "불가리안 스플릿 스쿼트",
    "레그 컬",
    "레그 익스텐션",
    "스쿼트",
    "아웃타이",
    "이너타이",
    "워킹 런지",
    "컨벤셔널 데드리프트",
  ],
  어깨: [
    "덤벨 프레스",
    "리버스 펙덱플라이",
    "사이드 레터럴 레이즈",
    "오버 헤드 프레스",
    "케이블 페이스풀",
    "프론트 레이즈",
  ],
  이두: ["덤벨컬", "바벨컬", "암컬머신", "케이블 헤머컬", "케이블컬", "헤머컬"],
  삼두: [
    "딥스 (어시스트 머신)",
    "클로즈 그립 벤치프레스",
    "케이블 로프 프레스 다운",
    "케이블 프레스 다운",
  ],
};

export const DUMMY_DATA: any = {
  "2024_5": [
    {
      title: "가슴",
      start: new Date("2024-05-09"),
      end: new Date("2024-05-09"),
      resource: [
        { title: "가슴", category: "test", repetition: 2, sets: 2, weight: 3 },
        { title: "가슴", category: "test", repetition: 2, sets: 2, weight: 3 },
        { title: "가슴", category: "test", repetition: 2, sets: 2, weight: 3 },
      ],
    },
    {
      title: "삼두",
      start: new Date("2024-05-09"),
      end: new Date("2024-05-09"),
      resource: [
        { title: "삼두", category: "test", repetition: 2, sets: 2, weight: 3 },
        { title: "삼두", category: "test", repetition: 2, sets: 2, weight: 3 },
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
        { title: "가슴", category: "test222222", repetition: 2, sets: 2, weight: 3 },
        { title: "가슴", category: "test33333", repetition: 2, sets: 2, weight: 3 },
      ],
    },
    {
      title: "삼두",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: [
        { title: "삼두", category: "test0999999", repetition: 2, sets: 2, weight: 3 },
        { title: "삼두", category: "test1231231312312", repetition: 2, sets: 2, weight: 3 },
      ],
    },
    {
      title: "등",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: [
        { title: "등", category: "test0999999", repetition: 2, sets: 2, weight: 3 },
        { title: "등", category: "test1231231312312", repetition: 2, sets: 2, weight: 3 },
      ],
    },
    {
      title: "이두",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: [
        { title: "이두", category: "test0999999", repetition: 2, sets: 2, weight: 3 },
        { title: "이두", category: "test1231231312312", repetition: 2, sets: 2, weight: 3 },
      ],
    },
    {
      title: "하체",
      start: new Date("2024-04-09"),
      end: new Date("2024-04-09"),
      resource: [
        { title: "하체", category: "test0999999", repetition: 2, sets: 2, weight: 3 },
        { title: "하체", category: "test1231231312312", repetition: 2, sets: 2, weight: 3 },
      ],
    },
  ],
};
