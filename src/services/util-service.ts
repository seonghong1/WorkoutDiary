import { THEME_COLOR } from "constants/inputs";
import { TCategory } from "types";

export class UtilService {
  static getToday() {
    const date: Date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    return `${year}.${month + 1}.${day}`;
  }

  static getConvertedWorkoutFormDate(date: Date) {
    const _month = date.getMonth() + 1;
    const _date = date.getDate();
    const _day = date.getDay();
    const dayArray = ["일", "월", "화", "수", "목", "금", "토"];

    return `${_month}월${_date}일(${dayArray[_day]})`;
  }

  static getColorStyle(title: TCategory) {
    switch (title) {
      case "등":
        return THEME_COLOR[title];
      case "가슴":
        return THEME_COLOR[title];
      case "하체":
        return THEME_COLOR[title];
      case "어깨":
        return THEME_COLOR[title];
      case "이두":
        return THEME_COLOR[title];
      case "삼두":
        return THEME_COLOR[title];
    }
  }
}
