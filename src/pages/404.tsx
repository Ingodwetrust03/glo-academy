import {
    NotFoundCircleBig,
    NotFoundCircleMedium,
    NotFoundCirclesContainer, NotFoundCircleSmall, NotFoundCirclesSmallText,
    NotFoundCirclesText,
    NotFoundLink,
    NotFoundSection
} from "../styles/404.styled";
import {GlobalStyle} from "../styles/GlobalStyle";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export const NotFound = () => {
    const theme = useSelector((state: RootState) => state.theme.theme)
    return (
        <>
            <GlobalStyle theme={theme} />
            <NotFoundSection>
                <NotFoundLink to="/">На главную</NotFoundLink>

                <NotFoundCirclesContainer>
                    <NotFoundCirclesText>404<br />
                        <NotFoundCirclesSmallText>PAGE NOT FOUND</NotFoundCirclesSmallText>
                    </NotFoundCirclesText>
                    <NotFoundCircleSmall />
                    <NotFoundCircleMedium />
                    <NotFoundCircleBig />
                </NotFoundCirclesContainer>
            </NotFoundSection>
        </>
    )
}