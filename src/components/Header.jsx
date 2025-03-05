import React from 'react';
import '../scss/Header.scss';

function Header() {
  return (
    <>
        <div>
            <nav>
                <img src="./images/logo.png" alt="logo" />
                <div className='dropdown'>
                    <button onclick="myFunction()" className="menu">
                        <div className="button-menu"></div>
                        <div className="button-menu"></div>
                        <div className="button-menu"></div>
                    </button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>   
                </div>

            </nav>
        </div>
    </>
  );
}

export default Header;