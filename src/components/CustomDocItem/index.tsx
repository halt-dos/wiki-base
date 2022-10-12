import React from 'react';
import ActualDocItem from '@theme/DocItem';
import styles from './styles.module.scss';

const CustomDocItem = (props) => {
  return (
    <div
      className={
        props.location.pathname === `/docs/intro/`
          ? `custom_doc_item_wrapper custom_doc_item_wrapper-x-wide`
          : `custom_doc_item_wrapper ${styles['custom_doc_item_wrapper']}`
      }
    >
      <ActualDocItem {...props} />
      <div className={styles['custom_doc_item_footer']}>

      </div>
    </div>
  );
};

export default CustomDocItem;
