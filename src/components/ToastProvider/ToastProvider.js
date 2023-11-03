import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variantOption, setVariantOption] = React.useState('notice');
  const [hideToast, isToastHidden] = React.useState(true);

  const [toastStack, setToastStack] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    isToastHidden(false);
    setToastStack((prev) => [...prev, {id: crypto.randomUUID(), variant: variantOption, message }]);

    setMessage('');
    setVariantOption('notice');
  };

  const handleDismiss = (id) => {
    const nextToasts = toastStack.filter((toast) => toast.id !== id);
    setToastStack(nextToasts);
  }

  return (
  <ToastContext.Provider value={{
      message,
      setMessage,
      hideToast,
      toastStack,
      setToastStack,
      variantOption,
      setVariantOption,
      handleSubmit,
      handleDismiss
    }}>
    {children}
  </ToastContext.Provider>
  );
}

export default ToastProvider;
