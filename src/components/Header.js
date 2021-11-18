import React from 'react';

function Header() {
    return(
        <div>
            <img className="banner" src="./img/banner.png" alt="banner" />
            <img className="logo" src="./img/LSO_flat_logo.png" alt="logo" />
            <a href="https://lso-inc.com/"><button className="pageButton">Visit our Website!</button></a>
        </div>
    );
}

export default Header; 