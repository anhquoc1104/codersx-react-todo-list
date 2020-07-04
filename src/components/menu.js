import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleInputWrong: {
        borderColor: "#f00",
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(255,0,0,.25)"
      },
      styleInputTrue: {}
    }
  };

  changeFocus = () => {
    this.props.focusFn();
  };

  setStyleWrong = (elm) => {
    if (elm) {
      return this.setState({
        styleInputTrue: this.state.styleInputWrong
      });
    }else{
      return this.setState({
        styleInputTrue: {}
      });
    }
  };

  onChecked = (e) => {
    let value = e.target.value;
    let arrValue = value.split('');
    // let value = e.target.value.split('');
    let arrNum = [0, 9, 0];
    //check length = 10
    if (value.length > 10 || isNaN(value)) return this.setStyleWrong(1);
    for (let i = 0; i < value.length; i++) {
      if (i > 2) break;
      if (Number(arrValue[i]) !== arrNum[i]) return this.setStyleWrong(1);
    };
    return this.setStyleWrong(0);
  };

  render() {
    let { menu, hasUnread, focusInput } = this.props;
    let classIconNotify = "far fa-bell";
    let classIconSearch = "icon__search rounded-circle";

    if (hasUnread) classIconNotify += " icon__notify";
    if (focusInput) classIconSearch += " hidden";

    return (
      <div className="header__menu container-fluid p-2">
        <div className="row">
          <div className="col d-flex">
            {
              menu.map((elm, index) => {
                return (
                  <div className="col d-flex flex-column align-items-center justify-content-center" key={index}>
                    <i className={elm.icon} />
                    <p className="m-0">{elm.label}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="col">
            <input
              id="input-search"
              className="input__search form-control rounded-pill"
              type="text"
              placeholder="Type something to search..."
              onFocus={this.changeFocus}
              onBlur={this.changeFocus}
              onChange={this.onChecked}
              style={this.state.styleInputTrue}
            />
            <div className={classIconSearch}>
              <i className="fas fa-search text-white" />
            </div>
          </div>

          <div className="col d-flex justify-content-end">
            <div className="header__notify pt-1 mr-5">
              <i className={classIconNotify}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;