import React, { useEffect, useRef, useState } from "react";
import "./SmoothScroll.scss";


const useWindowSize = () => {
	const getSize = () => ({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		const handleResize = () => setWindowSize(getSize());

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}

const SmoothScroll: React.FC = ({ children }) => {

	const windowSize = useWindowSize();

	const scrollingContainerRef = useRef(document.createElement("div"))

	useEffect(() => setBodyHeight(), [windowSize.height]);

	const setBodyHeight = () => { document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px` }

	useEffect(
		() => { 
			const data = {
				ease: 0.1,
				current: 0,
				previous: 0,
				rounded: 0,
			};

			const smoothScrollingHandler = () => {
				data.current = window.scrollY;
				data.previous += (data.current - data.previous) * data.ease;
				data.rounded = Math.round(data.previous * 100) / 100;

				scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

				// Recursive call
				requestAnimationFrame(() => smoothScrollingHandler());
			};
		
			requestAnimationFrame(() => smoothScrollingHandler()) 
		},
		[]
	);

	return (
		<div className="parent">
			<div ref={scrollingContainerRef}>{children}</div>
		</div>
	);
};

export default SmoothScroll;
