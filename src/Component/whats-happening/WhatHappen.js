import React from 'react'
import './WhatHappen.css'

function WhatHappen() {
    const what = " What's Happening";

    return (
        <div className='whatHappen-container'>
            <textarea className='what-textarea' placeholder={what}>

            </textarea>
        </div>
    )
}

export default  WhatHappen