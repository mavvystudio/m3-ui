import { useMemo } from 'react';
import { createPortal } from 'react-dom';

import { DialogBase, DialogBaseProps } from './DialogBase';

export type DialogProps = DialogBaseProps & {
  open: boolean;
};

export const dialogElementId = 'm3-dialog-presentation';

const createEl = () => {
  document.body.classList.add('overflow-hidden');

  const target = document.getElementById(dialogElementId);

  if (target) {
    return target;
  }

  const div = document.createElement('div');

  div.setAttribute('id', dialogElementId);
  div.setAttribute('class', 'fixed inset-0 z-40');

  document.body.append(div);

  return div;
};

export const Dialog = ({
  titleClassName = '',
  closeButtonClassName = '',
  cardClassName = '',
  position = 'center',
  ...props
}: DialogProps) => {
  // useImperativeHandle(ref, () => {});

  const el = useMemo(() => {
    if (props.open) {
      return createEl();
    }
    return null;
  }, [props.open]);

  if (!props.open || !el) {
    return null;
  }

  const handleClose = () => {
    document.body.classList.remove('overflow-hidden');
    document.body.removeChild(el);

    props.onClose();
  };

  return (
    <>
      {createPortal(
        <DialogBase
          title={props.title}
          titleClassName={titleClassName}
          fullScreen={props.fullScreen}
          position={position}
          onClose={handleClose}
          disableBackdropClose={props.disableBackdropClose}
          closeButtonClassName={closeButtonClassName}
          cardClassName={cardClassName}
        >
          {props.children}
        </DialogBase>,
        el,
      )}
    </>
  );
};

export default Dialog;
