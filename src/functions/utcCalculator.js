export const utcCalculator = (timezone) => {
  const date = new Date().toLocaleString("en-US", { timeZone: timezone });
  console.log(date);
  const utcTime = new Date(date).toUTCString();
  const utcOffset = new Date(date).getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(utcOffset / 60));
  const offsetMinutes = Math.abs(utcOffset % 60);
  const dayNum = date.getDay();
  return [utcTime, utcOffset, offsetHours, offsetMinutes];
};

// export const timeCalculator = (date) => {
//   // const date = new Date().toLocaleString("en-US", { timeZone: timezone });
//   // console.log(date);
//   // const utcTime = new Date(date).toUTCString();
//   // const utcOffset = new Date(date).getTimezoneOffset();
//   // const offsetHours = Math.abs(Math.floor(utcOffset / 60));
//   // const offsetMinutes = Math.abs(utcOffset % 60);
//   const dayNum = date.getDay();
//   return [dayNum,];
// };
