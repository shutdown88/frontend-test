import React from 'react';
import './Article.css'
// TODO make a map for svg icons? even if there is only one?
import iconMap from './icons-map'

const formatIndex = index => String(index).padStart(2, '0')

export default ({ article }) => (
    <div className="Article-box">
        <div className="article-index">
            <span>{formatIndex(article.index + 1)}</span>
        </div>
        <div className="article-preview">
            <div className="article-icons">
                {
                    article.icons && article.icons.map(
                        i => iconMap[i] ? <img src={iconMap[i]} className='article-icon' /> 
                            : ''
                    )
                }
                
            </div>
            <div className="heading">{article.heading}</div>
            <div className="subheading">{article.subheading}</div>
            {article.index === 0 && <div className="article-button">CLICCA QUI</div>}
        </div>
    </div>
)