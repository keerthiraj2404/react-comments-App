import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    reviewList: [],
    name: '',
    review: '',
  }

  toggledIsLiked = id => {
    this.setState(prevState => ({
      reviewList: prevState.reviewList.map(eachReview => {
        if (id === eachReview.id) {
          return {...eachReview, isLiked: !eachReview.isLiked}
        }
        return eachReview
      }),
    }))
  }

  onDeleteReview = id => {
    const {reviewList} = this.state

    this.setState({
      reviewList: reviewList.filter(eachReview => eachReview.id !== id),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, review} = this.state
    const initialBackgroundColorClassName =
      initialContainerBackgroundClassNames[
        `${Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )}`
      ]

    const newComment = {
      id: uuidv4(),
      name,
      review,
      isLiked: false,
      date: new Date(),
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      reviewList: [...prevState.reviewList, newComment],
      name: '',
      review: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({review: event.target.value})
  }

  render() {
    const {name, review, reviewList} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Comments</h1>
        <p className="input-label">Say something about 4.0 Technologies</p>

        <div className="input-image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <form className="input-container" onSubmit={this.onAddComment}>
            <input
              className="input-name"
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={this.onChangeName}
            />
            <textarea
              className="input-review"
              rows={6}
              value={review}
              placeholder="Your Comment"
              onChange={this.onChangeComment}
            />
            <button className="button" type="submit">
              Add Comment
            </button>
          </form>
        </div>

        <hr className="hr" />
        <p className="comments-count">
          <span className="span-count">{reviewList.length}</span>Comments
        </p>
        <ul>
          <li className="list-class">
            {reviewList.map(eachReview => (
              <CommentItem
                key={eachReview.id}
                eachReview={eachReview}
                toggledIsLiked={this.toggledIsLiked}
                onDeleteReview={this.onDeleteReview}
              />
            ))}
          </li>
        </ul>
      </div>
    )
  }
}

export default Comments
