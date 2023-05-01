import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/calendar.css";

import {
  setSelectedDate,
  setSelectedTimeZone,
} from "../redux/features/timeZoneSlice";
import { Axios } from "../axios";

const TimeZone = () => {
  const { allTimeZone, selectedTimeZone } = useSelector(
    (state) => state.timeZone
  );
  let timezone = `${selectedTimeZone}`;
  const dispatch = useDispatch();
  const selectHandler = (e) => {
    dispatch(setSelectedTimeZone(e.target.value));
  };
  useEffect(() => {
    Axios.get(`/timezone/${selectedTimeZone}`).then((res) => {
      const dateval = new Date(res.data.utc_datetime);
      const day = dateval.toLocaleDateString("en-US", { weekday: "long" });
      const month = dateval.toLocaleDateString("en-US", { month: "long" });
      const daynum = dateval.getDate();
      const yearnum = dateval.getYear();
      const isoString = res.data.datetime;
      const hours = parseInt(isoString.substring(11, 13), 10);

      dispatch(
        setSelectedDate({
          date: res.data.utc_datetime,
          day,
          month,
          daynum,
          yearnum,
          hours,
          timezone,
        })
      );
    });
  }, [selectedTimeZone]);
  return (
    <select
      onChange={selectHandler}
      defaultValue={selectedTimeZone}
      className=" w-[100%] pl-1 bg-transparent border-none focus:outline-none cursor-pointer"
    >
      {allTimeZone.map((item, id) => {
        return (
          <option key={id} className="option-style" value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default TimeZone;
