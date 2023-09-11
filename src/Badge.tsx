import Text from './Text';

export type BadgeProps = {
  containerClasName?: string;
  className?: string;
  children?: React.ReactNode;
  value?: number;
  size?: 'small' | 'large';
  max?: number;
  show: boolean;
};

const createRootCls = ({ containerClasName = '' }: BadgeProps) => {
  const cls = 'm3-badge-container relative flex items-start self-start';
  return `${cls} ${containerClasName}`;
};

const createContentCls = ({ className = '', size = 'small' }: BadgeProps) => {
  const cls =
    'm3-badge z-50 bg-error absolute rounded-full right-0 top-[-4px] flex justify-center items-center';
  const sizes = {
    small: 'w-[6px] h-[6px]',
    large: 'min-w-[16px] h-[16px] px-1 translate-x-[50%]',
  };
  const s = sizes[size] || sizes.small;

  return `${cls} ${className} ${s}`;
};

export const Badge = (props: BadgeProps) => {
  const cls = createRootCls(props);
  const contentCls = createContentCls(props);
  const hasNum =
    props.value !== undefined && props.value !== null && props.size === 'large';

  return (
    <div className={cls}>
      {props.show && (
        <div className={contentCls}>
          {hasNum && (
            <Text color="on-error" size="small">
              {getNum(props.value!, props.max)}
            </Text>
          )}
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Badge;

function getNum(n: number, max?: number) {
  if (n > 999) {
    return '999+';
  }
  if (max !== undefined && max !== null && n > max && max !== 0) {
    return `${max}+`;
  }
  return n;
}
