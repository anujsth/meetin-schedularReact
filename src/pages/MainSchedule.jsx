import { useState } from "react";
import SideProfile from "../components/SideProfile";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../assets/styles/calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../redux/features/timeZoneSlice";
import TimeList from "../components/TimeList";
import { useParams } from "react-router-dom";
import {
  twelveHourFormat,
  twentyFourFormat,
} from "../functions/timeMinuteFormat";
import { setNewDate } from "../redux/features/rescheduleSlice";
const MainSchedule = () => {
  const { id } = useParams();
  const { selectedDate } = useSelector((state) => state.timeZone);
  const { rescheduleData } = useSelector((state) => state.reschedule);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const currentDate = new Date();
  const onChange = (date) => {
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const daynum = date.getDate();
    const yearnum = date.getFullYear();
    const dated = new Date(date);
    const newDate = dated.getDate();
    const hours = date.getHours();

    dispatch(
      setSelectedDate({ newDate, date, day, month, daynum, yearnum, hours })
    );
    rescheduleData && dispatch(setNewDate({ day, month, yearnum, daynum }));
  };
  const disableSunday = ({ date }) => {
    if (date.getDay() === 0 || date.getDay() === 6) {
      return true;
    }
  };

  const disablePrevious = ({ date }) => {
    if (date < currentDate) {
      return "previous-date";
    }
  };
  const handleClickDay = () => {
    setToggle(true);
  };
  return (
    <div className="flex justify-center mt-[10rem] mx-[8rem] h-[26rem] ">
      <div
        className={`${
          toggle ? "w-[100%]" : "w-[60%]"
        } bg-[#064663] h-[26rem] flex rounded-xl group transition-all duration-200 `}
      >
        <SideProfile />
        <div className="w-[55%]">
          <Calendar
            onChange={onChange}
            value={selectedDate}
            // className="custom-calendar"
            minDate={currentDate}
            tileDisabled={disableSunday}
            tileClassName={disablePrevious}
            onClickDay={handleClickDay}
          />
        </div>
        {toggle && id === "30min" && (
          <TimeList
            twelveHour={twelveHourFormat.thirty}
            twentyFourHour={twentyFourFormat.thirty}
            time={"thirty"}
          />
        )}
        {toggle && id === "15min" && (
          <TimeList
            twelveHour={twelveHourFormat.fifteen}
            twentyFourHour={twentyFourFormat.fifteen}
            time={"fifteen"}
          />
        )}
      </div>
    </div>
  );
};

export default MainSchedule;
