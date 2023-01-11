import React, { Fragment, Component } from 'react'

class CustomButtonAll extends Component {
  render() {
    return (
      <Fragment>
        <ol>
          <li>
            <a
              href="#/Woman"
              onClick={(e) => this.props.handlePickCategory('woman')}
            >
              woman
            </a>
          </li>
        </ol>
      </Fragment>
    )
  }
}

export default CustomButtonAll
