import React from 'react';

function Posts(props) {
    return(
        <div className="item">
            <a href={props.link}>
                <img src={props.image} alt={props.alt}></img>
            </a>
        </div>
    );
}

export default Posts;