import { useState, useEffect } from 'react'
import '../Styles/mobileMenu.scss'
import { IoLayers, IoHome } from 'react-icons/io5';
// import { VscTriangleDown } from 'react-icons/vsc';

function MobileMenu(props) {

    return (
        <div className='mobile-menu'>
            <div className='mobile-icons-left'>
                <div className='user-info'>
                    <img src="https://via.placeholder.com/200x200" />
                    <span>{props.name}</span>
                    {/* <VscTriangleDown></VscTriangleDown> */}
                </div>
            </div>
            <div className='mobile-icons-right'>
                {/* <div><span>Apps</span><IoLayers></IoLayers></div> */}
                <div><IoHome></IoHome><span>fsft.io</span></div>
            </div>
        </div>
    )
}

export default MobileMenu