import React from "react";
import Meta from "../components/Meta";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {};

const GlobalStyle = createGlobalStyle``;

const withLayout = (Page) => (props) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Meta />
            <Page {...props} />
        </ThemeProvider>
    );
};

export default withLayout;
