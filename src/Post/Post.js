import React from 'react';
import iconMap from '../icons';
import './Post.css';
import images from './images'

const heading = 'Nun ce sta\' mammà là dint\'!'
const subheading = 'Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce steva.'
const content = 'E intant\' e sord tuoj nunn arrivavan. \'Na sera gli honduregni me mettetter\' nu macete n\'man e gridavan\': \'Accirel\'! Accirel\'! Je pregav\', pregav\' ca corcrun\' me venev\' a salva\', ca tu me veniv\' a salva\'! '
const icons = ['drop', 'fire', 'paper'];

const Gallery = () => (
    <div className="Gallery">
        <img className="Gallery-big" src={images.gallery1} alt="Gallery"/>
        <div className="Gallery-column">
            <img className="Gallery-small" src={images.gallery2} 
            alt="Gallery" />
            <img className="Gallery-small" src={images.gallery3} 
            alt="Gallery" />
        </div>
        <img className="Gallery-big" src={images.gallery4} 
        alt="Gallery" />
        <div className="Gallery-column Gallery-column-last">
            <img className="Gallery-small" src={images.gallery5} 
             alt="Gallery"/>
            <img className="Gallery-small" src={images.gallery6} 
            alt="Gallery" />
        </div>
    </div>
);

export default ({ post: { description } }) => (
    <div className="Post">
        <div className="Post-heading">{ heading }</div>
        <div className="Post-subheading">{ subheading }</div>
        <div className="Post-content">{ content }</div>
        <hr className="Post-footer-line"/>
        <div className="Post-footer">
            <div className="user-data">
                <img className = "user-avatar" src={images.avatar}
                alt="User avatar" />
                <span className="username">Lorem Ipsum</span>
            </div>
            <div className="post-icons">
                {icons && icons.map(
                        i => iconMap[i] ? <img src={iconMap[i]} className='article-icon' alt="Icon"/> 
                            : ''
                    )}
            </div>
        </div>
        <Gallery />
    </div>
)

