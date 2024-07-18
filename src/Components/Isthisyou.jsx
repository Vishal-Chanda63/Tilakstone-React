import React, { useState } from "react";
import smileIcon from "../images/svg/smile-icon.svg";

const Isthisyou = () => {
  const [isVisible, setisVisible] = useState(false);

  const myArr = [
    {
      img: smileIcon,
      discription: "You are looking for someone to make your dream pooja room",
    },
  ];

  return (
    <section className="my-2 my-md-4 my-lg-5 py-5">
      <div className="container custom_container">
        <div className="row">
          <div className="col-12">
            <h2 className="main_heading text-center">Is this You ?</h2>

            {/* <p>
              If you can relate to any of thes, then we can help you build the
              temple of your Dreams
            </p>
            <button className="common_button">Get into touch</button> */}
          </div>

          <div className="col-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Isthisyou;
