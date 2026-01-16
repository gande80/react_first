import React from 'react'
import Logo from "./../assets/Logo.svg"
const HeaderComponent = () => {
  return (
    <div>
        <img src={Logo} alt="Logo" className='h-10' />
        <div>
            <a href=''>Услуги</a>
            <a href=''>О нас</a>
            <a href=''>Польза продукта</a>
            <a href=''>Оборудывание</a>
            <a href=''>Этапы работы</a>
            <a href=''>Отзывы</a>
        </div>
    </div>
  )
}

export default HeaderComponent
