import React, { useState } from 'react'

function Display() {

    const [bg, setBg] = useState('#181A18')

    const randomColor = () => {
        const pos = Math.floor(Math.random() * 6)
        const colors = ['#6488ea', '#f07470', '#A8E0CA', '#d2a0f9', '#C4A484', '#181A18']
        setBg(colors[pos]);
    }

    return (
        <div style={{ backgroundColor: bg, height: '100vh' }} className='d-flex justify-content-center align-items-center flex-column'>
            <h1 className='text-white'>Background Color Changer</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={() => setBg('#f07470')} type="button" className="btn btn-danger mx-2">Red</button>
                <button onClick={() => setBg('#6488ea')} type="button" className="btn btn-primary mx-2">Blue</button>
                <button onClick={() => setBg('#A8E0CA')} type="button" className="btn btn-success mx-2">Green</button>
                <button onClick={randomColor} type="button" className="btn btn-secondary mx-2">Random</button>
            </div>
        </div>
    )
}

export default Display