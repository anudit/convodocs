import React, { useState, useEffect } from 'react'

const CommentBox = ({threadId}) => {

  let [offline, setOffline] = useState(false);
  let [theme, setTheme] = useState('dark');

  useEffect(() => {
    window.addEventListener("online", ()=>{
      setOffline(false)
    });
    window.addEventListener("offline", ()=>{
      setOffline(true)
    });
    if (Array.from(document.getElementsByTagName('html')[0].classList).includes('dark') === true){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, []);

  if (offline == true ){
    return (
      <p>You are offline.</p>
    )
  }
  else{
    return (
      <iframe src={`https://theconvo.space/embed/dt?url=https%3A%2F%2Fdocs.theconvo.space%2F&threadId=${threadId}&height=300&theme=${theme}`} allowtransparency="true" width="100%" height="350px" style={{marginTop:'10px', colorScheme: "light"}} loading='eager'>
        Comments
      </iframe>
    )
  }
}

export default CommentBox
