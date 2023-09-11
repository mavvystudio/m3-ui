import Text from './Text';

export type TooltipProps = {
  text: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  textClassName?: string;
  yPosition?: 'top' | 'bottom' | 'center';
  xPosition?: 'left' | 'right' | 'center';
};

const createRootCls = ({ className = '' }: TooltipProps) => {
  const cls = 'm3-tooltip group/tooltip relative flex items-start self-start';
  return `${cls} ${className}`;
};
const createContentCls = ({
  contentClassName = '',
  ...props
}: TooltipProps) => {
  const cls = `tooltip-content absolute hidden group-hover/tooltip:block rounded px-[8px]`;
  const c = 'bg-inverse-surface';
  const p = props.xPosition === 'left' ? 'translate-x-[-100%]' : '';

  return `${cls} ${contentClassName} ${c} ${p}`;
};
const createPosCls = (props: TooltipProps) => {
  const posY = {
    top: 'translate-y-[-28px]',
    bottom: 'bottom-0 translate-y-[4px]',
    center: 'top-0 bottom-0 items-center',
  };
  const posX = {
    left: 'left-0 translate-x-[-4px]',
    right: 'right-0 translate-x-[4px]',
    center: 'left-0 right-0 justify-center',
  };
  const posYCls = posY[props.yPosition || 'top'];
  const posXCls = posX[props.xPosition || 'center'];

  return `absolute z-999 flex ${posYCls} ${posXCls}`;
};

export const Tooltip = (props: TooltipProps) => {
  const cls = createRootCls(props);
  const contentCls = createContentCls(props);
  const posCls = createPosCls(props);

  return (
    <div className={cls}>
      <div className={posCls}>
        <div className={contentCls}>
          <Text className={props.textClassName} color="on-inverse-surface">
            {props.text}
          </Text>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Tooltip;
