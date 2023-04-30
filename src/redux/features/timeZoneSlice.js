import { createSlice } from "@reduxjs/toolkit";

const timezoneSlice = createSlice({
  name: "timeZone",
  initialState: {
    allTimeZone: [],
    selectedTimeZone: "",
    selectedDate: "",
    selectedDay: " ",
    selectedMonth: " ",
    selectedDayNum: " ",
    selectedYearNum: " ",
    hours: "",
  },
  reducers: {
    setAllTimeZone: (state, action) => {
      state.allTimeZone = action.payload;
    },
    setSelectedTimeZone: (state, action) => {
      state.selectedTimeZone = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload.date;
      state.selectedDay = action.payload.day;
      state.selectedMonth = action.payload.month;
      state.selectedDayNum = action.payload.daynum;
      state.selectedYearNum = action.payload.yearnum;
      state.hours = action.payload.hours;
    },
  },
});

export const { setAllTimeZone, setSelectedTimeZone, setSelectedDate } =
  timezoneSlice.actions;
export default timezoneSlice.reducer;
