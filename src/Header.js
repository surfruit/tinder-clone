import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
    return (
        <div className='header'>
           
           <IconButton>
                <PersonIcon fontSize="large" className='header__icon' />
            </IconButton>

            <img 
                className='header__logo'
                src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
            />
        <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />  
        </IconButton>
        
        </div>
    )
}

export default Header;
