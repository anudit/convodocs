import React from 'react'

const ArticleCard = ({link, title, description, image}) => {
  return (
    <a href={link} style={{"textDecoration":"none"}} target="_blank">
        <article style={{"display":"flex","flexDirection":"column","border-radius":"10px","borderWidth":"1px","width":"290px", "height":"310px","marginTop":"10px" }} className="card">
            <img src={image} style={{"width":"100%","height":"152px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px"}}/>
            <h4 style={{"padding":"10px","width":"100%","marginTop":"0px", "fontWeight":"900", "lineHeight":"20px", "lineBreak": "auto"}}>
                {title}
            </h4>
            <p style={{"padding":"10px","paddingTop":"0px","width":"100%","marginTop":"0px", "lineHeight":"20px", "lineBreak": "auto !important"}}>
                {description}
            </p>
        </article>
    </a>
  )
}

export default ArticleCard
