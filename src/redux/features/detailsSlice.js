import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    yourDetail: {
      time: " ",
      day: " ",
      month: " ",
      yearNum: " ",
      dayNum: " ",
    },
    timeFormat: "",
    userName: "",
    userEmail: "",
    guestEmail: null,
    additionalNote: "",
    timezone: "",
  },
  reducers: {
    setDetails: (state, action) => {
      state.yourDetail.time = action.payload.time;
      state.yourDetail.day = action.payload.day;
      state.yourDetail.month = action.payload.month;
      state.yourDetail.yearNum = action.payload.yearNum;
      state.yourDetail.dayNum = action.payload.dayNum;
    },
    setUserInput: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.guestEmail = action.payload.guestEmail;
      state.additionalNote = action.payload.additionalNote;
      state.timeFormat = action.payload.timeFormat;
      state.timezone = action.payload.timezone;
    },
    resetAll(state) {
      state.yourDetail.time = " ";
      state.yourDetail.day = " ";
      state.yourDetail.month = " ";
      state.yourDetail.yearNum = " ";
      state.yourDetail.dayNum = " ";
      state.userName = "";
      state.userEmail = "";
      state.guestEmail = null;
      state.additionalNote = "";
      state.timeFormat = "";
      state.timezone = "";
    },
  },
});

export const { setDetails, setUserInput } = detailsSlice.actions;
export default detailsSlice.reducer;
