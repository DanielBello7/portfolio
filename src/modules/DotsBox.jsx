import React from "react";

function DotsBox({ amount, color, height, width }) {
    const dots = new Array(amount).fill(20);

    const output = dots.map((dot, index) => {
        return (
            <div style={{ backgroundColor: color }}
                className='dot m-1'
                key={index}
            />
        )
    });

    return (
        <div id="dot-box" style={{ height: height, width: width }}>
            {output}
        </div>
    );
}

export default React.memo(DotsBox);