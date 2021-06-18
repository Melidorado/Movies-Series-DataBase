import styled from 'styled-components';
import ShowSearch from '../components/ShowSearch';
import { useParams } from "react-router-dom";

const SearchContainer = styled.div`
    background-color: ${props => props.theme.colors.background};
    width: 100vw;
    min-height: 100vh;
    padding: 40px 20px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Search = () => {
    let params = useParams();
    let query = params.query
    
    return(
        <SearchContainer>
            <ShowSearch
            search={query}
            />
        </SearchContainer>
    )
}

export default Search;