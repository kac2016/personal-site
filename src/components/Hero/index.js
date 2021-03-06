import React from 'react';

import Wrapper from './Wrapper';
import Container from './Container';
import Column from './Column';
import H1 from './H1';
import P from './P';
import HeroLinks from '../HeroLinks';
import Img from './Img';
import Me from './super-cool-dude.png';
import ParticlesBG from '../ParticlesBG';

function Hero(props) {
  return (
    <Wrapper>
      <ParticlesBG/>
      <Container>
        <Column>
          <H1>Ryan Fitzgerald</H1>
          <P>
            Full-stack Software Engineer from Ottawa, Canada. Currently, I'm a Web Developer at the <a href="https://bankofcanada.ca" target="_blank">Bank of Canada</a>.
          </P>
          <HeroLinks/>
        </Column>
        <Column>
          <Img src={Me} alt="Picture of Ryan Fitzgerald"/>
        </Column>
      </Container>
    </Wrapper>
  );
}

export default Hero;