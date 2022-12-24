import styled from "styled-components";

const Container = styled("div")`
  width: 100%;
  background: #010511;
  `;
const Wrapper = styled("div")`
  width: 1440px;
  padding: 80px 135px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
Wrapper.Title = styled("h2")`
  color: white;
`;
Wrapper.Text = styled("p")`
  margin-top: 24px;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.7);
`;

Wrapper.Button = styled("button")`
  margin-top: 48px;
  width: 170px;
  height: 64px;
  background: linear-gradient(
    157.81deg,
    #def9fa -43.27%,
    #bef3f5 -21.24%,
    #9dedf0 12.19%,
    #7de7eb 29.82%,
    #5ce1e6 51.94%,
    #33bbcf 90.29%
  );
  border-radius: 10px;
`;

const Blok = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 25px;
  width: 490px;
  height: 115px;

  
  border-radius: 20px;
  :hover{
    background: linear-gradient(
    153.47deg,
    rgba(255, 255, 255, 0) -341.94%,
    #14101d 95.11%
  );
  box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
  }
`;

Blok.Img = styled("img")``;
Blok.TitleBlok = styled("h5")`
  font-size: 18px;
`;
Blok.TextBlok = styled("p")`
  font-size: 16px;
`;

export { Container, Wrapper, Blok };
