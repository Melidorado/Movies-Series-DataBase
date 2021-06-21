import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from './Card';
import EspecificCategory from './EspecificCategory';

const TrendingContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 60px 40px 10px;
    max-width: 1400px;
    height: auto;
`

const SectionTitle = styled.h2`
    color: ${props => props.theme.colors.text};
    text-align: left;
    margin-bottom: 30px;
    @media (max-width: 649px) {
        font-size: 20px;
    }
    @media (max-width: 399px) {
        font-size: 15px;
    }
`
const ItemsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const ShowInfoFromAPI = ({category, media_type}) => {
// este componente esta muuuuuy parecido a EspecificCategory. Pensa como mejorarlo para que no sea 
// tan repetitivo. Que ambos llamen al mismo componente? Hooks custom? variables y funciones importadas? Quiza todas a la vez
    const [ items, setItems ] = useState([])

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

    let windowSize = window.innerWidth;
    let index = 0;

    const defineIndex = (windowSize) => {
        if (windowSize >= 1300){
            return (index = 5);
        }
        else if (windowSize >= 1000){
            return (index = 4);
        }
        else if (windowSize >= 650){
            return (index = 3);
        }
        else if (windowSize >= 400){
            return (index = 2);
        }
        else {
            return (index = 1);
        }
    }

    defineIndex(windowSize)

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
       
        <TrendingContainer>
            <SectionTitle>
                <Link to={`/${media_type}/${category}`}>{title}</Link>
            </SectionTitle>
            <ItemsContainer>
                {items.map( (item, i) => 
                    i < index && 
                    <Card 
                    title={item.title}
                    photo={item.poster_path}
                    key={item.id}
                    />
                    )}
            </ItemsContainer>
        </TrendingContainer>
    
    )
}

export default ShowInfoFromAPI;
