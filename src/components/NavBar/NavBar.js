
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

//Import Material UI
import Button from '@material-ui/core/Button';


class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <Button 
                  variant="contained"
                  color="default"
                  size="small" 
                  className={styles['button']}
                  disabled
                >
                  HomePage
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Button 
                  variant="contained"
                  color="default"
                  size="small" 
                  disabled
                >
                  About
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/articles-list">
                <Button 
                  variant="contained"
                  color="default"
                  size="small" 
                  disabled
                >
                  Articles
                </Button>    
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;