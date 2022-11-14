import React, { useState } from 'react';
import img from './assets/Rectangle 333.svg';
import img2 from './assets/Слой x0020 1.svg';

function Sec2() {
  const [hide, setHide] = useState(false);

  return (
    <>
      <div id='sec2'>
        <div className="top">
          <h1>Новости</h1>
          <div className="line"></div>
        </div>
        <div className='all-box'>
          <div className='box box1'>
            <div className='bubble'>
              <h3>Фудхолл: </h3>
              <p>Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</p>
              <div className="date">
                11.08.2020
              </div>
            </div>
            <div className="img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className='box'>
            <div className='bubble'>
              <h3>Фудхолл: </h3>
              <p>Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</p>
              <div className="date">
                11.08.2020
              </div>
            </div>
            <div className="img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className='box box3'>
            <div className='bubble'>
              <h3>Фудхолл: </h3>
              <p>Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</p>
              <div className="date">
                11.08.2020
              </div>
            </div>
            <div className="img">
              <img src={img} alt="" />
            </div>
          </div>
          <div className='box box31'>
            <div className='bubble'>
              <h3>Фудхолл: </h3>
              <p>Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</p>
              <div className="date">
                11.08.2020
              </div>
            </div>
            <div className="img">
              <img src={img} alt="" />
            </div>
          </div>
          {hide ?
            (
              <>
                <div className='box box4 box41'>
                  <div className='bubble'>
                    <h3>Фудхолл: </h3>
                    <p>Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</p>
                    <div className="date">
                      11.08.2020
                    </div>
                  </div>
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                </div>
                <div className='box box4'>
                  <div className='bubble'>
                    <h3>Фудхолл: </h3>
                    <p>Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</p>
                    <div className="date">
                      11.08.2020
                    </div>
                  </div>
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                </div>
                <div className='box box5'>
                  <div className='bubble'>
                    <h3>Фудхолл: </h3>
                    <p>Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</p>
                    <div className="date">
                      11.08.2020
                    </div>
                  </div>
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                </div>
                <div className='box box5'>
                  <div className='bubble'>
                    <h3>Фудхолл: </h3>
                    <p>Новое гастропространство уже открыто! Для вас огромное множество плюшек в первый день открытия</p>
                    <div className="date">
                      11.08.2020
                    </div>
                  </div>
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                </div>
              </>
            )
            :
            (
              ''
            )
          }
        </div>
        <div className="right">
          <h1>Самый большой <span>парк развлечений</span></h1>
          <img src={img2} alt="" />
        </div>
      </div>
      <p className='foot' onClick={() => setHide(!hide)} >Все новости и акции...  &gt;&gt;</p>
    </>
  )
}

export default Sec2;