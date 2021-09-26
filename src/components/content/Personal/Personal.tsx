// @ts-nocheck

import { useState, useRef, useEffect } from "react"
import "../content.scss"

import profile1 from "../../../assets/image1.jpg"
import profile2 from "../../../assets/image2.jpg"
import profile3 from "../../../assets/image3.jpg"
import profile4 from "../../../assets/image4.jpg"

const images = [profile1, profile2, profile3, profile4]

const Personal = () => {

	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	const resetTimeout = () => {
		if(timeoutRef.current) { clearTimeout(timeoutRef.current) }
	}

	useEffect(
		() => {
			resetTimeout()
			timeoutRef.current = setTimeout(
				() => setIndex( prevIndex => prevIndex === images.length -1 ? 0 : prevIndex + 1 ),
				2500
			)

			return () => { resetTimeout() };
		},
		[index]
	)

	return (
		<div id="personal" className="personal-container">
			<div className="details">
				<h1 className="details-title">
					To My Babe,
				</h1>
				<h2 className="details-text">
					Happy Birthday meri pyari nyari acchi sacchi bacchi cute chweet masht amazing sensitive beautiful moonlight darling honey prinshess understanding dreamgirl my babe my love my bhonduuuuu 
					<p> &#128536; &#128525; &#128525;  &#128536; &#128536; &#128525; &#128525; </p>
					{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. */} 
				</h2>
			</div>

			<div className="image-div">
				<div className="slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
					{images.map(
						(src, index) => ( <img className="slide" key={index} src={src} alt=""></img> )
					)}
				</div>
				<div className="radio-dots">
					{images.map((_, idx) => (
						<div
							key={idx}
							className={`slideshowDot${index === idx ? " active" : ""}`}
							onClick={() => setIndex(idx) }
						></div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Personal
