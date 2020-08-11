import React from 'react';
import './TOP5.css';

const TOP5 = (props) => {
    let rowns = props.data.sort((a, b) => b.hits - a.hits).filter((item, index) => index < 5).map(list => { 
        return(         
            <tr key={list.id}>
                <td className="text-url">{list.shortUrl}</td>
                <td className="text-cliques">{list.hits}</td>
            </tr>          
        )
    });

    return(
        <section>
            <div className="top">
            <div className="row-top">
                <div className="conteudo-top">
                    <h2 className="titulo-top">TOP 5</h2>
                </div>
                <table className="table-url">
                    <tbody>
                        {rowns}
                    </tbody>
                </table>
            </div>       
            </div>
        </section>

    )
}

export default TOP5;
