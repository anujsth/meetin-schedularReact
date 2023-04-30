import { createSlice } from "@reduxjs/toolkit";

const rescheduleSlice = createSlice({
  name: "reschedule",
  initialState: {
    rescheduleData: false,
    formerDate: {
      time: "",
      day: "",
      month: "",
      yearNum: "",
      dayNum: "",
    },
    newDate: {
      time: "",
      day: "",
      month: "",
      yearNum: "",
      dayNum: "",
    },
  },
  reducers: {
    setRescheduleTrue: (state) => {
      state.rescheduleData = true;
    },
    setRescheduleFalse: (state) => {
      state.rescheduleData = false;
    },
    setFormerDate: (state, action) => {
      state.formerDate.day = action.payload.day;
      state.formerDate.time = action.payload.time;
      state.formerDate.month = action.payload.month;
      state.formerDate.yearNum = action.payload.yearNum;
      state.formerDate.dayNum = action.payload.dayNum;
    },
    setNewDate: (state, action) => {
      state.newDate.day = action.payload.day;
      state.newDate.time = action.payload.time;
      state.newDate.month = action.payload.month;
      state.newDate.yearNum = action.payload.yearnum;
      state.newDate.dayNum = action.payload.daynum;
      state.newDate.time = action.payload.time;
    },
  },
});

export const {
  setRescheduleTrue,
  setFormerDate,
  setNewDate,
  setRescheduleFalse,
} = rescheduleSlice.actions;
export default rescheduleSlice.reducer;
