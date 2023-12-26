import { useEffect, useState } from 'react';

import Text from './Text';

const SelectValueInput = (props: {
  value: any;
  autoComplete?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
  showClearButton?: boolean;
  onKeyDown: (event: React.KeyboardEvent) => void;
}) => {
  const [v, setV] = useState(props.value);

  useEffect(() => {
    setV(props.value);
  }, [props.value]);

  if (!props.autoComplete) {
    return (
      <Text component="span" className="w-full">
        {props.value}
      </Text>
    );
  }
  if (props.autoComplete) {
    return (
      <input
        className="bg-transparent outline-none border-0 w-full h-full"
        onChange={(event) => {
          setV(event.target.value);
          props.onChange(event.target.value);
        }}
        onKeyDown={props.onKeyDown}
        onBlur={props.onBlur}
        value={v || ''}
      />
    );
  }
  return null;
};

export default SelectValueInput;
