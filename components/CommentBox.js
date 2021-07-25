import React from 'react'

const CommentBox = ({threadId}) => {
  return (
    <iframe src={`https://theconvo.space/embed/dt?url=https%3A%2F%2Fdocs.theconvo.space%2F&threadId=${threadId}`} allowtransparency="true" width="100%" height="auto" style={{marginTop:'10px'}} loading='eager'>
      Comments
    </iframe>
  )
}

export default CommentBox
