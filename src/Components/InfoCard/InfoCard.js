import React from 'react';
import '../InfoCard/InfoCard.scss'


function InfoCard() {
    return (

        <div className='infocard'>
            <div className='infocard_title'>Trending</div>
            <div className='infocard_container'>
                <div className='infocard_card'>Top volume 24h</div>
                <div className='infocard_card'>Top floor price 24h</div>
                <div className='infocard_card'>Dep floor price 24h</div>
            </div>

        </div>
    );
}

export default InfoCard;
