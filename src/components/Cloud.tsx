/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import CloudImg from "../assets/cloud.png";
import { getRandomLocaLeft, getRandomLocaTop } from "../hook/useGetRandom";

interface CloudInter {
  top: number;
  left: number;
}

const CloudStyle = styled.img<CloudInter>`
  width: 10%;
  position: relative;
  top: ${({ top }) => (top ? ` ${top}%` : "-20px")};
  z-index: 0;
  left: ${({ left }) => left && ` ${left}%`};
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

  // 구름 생성 & 삭제
  useEffect(() => {
    const createCloud = () => {
      const top = getRandomLocaTop();
      const left = getRandomLocaLeft();
      setClouds((prevClouds) => [...prevClouds, { top, left }]);
    };

    // 5초 간격으로 구름 생성
    const cloudInterval = setInterval(() => {
      if (clouds.length < 20) {
        createCloud();
      }
    }, 5000);

    // clouds 배열이 변경될 때마다 clearInterval 호출하여 이전 인터벌 정리
    return () => {
      clearInterval(cloudInterval);
    };
  }, [clouds]);

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
