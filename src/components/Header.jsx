import React from 'react'
import Logo from "./../assets/Logo.svg"
const HeaderComponent = () => {
  return (
    <div className='w-[1440px] h-[620px] bg-white mx-auto relative'>
      <div className='flex items-center justify-between'>
        <img src={Logo} alt="Logo" className='flex flex-col' />
           <div className='flex flex-wrap md:gap-6 lg:gap-8 xl:gap-10 items-center '>
                <a href=''>Услуги</a>
                <a href=''>О нас</a>
                <a href=''>Польза продукта</a>
                <a href=''>Оборудывание</a>
                <a href=''>Этапы работы</a>
                <a href=''>Отзывы</a>
            </div>
            <button className='text-white py-2 md:py-3 px-6 md:px-8 bg-[#5CCD6A] rounded-2xl shadow-[0_210px_75px_rgba(0,0,0,0,0.25)]'>Связатся</button>
        </div>
    </div>
  )
}

export default HeaderComponent
