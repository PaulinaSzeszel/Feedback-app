import React, { Component, Fragment } from 'react'
import Header from './Header/Header'
import ProductsView from './Product/ProductsView'
import './Main.css'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      MyBag: [],
      isClicked: false,
      categoryName: 'all',
      SelectedCurrency: 'USD',
      currencySymbol: '$',
      SPEC: '',
      shelter: [],
    }
  }

  SelectCurrency(arg) {
    this.setState({
      SelectedCurrency: arg,

      currencySymbol:
        arg === 'USD'
          ? '$'
          : arg === 'AUD'
          ? 'A$'
          : arg === 'RUB'
          ? '₽'
          : arg === 'GBP'
          ? '£'
          : arg === 'JPY'
          ? '¥'
          : null,
    })
  }

  HandleProps = (val1, val2) => {
    let varry = val1.attributes.map((attribute) =>
      attribute.items.filter((item) => item.value === val2)
    )

    this.setState({ shelter: varry })
  }

  SelectSpec = (spec) => {
    this.setState({ SPEC: spec })
  }

  handleAddItem = (item) => {
    let allProducts = [...this.state.MyBag]

    allProducts.push(item)
    this.setState({ MyBag: allProducts })
  }

  handleRemoveItem = (item) => {
    let allProducts = [...this.state.MyBag]
    let index = allProducts.indexOf(item)
    if (index > -1) {
      allProducts.splice(index, 1)
    }

    this.setState({ MyBag: allProducts })
  }

  handlePickCategory(item) {
    this.setState({ categoryName: item })
  }

  render() {
    return (
      <Fragment>
        <Header
          data={this.props.data}
          MyBag={this.state.MyBag}
          handlePickCategory={(e) => this.handlePickCategory(e)}
          onAdd={this.handleAddItem}
          onRemove={this.handleRemoveItem}
          SelectCurrency={(e) => this.SelectCurrency(e)}
          currencySymbol={this.state.currencySymbol}
          SelectedCurrency={this.state.SelectedCurrency}
          SPEC={this.state.SPEC}
          HandleProps={this.HandleProps}
          shelter={this.state.shelter}
        />
        <div className="text">Category Name</div>

        <ProductsView
          data={this.props.data}
          categoryName={this.state.categoryName}
          MyBag={this.state.MyBag}
          onAdd={this.handleAddItem}
          onRemove={this.handleRemoveItem}
          SelectCurrency={(e) => this.SelectCurrency(e)}
          currencySymbol={this.state.currencySymbol}
          SelectedCurrency={this.state.SelectedCurrency}
          SelectSpec={this.SelectSpec}
          SPEC={this.state.SPEC}
          HandleProps={this.HandleProps}
        />
      </Fragment>
    )
  }
}

export default Main
