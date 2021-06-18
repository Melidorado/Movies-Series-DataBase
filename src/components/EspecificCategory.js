import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Card from './Card';
import { useEffect, useState } from 'react';

const CategoryContainer = styled.div`
    background-color: ${props => props.theme.colors.background};
    width: 100vw;
    min-height: 100vh;
    padding: 40px 20px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ResultsContainer = styled.section`
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
    @media (max-width: 649px) {
        font-size: 20px;
    }
    @media (max-width: 399px) {
        font-size: 18px;
    }
`
const Results = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const EspecificCategory = () => {

    const [ items, setItems ] = useState([])
    let params = useParams();
    let category = params.category
    let media_type = params.media

    
    useEffect(() => {

        const baseURL = "https://api.themoviedb.org/3"
        const apiKey = "?api_key=6ab244ede1af8b98e83dbd19d33c2e13"
        const language = "&language=en-US"

        const chekOrder = () => {
             return category === "trending"
            ? `/${category}/${media_type}/week`
            : `/${media_type}/${category}`
        }
        
        fetch(`${baseURL + chekOrder() + apiKey + language}`)
        .then (res => res.json())
        .then (data => setItems(data.results))
    },[category, media_type])

    const createTitle = () => {
        return media_type === "movie"
        ? "Películas "
        : "Series "
    }

    const createCategory = () => {
        if (category === "trending") {
            return "que son Tendencia"
        }
        else if (category === "popular") {
            return "populares"
        }
        else if (category === "top_rated") {
            return "con mejores críticas"
        }
        else if (category === "upcoming") {
            return "a estrenarse"
        }
        else if (category === "on_the_air") {
            return "al aire"
        }
        else {
            return "en cines"
        }
    }

    let title = `${createTitle() + createCategory()}`


    return(
        <CategoryContainer>
            <ResultsContainer>
                <SearchTitle>{title}</SearchTitle>
                <Results>
                    {items.map( item =>
                        <Card
                        title={item.title || item.name}
                        photo={item.poster_path || item.profile_path}
                        key={item.id}
                        />
                        )}
                </Results>
            </ResultsContainer>
        </CategoryContainer>
    )
}

export default EspecificCategory;