import { styled } from "styled-components";
import { useState } from "react";
import CloudImg from "../assets/cloud.png";
import { getRandomLocaLeft, getRandomLocaTop } from "../utill/getRandom";

interface CloudInter {
  top: number;
  left: number;
}

const CloudStyle = styled.img<CloudInter>`
  width: 10%;
  position: relative;
  top: ${({ top }) => top && ` ${top}%`};
  z-index: 0;
  left: ${({ left }) => left && ` ${left}%`};
`;

function Cloud() {
  const [top] = useState(getRandomLocaTop());
  const [left] = useState(getRandomLocaLeft());

  return <CloudStyle src={CloudImg} alt="구름 이미지" top={top} left={left} />;
}

export default Cloud;
