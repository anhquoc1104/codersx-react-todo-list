import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  render() {
    let {menu, hasUnread } = this.props;
    let classIcon = "far fa-bell"
    if(hasUnread) classIcon += " icon__notify";
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
          <div className="col d-flex justify-content-end">
            <div className="header__notify pt-1 mr-5">
              <i className={classIcon}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;