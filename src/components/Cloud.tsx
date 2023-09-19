import { styled } from "styled-components";
import CloudImg from "../assets/cloud.png";

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
  const getRandomLoca = () => {
    const topLoca = Math.floor(Math.random() * 41) + 40;
    const leftLoca = Math.floor(Math.random() * 50) + 1;

    return { top: topLoca, left: leftLoca };
  };

  const { top, left } = getRandomLoca();

  return <CloudStyle src={CloudImg} alt="구름 이미지" top={top} left={left} />;
}

export default Cloud;
