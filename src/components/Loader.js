import styled from "styled-components";

const Loader = () => {
  return (
    <>
      <Div>
        <h1>- LOADING -</h1>
        <Container>
          <Load>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <span style={{ "--i": 4 }}></span>
            <span style={{ "--i": 5 }}></span>
            <span style={{ "--i": 6 }}></span>
            <span style={{ "--i": 7 }}></span>
            <span style={{ "--i": 8 }}></span>
            <span style={{ "--i": 9 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
          </Load>
        </Container>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    position: absolute;
    font-size:20px !important;
    color:white;
  }
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  ${"" /* background:black; */}
  animation:loader 10s linear infinite;

  @keyframes loader {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

const Load = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--i)));
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width:15px;
      height:15px;
      border-radius: 50%;
      background: #55efc4;
      box-shadow: 0 0 10px #55efc4, 0 0 20px #55efc4, 0 0 40px #55efc4,
        0 0 60px #55efc4, 0 0 80px #55efc4, 0 0 100px #55efc4;
      animation: load 1s linear infinite;
      animation-delay: calc(0.1s * var(--i));

      @keyframes load {
        0% {
          transform: scale(1);
        }
        80%,
        100% {
          transform: scale(0);
        }
      }
    }
  }
`;

export default Loader;
