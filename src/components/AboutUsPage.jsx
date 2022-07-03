import React from 'react';
import FadeIn from './animations/FadeIn';
import { Col, Columns, Container } from './styles/AboutUsPage.styled';

function AboutUsPage() {
  return (
    <Container>
      <h2>About us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <Columns>
        <Col>
          <FadeIn>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              maiores fuga eos provident voluptas perferendis.
            </p>
          </FadeIn>
        </Col>
        <Col>
          <FadeIn>
            <h3>A, illo!</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus minima quo beatae eius blanditiis officiis.
            </p>
          </FadeIn>
        </Col>
        <Col>
          <FadeIn>
            <h3>Repudiandae, error?</h3>
            <p>
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              quasi quis doloribus quia illum laudantium.
            </p>
          </FadeIn>
        </Col>
      </Columns>
    </Container>
  );
}

export default AboutUsPage;
