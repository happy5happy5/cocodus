import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";
import PriceCard from "../components/PriceCard";
import LanguageIcon from "../components/LanguageIcon";
import NavBar from "../components/NavBar/NavBar";

function Home() {
  const [count, setCount] = useState(0);
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#00333",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />

        <Header />
        <LanguageIcon />
        <PriceCard />
      </div>
    </ThemeProvider>
  );
}

export default Home;