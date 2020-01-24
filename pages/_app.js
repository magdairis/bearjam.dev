import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import 'tachyons';

const tachyonsColors = [
  "#000",
  "#111",
  "#333",
  "#555",
  "#777",
  "#999",
  "#aaa",
  "#ccc",
  "#eee",
  "#f4f4f4",
  "#fff",
  "#e7040f",
  "#ff4136",
  "#ff725c",
  "#ff6300",
  "#ffb700",
  "#ffd700",
  "#fbf1a9",
  "#5e2ca5",
  "#a463f2",
  "#d5008f",
  "#ff41b4",
  "#ff80cc",
  "#ffa3d7",
  "#137752",
  "#19a974",
  "#9eebcf",
  "#001b44",
  "#00449e",
  "#357edd",
  "#96ccff",
  "#cdecff",
  "#f6fffe",
  "#e8fdf5",
  "#fffceb",
  "#ffdfdf",
];

const theme = () => {

  const colors = [...tachyonsColors].sort(() => 0.5 - Math.random());

  return {
    colors: {
      bg: colors[0],
      mg: colors[1],
      fg: colors[2],
      text: colors[3],
    }
  };
};

const GlobalStyle = createGlobalStyle`
  html, body, body>div {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`

export default ({ Component, pageProps }) => {
  const Layout = Component.Layout || (x => x);
  return (
    <ThemeProvider theme={theme()}>
      <Normalize />
      <GlobalStyle />
      {Layout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
