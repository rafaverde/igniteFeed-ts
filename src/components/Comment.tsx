import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"

import { Avatar } from "./Avatar"
import { useState } from "react"

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleCommentDelete() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://randomuser.me/api/portraits/lego/1.jpg"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Joaquim Valverde</strong>
              <time
                title="09 de Agosto às 15h15"
                dateTime="2024-08-09 15:15:30"
              >
                Há 1h
              </time>
            </div>

            <button onClick={handleCommentDelete} title="Apagar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
