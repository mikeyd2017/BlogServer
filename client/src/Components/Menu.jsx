import { useState, useEffect } from 'react'
import '../Styles/menu.scss'
import { IoLayers, IoHome } from 'react-icons/io5';
// import { VscTriangleDown } from 'react-icons/vsc';

function Menu(props) {

    return (
        <div className='menu'>
            <div className='menu-icons-left'>
                <div className='user-info'>
                    <img src="https://via.placeholder.com/200x200" />
                    <span>{props.name}</span>
                    {/* <VscTriangleDown></VscTriangleDown> */}
                </div>
            </div>
            <div className='menu-icons-right'>
                {/* <div><span>Apps</span><IoLayers></IoLayers></div> */}
                <div><IoHome></IoHome><span>fsft.io</span></div>
            </div>
        </div>
    )
}

export default Menu