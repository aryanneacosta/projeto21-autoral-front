import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
    return (
        <>
            <Container>
                <h1>astrostudies</h1>
                <div>
                    <AiOutlineMenu style={{ fontSize: '64px' }} />
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--lilac);
    position: absolute;
    left: 0;
    top: 0;
    
    h1 {
        margin-left: 20px;
        font-family: 'Jura', sans-serif;
        font-size: 64px;
        font-weight: 700;
        color: var(--white);
    }

    div {
        margin-right: 20px;
    }
`;