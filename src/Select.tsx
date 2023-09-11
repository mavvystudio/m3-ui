import SelectFieldComponent from './SelectFieldComponent';
import { SelectPresentationDropdownProps } from './SelectPresentationDropdown';
import TextField, { TextFieldProps } from './TextField';

export type SelectProps = TextFieldProps & {
  options: { text: any; value: any }[];
  autoComplete?: boolean;
  top?: boolean;
  ItemComponent?: SelectPresentationDropdownProps['ItemComponent'];
  disableRemoveOverflow?: boolean;
  noOptionText?: string;
};

export const Select = ({
  onChange,
  endAdornment,
  options,
  autoComplete,
  showClearButton,
  ItemComponent,
  top,
  disableRemoveOverflow,
  noOptionText,
  ...props
}: SelectProps) => (
  <TextField
    {...props}
    onChange={onChange}
    FieldComponent={SelectFieldComponent}
    options={{
      noOptionText,
      options,
      autoComplete,
      showClearButton,
      top,
      ItemComponent,
      disableRemoveOverflow,
    }}
  />
);

export default Select;
