import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.fg};
  width: 100%;
  height: 100%;

  @media (min-aspect-ratio: 4/6) {
    width: 66.8%;
    left: 16.6%;
  }

`;

const Outer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.mg};
  width: 100%;
  height: 100%;
  @media (min-aspect-ratio: 5/4) {
    width: 66.8%;
    left: 16.6%;
  }
`;

const OuterOuter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
`

export const BearjamLayout = page => {
  return (
    <OuterOuter>
      <Outer>
        <Inner>{page}</Inner>
      </Outer>
    </OuterOuter>
  )
};
