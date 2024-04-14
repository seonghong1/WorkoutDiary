import { atom } from "jotai";
import { IEvent } from "types";

export const workoutListAtom = atom(null as null | IEvent[]);
