import React from 'react'

function Footer() {
    return (
        <>
            <div id='footer'>
            <div className="column first">
                <h1>Отдел аренды</h1>
                <p><i class="fa-solid fa-envelope"></i> test@test.ru</p>
                <p><i class="fa-solid fa-phone"></i> +7-999-999-99-99</p>
                <p><i class="fa-solid fa-phone"></i> +7-999-999-99-99</p>
                <p><i class="fa-solid fa-phone"></i> +7-999-999-99-99</p>
            </div>
            <div className="column second">
                <h1>Отдел маркетинга</h1>
                <p><i class="fa-solid fa-envelope"></i> test@test.ru</p>
                <p><i class="fa-solid fa-phone"></i> +7-999-999-99-99</p>
                <p><i class="fa-solid fa-location-dot"></i> 125014, Россия, г.Москва <br /> 11-й км Бульвар Рокоссовского, 7</p>
            </div>
            <div className="column third">
                <h1>Главная</h1>
                <h1>Магазины и услуги</h1>
                <h1>Развлечения</h1>
            </div>
            <div className="column fourth">
                <h1>Еда</h1>
                <h1>Новости и акции</h1>
                <h1>Контакты</h1>
            </div>
            <div className="column icons">
                <div className="icon">
                    <i className='fa-brands fa-instagram'></i>
                </div>
                <div className="icon">
                    <i className='fa-brands fa-vk'></i>
                </div>
            </div>
        </div>
        <div className="foott">
            <p>© ТРЦ - 2020</p>
            <p>Политика конфиденциальности данных</p>
            <p>Разработка сайта</p>
        </div>
        </>
    )
}

export default Footer