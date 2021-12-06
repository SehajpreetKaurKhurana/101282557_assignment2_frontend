
import { margin } from '@mui/system'
import React from 'react'
import notfound from '../assets/images/notfound.png'

export default function NotFound() {
    return (
        <div>
            <img src={notfound} style={{width:'30%', margin:'80px 0 0 35%'}}/>
        </div>
    )
}
