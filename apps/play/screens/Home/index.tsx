'use client';

import { useEffect, useState } from 'react';

export const HomeScreen = () => {
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHeight(window.innerHeight);
		}
	}, []);

	return (
		<iframe src="/game-tetris/index.html" style={{ border: 'none', height }} />
	);
};

export default HomeScreen;
