import React from 'react'
import SubContents from './SubContents'
import Advertisement from './Advertisement'
const Main = () => {
    return (
        <div className='main'>
            <div className='row'>
                <SubContents />
                <SubContents />
                <SubContents />
            </div>
            <Advertisement />
        </div>
    )
}

export default Main