import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 100%;
  min-height: calc(100vh - 150px);
  margin-top: 50px;

  @media (max-width: 769px) {
    width: 90%;
    margin: 50px auto;
  }
`;
