import {
    NotFoundCircleBig,
    NotFoundCircleMedium,
    NotFoundCirclesContainer, NotFoundCircleSmall, NotFoundCirclesSmallText,
    NotFoundCirclesText,
    NotFoundLink,
    NotFoundSection
} from "../styles/404.styled";
import React from "react";


export const NotFound = () => {
    return (
        <>
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