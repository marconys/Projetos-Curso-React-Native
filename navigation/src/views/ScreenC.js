import React from "react";
import TextCenter from "../components/TextCenter";

export default props => {
    const rota = props.route;
    const number = rota && rota.params && rota.params.numero ? props.route.params.numero : 0
    return (
        <TextCenter corFundo='#9932cd'>
            Tela C - {number}
        </TextCenter>
    )
}