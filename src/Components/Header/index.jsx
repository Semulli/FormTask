import styles from "./header.module.css"
// import {Link} from "react-router-dom";
import {useNavigate, useLocation} from 'react-router-dom';

import {Routers} from "../../Constants/Router.jsx";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (

        <header className={styles.header}>
            <p onClick={() => navigate(Routers.Home)}
               className={location.pathname === Routers.Home ? styles.active : ""}>Home</p>
            <p onClick={() => navigate(Routers.Table)}
               className={location.pathname === Routers.Table ? styles.active: ""}
            >Add User</p>
        </header>)
}

export default Header;