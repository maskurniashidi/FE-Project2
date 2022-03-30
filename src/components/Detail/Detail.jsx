import React from 'react';

function CardDetail(props) {
  return (
    <>
      <li className='cardD__item'>
          <figure className='cardD__item__pic-wrap'>
            <img
              className='cardD__item__img'
              alt='GunMA'
              src={props.src}
            />
          </figure>
          <div className='cardD__item__info'>
            <h1 className='cardD__item__title'>{props.label}</h1>
            <h3>Description :</h3>
            <h3 className='cardD__item__text'>{props.text_1}</h3>
            <h3>Paid :</h3>
            <h3 className='cardD__item__text'>{props.text_2}</h3>
            <h3>Benefit :</h3>
            <h3 className='cardD__item__text'>{props.text_3}</h3>
            <h3>Requirement :</h3>
            <h3 className='cardD__item__text'>{props.text_4}</h3>
            <h3>Registration :</h3>
            <h3 className='cardD__item__text'>{props.link}</h3>
            <h3>Duration :</h3>
            <h3 className='cardD__item__text'>{props.text_5} Bulan</h3>
            <h3>Close Registration :</h3>
            <h3 className='cardD__item__text'>{props.text_6}</h3>
          </div>
      </li>
    </>
  );
}

export default CardDetail;