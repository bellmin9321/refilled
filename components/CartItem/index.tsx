import React from 'react';
import { IoMdClose } from 'react-icons/io';

import styles from './styles.module.scss';

import useCart from '@/lib/hooks/useCart';

import { ItemProps } from '@/types';

function CartItem({ item }: ItemProps) {
  const { deleteItemInCart } = useCart();

  return (
    <div className={styles.itemLayout}>
      <div key={item.id} className={styles.itemBox}>
        <img
          src={item.imageUrl}
          className={styles.image}
          width={60}
          height={60}
        />
        <div>
          {item.tag.text && (
            <span
              className={styles.tag}
              style={
                item.tag.text === 'BEST'
                  ? { color: 'white', backgroundColor: '#256CEE' }
                  : { color: '#333333', backgroundColor: '#E6E6E6' }
              }
            >
              {item.tag.text}
            </span>
          )}
          <div className={styles.name}>{item.name}</div>
          <div className={styles.option}>{item.option}</div>
          <div className={styles.priceBox}>
            <div
              className={styles.originPrice}
            >{`${item.originPrice.toLocaleString('ko-KR')}원`}</div>
            <div>
              <span className={styles.percent}>
                {`${100 - Math.floor((item.price / item.originPrice) * 100)}%`}
              </span>
              <span className={styles.price}>{`${item.price.toLocaleString(
                'ko-KR',
              )}원`}</span>
            </div>
          </div>
        </div>
      </div>
      <span onClick={() => deleteItemInCart(item)}>
        <IoMdClose size={20} />
      </span>
    </div>
  );
}

export default CartItem;
