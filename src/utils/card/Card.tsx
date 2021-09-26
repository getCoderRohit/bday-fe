import React from 'react'
import "./card.scss"

type CardProps = {
    alt: string,
    images: string,
    title: string,
    onClick: () => void,
    isSelected: boolean
}

const Card: React.FC<CardProps> = (props) => {

    let { title, alt, images, onClick, isSelected } = props

    return (
        <div className="card">
            <button className="wrapper" onClick={onClick} >
                <div className={`color_bg ${alt}`}></div>
                <div className="card_img" style={{ backgroundImage : `url(${images})` }}></div>

                <div className="cardInfo">
                    <h1 className={isSelected ? "title selected" : 'title' }>
                        {title}
                    </h1>    
                </div>
            </button>
        </div>
    )
}

export default Card
