// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachReview, onDeleteReview, toggledIsLiked} = props
  const {review, name, id, isLiked, date, initialClassName} = eachReview

  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'like-text active' : 'like-text'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    toggledIsLiked(id)
  }

  const onDelete = () => {
    onDeleteReview(id)
  }

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <div className="comment-container">
      <div className="name-time-container">
        <p className={`initial ${initialClassName}`}>{initial}</p>
        <h1 className="name-heading">{name}</h1>
        <p className="time">{postedTime}</p>
      </div>
      <p className="review">{review}</p>
      <div className="button-container">
        <button
          className={likeTextClassName}
          type="button"
          data-testid="delete"
          onClick={onClickLike}
        >
          <img src={likeImageUrl} className="like-image" alt="like" />
          like
        </button>
        <button type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </div>
  )
}

export default CommentItem
