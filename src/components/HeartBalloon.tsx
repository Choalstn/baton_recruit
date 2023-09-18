import { styled } from "styled-components";

const Heart = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f31c13;
  position: relative;
  border-bottom-right-radius: 12%;
  transform: rotate(45deg);

  &:after {
    width: 95px;
    height: 100px;
    content: "";
    position: absolute;
    top: -50%;
    border-radius: 50%;
    background-color: #f31c13;
    margin-left: 5px;
  }

  &:before {
    width: 95px;
    height: 100px;
    content: "";
    position: absolute;
    left: -50%;
    border-radius: 50%;
    background-color: #f31c13;
  }
`;

const Tail = styled.div`
  position: absolute;
  content: "";
  bottom: -3px;
  left: 90%;
  transform: rotate(-45deg);
  width: 2px;
  height: 0px;
  border-left: 6px solid #f31c13;
  border-right: 6px solid #f31c13;
  border-bottom: 12px solid #f31c13;
  outline: black;
  border-radius: 45% 45% 30% 30%;
`;

function HeartBalloon() {
  return (
    <Heart>
      <Tail />
    </Heart>
  );
}

export default HeartBalloon;
