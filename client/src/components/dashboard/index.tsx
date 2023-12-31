import React from 'react'
import { getCookie } from '../../utils'

export default function Dashboard() {
    const isUserLoggedIn: string | null = getCookie("isUserLoggedIn")

    if (isUserLoggedIn !== "true") {
        window.location.replace("/")
    }

    return (
        <div>
            
        </div>
    )
}