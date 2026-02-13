import React from 'react'
import HeaderComponent from './Header';


import geoIcon from '../assets/geo_mark.png';
import phoneIcon from '../assets/phone.png';

const main = () => {
  return (
    <div className="bj_image px-6 py-12 max-w-[1440px] mx-auto">
      <HeaderComponent />


      

      <div className="flex flex-col lg:flex-row items-start gap-10 mt-10">
       
        <div className="flex-1">
          <h1 className="font-semibold text-5xl md:text-8xl capitalize text-[#495E4C] mb-2">
            Чистый Воздух
          </h1>
          <h1 className="font-semibold text-5xl md:text-8xl capitalize text-[#495E4C] mb-2">
            Вместе С
          </h1>
          <h1 className="font-semibold text-6xl md:text-9xl capitalize text-[#78C081] mb-5">
            Pascal vent
          </h1>
          <p className="text-lg md:text-3xl font-normal text-[#7CA381] mb-8 max-w-lg">
            Проектирование, поставка и монтаж систем вентиляции и кондиционирования
          </p>

          
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
           
            <div className="flex items-center gap-4">
              <img src={geoIcon} className="w-10 h-10" />
              <p className="text-gray-400 text-lg">Московский регион, Москва</p>
            </div>

           
            <div className="flex items-center gap-4">
              <img src={phoneIcon} className="w-10 h-10" />
              <div className="flex flex-col text-gray-400 text-lg">
                <p>+7 492 373 63 31</p>
                <p>+7 424 367 89 29</p>
              </div>
            </div>
          </div>

          
          <button
            id="button-contacts"
            className="w-full sm:w-auto px-8 h-20 rounded-3xl text-2xl font-normal text-white bg-[#5CCD6A] shadow-lg shadow-emerald-100 cursor-pointer hover:opacity-90 transition-opacity"
          >
            оставить заявку
          </button>
        </div>

      </div>
    </div>
  );
};

export default main;