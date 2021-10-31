import React from 'react'
import { NavbarPlus } from './Navbar.styled'

function Navbar() {
    return (
        <div>
            <NavbarPlus>
                <Navbar>
                    <h1>Navbar</h1>
                </Navbar>

            </NavbarPlus>

        </div>
    )
}

export default Navbar
