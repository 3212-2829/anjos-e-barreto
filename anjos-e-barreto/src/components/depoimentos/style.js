import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: black;
  
  .Container {
    margin: 0 auto;
    max-width: 1630px;
    padding: 60px 0 100px 0;
    width: calc(100% - 40px);
    .Con_Tit_Dep {
      background-color: white;
      width: fit-content;
      padding: 2rem 3rem;
      border-radius: 0 50px;
      margin-bottom: 60px;
      h1 {
        color: black;
        text-transform: uppercase;
        font-size: 50px;
        margin: 0;
      }
    }

    .Con_Dep {
      color: white;

      display: flex;
      justify-content: center;
      gap: 50px;

      &::before {
        content: "<";
        font-size: 100px;
        font-weight: 300;
      }
      &::after {
        content: ">";
        font-size: 100px;
        font-weight: 300;
      }
      .Con_Dep_Int {
        display: flex;
        gap: 20px;
        flex-direction: column;
        .Con_Dep_Fra {
          font-size: 25px;
          width: 52ch;
          margin: 0 auto;
          font-weight: 600;
        }
        .Con_Dep_Aut {
          text-align: end;
          font-size: 20px;
          font-weight: 500;
        }
      }
    }
  }
`;
