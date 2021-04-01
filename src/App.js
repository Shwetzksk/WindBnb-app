import './App.css';
import "tailwindcss/tailwind.css"
import React, { useState, useEffect } from 'react';


import Navbar from './components/Navbar';
import Card from './components/Card';
import Searchbar from './components/Searchbar';





function App() {

  const [realData, update_Data] = useState([]);
  const [data, updateData] = useState([]);
  const [click, updateClick] = useState(false);


  useEffect(() => {
    const receivedData = require('./stays.json');
    updateData(receivedData);
    update_Data(receivedData);

  }, []);

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

  function inActive(id) {
    document.querySelector(`#${id}`).classList.remove('border-2', 'border-black', 'border-solid');
  }
  ////////
  function handleClick(e) {
    updateClick(true);
    document.querySelector(`#search--box`).classList.add('invisible');
    hideElement('#search--box');



  }

  //////
  function clickAnywhere(e) {
    if (click && !e.target.classList.contains('no-effect')) {
      inActive('guests--div');
      inActive('location--div');
      if (!selectElementClasslist('.guests--input').contains('invisible')) {
        hideElement(`.guests--input`);
      }
      if (!selectElementClasslist('.location--list').contains('invisible')) {
        hideElement(`.location--list`);
      }


    };
    if (click && e.target.classList.contains('nav--bg')) {

      updateClick(false);
      visibleElement('#search--box');
    }

  }
  function dataFiltered(value) {
    updateData(value);
    console.log(`passed value:${value}`);
  }





  return (
    <section className="App font-display  relative py-0" onClick={clickAnywhere}>



      { click && <Searchbar isTrue={click} data={realData} clickUpdate={updateClick} filteredData={dataFiltered} />}
      <main className="w-10/12 m-auto">
        <Navbar inClick={handleClick} />

        <main className="md:my-16 my-7 ">
          <div className="flex justify-between "><span className="font-bold text-2xl text-gray4">Stays in Finland</span>
            <span className="text-lg font-medium my-auto text-gray3">{data.length - 2}+ stays</span>
          </div>
          <section className="grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 grid my-2 place-items-center">
            {data.map((item) => {
              return <Card {...item} />
            })}
          </section>
        </main>
        <footer className="text-gray3 text-lg my-4 text-center"><p>Created by <a href="https://www.linkedin.com/in/k-shweta-kumari-86a47418a/" rel="noopener noreferrer" target="_blank">Shweta</a> @<a href="https://devchallenges.io/" rel="noopener noreferrer" target="_blank">DevChallenges</a></p>
        </footer>
      </main>
    </section>
  );
}


export default App;
