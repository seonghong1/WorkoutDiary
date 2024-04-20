import { atom } from "jotai";
import { IEvent } from "types";

// 현재 날짜의 이벤트 요소들이 담겨 있는 state
export const workoutListAtom = atom([] as IEvent[]);

// 현재 월의 이벤트 요소들이 담겨 있는 state
export const eventListAtom = atom([] as IEvent[]);

// 현재 화면 사이즈 정보가 담겨 있는 state
export const windowSizeAtom = atom("" as "laptop" | "tablet" | "mobile");
