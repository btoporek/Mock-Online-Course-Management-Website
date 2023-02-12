import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";

function HomePage() {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  return (
    <>
      <div className="home">
        <div className="heading">
          <button className="icon-button">
            <CgProfile className="heading-icons" />
          </button>
          <button className="icon-button">
            <MdOutlineMail className="heading-icons" />
          </button>
          <button
            onClick={() => setIsCalendarModalOpen(!isCalendarModalOpen)}
            className="icon-button"
          >
            <FaRegCalendarAlt className="heading-icons" id="home-calendar" />
          </button>
        </div>
      </div>
      <div id="page-body">
        {isCalendarModalOpen && (
          <div className="modal-content">
            <Calendar id="modal-shadow" />
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;