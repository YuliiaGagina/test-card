import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 100px;
  flex-direction: column;
  display: flex;
  width: 320px;
  margin: 0 auto;
  align-items: center;
  padding-bottom: 50px;
  justify-content: center;
  gap: 45px;
  @media (min-width: 769px) {
    // width: 380px;
    padding-top: 100px;
    flex-direction: row;
    justify-content: center;
    gap: 45px;
  }
`;
