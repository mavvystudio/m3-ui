import { useRef } from 'react';
import Button from './Button';
import Presentation from './Presentation';

export type SideSheetProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  closeDelay?: number;
  className?: string;
};

export const SideSheet = (props: SideSheetProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    contentRef.current?.classList.add('animate-fade-out-right');

    return new Promise((resolve) => {
      setTimeout(() => {
        props.onClose();
        resolve(true);
      }, props.closeDelay || 300);
    });
  };

  return (
    <Presentation
      className="!fixed flex justify-end"
      open={props.open}
      onClose={handleClose}
    >
      <div
        ref={contentRef}
        className={`m3-sidesheet animate-fade-in-right h-full bg-surface-container z-[89] ${
          props.className || ''
        }`}
      >
        <div className="flex justify-end">
          <Button onClick={handleClose} icon="close" iconButton />
        </div>
        {props.children}
      </div>
    </Presentation>
  );
};

export default SideSheet;
