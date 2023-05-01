import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Game from "./Game";

export default function Astrodle() {
    const [moreInfo, setMoreInfo] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Title>astrodle</Title>
                <Subtitle onClick={() => setMoreInfo(!moreInfo)}>o que é?</Subtitle>
                {moreInfo ?
                    <></>
                    :
                    <MoreInfo>
                        <Textbox>você conhece jogos de navegador como o wordle, term.ooo ou loldle?</Textbox>
                        <Textbox>astrodle é um jogo inspirado nesses, no qual você tem o objetivo de descobrir o corpo celeste do dia com base em suas informações.</Textbox>
                    </MoreInfo>
                }
            </Container>
            <Game />
        </>
    );
}

const Container = styled.div`
    width: 516px;
    background-color: var(--lilac);
    padding: 20px 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    margin-top: 150px;
`;

const Title = styled.div`
    font-family: 'Jura', sans-serif;
    font-size: 50px;
    color: var(--white);
`;

const Subtitle = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 5px;
    cursor: pointer;

    :hover {
        opacity: 0.7;
    }
`;

const MoreInfo = styled.div`
    height: 100px;
    width: 350px;
    background-color: rgba(20, 20, 22, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

const Textbox = styled.div`
    width: 316px;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: var(--white);
`;