import React from "react";

function Article({
  title,
  date = 'January 1, 1970',
  preview,
  minutes }) {

  function dateV2() {
    let five = Math.ceil(minutes / 5)
    let ten = Math.ceil(minutes / 10)
    let counter = 0
    let emoji = ''
    if (minutes < 30) {
      while (counter < five) {
        emoji = emoji + '☕️'
        counter++
      }
    }
    if (minutes > 30) {
      while (counter < ten) {
        emoji = emoji + '🍱'
        counter++
      }
    }
    return (
      <small>{date}{` • ${emoji} ${minutes} min read`}</small>
    )
  }
  return (
    <article>
      <h3>{title}</h3>
      {dateV2()}
      <p>{preview}</p>
    </article>
  )
}

export default Article