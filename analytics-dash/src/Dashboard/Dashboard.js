import React from 'react';
import {Brand} from './Brand';
import {Container} from './Container';
import {GlobalStyle} from './GlobalStyle';
import {Card} from './Card';

export function Dashboard() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Brand />
        <Card height={400}>Chart Goes Here</Card>
        <Card height={400}>Table Goes Here</Card>
      </Container>
    </>
  )
}