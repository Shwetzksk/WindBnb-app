import React from 'react';
import StarIcon from '@material-ui/icons/Star';

function Card(props) {
    const style = {
        color: '#EB5757',
        fontSize: '25px',
    }
    const { uuid } = require('uuidv4');

    const { photo, title, superHost, type, beds, rating } = props;

    return (
        <div key={uuid()} className="w-lg mt-8 mb-auto sm:col-span-1">

            <img src={photo} className="w-full h-72 rounded-3xl text-left room-img" alt={title} />
            <div className="flex justify-between mt-4 mb-3">
                <span className="flex items-center space-x-2">
                    {superHost ? <span className="text-base text-gray3 m-auto border-2 border-gray-500 rounded-lg p-1">SUPER HOST</span> : ''}
                    <p className="text-lg font-md text-gray2">{type} {beds ? `. ${beds} beds` : ''}</p> </span>
                <p className="text-lg text-gray3 font-md">{rating} <StarIcon style={style} /></p>
            </div>
            <p className="text-left text-xl font-semibold text-gray4 mb-4">{title}</p>

        </div>
    )
}

export default Card
