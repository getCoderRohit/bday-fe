import "../content.scss"
import profile from "../../../assets/image.jpg"

const Personal = () => {
    return (
        <div id="personal" className="personal-container">
            <div className="details">
                <h1 className="details-title"> 
                    To My Xxxxxxxxxxxxxxxxx 
                </h1>
                <h2 className="details-text">
                    {/* Happy Birthday meri pyari nyari acchi sacchi bacchi cute chweet masht amazing sensitive beautiful moonlight darling honey prinshess understanding dreamgirl my babe my love my bhonduuuuu */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h2>
            </div>
            
            <div className="image-div">
                <img src={profile} />
            </div>
        </div>
    )
}

export default Personal
