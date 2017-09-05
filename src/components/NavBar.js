import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

import frog from '../images/frog.png';

export default class NavBar extends Component {

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }

  render() {

    return (
      <div id="navContainer">
        <nav className="navbar navbar-inverse">
          <div className="navWide">
            <div className="wideDiv container-fluid">
              <ul className="nav navbar-nav">
                <li>
                  <img id="frogLogo" src={frog} alt="frog logo"/>
                </li>
                <li>
                  <NavLink to="/"><span>Polly Blog</span></NavLink>
                </li>
                <li>
                  <NavLink to="/createpost"><span>Create Post</span></NavLink>
                </li>
                <li>
                  <NavLink to="/showposts"><span>Show All Posts</span></NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="navNarrow">
            <i className="fa fa-bars fa-2x col-md-10" onClick={this.burgerToggle}></i>
            <div className="narrowLinks ">
              <ul id="navNarList" className="nav navbar-nav">
                <li>
                  <img id="frogLogo" src={frog} alt="frog logo"/>
                </li>
                <li onClick={this.burgerToggle}>
                  <NavLink to="/"><span>Polly Blog</span></NavLink>
                </li>
                <li onClick={this.burgerToggle}>
                  <NavLink to="/createpost"><span>Create Post</span></NavLink>
                </li>
                <li onClick={this.burgerToggle}>
                  <NavLink to="/showposts"><span>Show All Posts</span></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
