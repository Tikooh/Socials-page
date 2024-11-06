import React from 'react'

export const Header = () => {

    const content = (
        <>
            <div className="header__name">
                <div className="title">
                    <h1>f.george_</h1>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><a href="#home" className="link">Home</a></li>
                            <li><a href="#socials" className="link">socials</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )

    return content
}

export default Header
