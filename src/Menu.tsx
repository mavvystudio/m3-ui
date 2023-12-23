import { useMemo, useRef, useState } from 'react';
import Card from './Card';
import Divider from './Divider';
import Icon from './Icon';
import Presentation from './Presentation';
import Text from './Text';
import { tick } from './utils';

export type MenuItemProps = {
  text?: string;
  value?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  trailingText?: string;
  isDivider?: boolean;
  disabled?: boolean;
  active?: boolean;
};

export type MenuProps = {
  items: MenuItemProps[];
  menuListClassName?: string;
  itemClassName?: string;
  children?: React.ReactNode;
  onChange: (value: string, index: number) => void;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  disableRemoveOverflow?: boolean;
};

export const Menu = ({
  menuListClassName = '',
  itemClassName = '',
  items,
  ...props
}: MenuProps) => {
  const cardEl = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const btnContainerEl = useRef<HTMLDivElement>(null);
  const menuList = `m3-menu-list animate-dropdown opacity-0 origin-top fixed flex flex-col items-start z-50 !rounded-lg !px-0 ${menuListClassName}`;
  const itemCls = `m3-menu-item w-full px-3 py-2 gap-x-2 flex items-center cursor-pointer hover:bg-on-surface/10 ${itemClassName} [&.active]:bg-on-surface/20 text-on-surface`;

  const style = useMemo(() => {
    if (!isOpen || !btnContainerEl.current) {
      return {};
    }
    const rect = btnContainerEl.current.getBoundingClientRect();
    return {
      top: `${rect.height + rect.y}px`,
      left: `${rect.left}px`,
      minWidth: `${rect.width}px`,
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = async () => {
    cardEl.current?.classList.remove('opacity-0');
    cardEl.current?.classList.remove('animate-dropdown');
    cardEl.current?.classList.add('animate-dropdown-reverse');

    await tick();

    setIsOpen(false);
  };

  const handleItemClick = async (item: MenuItemProps, index: number) => {
    await handleClose();

    props.onChange(item.value!, index);
  };

  return (
    <div className="group/menu flex justify-start relative">
      <div ref={btnContainerEl} onClick={handleClick}>
        {props.children}
      </div>

      <Presentation
        onClose={handleClose}
        disableRemoveOverflow={props.disableRemoveOverflow}
        backdropClassName="!bg-transparent"
        open={isOpen}
        className="!fixed"
      >
        <Card ref={cardEl} style={style} className={menuList}>
          {items.map((item, index) => {
            if (item.isDivider) {
              return <Divider key={index} />;
            }
            const hasLeadingIcon = Boolean(item.leadingIcon);
            const hasTrailingIcon = Boolean(item.trailingIcon);
            const active = item.active ? ' active' : '';
            const disabled = item.disabled ? ' disabled' : '';

            return (
              <div
                onClick={() => handleItemClick(item, index)}
                className={`${itemCls} ${active} ${disabled}`}
                key={index}
              >
                {hasLeadingIcon && <Icon>{item.leadingIcon}</Icon>}
                <Text>{item.text}</Text>
                {hasTrailingIcon && <Icon>{item.trailingIcon}</Icon>}
              </div>
            );
          })}
        </Card>
      </Presentation>
    </div>
  );
};

export default Menu;
