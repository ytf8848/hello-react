import React, { Component } from 'react';


const Header = (props) => {
    return (
      <div className="Container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>{props.homeLink}</h1>
          </div>
        </div>
      </div>
    );
};

export default Header;
