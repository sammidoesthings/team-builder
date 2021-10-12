import React from 'react';

function Member(props) {
    const { details } = props;

    if (!details) {
        return <h3>Fetching your team data!</h3>
    }

    return (
        <div className='member-container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}

export default Member;