
import React, { Component } from "react";
import styles from "./ArticlesList.module.css";
import ReactDOM from "react-dom";
import articleContent from "../article-content";
import {Link} from 'react-router-dom'


class ArticlesList extends Component {
  render() {
    return (
      <div className={styles["ArticlesList"]}>
        {articleContent.map((article, key) => (
            <Link className={styles["article-list-item"]} key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
      </div>
    );
  }
}

export default ArticlesList;