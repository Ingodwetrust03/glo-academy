import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Theme} from "../../models/theme";

export const HeaderBlock = styled.header<{theme: Theme}>`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      height: 50px;
      background-color: ${({theme}) => theme.colors.backgroundPrimary};
      display: flex;
      align-items: center;
      z-index: 10;
      transition: all .3s;
    `

export const HeaderContainer = styled.div`
        max-width: 97%;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    `

export const HeaderLink = styled(NavLink)`
        text-decoration: none;
        padding: 10px;
        color: #fff;
        
        &.active {
           color: #ffffff33;
        }
    `

export const SwitchThemeBlock = styled.div`
        display: flex;
        align-items: center;
        padding: 2em 1.5em;
        height: 100%;
        gap: 10px;
        cursor: pointer;
    `

export const SwitchThemeField = styled.input`
         background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e") left center no-repeat;
        width: 2.5em;
        height: 1.3em;
        border: 1px solid rgb(222, 226, 230);
        border-radius: 2em;
        margin-top: 0.15em; 
        appearance: none;
        transition: all 0.15s;
        cursor: pointer;
        
        &:checked {
            background: #0d6efd url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e") right center no-repeat;
        }
    `

export const SwitchThemeLabel = styled.label`
        color: #fff;
        white-space: nowrap;
        min-width: 170px;
        text-align: right;
    `