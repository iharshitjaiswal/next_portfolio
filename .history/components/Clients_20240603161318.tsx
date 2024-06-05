import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards.tsx";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30vh] rounded-md antialiased items-center relative ">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
