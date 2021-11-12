import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/GameItem.css'

function GameItem(props) {
    return (
        <>
        <div className={`cards_items ${ props.gridPlace }`}>
            <Link className="cards_item_link" to={ props.path }>
                <figure className="cards_item_pic-wrap" data-category={ props.label }>
                    <img src={ props.src } className="cards_item_img" alt="Game cover" />
                </figure>
                <div className="cards_item_info">
                    <h5 className="cards_item_text">{ props.text }</h5>
                </div>
            </Link>
        </div>
        </>
    )
}

export default GameItem
