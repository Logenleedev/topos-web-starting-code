import React, { Component } from "react";
import styles from "./ArticlePage.module.css";
import ReactDOM from "react-dom";
import articleContent from "../article-content";
import ArticlesList from "../ArticlesList/ArticlesList.js";



class ArticlePage extends Component {

  render() {
    const name = this.props.match.params.name;
    const article = articleContent.find(article => article.name === name);
    if (!article) return <h1 className={styles["Article_Not_Exist"]}>Article does not exist!</h1>
    
    const otherArticles = articleContent.filter(article => article.name !== name);
    
    return (
      <div className={styles['ArticlePage']}>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
      </div>
    );
  }
}

export default ArticlePage;