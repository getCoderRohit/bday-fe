// @ts-nocheck

import React, { useEffect, useRef, useState } from 'react';
import classes from  "./wish.module.scss"
import "../content.scss"

type WishProps = {
	textColor: string,
	overlayColor: string
}


const Wish : React.FC<WishProps> = ({ textColor, overlayColor, children, ...props }) => {

	const sectionRef = useRef(document.createElement("section"))
	// const sectionEle: HTMLElement | null = document.getElementById('sec')

	const initialMousePos = { x: 0, y: 0 };

	const [mousePos, setMousePos] = useState(initialMousePos);

	const handleMouseMove = (event: React.MouseEvent) => {
		const elem = sectionRef.current;
		const newX = (event.nativeEvent.offsetX / elem.clientWidth) * 100;
		const newY = (event.nativeEvent.offsetY / elem.clientHeight) * 100;
		const newMousePos = {
			x: newX,
			y: newY
		};
		setMousePos(newMousePos);
	};

	const handleMouseOut = () => setMousePos(initialMousePos);

	// useEffect(
	// 	() => { sectionEle?.setAttribute("style", "--maskX: " + mousePos.x + "; --maskY: " + mousePos.y)	}
	// )

	return (
		<div className="wish-container">
		<section
			className={classes.animatedTextContainer}
			style={{
				"--maskX": mousePos.x,
				"--maskY": mousePos.y
			}}
			onMouseMove={handleMouseMove}
			onMouseOut={handleMouseOut}
			ref={sectionRef}
			{...props}
		>
			<h1 style={{ color: textColor }} className={classes.animatedTextContent}>
				{children}
			</h1>
			<h1
				aria-hidden={true}
				style={{ color: overlayColor }}
				className={classes.animatedTextContentClone}
			>
				{children}
			</h1>
		</section>
		</div>
	);
}

export default Wish
