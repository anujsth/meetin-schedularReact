import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDetails } from "../redux/features/detailsSlice";

const TimeList = ({ twelveHour, twentyFourHour, time }) => {
  const {
    selectedDate,
    selectedDay,
    selectedMonth,
    selectedDayNum,
    selectedYearNum,
    hours,
  } = useSelector((state) => state.timeZone);
  const [toggleHr, setToggleHr] = useState(false);
  const currentDate = new Date();
  const [newArray, setNewArray] = useState(null);
  const [twelveFormatArray, setTwelveFormatArray] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(
      setDetails({
        time: item,
        day: selectedDay,
        month: selectedMonth,
        yearNum: selectedYearNum,
        dayNum: selectedDayNum,
      })
    );
    time == "thirty" && navigate("/detailpage/30min");
    time == "fifteen" && navigate("/detailpage/15min");
  };

  useEffect(() => {
    const date = new Date(selectedDate);
    const val = date.getDay();
    const month = date.getMonth();
    if (
      selectedDate !== "" &&
      currentDate.getDay() == val &&
      currentDate.getMonth() == month
    ) {
      setNewArray(
        twentyFourHour.filter((item) => {
          return parseInt(item) > hours + 1;
        })
      );

      console.log(newArray);
      console.log(twelveFormatArray);
    } else {
      setNewArray(null);
    }
  }, [selectedDate]);

  function convertTo12HrFormat(times) {
    const result = [];
    for (let i = 0; i < times.length; i++) {
      const time = times[i];
      const [hour, minute] = time.split(":");
      let formattedHour = hour % 12 || 12;
      const formattedTime = `${formattedHour}:${minute} ${
        hour >= 12 ? "PM" : "AM"
      }`;
      result.push(formattedTime);
    }
    return result;
  }

  useEffect(() => {
    if (newArray) {
      // setTwelveFormatArray(
      //   newArray.map((item, index) => {
      //     return twelveHour[index];
      //   })
      // );
      setTwelveFormatArray(convertTo12HrFormat(newArray));
    } else {
      setTwelveFormatArray(null);
    }
  }, [newArray]);
  return (
    <div className="w-[70rem] h-[100%] flex flex-col p-[20px]">
      <div className=" flex justify-between items-center">
        <p className="text-white">
          {selectedDay}, {selectedMonth} {selectedDayNum}
        </p>
        <div className="flex border-2 px-2 py-1 rounded">
          <button
            className={`text-white mr-4 ${toggleHr && "bg-white px-1 rounded"}`}
            onClick={() => {
              setToggleHr(false);
            }}
          >
            12h
          </button>
          <button
            className={`text-white ${!toggleHr && "bg-white px-1 rounded"}`}
            onClick={() => {
              setToggleHr(true);
            }}
          >
            24h
          </button>
        </div>
      </div>
      <div className="mt-6 overflow-y-scroll">
        {newArray === null &&
          (!toggleHr ? twelveHour : twentyFourHour).map((item, id) => {
            return (
              <div
                onClick={() => handleClick(item)}
                key={id}
                className="mt-3 cursor-pointer w-[98%] h-9 border-2 border-white rounded-lg flex justify-center items-center transition-all hover:scale-[1.008] hover:bg-[#041c32]"
              >
                <p className="text-white text-xl">{item}</p>
              </div>
            );
          })}
        {time === "thirty" && toggleHr
          ? newArray !== null &&
            newArray.map((item, id) => {
              return (
                <div
                  onClick={() => handleClick(item)}
                  key={id}
                  className="mt-3 cursor-pointer w-[98%] h-9 border-2 border-white rounded-lg flex justify-center items-center transition-all hover:scale-[1.008] hover:bg-[#041c32]"
                >
                  <p className="text-white text-xl">{item}</p>
                </div>
              );
            })
          : twelveFormatArray !== null &&
            twelveFormatArray.map((item, id) => {
              return (
                <div
                  onClick={() => handleClick(item)}
                  key={id}
                  className="mt-3 cursor-pointer w-[98%] h-9 border-2 border-white rounded-lg flex justify-center items-center transition-all hover:scale-[1.008] hover:bg-[#041c32]"
                >
                  <p className="text-white text-xl">{item}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default TimeList;
