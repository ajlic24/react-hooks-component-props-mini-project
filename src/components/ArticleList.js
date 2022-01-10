import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    function mapIt() {
      return posts.map(ele => {
        return <Article key={ele.id} title={ele.title} date={ele.date} preview={ele.preview} minutes={ele.minutes} />
      })
    }
  
    return (
      <main>
        {mapIt()}
      </main>
    )
  }

  export default ArticleList