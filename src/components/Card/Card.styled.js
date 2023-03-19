import styled from '@emotion/styled';

export const WrapOfCard = styled.div`
  position: relative;
  padding: 28px 36px 36px 36px;
  height: 460px;
  border-radius: 20px;
  background-color: #5736a3;
  @media (min-width: 768px) {
    width: 308px;
  }
`;

export const UpperImg = styled.img`
  margin: 0 auto;
  margin-bottom: 88px;
`;
export const UserImg = styled.img`
  position: absolute;
  top: 178px;
  left: 0;
  @media (min-width: 768px) {
    top: 198px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 26px;

  color: #ebd8ff;
`;

export const Logo = styled.img`
  position: 'absolute';
  top: 20px;
  left: 20px;
`;
