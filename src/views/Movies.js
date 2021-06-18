import styled from 'styled-components';
import ShowInfoFromAPI from '../components/ShowInfoFromAPI';

const MovieContainer = styled.div`
    background-color: ${props => props.theme.colors.background};
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 100px;
`
const Movies = () => {
    return(
        <MovieContainer>
            <ShowInfoFromAPI
            category="popular"
            media_type="movie"
            />
            <ShowInfoFromAPI
            category="top_rated"
            media_type="movie"
            />
            <ShowInfoFromAPI
            category="upcoming"
            media_type="movie"
            />
            <ShowInfoFromAPI
            category="now_playing"
            media_type="movie"
            />
        </MovieContainer>
    )
}

export default Movies;