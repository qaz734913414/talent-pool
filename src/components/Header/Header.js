import React, { Component } from 'react'
import autoBind from 'react-autobind'
import './Header.less'


class Header extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      open: false
    }
  }

  handleOpenSideBar() {
    let open = !this.state.open
    this.setState({ open: open }, () => {
      this.props.handleOpen(open)
    })
  }
  render() {
    return (
      <div className='header'>
        <div className="header__btn--left" onClick={this.handleOpenSideBar}>
          =
        </div>
        <div className="header__content">布丁人才库</div>
        <div className="header__btn--left">
        </div>
      </div>
    )
  }
}

export default Header