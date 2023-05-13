import React from 'react';
import { ReactiveIcon } from './ReactiveIcon.jsx';
import '../Styles/Footer.css'

export function Footer() {
    return(
        <footer className='generalFooter'>
            <ReactiveIcon className='footerIcon'
            link='/register'
            srcImg='src/Images/logoUAM.png' />
            <span className='footerText'>
            Contacto: pjdevscontact@gmail.com
            </span>
        </footer>
    );
}