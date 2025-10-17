import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple logo" />
            <ul>
                {navLinks.map(({lable})=>(
                    <li key={lable}>
                        <a href="{lable}">{lable}</a>
                    </li>
                ))}
            </ul>
            <div className=' flex-center gap-5'>
                <button>
                    <img src="/search.svg" alt="search" />    
                </button>
                <button>
                    <img src="/cart.svg" alt="cart" />    
                </button>

            </div>
        </nav>
    </header>
  )
}

export default Navbar