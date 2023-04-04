import React, { useEffect, useRef, useState } from 'react';

const useDimensions = () => {
	const [winHeight, setWinHeight] = useState();
	const [winWidth, setWinWidth] = useState();

	const handleWindowSizeChange = () => {
		setWinWidth(window.innerWidth);
	};

	useEffect(() => {
	setWinHeight(window.innerHeight);
	setWinWidth(window.innerWidth);

	window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, [])
	return {winHeight, winWidth};
}

export default useDimensions

