import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

import { getAllCategories } from '../query/getQueries'
import { graphql } from '@apollo/client/react/hoc'
import CartOverlay from './CartOverlay'

import { Currency } from '../App'
import logo from '../assets/a-logo.svg'

class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      cartOpen: false,
      currencyKey: 0,
    }
  }
  displayCurrencySymbols = () => {
    const data = this.props.data
    if (data.loading) {
      return <div>Loading</div>
    } else {
      return data.currencies.map((currency) => {
        const currencyISO = {
          $: 'USD',
          '£': 'GBP',
          A$: 'AUD',
          '¥': 'JPY',
          '₽': 'RUB',
        }

        return currency.symbol + ' ' + currencyISO[currency.symbol]
      })
    }
  }
  componentDidMount() {
    let target = document.body
    window.addEventListener('click', (e) => {
      if (
        e.target.getAttribute('id') !== 'cart_overlay' &&
        e.target.getAttribute('id') !== 'quantity_gallery_block'
      ) {
        this.setState({ cartOpen: false })
        target.classList.remove('disable_scroll')
      } else {
        target.classList.add('disable_scroll')
      }
    })
  }
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
    this.close()
  }
  close = () => {
    this.setState({ cartOpen: false })
  }
  disableOverflow = () => {
    document.body.style.overflow = 'hidden'
  }
  enebleOverflow = () => {
    document.body.style.overflow = 'scroll'
  }
  render() {
    const { cartOpen } = this.state
    const {
      orders,
      currency,
      addQuantity,
      quantities,
      removeQuantity,
      emptyCart,
      removeItem,
    } = this.props
    return (
      <div className="header">
        <div className="category_list">
          {getAllCategories.map((category) => {
            return (
              <li key={category.name} className="category">
                <NavLink
                  activeClassName="active"
                  id={category.name}
                  to={`/${category.name}`}
                >
                  {category.name}
                </NavLink>
              </li>
            )
          })}
        </div>

        <div className="logo">
          <img src={logo} alt="logo" width={40} height={40} />
          <img src={logo} alt="logo" width={40} height={40} />
        </div>
        <div className="currency">
          <Currency selectCurrency={this.props.selectCurrency} />
          <button
            onClick={() => {
              this.setState({ cartOpen: !cartOpen })
            }}
            className="cart-button "
          >
            <img
              id="cart_overlay"
              width={22}
              height={22}
              alt="cart"
              src={require('../assets/cart.png')}
            />
          </button>
          {orders.length > 0 && (
            <p className="cart_items_counter">
              {' '}
              {orders.length + quantities.length}
            </p>
          )}
          {cartOpen && (
            <div className="cart_overlay_bag">
              <div className="sidebar show-cart">
                <CartOverlay currency={currency} orders={orders} />
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <CartOverlay
                  currency={currency}
                  orders={orders}
                  quantities={quantities}
                  addQuantity={addQuantity}
                  removeQuantity={removeQuantity}
                  emptyCart={emptyCart}
                  removeItem={removeItem}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default graphql(getAllCategories)(Header)
