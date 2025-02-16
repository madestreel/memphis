import React from 'react';
import './style.scss';
import Lottie from 'lottie-react';
import CloudOnly from 'components/cloudOnly';
import { isCloud } from 'services/valueConvertor';

const TitleComponent = (props) => {
    const { headerTitle, spanHeader, typeTitle = 'header', headerDescription, style, img, finish, required, learnMore = false, link, cloudOnly = false } = props;

    return (
        <div className="title-container" style={style?.container}>
            <div className="header-flex">
                {typeTitle === 'header' && (
                    <div className={finish ? 'header-title-container-finish' : 'header-title-container'}>
                        {finish ? (
                            <Lottie style={style?.image} animationData={img} loop={true} />
                        ) : (
                            <img className="header-image" src={img} alt={img} style={style?.image}></img>
                        )}
                        <p className="header-title" style={style?.header}>
                            {headerTitle}
                        </p>
                    </div>
                )}
                {typeTitle === 'sub-header' && (
                    <p className="sub-header-title" style={style?.header}>
                        {required && <span>* </span>}
                        {headerTitle}
                        <span className="span-header">{spanHeader}</span>
                    </p>
                )}
                {cloudOnly && !isCloud() && <CloudOnly />}
            </div>
            {headerDescription && (
                <p className="header-description" style={style?.description}>
                    {headerDescription}&nbsp;
                    {learnMore && (
                        <a className="learn-more" href={link} target="_blank">
                            Learn more
                        </a>
                    )}
                </p>
            )}
        </div>
    );
};

export default TitleComponent;
