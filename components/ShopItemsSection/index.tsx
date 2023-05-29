import React from 'react';
import { useQuery } from 'react-query';

import styles from './styles.module.scss';

import { getItems } from '@/lib/api';
import useModal from '@/lib/hooks/useModal';

import ModalLayout from '../ModalLayout';
import OptionSelector from '../OptionSelector';
import ShopItem from '../ShopItem';

import { ItemType } from '@/types';

function ShopItemsSection() {
  const { isOpen } = useModal();
  const { data } = useQuery('items', getItems);

  return (
    <>
      <div className={styles.shopItemsBox}>
        <div className={styles.titleBox}>
          <div className={styles.title}>사이토카인.</div>
          <div className={styles.subTitle}>완벽한 탈모케어를 위한 선택</div>
        </div>
        <div className={styles.itemsGridBox}>
          {data &&
            data.map((item: ItemType) => (
              <ShopItem key={item.id} item={item} />
            ))}
        </div>
      </div>
      {isOpen && (
        <ModalLayout>
          <OptionSelector />
        </ModalLayout>
      )}
    </>
  );
}

export default ShopItemsSection;
