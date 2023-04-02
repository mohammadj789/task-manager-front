export const daysBetween = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

  const diffInMs = Math.abs(date2 - date1); // absolute difference in milliseconds

  const diffInDays = Math.round(diffInMs / oneDay); // rounded to nearest integer

  return diffInDays;
};
export const DayIsPast = (dateToCheck) => {
  // get today's date
  const today = new Date();
  const todaywithoutHour = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  if (dateToCheck < todaywithoutHour) {
    return true;
  } else if (dateToCheck >= todaywithoutHour) {
    return false;
  }
};
export const sameManthCheck = (dateToCheck) => {
  const today = new Date();

  if (
    dateToCheck.getMonth() === today.getMonth() &&
    dateToCheck.getFullYear() === today.getFullYear()
  ) {
    return true;
  } else {
    return false;
  }
};
export const dateReformat = (date) => {
  const today = new Date();
  if (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  ) {
    return "Today";
  }

  const monthName = date.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return monthName; // Output: "30 March 2023"
};
