import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import styles from "./Post.module.css"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post bacana boy!"])
  const [newCommentText, setNewCommentText] = useState("")

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH'h'mm",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewInvalidComment(event) {
    event.target.setCustomValidity("Este campo é obrigatório!")
  }

  function deleteComment(commentToDelete) {
    const commentsWithDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.position}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => {
            e.target.setCustomValidity("")
            setNewCommentText(e.target.value)
          }}
          required
          onInvalid={handleNewInvalidComment}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
