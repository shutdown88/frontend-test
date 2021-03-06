import React, { Component } from 'react';
import Modal from 'react-modal';
import Truncate from 'react-truncate';
import './Article.css';
import iconMap from '../icons';
import galleryImage from './article-modal-image.png';

const formatIndex = index => String(index).padStart(2, '0');

const modalCustomStyles = {
    overlay: {
        backgroundColor: '#4a4a4a'
    },
    content: {
        position: 'absolute',
        top: '9vh',
        bottom: '10vh',
        left: '12vw',
        right: '12vw'
    }
};

const renderGalleryImage = () => <img src={galleryImage} alt="Gallery" />;

const renderGallery = () => (
    <div className="Article-modal-gallery">
        {renderGalleryImage()}
        {renderGalleryImage()}
        {renderGalleryImage()}
        {renderGalleryImage()}
        {renderGalleryImage()}
    </div>
);

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false, modalIsOpening: false };

        this.openModal = this.openModal.bind(this);
        this.afterModalOpen = this.afterModalOpen.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        const boxPosition = this.articleBox.getBoundingClientRect();
        this.setState({
            modalIsOpen: true,
            modalIsOpening: true,
            boxPosition,
            transitionModalContent: false
        });
    }

    afterModalOpen() {
        this.setState({ modalIsOpening: false });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    getModalStyle() {
        if (this.state.modalIsOpening) {
            const {
                top,
                left,
                right,
                bottom,
                height,
                width
            } = this.state.boxPosition;

            return {
                ...modalCustomStyles,
                content: {
                    ...modalCustomStyles.content,
                    top: `${top}px`,
                    left: `${left}px`,
                    right: `${right}px`,
                    bottom: `${bottom}px`,
                    height: `${height}px`,
                    width: `${width}px`
                }
            };
        } else {
            return modalCustomStyles;
        }
    }

    render() {
        const { article } = this.props;
        return (
            <div
                className="Article-box"
                ref={articleBox => (this.articleBox = articleBox)}
            >
                <div className="article-index">
                    <span>{formatIndex(article.index + 1)}</span>
                </div>
                <div className="article-preview">
                    <div className="article-icons">
                        {article.icons &&
                            article.icons.map(
                                i =>
                                    iconMap[i] ? (
                                        <img
                                            key={i}
                                            src={iconMap[i]}
                                            className="article-icon"
                                            alt={i}
                                        />
                                    ) : (
                                        ''
                                    )
                            )}
                    </div>
                    <div className="heading">{article.heading}</div>
                    <div className="subheading">
                        <Truncate lines={4} ellipsis={'...'}>
                            {article.subheading}
                        </Truncate>
                    </div>
                    {article.index === 0 && (
                        <div
                            onClick={this.openModal}
                            className="article-button"
                        >
                            <span className="article-button-text">
                                Clicca qui
                            </span>
                        </div>
                    )}
                </div>
                <Modal
                    className={{
                        base: 'ArticleModal',
                        afterOpen: 'ArticleModal--after-open',
                        beforeClose: 'ArticleModal--before-close'
                    }}
                    onAfterOpen={this.afterModalOpen}
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={this.getModalStyle()}
                >
                    <div className="Article-modal-title-container">
                        <span className="Article-modal-title">
                            {article.subheading}
                        </span>
                    </div>
                    <div className="Article-modal-gallery-container">
                        {renderGallery()}
                    </div>
                </Modal>
            </div>
        );
    }
}
