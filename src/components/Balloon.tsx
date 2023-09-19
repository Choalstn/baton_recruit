/* eslint-disable react/require-default-props */
/* eslint-disable no-plusplus */
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import {
  getRandomColor,
  getRandomLocaTop,
  getRandomLocaLeft,
} from "../utill/getRandom";

interface BalloonInter {
  balloonColor: string;
  halfWidth: number;
  xCoord: number | null;
  isAdd: boolean | undefined;
  top: number;
  left: number;
}

interface BalloonProp {
  last?: boolean;
  isAdd?: boolean;
}

const BalloonItem = styled.div<BalloonInter>`
  position: ${({ isAdd }) => isAdd && "relative"};
  top: ${({ isAdd, top }) => isAdd && `${top}%`};
  left: ${({ isAdd, left }) => isAdd && `${left + 20}%`};
  position: fixed;
  width: 100px;
  height: 115px;
  background: ${({ balloonColor }) => balloonColor && balloonColor};
  background-image: linear-gradient(
    150deg,
    #e6e6e6 10%,
    ${({ balloonColor }) => balloonColor && balloonColor} 20%
  );
  border-radius: 48% 48% 50% 50%;
  border: 1.5px solid black;
  opacity: 0.9;
  transform: rotateZ(
    ${({ halfWidth, xCoord }) => (xCoord! < halfWidth ? "-20deg" : "20deg")}
  );

  &:before {
    position: absolute;
    content: "";
    bottom: -8px;
    left: 43%;
    width: 2px;
    height: 0px;
    border-left: 10px solid
      ${({ balloonColor }) => balloonColor && balloonColor};
    border-right: 10px solid
      ${({ balloonColor }) => balloonColor && balloonColor};
    border-bottom: 20px solid
      ${({ balloonColor }) => balloonColor && balloonColor};
    outline: black;
    border-radius: 45% 45% 30% 30%;
    z-index: 1;
  }
`;

const Rope = styled.div`
  background: black;
  width: 1.5px;
  height: 240px;
  left: 56%;
  top: 100%;
  margin-left: -3px;
  position: absolute;
  border-radius: 5px;
  z-index: 0;
`;

function Balloon({ last, isAdd }: BalloonProp) {
  const [xCoord, setXCoord] = useState<number | null>(null);
  const [top] = useState(getRandomLocaTop());
  const [left] = useState(getRandomLocaLeft());
  const [randomColor] = useState(getRandomColor());
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setXCoord(rect.left);
    }
  }, [[]]);

  const halfWidth = window.innerWidth / 2;

  return (
    <div>
      <BalloonItem
        ref={elementRef}
        balloonColor={randomColor}
        halfWidth={halfWidth}
        xCoord={xCoord}
        isAdd={isAdd}
        top={top}
        left={left}
      >
        {last && <Rope />}
      </BalloonItem>
    </div>
  );
}

export default Balloon;
