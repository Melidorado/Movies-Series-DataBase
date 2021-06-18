import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Card from './Card';

const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 1400px;
    height: auto;
`

const SearchTitle = styled.h2`
    color: ${props => props.theme.colors.text};
    text-align: left;
    margin-bottom: 30px;
`
const ResultsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


const ShowSearch = ({search}) => {

    const [ items, setItems ] = useState([])

    useEffect(() => {

        const baseURL = "https://api.themoviedb.org/3/search/multi"
        const apiKey = "?api_key=6ab244ede1af8b98e83dbd19d33c2e13"
        const language = "&language=en-US"
        const query = `&query=${search}`
        const page = "&page=1"
        
        fetch(`${baseURL + apiKey + language + query + page}`)
        .then (res => res.json())
        .then (data => setItems(data.results))
    },[search])

    return(
        <SearchContainer>
            <SearchTitle>Resultados para: {search}</SearchTitle>
            <ResultsContainer>
                {items.map(item => 
                    <Card
                    title={item.title || item.name}
                    photo={item.poster_path || item.profile_path}
                    key={item.id}
                    />
                    )}
            </ResultsContainer>
        </SearchContainer>
    )
}

export default ShowSearch;