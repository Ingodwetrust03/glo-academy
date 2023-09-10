import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {NormalizeStyle} from "../styles/Normalize";
import {GlobalStyle} from "../styles/GlobalStyle";
import React from "react";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export const Layout = () => {
    const theme = useSelector((state: RootState) => state.theme.theme)
    return (
        <>
            <ThemeProvider theme={theme}>
                <NormalizeStyle />
                <GlobalStyle theme={theme}/>
                <Header />
                <Outlet />
            </ThemeProvider>
        </>
    )
}