import React from "react";
import { Link } from "react-router-dom";
import "./styles/Error404.css";

export default function Error404() {
    return(
        <div className="error">
            <h1>Ошибка 404, такой страницы нет</h1>
            <br></br>
            <Link to={"/"}>Вернуться на главную</Link>
        </div>
    )
}
