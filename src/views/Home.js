import styled from 'styled-components';
import ShowInfoFromAPI from '../components/ShowInfoFromAPI';

const HomeContainer = styled.div`
    background-color: ${props => props.theme.colors.background};
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Home = () => {

    return (
        <HomeContainer>
            <ShowInfoFromAPI
            category="trending"
            media_type="movie"
            />
            <ShowInfoFromAPI
            category="trending"
            media_type="tv"
            />
        </HomeContainer>
    )
}

export default Home;