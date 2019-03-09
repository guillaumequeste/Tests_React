import React from 'react';

const CurrentDate = (props) => {
    return(
        <div>
            <h3>Quelle est la date ?</h3>
            <p>La date d'aujourd'hui est : {props.date}.</p>
        </div>
    );
};

export default CurrentDate;