import React from 'react';

import styles from './styles.module.scss';

import useModal from '@/lib/hooks/useModal';

import { ItemProps } from '@/types';

function ShopItem({ item }: ItemProps) {
  const { handleOpenModal } = useModal();

  return (
    <div
      key={item.id}
      className={styles.itemBox}
      onClick={() => handleOpenModal(item)}
    >
      <img width={168} height={168} src={item.imageUrl} />
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
      <div className={styles.desc}>{item.desc}</div>
      <div className={styles.originPrice}>{`${item.originPrice.toLocaleString(
        'ko-KR',
      )}원`}</div>
      <div>
        <span className={styles.percent}>
          {`${100 - Math.floor((item.price / item.originPrice) * 100)}%`}
        </span>
        <span className={styles.price}>{`${item.price.toLocaleString(
          'ko-KR',
        )}원`}</span>
      </div>
    </div>
  );
}

export default ShopItem;
