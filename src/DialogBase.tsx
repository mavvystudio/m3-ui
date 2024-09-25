import { Button } from './Button';
import Card from './Card';
import Text from './Text';

export type DialogBaseProps = {
  fullScreen?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  title?: string;
  disableBackdropClose?: boolean;
  closeButtonClassName?: string;
  titleClassName?: string;
  position?: 'top' | 'bottom' | 'center';
  cardClassName?: string;
};
const screen = {
  fullScreen: 'h-full w-full inset-0 !rounded-none',
  normal: '',
};
const defaultCardCls = 'm3-dialog-card relative z-10 flex flex-col p-6';

const createScreen = (cardCls: string, fullScreen?: boolean) => {
  const screenType = fullScreen ? 'fullScreen' : 'normal';
  const s = screen[screenType];
  return `${defaultCardCls} ${s} ${cardCls}`;
};

const pos = {
  top: 'items-start',
  center: 'items-center',
  bottom: 'items-end',
};
export const DialogBase = ({
  position = 'center',
  cardClassName = '',
  closeButtonClassName = '',
  titleClassName = '',
  ...props
}: DialogBaseProps) => {
  const p = pos[position];
  const s = createScreen(cardClassName, props.fullScreen);

  return (
    <div className="m3-dialog absolute inset-0 ">
      <div
        className="m3-dialog-presentation-bd absolute inset-0 bg-scrim/30"
        onClick={() => {
          if (props.disableBackdropClose) {
            return undefined;
          }
          props.onClose();
        }}
      ></div>
      <div
        className={`m3-dialog-container animate-fade-in-top w-full h-full flex justify-center ${p}`}
      >
        <Card className={s}>
          <div className="m3-dialog-header flex items-center">
            {props.fullScreen && (
              <Button
                className={`!px-0 mr-4 ${closeButtonClassName}`}
                onClick={props.onClose}
                iconClassName={props.fullScreen ? '!text-3xl' : undefined}
                icon="close"
                iconButton
              ></Button>
            )}
            <div>
              {props.title && (
                <Text
                  variant="headline"
                  size="small"
                  className={titleClassName}
                >
                  {props.title}
                </Text>
              )}
            </div>
          </div>
          <div className="m3-dialog-content animate-fade-in">
            {props.children}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DialogBase;
