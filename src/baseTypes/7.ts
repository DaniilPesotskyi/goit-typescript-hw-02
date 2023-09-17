/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  Saturday = "Saturday",
  Sunday = "Sunday",
}

enum Weekday {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
}

const isWeekend = (day: string): boolean => {
  if (day in Weekend) {
    return true;
  } else return false;
};
