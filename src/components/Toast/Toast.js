import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, toastMessage, variantOption }) {
  const IconComponent = ICONS_BY_VARIANT[variantOption];
  const { handleDismiss } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variantOption]}`}>
      <div className={styles.iconContainer}>
        {variantOption && <IconComponent size={24} />}
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {variantOption} -
        </VisuallyHidden>
        {toastMessage}
      </p>
      <button
        onClick={() => handleDismiss(id)}
        className={styles.closeButton}
        aria-label='Dismiss message'
        aria-live='off'
      >
        <X size={24} aria-hidden={true} focusable={false} />
      </button>
    </div>
  );
}

export default Toast;
