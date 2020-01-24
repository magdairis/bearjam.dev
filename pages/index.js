import React from 'react';
import styled from 'styled-components';
import { BearjamLayout } from '../layouts';

const Main = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`

const IndexPage = () => (
  <Main>
    <Heading className="f1">hi</Heading>
  </Main>
);

IndexPage.Layout = BearjamLayout;

export default IndexPage;
