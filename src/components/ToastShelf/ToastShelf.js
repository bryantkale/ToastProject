import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';

function ToastShelf() {
  const { toastStack, setToastStack } = React.useContext(ToastContext);

  useEscapeKey(() => {
    setToastStack([]);
  });

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toastStack.map(({id, variant, message}) => (
        <li key={`${variant}-${id}`} className={styles.toastWrapper}>
          <Toast id={id} toastMessage={message} variantOption={variant} />
        </li>
      ))
      }
    </ol>
  );
}

export default ToastShelf;
