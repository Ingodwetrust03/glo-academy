import {
    NotFoundCircleBig,
    NotFoundCircleMedium,
    NotFoundCirclesContainer, NotFoundCircleSmall, NotFoundCirclesSmallText,
    NotFoundCirclesText,
    NotFoundContainer,
    NotFoundLink,
    NotFoundSection
} from "../styles/404.styled";

export const NotFound = () => {
    return (
        <NotFoundSection>
            <NotFoundContainer>
                <NotFoundLink to="/">На главную</NotFoundLink>
            </NotFoundContainer>
            <NotFoundCirclesContainer>
                <NotFoundCirclesText>404<br />
                    <NotFoundCirclesSmallText>PAGE NOT FOUND</NotFoundCirclesSmallText>
                </NotFoundCirclesText>
                <NotFoundCircleSmall />
                <NotFoundCircleMedium />
                <NotFoundCircleBig />
            </NotFoundCirclesContainer>
        </NotFoundSection>
    )
}