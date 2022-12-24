import React, { Component } from "react";
import { Container, Wrapper, Blok } from "./style";
import { data } from "../utils/data.js";
import "./style.css";
import "./style";
class Business extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <div className="content">
            <Wrapper.Title>
              You do the business, we’ll handle the money.
            </Wrapper.Title>
            <Wrapper.Text>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </Wrapper.Text>
            <Wrapper.Button>Get Started</Wrapper.Button>
          </div>
          <div className="aside">
    
              {data.map(({ id, title, text, image }) => {
                return (
                  <Blok key={id}>
                    <Blok.Img src={image} />
                    <div>
                      <Blok.TitleBlok>{title}</Blok.TitleBlok>
                      <Blok.TextBlok>{text}</Blok.TextBlok>
                    </div>
                  </Blok>
                );
              })}
        
          </div>
        </Wrapper>
      </Container>
    );
  }
}

export default Business;
