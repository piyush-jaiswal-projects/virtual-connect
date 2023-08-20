import React from 'react'
import { Logo } from '../../logo'

export default function Header() {
    return (
        <div className='custom-shadow overflow-hidden p-2 px-4 h-[60px] w-[100vw] flex justify-between items-center'>
            <div>
                <img src={Logo} alt='VIRTUAL CONNECT' width={300} height={40} />
            </div>

            <button className='text-[1.2rem] mx-2 hover:text-gray-500'>Signin</button>
        </div>
    )
}