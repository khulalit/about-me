import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Register the Draggable plugin
gsap.registerPlugin(Draggable);

const LightBulbToggle = () => {
  const [isOn, setIsOn] = useState(false);
  const cordRef = useRef(null);
  const dummyCordRef = useRef(null);
  const hitSpotRef = useRef(null);
  const audioClick = useRef(
    new Audio("https://assets.codepen.io/605876/click.mp3")
  );

  useEffect(() => {
    const proxy = document.createElement("div");
    const dummyCord = dummyCordRef.current;
    const hitSpot = hitSpotRef.current;
    const endX = dummyCord.getAttribute("x2");
    const endY = dummyCord.getAttribute("y2");

    const resetCord = () => {
      gsap.to(dummyCord, {
        attr: { x2: endX, y2: endY },
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
      });
    };

    Draggable.create(proxy, {
      trigger: hitSpot,
      type: "x,y",
      onDrag() {
        gsap.set(dummyCord, { attr: { x2: this.x, y2: this.y } });
      },
      onRelease() {
        const distance = Math.hypot(this.x - endX, this.y - endY);
        if (distance > 50) {
          toggleLight();
        } else {
          resetCord();
        }
      },
    });

    const toggleLight = () => {
      setIsOn((prev) => !prev);
      audioClick.current.play();
      resetCord();
    };

    resetCord();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <svg
        className="h-64"
        viewBox="0 0 100 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          ref={dummyCordRef}
          x1="50"
          y1="0"
          x2="50"
          y2="80"
          stroke="gray"
          strokeWidth="4"
        />
        <circle
          cx="50"
          cy="100"
          r="20"
          fill={isOn ? "yellow" : "gray"}
          stroke="black"
          strokeWidth="2"
        />
        <rect
          ref={hitSpotRef}
          x="40"
          y="80"
          width="20"
          height="20"
          fill="transparent"
          cursor="pointer"
        />
      </svg>
    </div>
  );
};

export default LightBulbToggle;
