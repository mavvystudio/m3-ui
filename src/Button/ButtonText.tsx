import Text from '@src/Text';
import { Size } from '@src/types';

type ButtonTextProps = {
  size?: Size;
  children?: React.ReactNode;
  textAttrs?: any;
  className?: string;
  iconButton?: boolean;
};

const ButtonText = (props: ButtonTextProps) => {
  if (props.iconButton) {
    return null;
  }
  const textCls = `transition-all relative z-1 ${props.className}`;

  return (
    <Text
      attrs={props.textAttrs}
      variant="title"
      size={props.size}
      className={textCls}
      component="span"
    >
      {props.children}
    </Text>
  );
};

export default ButtonText;
