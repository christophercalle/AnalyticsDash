import React from 'react';
import {Brand} from './Brand';
import {Container} from './Container';
import {GlobalStyle} from './GlobalStyle';
import {Chart} from './Chart';
import {VirtualizedTable} from './Table';
import {DarkSwitch} from './DarkSwitch';

export function Dashboard() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Brand />
        <DarkSwitch />
        <Chart />
        <VirtualizedTable />
      </Container>
    </>
  )
}