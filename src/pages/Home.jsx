import { useDispatch, useSelector } from "react-redux";
import MeetingCard from "../components/MeetingCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setAllTimeZone } from "../redux/features/timeZoneSlice";
import { Axios } from "../axios";

const Home = () => {
  const { thirtyMinute, fifteenMinute } = useSelector(
    (state) => state.meetingTime
  );
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get("/timezone")
      .then((res) => dispatch(setAllTimeZone(res.data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center m-[6rem]">
      <h1 className="text-[#0E8388] text-6xl font-bold mb-2">Anuj Shrestha</h1>
      <p className="italic text-[#0E8388] mb-[5rem]">
        React | tailwind css | redux-toolkit{" "}
      </p>
      <Link to="/30min" className="w-[100%] flex justify-center">
        <MeetingCard time={thirtyMinute} />
      </Link>
      <Link to="/15min" className="w-[100%] flex justify-center">
        <MeetingCard time={fifteenMinute} />
      </Link>
    </div>
  );
};

export default Home;
