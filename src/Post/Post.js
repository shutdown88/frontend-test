import React from 'react';
// TODO spostare icons-map
import iconMap from '../Article/icons-map';
import './Post.css';
// TODO chiamare article preview i box
// e article questo

// TODO hanno stili diversi da piggy... eliminare iconMap? applicare stili per le differenze?
const heading = 'Nun ce sta\' mammà là dint\'!'
const subheading = 'Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce steva.'
const content = 'E intant\' e sord tuoj nunn arrivavan. \'Na sera gli honduregni me mettetter\' nu macete n\'man e gridavan\': \'Accirel\'! Accirel\'! Je pregav\', pregav\' ca corcrun\' me venev\' a salva\', ca tu me veniv\' a salva\'! '
const icons = ['drop', 'fire', 'paper'];

// TODO move in another file
// TODO dinamica? calcolando?
const Gallery = () => (
    <div className="Gallery">
        <img className="Gallery-big" src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people1.jpg" />
        <div className="Gallery-column">
            <img className="Gallery-small" src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people1.jpg" />
            <img className="Gallery-small" src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people1.jpg" />
        </div>
        <img className="Gallery-big" src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people1.jpg" />
        <div className="Gallery-column Gallery-column-last">
            <img className="Gallery-small" src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people1.jpg" />
            <img className="Gallery-small" src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people1.jpg" />
        </div>
    </div>
);

// TODO subcomponents?
export default ({ post: { description } }) => (
    <div className="Post">
        <div className="Post-heading">{ heading }</div>
        <div className="Post-subheading">{ subheading }</div>
        <div className="Post-content">{ content }</div>
        <hr className="Post-footer-line"/>
        <div className="Post-footer">
            <div className="user-data">
                <img className = "user-avatar" src="https://s3-eu-west-1.amazonaws.com/production-hairdressr/fe-dummy/people1.jpg" />
                <span className="username">Lorem Ipsum</span>
            </div>
            <div className="post-icons">
                {icons && icons.map(
                        i => iconMap[i] ? <img src={iconMap[i]} className='article-icon' /> 
                            : ''
                    )}
            </div>
        </div>
        <Gallery />
    </div>
)

