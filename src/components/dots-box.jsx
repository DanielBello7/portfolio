import * as React from "react";

export default function DotsBox(props) {
	const {
		amount,
		color,
		height,
		width
	} = props;

	const dots = new Array(amount).fill(20);

	const output = dots.map((_, index) => {
		return (
			<div style={{ backgroundColor: color }}
				className='dot m-1'
				key={index}
			/>
		)
	});

	return (
		<div id="dot-box" style={{ height, width }}>
			{output}
		</div>
	);
}
