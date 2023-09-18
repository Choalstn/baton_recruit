import { styled } from "styled-components";

const BalloonItem = styled.div`
  position: fixed;
  width: 100px;
  height: 115px;
  background: #ffb045;
  border-radius: 48% 48% 50% 50%;

  &:before {
    position: absolute;
    content: "";
    bottom: -8px;
    left: 43%;
    width: 2px;
    height: 0px;
    border-left: 10px solid #ffb045;
    border-right: 10px solid #ffb045;
    border-bottom: 20px solid #ffb045;
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
  return (
    <div>
      <BalloonItem>
        <Rope />
      </BalloonItem>
    </div>
  );
}

export default Balloon;
