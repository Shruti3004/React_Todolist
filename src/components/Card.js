import React from 'react'
import ReactDOM from 'react-dom'

function Card() {
    return ReactDOM.createPortal(
        <>
            <div className='cards'>
                <div className='card'>
                    <img src='' alt='myPic' className='card-img'/>
                    <div className='card-info'>
                        <span className='card-category'>A Netflix Original Series</span>
                        <h3 className='card-title'></h3>
                        <a href='#' target='_blank'>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>  
        </>,
        document.getElementById('portal-root')
    )
}

export default Card
