import React     from 'react';
import './style.css';

export default function Hits(props) {
    return(
        <section className="click-counter">
            <div className="triangulo"></div>
            <div className="conteudo-hits">
                <h2 className="title-hits">HITS</h2>
                <div className="quantity">
                <h3 id="contador">{props.cliques}</h3>
                </div>
                <p className="description">Cliques em links</p>
            </div>
        </section>
    )
}