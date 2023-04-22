// import do módulo
import styled from 'styled-components'

// declarações dos componentes estilizados
const SectionHeader = styled.header`
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.050);
    padding: 0px 30px;
`
const Img = styled.img`
    width: 50px;
    @media (max-width: 500px){
        width: 40px;
    }
`

const SectionMain = styled.main`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 80%;
    margin: auto;
    @media (min-width: 800px){
        width: 700px
    }
    @media (max-width: 600px){
        font-size: 0.8em;
    }
`
const H2 = styled.h2`
    font-weight: normal;
    border-bottom: 3px solid #B11116;
`
const Input = styled.input`
    margin: 20px;
    width: 200px;
    border: none;
    border-bottom: 3px solid #D7171E;
    font-size: 1em;
    padding: 3px 10px;
    outline: none;
    &:focus{
        background-color: #f1f1f1;
    }
`
const Button = styled.button`
    width: 150px;
    padding: 3px 15px;
    font-size: 1em;
    border: none;
    border-radius: 2px;
    margin-bottom: 10px;
    &:hover{
        cursor: pointer;
        background-color: #dfdddd;
    }
    &:active{
        transform: translate(1px, 1px);
        transition: ease transform .2s;
    }
`

const P = styled.p`
    margin: 10px;
`


// export dos componentes
export { SectionHeader, Img, SectionMain, H2, Input, Button, P }