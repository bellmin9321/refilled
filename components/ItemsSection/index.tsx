import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useQuery } from 'react-query';
import { getItems } from '@/lib/api';
import { ItemType } from '@/types';

function ItemsSection() {
  const { data } = useQuery('items', getItems);

  return (
    <div className={styles.itemSection}>
      <div className={styles.title}>사이토카인.</div>
      <div className={styles.subTitle}>완벽한 탈모케어를 위한 선택</div>
      {data &&
        data.map((item: ItemType) => {
          return (
            <div key={item.id} className={styles.itemBox}>
              <img width={100} height={100} src={item.imageUrl} />
              <div>{item.name}</div>
              <div>{item.desc}</div>
              <div>{item.originPrice}</div>
              <div>{item.price}</div>
            </div>
          );
        })}
    </div>
  );
}

export default ItemsSection;
