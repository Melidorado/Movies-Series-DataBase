import styled from 'styled-components';

const Item = styled.article`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    width: calc(100% / 5 - 2 * 5px) ;
    @media (max-width: 1299px) {
        width: calc(100% / 4 - 2 * 5px);
    }
    @media (max-width: 999px) {
        width: calc(100% / 3 - 2 * 5px);
    }
    @media (max-width: 649px) {
        width: calc(100% / 2 - 2 * 5px);
    }
    @media (max-width: 399px) {
        width: calc(100% / 1 - 2 * 5px);
    }
`
const PhotoContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`
const Title = styled.h3`
    color: ${props => props.theme.colors.text};
    text-align: left;
    font-weight: lighter;
    @media (max-width: 649px) {
        font-size: 15px;
    }
    @media (max-width: 399px) {
        font-size: 10px;
    }
`

const Photo = styled.img`
    width: 100%;
`


const Card = ({title, photo}) => {
    return(
        <Item>
            <PhotoContainer><Photo src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${photo}`}/></PhotoContainer>
            <Title>{title}</Title>
        </Item>
    )
}

export default Card;