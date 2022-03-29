import React from 'react';
import styled from 'styled-components';
import BgImg from '../../images/Capture.PNG';


const Section = styled.section`
  background-image: url(${BgImg});
  height: 750px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`

  padding-top: 20px;
`;

const Title = styled.p`
    text-align: center;
    box-sizing: border-box;

    padding: 0;
    font-family: 'PT Sans', sans-serif;
  font-size: 40px;
  color: #333333;
  font-weight: 400;
  margin-top: 150px;
`;

const Desc = styled.p`
  text-align: center;
  font-size: 18px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 50px;
  text-align: center;
`;

const Desc2 = styled.p`
  text-align: center;
  font-size: 18px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 6rem;
  text-align: center;
`;

const Button2 = styled.a`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 20px;
  margin-left: 36.5rem;
  width: 250px;
  height: 51px;
  line-height: 71px;
  font-size: 20px;
  color: #333333;
  cursor: pointer;
  background: #FAE57C;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  position: absolute;
  
`;

const Button = styled.a`
  /* display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 20px;
  margin-left: 35rem;
  width: 300px;
  height: 51px;
  line-height: 71px;
  font-size: 20px;
  color: #333333;
  cursor: pointer;
  background: #FAE57C;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  position: absolute; */
  
  border-radius: 18px;
  margin-top: 30px;
  width: 250px;
  height: 51px;
  line-height: 71px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #333;
  cursor: pointer;
  background: #FAE57C;
  outline: none;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
  font-size: 19px;
  padding: 12px 20px;
  margin: 0 auto;
    display: flex;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: var(--warning);
    color: #fff;
    border-radius: 20px;
    border: 2px solid var(--warning);
  }
  
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
          Feel free to contact us <br/> for any of your questions, suggestions or complaints. <br/> We would love to have you contact us <br/> and will respond as soon as possible <br />
          </Title>
          <Desc>
          Contact Us
          </Desc>
          <br/>
          <Button href='https://api.whatsapp.com/send?phone=62811521000' target='_blank'>
            <span>+(62) 811-52-1000</span>
        
          </Button>
          {/* <Desc2>
          Or Contact Us
          </Desc2>
          <Button2 href='https://api.whatsapp.com/send?phone=6282231532679' target='_blank'>
            <span>+(62) 82-23153-2679</span>
          
          </Button2> */}
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;