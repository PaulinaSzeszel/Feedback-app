import React, { Fragment, Component } from 'react'
import './Cart.css'
import CarouselHorizontal from '../Carousel/CarouselHorizontal'
class Cart extends Component {
  render() {
    let CURR = this.props.SelectedCurrency
    let symbol = this.props.currencySymbol

    let thisARR = this.props.MyBag.map(
      (item) => item.prices.filter((x) => x.currency === CURR)[0].amount
    )

    let thisArrSUM = 0
    if (thisARR.length > 0) {
      thisArrSUM = thisARR.reduce((result, number) => result + number)
    }

    return this.props.isClicked ? (
      <div className="allWrapperCart">
        <div className="close-btnCart">
          <button
            className="close-btnCart"
            onClick={() => this.props.handlePopupClick()}
          >
            X
          </button>
        </div>
        <div className="wrapperCart">
          <div className="mottoCart">CART</div>
          {this.props.MyBag.filter((x, i, a) => a.indexOf(x) === i).map(
            (filtered) => (
              <Fragment key={filtered.id}>
                <hr className="lineR" />
                <div className="productBrandCart">{filtered.brand}</div>
                <div className="productNameCart">{filtered.name}</div>
                <div className="trio">
                  <button
                    className="plusBTNCart"
                    onClick={() => this.props.onAdd(filtered)}
                  >
                    +
                  </button>

                  <p className="itemCounterCart">
                    {
                      this.props.MyBag.filter((element) => element === filtered)
                        .length
                    }
                  </p>
                  <button
                    className="minusBTNCart"
                    onClick={() => this.props.onRemove(filtered)}
                  >
                    -
                  </button>
                </div>
                <div className="carouselCart">
                  <CarouselHorizontal data={filtered.gallery} />
                </div>
                <div className="itemPriceCart">
                  {symbol}{' '}
                  {filtered.prices.filter((x) => x.currency === CURR)[0].amount}
                </div>
                {filtered.attributes.map((attribute) => {
                  return attribute.type === 'text' ? (
                    <Fragment key={attribute.ProductId}>
                      <div className="attributeContainerCart">
                        <div className="attributeNameCart">
                          {attribute.name}
                        </div>
                        {attribute.items.map((item) => (
                          <div className="attributeItemsCart" key={item.id}>
                            {item.value}
                          </div>
                        ))}
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment key={attribute.ProductId}>
                      <div className="attributeContainerCart">
                        <div className="attributeNameCart">
                          {attribute.name}
                        </div>
                        {attribute.items.map((item) => (
                          <div
                            key={item.id}
                            className="attributeItemsCart swatchBoxGridCart"
                            style={{ background: item.value }}
                          ></div>
                        ))}
                      </div>
                    </Fragment>
                  )
                })}
              </Fragment>
            )
          )}
        </div>
        <hr className="line" />

        <div className="tax">Tax 21%: $421.00 </div>

        <div className="quantity">Quantity: {this.props.MyBag.length}</div>

        <div className="total">
          <div className="amount">Total:</div>
          <div className="price">
            {symbol} {Math.floor(thisArrSUM)}
          </div>
        </div>
        <div className="buttonOrder">
          <button
            className="orderBTN"
            onClick={() => this.props.handlePopupClick()}
          >
            order
          </button>
        </div>
      </div>
    ) : (
      ''
    )
  }
}

export default Cart
