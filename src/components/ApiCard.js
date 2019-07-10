import React from 'react';
import PropTypes from 'prop-types';


const ApiCard = ({api}) => {
    return(
        <div className='card z-depth-0'>
            <div className='card-content grey-test test-darken-3'>
                <span className='card-title'>{api.title}</span>
                <p className=''>{api.details}</p>
                <ul className=''>
                    { api.bullets.length 
                    ? api.bullets.map((item, i) => {
                    return (              
                        <li key={i} item={item} className=''>
                        <span>{item.text}</span>
                        </li>
                    )
                    })
                    : null
                    }
                </ul>
            </div>
        </div>
    )
}

ApiCard.propTypes = {
    api: PropTypes.object.isRequired,
};


export default ApiCard;
