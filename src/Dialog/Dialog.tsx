import { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { DialogBase, DialogBaseProps } from '../DialogBase';
import { createEl } from './helpers';
import { DIALOG_ELEMENT_ID } from './constants';

export type DialogProps = DialogBaseProps & {
  open: boolean;
};

export const Dialog = ({
  titleClassName = '',
  closeButtonClassName = '',
  cardClassName = '',
  position = 'center',
  open,
  title,
  fullScreen,
  disableBackdropClose,
  children,
  onClose,
}: DialogProps) => {
  useEffect(() => {
    if (open === false) {
      const target = document.getElementById(DIALOG_ELEMENT_ID);
      document.body.classList.remove('overflow-hidden');
      if (target) {
        document.body.removeChild(target);
      }
    }
  }, [open]);

  const el = useMemo(() => {
    if (open) {
      return createEl();
    }
    return null;
  }, [open]);

  if (!open || !el) {
    return null;
  }

  const handleClose = () => {
    document.body.classList.remove('overflow-hidden');
    document.body.removeChild(el);

    onClose();
  };

  return (
    <>
      {createPortal(
        <DialogBase
          title={title}
          titleClassName={titleClassName}
          fullScreen={fullScreen}
          position={position}
          onClose={handleClose}
          disableBackdropClose={disableBackdropClose}
          closeButtonClassName={closeButtonClassName}
          cardClassName={cardClassName}
        >
          {children}
        </DialogBase>,
        el,
      )}
    </>
  );
};

export default Dialog;
