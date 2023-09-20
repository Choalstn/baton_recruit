/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import CloudImg from "../assets/cloud.png";
import { getRandomLocaLeft, getRandomLocaTop } from "../utill/getRandom";

interface CloudInter {
  top: number;
  left: number;
}

const CloudStyle = styled.img<CloudInter>`
  width: 10%;
  position: relative;
  top: ${({ top }) => (top ? ` ${top}%` : "-20px")};
  z-index: 0;
  left: ${({ left }) => left && ` ${left - 10}%`};
  animation: moveClouds 10s linear infinite;
  opacity: 0.8;

  @keyframes moveClouds {
    0% {
      top: -200px;
    }
    100% {
      top: 100vh;
    }
  }
`;

function Cloud() {
  const [clouds, setClouds] = useState<{ top: number; left: number }[]>([]);

  useEffect(() => {
    const createCloud = () => {
      const top = getRandomLocaTop();
      const left = getRandomLocaLeft();
      setClouds((prevClouds) => [...prevClouds, { top, left }]);
    };

    const cloudInterval = setInterval(() => {
      createCloud();
    }, 5000);

    const removeOutOfScreenClouds = () => {
      setClouds((prevClouds) => {
        return prevClouds.filter((cloud) => cloud.top <= 100);
      });
    };

    const removeCloudInterval = setInterval(() => {
      removeOutOfScreenClouds();
    }, 20000);
    return () => {
      clearInterval(cloudInterval);
      clearInterval(removeCloudInterval);
    };
  }, []);

  return (
    <div>
      {clouds.map((el, i) => (
        <CloudStyle
          key={i}
          src={CloudImg}
          alt="구름 이미지"
          top={el.top}
          left={el.left}
        />
      ))}
    </div>
  );
}

export default Cloud;
