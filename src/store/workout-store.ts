import { atom } from "jotai";
import { IEvent } from "types";

export const workoutListAtom = atom([] as IEvent[]);
export const eventListAtom = atom([] as any);
