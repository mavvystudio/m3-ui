import { DIALOG_ELEMENT_ID } from './constants';

export const createEl = ({
  presentationClassName,
}: {
  presentationClassName?: string;
}) => {
  document.body.classList.add('overflow-hidden');

  const target = document.getElementById(DIALOG_ELEMENT_ID);

  if (target) {
    return target;
  }

  const div = document.createElement('div');

  div.setAttribute('id', DIALOG_ELEMENT_ID);
  div.setAttribute('class', `fixed inset-0 z-40 ${presentationClassName}`);

  document.body.append(div);

  return div;
};
