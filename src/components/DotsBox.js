


function DotsBox({ amount, color, height, width }) {
  const dots = new Array(amount).fill(20);
  return (
  <div id="dot-box" style={{height: height, width: width}}>
    {
      dots.map((dot, index) => {
        return <div style={{backgroundColor: color}}
                    className='dot m-1'
                    key={index}/>
      })
    }
  </div>
  );
}

export default DotsBox;