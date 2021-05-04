import {Link} from "react-router-dom";
import styled from 'styled-components';

const NavBar = styled.nav`
    background-color: #0f171e;
    height: 40px;
    padding: 16px 48px;
`;

const Nav = () => {
    return(
        <NavBar>
            <Link to="/home">Inicio</Link>
            <Link to="/movies">Peliculas</Link>
            <Link to="/series">Series</Link>
        </NavBar>
    )
}

export default Nav;