import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";

export const Header = () => {
    const getActiveLink = ({isActive}: {isActive: boolean}): string => {
return isActive ?  `${classes.link} ${classes.active}` : `${classes.link}`
    }
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <NavLink to="/" className={getActiveLink}>Home</NavLink>
                <NavLink to="/todo" className={getActiveLink}>ToDo</NavLink>
            </div>
        </header>
    )
}