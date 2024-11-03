import React from "react";
import EventBox from "./common/EventBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import eventImage1 from "../assets/eventsImages/l1.jpg";
import eventImage2 from "../assets/eventsImages/l2.jpg";
import eventImage3 from "../assets/eventsImages/l3.jpg";
import eventImage4 from "../assets/eventsImages/l4.jpg";

const Events = () => {
  return (
    <div className="w-full bg-mainBg px-8 py-7 space-y-6 relative">
      <div className="flex flex-row gap-3 justify-between items-end">
        <div className="space-y-2.5">
          <h1 className="text-2xl text-white">
            Our{" "}
            <span className="underline underline-offset-4 decoration-yellow-300 decoration-4">
              Exclusive events
            </span>
          </h1>
          <p className="text-white opacity-75 text-sm leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            praesentium ipsam.
          </p>
        </div>
        <FontAwesomeIcon icon={faArrowRight} color="yellow" />
      </div>
      <div className="flex overflow-x-auto last:overflow-y-hidden whitespace-nowrap gap-5 py-2">
        <div className="inline-flex space-x-8">
          <EventBox
            image={eventImage1}
            title="Conference"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpareprehenderit rem at dicta enim eveniet ea."
          />
          <EventBox
            image={eventImage2}
            title="Conferenc"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpareprehenderit rem at dicta enim eveniet ea."
          />
          <EventBox
            image={eventImage3}
            title="Conference"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpareprehenderit rem at dicta enim eveniet ea."
          />
          <EventBox
            image={eventImage4}
            title="Conference"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpareprehenderit rem at dicta enim eveniet ea."
          />
          <EventBox
            image={eventImage2}
            title="Conference"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpareprehenderit rem at dicta enim eveniet ea."
          />
          <EventBox
            image={eventImage3}
            title="Conference"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpareprehenderit rem at dicta enim eveniet ea."
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
