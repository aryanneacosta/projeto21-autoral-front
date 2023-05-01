import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { getImage } from "../../services/pictureOfTheDay";

export default function SignIn() {
    const [apod, setApod] = useState({});

    useEffect(() => {
        getImage()
            .then(resposta => {
                setApod(resposta.data);
                console.log(apod);
            })
            .catch(resposta => {
                console.log(resposta.data);
            })
    }, []);

    return (
        <>
            <Header />
            <div>oie</div>
        </>
    );
}