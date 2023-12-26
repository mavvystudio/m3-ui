import { useRef, useEffect, useState } from 'react';
import Button from './Button';
import Icon from './Icon';
import Presentation from './Presentation';
import SelectPresentationDropdown, {
  SelectPresentationDropdownProps,
} from './SelectPresentationDropdown';
import SelectValueInput from './SelectValueInput';
import { tick } from './utils';

export type FieldComponentProps = {
  propsData: {
    value: any;
    onChange: any;
    onBlur: any;
    onFocus: any;
  };
  options: {
    options: any[];
    autoComplete?: boolean;
    ItemComponent?: SelectPresentationDropdownProps['ItemComponent'];
    top?: boolean;
    disableRemoveOverflow?: boolean;
    noOptionText?: string;
  };
};

const SelectFieldComponent = (props: FieldComponentProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showEl, setShowEl] = useState<HTMLElement | null>(null);
  const [options, setOptions] = useState(props.options.options);
  const selectPresentationEl = useRef<{
    focusList: () => void;
    hide: () => void;
  }>(null);

  useEffect(() => {
    if (showEl && props.options.autoComplete && props.propsData.value) {
      const filtered = props.options.options.filter(
        (item) =>
          item.text.toLowerCase().indexOf(props.propsData.value.toLowerCase()) >
          -1,
      );
      setOptions(filtered);
    }
    if (showEl && props.options.autoComplete && !props.propsData.value) {
      setOptions(props.options.options);
    }
  }, [showEl, props.propsData.value]);

  const handleShow = (
    event: React.KeyboardEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    props.propsData.onFocus();

    setShowEl(event.currentTarget.parentElement!.parentElement!.parentElement!);
  };

  const handleClose = async () => {
    selectPresentationEl.current?.hide();

    await tick();

    props.propsData.onBlur();

    setShowEl(null);
  };

  const handleChange = (dataValue: any, _event?: React.MouseEvent) => {
    props.propsData.onChange({ target: { value: dataValue } });
    handleClose();
  };

  const handleInputChange = (data: string) => {
    const filtered = props.options.options.filter(
      (item) => item.text.toLowerCase().indexOf(data.toLowerCase()) > -1,
    );
    setOptions(filtered);
  };

  const handleBlur = () => handleClose();

  const handleInputKeyDown = (event: React.KeyboardEvent) => {
    if (!showEl) {
      handleShow(event);
    }
    const ek = event.key;
    if (ek !== 'ArrowUp' && ek !== 'ArrowDown' && ek !== 'Enter') {
      return undefined;
    }
    event.preventDefault();
    event.stopPropagation();

    if (event.key === 'ArrowUp' && !selectedIndex) {
      return undefined;
    }
    if (event.key === 'ArrowUp' && selectedIndex! > -1) {
      setSelectedIndex((i) => (i || 0) - 1);
      return undefined;
    }
    if (event.key === 'ArrowDown' && selectedIndex === null && options.length) {
      setSelectedIndex(0);
      return undefined;
    }
    if (event.key === 'ArrowDown' && selectedIndex! < options.length - 1) {
      setSelectedIndex((i) => (i || 0) + 1);
      return undefined;
    }
    if (event.key === 'Enter' && selectedIndex !== null) {
      handleChange(options[selectedIndex]?.value || '');
    }
    // selectPresentationEl.current?.focusList();
    return undefined;
  };

  const cv = createValue(props.propsData.value, props.options.options);

  const iconCls = Boolean(showEl) ? 'rotate-180' : '';
  const bdCls = props.options.autoComplete ? 'pointer-events-none' : '';
  const hasValue = Boolean(props.propsData.value);

  return (
    <div className="m3-select group/select cursor-pointer w-full h-full">
      <div
        className="flex items-center px-3 w-full h-full"
        onClick={handleShow}
      >
        <SelectValueInput
          autoComplete={props.options.autoComplete}
          onChange={handleInputChange}
          onBlur={handleBlur}
          value={cv}
          onKeyDown={handleInputKeyDown}
        />
        {hasValue && (
          <Button
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleChange(null);
            }}
            className="!p-0 mr-1"
            icon="clear"
            iconButton
          ></Button>
        )}

        <Icon className={iconCls}>arrow_drop_down</Icon>
      </div>

      <Presentation
        backdropClassName={`!bg-transparent ${bdCls}`}
        onClose={handleClose}
        open={Boolean(showEl)}
        disableRemoveOverflow={props.options.disableRemoveOverflow}
      >
        <SelectPresentationDropdown
          ref={selectPresentationEl}
          container={showEl!}
          onClose={handleClose}
          onChange={handleChange}
          options={options}
          ItemComponent={props.options.ItemComponent}
          value={props.propsData.value}
          autoComplete={props.options.autoComplete}
          selectedIndex={selectedIndex}
          setSelectedIndex={(v) => setSelectedIndex(v)}
          noOptionText={props.options.noOptionText}
        />
      </Presentation>
    </div>
  );
};

export default SelectFieldComponent;

function createValue(needle: string, haystack: { value: any; text: any }[]) {
  const data = haystack.find((item) => item.value === needle);
  return data?.text;
}
