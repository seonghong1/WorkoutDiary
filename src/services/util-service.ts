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

  static getConvertedDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return new Date(`${year}-${month + 1}-${day}`);
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
