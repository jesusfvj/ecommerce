import React from 'react'
import './Header.css';

export const Header = () => {
  return (
    <header className="header-container">
            <h1 className="header-h1">WISHLIST</h1>
            <form>
                <div className="header-input-container">
                <input className="header-input" type="text" name="wish" />
                    <div className="input-create-wish-container">
                        <img className="create-wish-icon" alt="create icon"></img>
                    </div>
                </div>
            </form>
    </header>
  )
}
