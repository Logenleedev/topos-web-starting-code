import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


import HomePage from './components/HomePage/index.js';
import ArticlesList from './components/ArticlesList/index.js';
import ArticlePage from './components/ArticlePage/index.js';
import AboutPage from './components/AboutPage/index.js';
import NavBar from './components/NavBar/index.js';
import ArticleListPage from './components/ArticleListPage/index.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar / >
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticleListPage} />
        <Route path="/article/:name" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
