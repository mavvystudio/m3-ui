import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export type PresentationProps = {
  children: React.ReactNode;
  backdropClassName?: string;
  backdropStyle?: any;
  className?: string;
  onClose: () => Promise<any>;
  disableRemoveOverflow?: boolean;
  open: boolean;
  closeDelay?: number;
  style?: any;
};

export const Presentation = ({
  backdropClassName = '',
  className = '',
  backdropStyle = {},
  style = {},
  ...props
}: PresentationProps): any => {
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (props.open === false) {
      if (
        !props.disableRemoveOverflow &&
        document.body.classList.contains('!overflow-hidden')
      ) {
        document.body.classList.remove('!overflow-hidden');
      }

      if (el && el.parentElement) {
        document.body.removeChild(el);
      }
      return undefined;
    }

    document.body.classList.add('!overflow-hidden');

    const l = document.createElement('div');

    setEl(l);

    document.body.append(l);
  }, [props.open]);

  const handleClose = async () => {
    await props.onClose();

    if (!props.disableRemoveOverflow) {
      document.body.classList.remove('!overflow-hidden');
    }

    if (el && el.parentElement) {
      document.body.removeChild(el);
    }
  };

  if (!el || !props.open) {
    return null;
  }

  return createPortal(
    <div
      style={style}
      className={`m3-presentation absolute inset-0 z-50 ${className}`}
    >
      <div
        onClick={handleClose}
        className={`m3-presentation-bd absolute inset-0 bg-scrim/30 ${backdropClassName}`}
        style={backdropStyle}
      ></div>
      {props.children}
    </div>,
    el,
  );
};

export default Presentation;
