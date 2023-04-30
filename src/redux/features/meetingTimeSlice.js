import { createSlice } from "@reduxjs/toolkit";

const meetingTimeSlice = createSlice({
  name: "meetingTime",
  initialState: {
    thirtyMinute: 30,
    fifteenMinute: 15,
    name: "Anuj Shrestha",
  },
});

export default meetingTimeSlice.reducer;
