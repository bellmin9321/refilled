import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import useCart from '@/lib/hooks/useCart';
import useModal from '@/lib/hooks/useModal';

function OptionSelector() {
  const { selectedItem, modalType, option, handleCloseModal, selectOption } =
    useModal();
  const { addItemToCart } = useCart();

  return (
    <>
      {modalType === 'CART' ? (
        <div className={styles.confirmCartBox}>
          <div className={styles.imageBox}>
            <img src={selectedItem.imageUrl} width={150} height={150} />
            <div>{selectedItem.name}</div>
            <span className={styles.option}>{option}</span>
            <span>장바구니에 상품이 담겼습니다.</span>
          </div>
          <Link
            href="/cart"
            className={styles.footer}
            onClick={handleCloseModal}
          >
            바로가기
          </Link>
        </div>
      ) : (
        <div className={styles.optionSelectBox}>
          <div className={styles.title}>{selectedItem.name}</div>
          <select
            className={styles.select}
            name="tagOption"
            onChange={(e) => selectOption(e.target.value)}
            disabled={!selectedItem.productOptions.length}
          >
            <option value="">
              {`옵션 ${selectedItem.productOptions.length ? '선택' : '없음'}`}
            </option>
            {selectedItem.productOptions.map((option) => {
              return (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              );
            })}
          </select>
          <div
            className={styles.footer}
            onClick={() => addItemToCart(selectedItem)}
          >
            장바구니 담기
          </div>
        </div>
      )}
    </>
  );
}

export default OptionSelector;
