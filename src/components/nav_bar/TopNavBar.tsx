import "./TopNavBar.scss"

import wishGif from '../../assets/wish.gif'

const TopNavBar = () => {
    return (
        <div className="wrapper">

            <div className="gif-container">
                <img className="gif" src={wishGif} alt="..."></img>
            </div>

            <h1 className="date-text"> 27th September, 1997 </h1>

            <div className="slide-btn">
                
            </div>
        </div>
    )
}

export default TopNavBar
