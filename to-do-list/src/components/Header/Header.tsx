import {
    HeaderBlock,
    HeaderContainer,
    HeaderLink,
    SwitchThemeBlock,
    SwitchThemeField,
    SwitchThemeLabel
} from "./Header.styled";
import {useDispatch, useSelector} from "react-redux";
import {toggleThemeAction} from "../../feature/themeList";
import {RootState} from "../../store";



export const Header = () => {
    const themeLabel = useSelector((state: RootState) => state.theme.theme.label);
    const dispatch = useDispatch()

    return (
        <HeaderBlock>
            <HeaderContainer>
                <HeaderLink to="/">ToDo</HeaderLink>
                <HeaderLink to="/list">List</HeaderLink>
            </HeaderContainer>

            <SwitchThemeBlock>
                <SwitchThemeField type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={() => {dispatch(toggleThemeAction())}}/>
                <SwitchThemeLabel htmlFor="flexSwitchCheckChecked">{themeLabel}</SwitchThemeLabel>
            </SwitchThemeBlock>

        </HeaderBlock>
    )
}