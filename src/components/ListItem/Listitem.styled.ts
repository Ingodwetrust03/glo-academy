import styled from 'styled-components'
import {Link} from "react-router-dom";

export const ListitemLink = styled(Link)`
    text-decoration: none;
    padding: 10px;
    color: ${(props) => props.color}
`