"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const carouselCards = [
  {
    title: "Floating UI Magic",
    description: "Next.js + 3D hover effect with carousel navigation.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80",
  },
  {
    title: "Tailwind + Perspective",
    description: "A beautiful 3D hover card using Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80",
  },
];

export default function ThreeDCardCarousel() {
  const [index, setIndex] = useState(0);
  const current = carouselCards[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? carouselCards.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === carouselCards.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full py-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-purple mb-10">
        3D Styled Carousel Card
      </h2>

      <CardContainer className="inter-var">
        {/* ⚠️  overflow-hidden removed */}
        <CardBody className="relative group/card bg-[#13162D] text-[#BEC1DD] border border-white/[.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-6">
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            {current.title}
          </CardItem>

          <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2">
            {current.description}
          </CardItem>

          {/* translateZ kept at 100 (or increase to 120/150 for more pop) */}
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={current.image}
              alt="carousel card"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>

          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              onClick={prev}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-black"
            >
              ← Prev
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              onClick={next}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-black"
            >
              Next →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  );
}
