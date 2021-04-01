import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import logo from '../logo.svg';

function Navbar(props) {
    const style = {
        color: '#EB5757',
        fontSize: '25px',
    }

    return (
        <nav className="flex  sm:flex-row justify-between flex-wrap mt-4  ">
            <img src={logo} alt="logo" className=" w-36 " />
            <div className="mx-auto md:mx-0 my-8 md:my-0 md:w-7/12 lg:w-5/12 xl:w-3/12 shadow-md rounded-xl items-center  flex" id="search--box">


                <span className="border-r-2 ">
                    <input type='text' placeholder="Helsinki, Finland" className=" w-10/12 md:w-11/12 lg:w-11/12 xl:w-36 border-gray-100 border-solid border-0 font-normal text-lg text-gray1 ml-2 " onClick={props.inClick} />
                </span>


                <span className="border-r-2 ">
                    <input type="text" placeholder="Add guests" className=" text-center flex-grow w-11/12 border-gray-100 border-solid border-0 font-normal text-lg text-gray1 lg:w-full" onClick={props.inClick} />
                </span>

                <span className=" px-2  md:w-1/6" onClick={props.inClick}>
                    <SearchIcon style={style} />
                </span>
            </div>
        </nav>
    )
}



export default Navbar

