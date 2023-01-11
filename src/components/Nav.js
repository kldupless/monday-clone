import React from 'react'
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()

    return (
        <nav className="h-screen bg-gray-700 text-white text-center flex flex-col justify-between">
            <div className="py-10 px-6 flex flex-col">
                <img src={logo} alt="Logo" className="w-5"/>
            </div>
            <div className="py-10 px-6 flex flex-col">
                <div
                className="cursor-pointer"
                onClick={() => navigate("/ticket")}>+</div>
                <div
                className="cursor-pointer"
                onClick={() => navigate("/")}>«</div>
            </div>
        </nav>
    )
}

export default Nav