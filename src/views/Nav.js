import {Link, useHistory} from "react-router-dom";
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const NavBar = styled.nav`
    background-color: ${props => props.theme.colors.nav};
    color: ${props => props.theme.colors.text} !important;
    height: auto;
    padding: 10px 25px;
    font-weight: 300;
    display: flex;
    align-items: center;
    @media (max-width: 649px) {
        padding: 10px 35px;
    }
`
const NavItems = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`
const Item = styled.li`
    margin-right: 20px;
    font-size: 20px;
    @media (max-width: 649px) {
        font-size: 16px;
    }
    @media (max-width: 399px) {
        font-size: 12px;
    }
`

const SearchContainer = styled.form`
    width: 25%;
    display: flex;
    position: relative;
    @media (max-width: 649px) {
        width: 40%;
    }
    @media (max-width: 399px) {
        width: 50%;
    }
`

const Search = styled.input`
    padding: 10px 20px 5px 40px;    
    width: 100%;
    border-radius: 5px;
    font-size: 20px;
    border-color: transparent;
    background-color: transparent;
`
const SubmitSearch = styled.input`
    width: 40px;
    height: 100%;
    background-color: transparent;
    position: absolute;
    left: 0;
    cursor: pointer;
    border-color: transparent;
`
const IconContainer = styled.div`
    width: auto;
    height: 100%;
    color: white;
    position: absolute;
    left: 0;
    top: 5px;
    cursor: pointer;
`

const Nav = () => {

    let history = useHistory();

    const [ value, setValue ] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault()
        history.push(`/search/multi/${value}`);
        setValue("");

    }

    return(
        <NavBar>
            <NavItems>
                <Item><Link to="/">Inicio</Link></Item>
                <Item> <Link to="/movies">Peliculas</Link></Item>
                <Item><Link to="/series">Series</Link></Item>
            </NavItems>

            <SearchContainer onSubmit={handleSubmit}>

            <Search
            onChange={handleChange}
            value={value} 
            type="text" 
            placeholder="Búsqueda..."
            />
            <SubmitSearch  
            type="submit" 
            value=""/>
            <IconContainer>
                <SearchIcon style={{ fontSize: 35 }} onClick={handleSubmit}/>
            </IconContainer>
            
            </SearchContainer>
        </NavBar>
    )
}

export default Nav;
