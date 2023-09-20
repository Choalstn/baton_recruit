/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-array-index-key */
import "./App.css";
import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
import Balloon from "./components/Balloon";
import HeartBalloon from "./components/HeartBalloon";
import house from "./assets/house.png";
import Cloud from "./components/Cloud";

interface FlyInter {
  isFly: boolean;
}

const BalloonsContainer = styled.div<FlyInter>`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ isFly }) => isFly && `fly 5s ease-in-out forwards`};

  @keyframes fly {
    to {
      transform: translateY(-100px);
      opacity: 0;
    }
  }

  .balloons1 {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: -30px;
  }

  .balloons2 {
    width: 85%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
  }

  .balloons3 {
    width: 70%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
  }

  .balloons4 {
    width: 50%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
  }

  .balloons5 {
    width: 40%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
  }

  .balloons6 {
    width: 30%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
  }

  .balloons7 {
    width: 15%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
  }
`;

const HouseContainer = styled.div<FlyInter>`
  width: 100%;
  display: flex;
  justify-content: center;
  transform-origin: 50% 0%;
  animation-name: shake;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
  animation: ${({ isFly }) => isFly && `drop 3s ease-in-out forwards`};

  @keyframes drop {
    to {
      transform: translateY(100%);
    }
  }

  @keyframes shake {
    0%,
    100% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(5deg);
    }
  }

  .houseImg {
    width: 20%;
    z-index: 2;
    margin-left: 100px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

function App() {
  const [addBalloon, setAddBalloon] = useState(0);
  const [isFly, setIsFly] = useState(false);

  const handleAddBalloon = () => {
    setAddBalloon(addBalloon + 1);
  };

  const number6 = Array(6).fill(0);
  const number7 = Array(4).fill(0);

  const handleBalloonPop = (number: number) => {
    if (number === 6) {
      number6.pop();
    } else if (number === 7) {
      number7.pop();
    }

    if (number6.length === 0 && number7.length === 0) {
      setIsFly(true);
    }
  };

  return (
    <div className="App">
      <Overlay>
        <Cloud />
      </Overlay>

      <div className="container">
        {addBalloon > 0 &&
          Array(addBalloon)
            .fill(0)
            .map((_, i) => (
              <Balloon
                key={i}
                isAdd={true}
                balloonNum={0}
                handleBalloon={handleBalloonPop}
                isFly={isFly}
              />
            ))}

        <BalloonsContainer isFly={isFly}>
          <div className="balloons1">
            {Array(19)
              .fill(0)
              .map((_, i) => (
                <Balloon
                  key={i}
                  balloonNum={1}
                  handleBalloon={handleBalloonPop}
                  isFly={isFly}
                />
              ))}
          </div>

          <div className="balloons2">
            {Array(17)
              .fill(0)
              .map((_, i) => (
                <Balloon
                  key={i}
                  balloonNum={2}
                  handleBalloon={handleBalloonPop}
                  isFly={isFly}
                />
              ))}
          </div>

          <div className="balloons3">
            {Array(11)
              .fill(0)
              .map((_, i) => (
                <Balloon
                  key={i}
                  balloonNum={3}
                  handleBalloon={handleBalloonPop}
                  isFly={isFly}
                />
              ))}
          </div>

          <div className="balloons4">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <Balloon
                  key={i}
                  balloonNum={4}
                  handleBalloon={handleBalloonPop}
                  isFly={isFly}
                />
              ))}
          </div>

          <div className="balloons5">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <Balloon
                  key={i}
                  balloonNum={5}
                  handleBalloon={handleBalloonPop}
                  isFly={isFly}
                />
              ))}
          </div>

          <div className="balloons6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Balloon
                  key={i}
                  last={true}
                  balloonNum={6}
                  handleBalloon={handleBalloonPop}
                  isFly={isFly}
                />
              ))}
          </div>

          <div className="balloons7">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Balloon
                  key={i}
                  last={true}
                  balloonNum={7}
                  handleBalloon={handleBalloonPop}
                  isFly={isFly}
                />
              ))}
          </div>
        </BalloonsContainer>

        <HouseContainer isFly={isFly}>
          <img
            src={house}
            alt="집 이미지"
            className="houseImg"
            onClick={handleAddBalloon}
          />
        </HouseContainer>
      </div>
    </div>
  );
}

export default App;
