import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="row">
          <div className="col border border-success d-flex flex-column align-items-center justify-content-center">
            <i className="fas fa-home" />
            <p className="m-0">HOME</p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <i className="fas fa-gift" />
            <p className="m-0">DEALS</p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <i className="fas fa-cloud-upload-alt" />
            <p className="m-0">UPLOAD</p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <i className="fas fa-mug-hot" />
            <p className="m-0">WORK</p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <i className="fas fa-cog" />
            <p className="m-0">SETTINGS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;