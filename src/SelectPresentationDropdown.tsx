import {
  useRef,
  useImperativeHandle,
  forwardRef,
  useLayoutEffect,
} from 'react';

import Card from './Card';
import Text from './Text';

export type SelectPresentationDropdownProps = {
  container: HTMLElement;
  options: any[];
  onClose: () => void;
  onChange: (value: any, event?: React.MouseEvent) => void;
  value: any;
  autoComplete?: boolean;
  ItemComponent?: (props: {
    onClick: (value: any) => void;
    onMouseDown: (event: React.MouseEvent) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
    item: { text: string; value: any };
    index: number;
    onClose: () => void;
    selectedIndex: number | null;
  }) => any;
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  noOptionText?: string;
};

const SelectPresentationDropdown = forwardRef(function SP(
  { container, ...props }: SelectPresentationDropdownProps,
  ref,
) {
  const ulEl = useRef<any>(null);
  const cardEl = useRef<any>(null);

  useImperativeHandle(ref, () => {
    return {
      focusList: () => {
        ulEl.current.firstChild.focus();
      },
      hide: () => {
        cardEl.current?.classList.add('animate-dropdown-reverse');
      },
    };
  });

  useLayoutEffect(() => {
    if (ulEl && ulEl.current && !props.value && !props.autoComplete) {
      ulEl.current.firstChild.focus();
      props.setSelectedIndex(0);
    }
    if (ulEl && ulEl.current && props.value && !props.autoComplete) {
      const getIndex = props.options.findIndex(
        (item) => item.value === props.value,
      );

      if (getIndex !== props.selectedIndex) {
        props.setSelectedIndex(getIndex);
      }

      ulEl.current.children[getIndex].focus();
    }
  }, [ulEl]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (props.autoComplete) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleKeyDown = (
    item: any,
    index: number,
    event: React.KeyboardEvent,
  ) => {
    if (event.key === 'ArrowDown') {
      const t: any = event.currentTarget.nextElementSibling;
      if (t) {
        t.focus();
        props.setSelectedIndex(index + 1);
      }
    }
    if (event.key === 'ArrowUp') {
      const t: any = event.currentTarget.previousElementSibling;
      if (t) {
        t.focus();
        props.setSelectedIndex(index - 1);
      }
    }
    if (event.key === 'Enter') {
      props.onChange(item.value);
    }
  };

  const rect = container.getBoundingClientRect();

  const style = {
    top: `${rect.top + rect.height + window.scrollY}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
  };

  const itemCls = `m3-select-item transition-all duration-200 outline-none [&.current]:bg-on-surface/20 px-3 py-1 cursor-pointer hover:!bg-on-surface/10`;
  return (
    <Card
      style={style}
      ref={cardEl}
      className="m3-select-card absolute animate-dropdown opacity-0 px-0 rounded-lg origin-top z-[90] !p-0"
    >
      <ul className="max-h-32 overflow-y-scroll" ref={ulEl}>
        {props.options.map((item, index) => {
          if (props.ItemComponent) {
            return (
              <props.ItemComponent
                key={index}
                item={item}
                index={index}
                onClick={(v: any, event?: React.MouseEvent) =>
                  props.onChange(v, event)
                }
                onClose={props.onClose}
                onMouseDown={handleMouseDown}
                onKeyDown={(event) => handleKeyDown(item, index, event)}
                selectedIndex={props.selectedIndex}
              />
            );
          }
          return (
            <li
              className={`${itemCls} ${
                index === props.selectedIndex ? ' current' : ''
              }`}
              key={index}
              tabIndex={index}
              onMouseDown={handleMouseDown}
              onClick={(event) => props.onChange(item.value, event)}
              onKeyDown={(event) => handleKeyDown(item, index, event)}
            >
              <Text>{item.text}</Text>
            </li>
          );
        })}
        {!Boolean(props.options.length) && (
          <li className={itemCls}>
            <Text className="m3-select-no-option-text text-on-surface-variant">
              {props.noOptionText || 'No Option'}
            </Text>
          </li>
        )}
      </ul>
    </Card>
  );
});

export default SelectPresentationDropdown;
