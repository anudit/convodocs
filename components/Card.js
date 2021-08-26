import React from 'react'

const ArticleCard = ({link, title, description, image}) => {
  return (
    <a href={link} style={{"textDecoration":"none"}} target="_blank">
        <article style={{"display":"flex","flex-direction":"column","border-radius":"10px","border-width":"1px","width":"270px", "height":"310px"}} className="card">
            <img src={image} style={{"width":"100%","height":"152px","borderTopLeftRadius":"10px","borderTopRightRadius":"10px"}}/>
            <h4 style={{"padding":"10px","width":"100%","marginTop":"0px", "fontWeight":"900", "lineHeight":"20px"}}>
                {title}
            </h4>
            <p style={{"padding":"10px","paddingTop":"0px","width":"100%","marginTop":"0px", "lineHeight":"20px"}}>
                {description}
            </p>
        </article>
    </a>
  )
}

export default ArticleCard
