import { gql } from '@apollo/client'

const getAllProducts = gql`
  query {
    categories {
      name
      products {
        id

        name
        inStock
        gallery
        description
        category
        brand
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`

const getAllCategories = gql`
  query {
    categories {
      name
    }
    currencies {
      symbol
    }
  }
`

const categoryRequest = (category) => gql`
query {
  category (input: {title: "${category}"}) {
    products {
          id
          attributes {
            name
          }
          name
          inStock
          gallery
          description
          category
          brand
          attributes {
            id
            name
            type
            items {
              id
              displayValue
              value
            }
          }
          prices {
            currency {
              symbol
            }
            amount
          }
        }
  }
  }
          
`

const productRequest = gql`
  query product($id: String!) {
    product(id: $id) {
      id

      name

      id
      name
      type
      items {
        id
        displayValue
        value
      }
    }

    prices {
      currency {
        label
        symbol
      }
      amount
    }
    brand
  }
`

export { getAllProducts, getAllCategories, productRequest, categoryRequest }
