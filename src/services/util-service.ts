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
}
