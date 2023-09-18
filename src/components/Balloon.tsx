/* eslint-disable no-plusplus */
import { styled } from "styled-components";

interface BalloonInter {
  balloonColor: string;
}

const BalloonItem = styled.div<BalloonInter>`
  position: fixed;
  width: 100px;
  height: 115px;
  background: ${({ balloonColor }) => balloonColor && balloonColor};
  border-radius: 48% 48% 50% 50%;

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
  height: 160px;
  left: 56%;
  top: 100%;
  margin-left: -3px;
  position: absolute;
  border-radius: 5px;
  z-index: 0;
`;

function Balloon() {
  function getRandomColor() {
    const colors = ["#cae122", "#ff7aaa", "#ff3e39", "#3413bd"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const randomColor = getRandomColor();
  return (
    <div>
      <BalloonItem balloonColor={randomColor}>
        <Rope />
      </BalloonItem>
    </div>
  );
}

export default Balloon;
