import React from 'react';

function Posts(props) {
    return(
        <div className="post">
            <a href={props.link}>
                <img src={props.image} alt={props.alt}></img>
            </a>
        </div>
    );
}

export default Posts;