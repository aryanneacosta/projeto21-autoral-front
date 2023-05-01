import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

export default function Game() {
    return (
        <>
            <Form>
                <Input
                    type="text"
                    placeholder="sua resposta"
                />
                <Submit>
                    <AiOutlineCheck style={{fontSize:'30px'}}/>
                </Submit>
            </Form>

        </>
    );
}

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

const Input = styled.input`
    height: 35px;
    width: 300px;
    margin-right: 20px;
    border-radius: 5px;
`;

const Submit = styled.div`
    height: 40px;
    width: 40px;
    background-color: var(--lilac);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;