import styled from 'styled-components';
import ShowInfoFromAPI from '../components/ShowInfoFromAPI';

const SeriesContainer = styled.div`
    background-color: ${props => props.theme.colors.background};
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 100px;
`

const Series = () => {
    return(
        <SeriesContainer>
            <ShowInfoFromAPI
            category="popular"
            media_type="tv"
            />
            <ShowInfoFromAPI
            category="top_rated"
            media_type="tv"
            />
            <ShowInfoFromAPI
            category="on_the_air"
            media_type="tv"
            />
        </SeriesContainer>
    )
}

export default Series;