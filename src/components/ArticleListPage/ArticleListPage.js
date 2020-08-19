import React, { Component } from "react";
import styles from "./ArticleListPage.module.css";
import ReactDOM from "react-dom";
import articleContent from "../article-content";
import ArticlesList from "../ArticlesList/ArticlesList.js";

class ArticleListPage extends Component {
    render() {
      return (
        <div className={styles['ArticleListPage']}>
            <h1>Articles</h1>
            <ArticlesList articles={articleContent} />
        </div>
      );
    }
  }
  
  export default ArticleListPage;