/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-array-index-key */
import "./App.css";
import { styled } from "styled-components";
import { useState } from "react";
import Balloon from "./components/Balloon";
import HeartBalloon from "./components/HeartBalloon";
import house from "./assets/house.png";
import Cloud from "./components/Cloud";

const BalloonsContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

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

const HouseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .houseImg {
    width: 20%;
    z-index: 100;
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
`;

function App() {
  const [addBalloon, setAddBalloon] = useState(0);

  const handleAddBalloon = () => {
    setAddBalloon(addBalloon + 1);
  };

  return (
    <div className="App">
      <Overlay>
        {Array(16)
          .fill(0)
          .map((_, i) => (
            <Cloud key={i} />
          ))}
      </Overlay>

      <div className="container">
        {addBalloon > 0 &&
          Array(addBalloon)
            .fill(0)
            .map((_, i) => <Balloon key={i} isAdd={true} />)}

        <BalloonsContainer>
          <div className="balloons1">
            {Array(19)
              .fill(0)
              .map((_, i) => (
                <Balloon key={i} />
              ))}
          </div>

          <div className="balloons2">
            {Array(17)
              .fill(0)
              .map((_, i) => (
                <Balloon key={i} />
              ))}
          </div>

          <div className="balloons3">
            {Array(11)
              .fill(0)
              .map((_, i) => (
                <Balloon key={i} />
              ))}
          </div>

          <div className="balloons4">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <Balloon key={i} />
              ))}
          </div>

          <div className="balloons5">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <Balloon key={i} />
              ))}
          </div>

          <div className="balloons6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Balloon key={i} last={true} />
              ))}
          </div>

          <div className="balloons7">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Balloon key={i} last={true} />
              ))}
          </div>
        </BalloonsContainer>

        <HouseContainer>
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
