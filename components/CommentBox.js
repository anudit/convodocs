import React, { useState, useEffect } from 'react'

const CommentBox = ({threadId}) => {

  let [offline, setOffline] = useState(false);

  useEffect(() => {
    window.addEventListener("online", ()=>{
      setOffline(false)
    });
    window.addEventListener("offline", ()=>{
      setOffline(true)
    });
  }, [])

  if (offline == true ){
    return (
      <p>You are offline.</p>
    )
  }
  else{
    return (
      <iframe src={`https://theconvo.space/embed/dt?url=https%3A%2F%2Fdocs.theconvo.space%2F&threadId=${threadId}&height=300`} allowtransparency="true" width="100%" height="350px" style={{marginTop:'10px'}} loading='eager'>
        Comments
      </iframe>
    )
  }
}

export default CommentBox
