import React, { useState } from "react";
import SideProfile from "../components/SideProfile";
import { useParams } from "react-router-dom";
import FormInput from "../components/FormInput";

const DetailPage = () => {
  // const { detail } = useParams();
  // const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-center mt-[10rem] mx-[8rem] h-[30rem]  ">
      <div className="w-[100%] bg-[#064663] h-[30rem] flex rounded-xl group transition-all">
        <SideProfile />
        <FormInput />
      </div>
    </div>
  );
};

export default DetailPage;
