/**
.linear-activity {
    overflow: hidden;
    width: 50%;
    height: 10px;
    background-color: #B3E5FC;
    margin: 20px auto;
}

.determinate {
    position: relative;
    max-width: 100%;
    height: 100%;
    -webkit-transition: width 500ms ease-out 1s;
       -moz-transition: width 500ms ease-out 1s;
         -o-transition: width 500ms ease-out 1s;
            transition: width 500ms ease-out 1s;
    background-color: #03A9F4;
}

.indeterminate {
    position: relative;
    width: 100%;
    height: 100%;
}

.indeterminate:before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: #03A9F4;
    animation: indeterminate_first 2s infinite ease-out;
}

.indeterminate:after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: #03A9F4;
    animation: indeterminate_second 2s infinite ease-in;
}

@keyframes indeterminate_first {
    0% {
        left: -100%;
        width: 10%;
    }
    50% {
        width: 100%;
    }
    70% {
        left: 100%;
        width: 0%;
    }
    100% {
        width: 0%;
    }
}

@keyframes indeterminate_second {
    0% {
        left: -200%;
        width: 10%;
    }
    30% {
        width: 100%;
    }
    50% {
        width: 100%;
        }
    100% {
        left: 100%;
        width: 10%;
    }
}
*/

import { bg } from './css-classes';
import { Color } from './types';

export type LinearProgressProps = {
  value?: number;
  indeterminate?: boolean;
  color?: Color;
};

export const LinearProgress = ({
  color = 'primary',
  indeterminate,
  value,
}: LinearProgressProps) => {
  const i = indeterminate ? 'indeterminate' : '';
  const containerCls = `m3-linear-progress h-[4px] overflow-hidden relative w-full ${i}`;
  const c = bg[color];
  const line = `absolute top-0 h-full ${c}`;
  const linearCls = `linear-1 animate-linear-1 ${line}`;
  const secondLinearCls = `linear-2 animate-linear-2 ${line}`;
  const determinate = `linear-determinate ${line}`;

  return (
    <div className={containerCls}>
      {!indeterminate && (
        <div style={{ width: `${value || 0}%` }} className={determinate}></div>
      )}
      {indeterminate && <div className={linearCls}></div>}
      {indeterminate && <div className={secondLinearCls}></div>}
      <div className={`linear-bg opacity-10 w-full ${line} ${c} `}></div>
    </div>
  );
};

export default LinearProgress;
