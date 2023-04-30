import { configureStore } from "@reduxjs/toolkit";
import meetingTimeReducer from "./features/meetingTimeSlice";
import timeZoneReducer from "./features/timeZoneSlice";
import detailsReducer from "./features/detailsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reshceduleReducer from "./features/rescheduleSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "details",
  storage,
};

const store = configureStore({
  reducer: {
    meetingTime: meetingTimeReducer,
    timeZone: timeZoneReducer,
    details: persistReducer(persistConfig, detailsReducer),
    reschedule: reshceduleReducer,
    middleware: [thunk],
  },
});

export default store;
export const persistor = persistStore(store);
