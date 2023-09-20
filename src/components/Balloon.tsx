/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/require-default-props */
/* eslint-disable no-plusplus */
import { useEffect, useRef, useState } from "react";
import { styled, keyframes, css } from "styled-components";
import {
  getRandomColor,
  getRandomBalloonTop,
  getRandomBalloonLeft,
} from "../utill/getRandom";

interface BalloonInter {
  balloonColor: string;
  halfWidth: number;
  xCoord: number | null;
  isAdd: boolean | undefined;
  top: number;
  left: number;
  isFly: boolean;
}

interface BalloonProp {
  last?: boolean;
  isAdd?: boolean;
  balloonNum: number;
  handleBalloon: (number: number) => void;
  isFly: boolean;
}

const Up = (top: number, left: number) => keyframes`
  from {
    top : 100%;
  }
  to {
    top : ${top - 10};
    left : ${left + 10};
  }
`;

const BalloonItem = styled.div<BalloonInter>`
  position: ${({ isAdd }) => isAdd && "relative"};
  top: ${({ isAdd, top }) => isAdd && `${top - 10}%`};
  left: ${({ isAdd, left }) => isAdd && `${left + 10}%`};
  bottom: ${({ isAdd }) => isAdd && `-50%`};
  position: fixed;
  width: 100px;
  height: 115px;
  cursor: pointer;
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
  animation: ${({ isAdd, top, left }) =>
    isAdd &&
    css`
      ${Up(top, left)} 5s ease-in-out;
    `};
  animation: ${({ isFly, isAdd }) =>
    isAdd && isFly && `fly 4s ease-in-out forwards`};

  @keyframes fly {
    to {
      transform: translateY(-1000%);
    }
  }
  z-index: ${({ isAdd }) => isAdd && "1"};

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
  z-index: -10;
`;

function Balloon({
  last,
  isAdd,
  balloonNum,
  handleBalloon,
  isFly,
}: BalloonProp) {
  const [xCoord, setXCoord] = useState<number | null>(null);
  const [top] = useState(getRandomBalloonTop());
  const [left] = useState(getRandomBalloonLeft());
  const [randomColor] = useState(getRandomColor());
  const [isShow, setIsShow] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleDelete = (number: number) => {
    handleBalloon(number);

    setIsShow(!isShow);
  };

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
      {isShow && (
        <BalloonItem
          ref={elementRef}
          balloonColor={randomColor}
          halfWidth={halfWidth}
          xCoord={xCoord}
          isAdd={isAdd}
          isFly={isFly}
          top={top}
          left={left}
          onClick={() => handleDelete(balloonNum)}
        >
          {last && <Rope />}
        </BalloonItem>
      )}
    </div>
  );
}

export default Balloon;
