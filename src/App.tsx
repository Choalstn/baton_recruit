/* eslint-disable react/no-array-index-key */
import "./App.css";
import { styled } from "styled-components";
import Balloon from "./components/Balloon";
import HeartBalloon from "./components/HeartBalloon";
import house from "./assets/house.png";

const BalloonsContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .balloons1 {
    border: 1px solid blue;
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    margin-top: -30px;
  }

  .balloons2 {
    border: 1px solid blue;
    width: 85%;
    height: 25%;
    margin-top: -20px;
  }

  .balloons3 {
    border: 1px solid blue;
    width: 70%;
    height: 25%;
    margin-top: -20px;
  }

  .balloons4 {
    border: 1px solid blue;
    width: 30%;
    height: 25%;
    margin-top: -20px;
  }

  .balloons5 {
    border: 1px solid blue;
    width: 15%;
    height: 25%;
    margin-top: -20px;
  }
`;

const HouseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .houseImg {
    width: 23%;
  }
`;

function App() {
  return (
    <div className="App">
      <BalloonsContainer>
        <div className="balloons1">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Balloon key={i} />
            ))}
        </div>

        <div className="balloons2">
          <Balloon />
        </div>

        <div className="balloons3">
          <Balloon />
        </div>

        <div className="balloons4">
          <Balloon />
        </div>

        <div className="balloons5">
          <Balloon />
        </div>
      </BalloonsContainer>

      <HouseContainer>
        <img src={house} alt="집 이미지" className="houseImg" />
      </HouseContainer>
    </div>
  );
}

export default App;
