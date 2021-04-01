
import "tailwindcss/tailwind.css"
import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';



import Guests from './Guests';

function Searchbar(props) {
    const style = {
        color: '#F2F2F2',

        fontSize: '18px',
    }


    const cities = ['Helsinki, Finland', 'Turku, Finland', 'Oulu, Finland', 'Vaasa, Finland'];
    const [adults, countAdult] = useState(0);
    const [child, countChild] = useState(0);



    const [inputValue, updateValue] = useState('');
    useEffect(() => {
        if (props.isTrue) {
            document.getElementById('guests').innerHTML = adults === 0 && child === 0 ? 'Add guests' : `${adults} ${adults <= 1 ? 'Adult' : 'Adults'}, ${child} ${child <= 1 ? 'Child' : 'Children'} `;


        }
    }, [props.isTrue, adults, child]);
    function hideElement(classname) {
        const x = document.querySelector(`${classname} `).classList;
        x.remove('visible');
        x.add('invisible');
    }
    function visibleElement(classname) {
        const x = document.querySelector(`${classname} `).classList;
        x.add('visible');
        x.remove('invisible');

    }
    function selectElementClasslist(query) {
        return document.querySelector(query).classList;

    }
    function handleChange(e) {
        const { value } = e.target;
        updateValue(value);



    }

    function searchData() {

        const x = props.data.filter((data) => inputValue === `${data.city}, ${data.country}`);

        props.clickUpdate(false);
        visibleElement('#search--box');
        console.log(props.data, inputValue, x);
        props.filteredData(x);
    }
    function optionClicked(e) {

        updateValue(e.target.id);


    }
    function takeInput(e) {

        if ((e.target.id === 'location' || e.target.id === 'guests')) {
            active(`${e.target.id}--div`);
            inActive(`${e.target.id === 'location' ? 'guests' : 'location'}--div`);

        }

        if (e.target.id === 'location') {
            visibleElement(`.location--list`);
            hideElement(`.guests--input`);
            selectElementClasslist(`#search--bar`).remove('flex-col-reverse');
        }
        if (e.target.id === 'guests') {
            visibleElement(`.guests--input`);
            hideElement(`.location--list`);

            selectElementClasslist(`#search--bar`).add('flex-col-reverse');

        }


    }


    function active(id) {
        document.querySelector(`#${id}`).classList.add('border-2', 'border-black', 'border-solid');
    }
    function inActive(id) {
        document.querySelector(`#${id}`).classList.remove('border-2', 'border-black', 'border-solid');
    }

    function closeSearchbar() {
        props.clickUpdate(false);
        visibleElement('#search--box');
    }

    return (
        <section className="bg-gray-800  z-20 h-full bg-opacity-50 w-full absolute t-0 pb-5  nav--bg">
            <main className=" bg-white z-20 w-full  pt-4">
                <div className="md:mx-auto mx-5 md:my-0 md:w-7/12 lg:w-5/12 xl:w-11/12 xl:hidden flex justify-between">
                    <p className="text-base text-center font-bold">Edit your search</p>
                    <span className=" xl:hidden " onClick={closeSearchbar}><CloseIcon /></span>
                </div>


                <div className="md:mx-auto mx-5  md:w-7/12 lg:w-5/12 xl:w-11/12 shadow-md rounded-xl items-center  flex justify-evenly flex-wrap flex-col xl:flex-row mt-4 xl:mt-3" >


                    <span className="xl:border-r-2 xl:border-b-0 xl:flex-grow border-b-2 w-full xl:w-1/3   xl:my-0  ">

                        <div className=" flex flex-col m-auto location--div   rounded-xl p-2 no-effect" onClick={takeInput} id="location--div">
                            <label className="text-left text-xs pl-2.5 font-bold no-effect" >LOCATION</label>
                            <input type="text" className="input--field text-left my-auto py-0 border-0 font-normal text-lg text-gray3 no-effect pl-2.5 " id="location" placeholder="Helsinki, Finland" value={inputValue} onChange={handleChange} />
                        </div>


                    </span>


                    <span className="xl:border-r-2  xl:border-b-0 xl:flex-grow border-b-2 w-full xl:w-1/3  xl:my-0 ">

                        <div className=" flex flex-col m-auto guests--div   rounded-xl py-2 px-5 no-effect" onClick={takeInput} id="guests--div">
                            <label className="text-left text-xs  font-bold no-effect">GUESTS</label>
                            <span className="input--field border-0 font-normal text-left my-auto text-lg text-gray3 py-0 no-effect" id="guests">Add guests</span>
                        </div>
                    </span>
                    <span className="flex-grow  my-2 xl:my-0 xl:w-1/3 flex justify-self-center ">
                        <button className="w-30 mx-auto bg-primary py-2 px-5  text-ashwhite rounded-xl text-lg outline-none focus:outline-none" onClick={searchData}><SearchIcon style={style} /> Search  </button>

                    </span>
                </div>


                <div className="mx-auto   md:w-7/12 lg:w-5/12 xl:w-11/12  items-center  flex justify-evenly flex-wrap flex-col xl:grid xl:grid-cols-12  xl:gap-x-12" id="search--bar">
                    <div className="xl:col-start-1 xl:col-end-5 xl:mb-auto mt-2 location--list invisible  mr-auto xl:mr-0 ml-5 xl:ml-0">
                        <ul className="text-left ">
                            {cities.map((item) => <li id={item} className="my-3 mx-3.5 p-2  cursor-pointer hover:underline text-lg" onClick={optionClicked}><LocationOnIcon />  {item}</li>)}


                        </ul>
                    </div>
                    <div className=" xl:col-start-5 xl:col-end-10 xl:ml-1.5 guests--input invisible mt-5 mr-auto ml-10">
                        <Guests key={'adult'} count={adults} for={`Adults`} agesFrom={`Ages 13 or above`} countUpdate={(value) => {
                            countAdult(value);

                        }} extraClass={'no-effect'} />
                        <Guests key={'child'} count={child} for={`Children`} agesFrom={`Ages 2-12`} countUpdate={(value) => {
                            countChild(value);

                        }} extraClass={'no-effect'} />

                    </div>
                </div>
            </main>
        </section>
    )
}

export default Searchbar
