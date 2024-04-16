import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
  padding: 60px 0 100px 0;
  .Con_Not {
    max-width: 1630px;
    margin: 0 auto;
    width: calc(100% - 40px);
    .Con_Not_Tit {
      h1 {
        color: black;
        text-transform: uppercase;
        font-size: 50px;
        margin: 0;
        margin-bottom: 50px;
      }
    }
    .Con_Not_Ico {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      gap: 40px;
      place-items: center;

      .Con_Int {
        height: 240px;
        width: 400px;
        position: relative;
        img {
          border-radius: 50px;
          height: 240px;
          width: 400px;
          width: 100%;
        }
        .Not_Car {
        }
        .Not_Car_Tit {
          position: absolute;
          background-color: #858586;
          color: white;
          bottom: 0px;
          border-radius: 0px 50px;
          font-size: 25px;
          height: 60px;
          width: 270px;
          left: -24px;
          display: flex;
          align-items: center;
          padding-left: 80px;
        }
      }
    }
  }
`;
