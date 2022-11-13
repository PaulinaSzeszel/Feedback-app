import React, { PureComponent } from 'react'


import logo from '../assets/a-logo.svg'

class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" width={40} height={40} />
        </div>
        <div className="currency">
          <button>
            <img
              id="cart_overlay"
              width={22}
              height={22}
              alt="cart"
              src={require('../assets/cart.png')}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default Header
