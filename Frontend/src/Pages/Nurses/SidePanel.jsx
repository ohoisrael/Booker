import React from "react";
import convertTime from "../../utils/converTime";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";

const SidePanel = ({ nurseId, ticketPrice, timeSlots }) => {
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${nurseId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + " Please login");
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Booking Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice}
        </span>
        ₵
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>

        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)} -{" "}
                {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
        <button onClick={bookingHandler} className="btn w-full rounded-md">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
