import React from 'react';

const Logo = ({ size = 100 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			style={{ display: 'block', margin: '0 auto 20px auto' }} // Auto margin agar tengah
		>
			{/* Lingkaran Background */}
			<circle cx="50" cy="50" r="50" fill="#1a1a1a" />

			{/* Huruf A */}
			<text
				x="50"
				y="50"
				fontFamily="'Montserrat', sans-serif"
				fontWeight="800"
				fontSize="60"
				fill="#ffffff"
				textAnchor="middle"
				dominantBaseline="central"
				dy="2" /* Sedikit penyesuaian vertikal */
			>
				A
			</text>
		</svg>
	);
};

export default Logo;