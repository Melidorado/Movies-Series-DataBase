import styled from 'styled-components';
import { useEffect } from 'react';

const HomeContainer = styled.div`
    background-color: ${props => props.theme.colors.background};
    width: 100vw;
    height: 100vh;
`

const Home = () => {

    useEffect(() => {
        const baseUrl = 'https://api.mercadolibre.com/sites/MLA/search?q='
        
        fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=6ab244ede1af8b98e83dbd19d33c2e13")
        .then (res => res.json())
        .then (data => console.log(data))
    },)

    return (
        <HomeContainer>
        </HomeContainer>
    )
}

export default Home;