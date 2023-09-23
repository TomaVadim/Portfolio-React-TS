import { FC } from 'react';

import 'material-symbols';

import './Stars.css';

type StarsProps = {
  countFill?: number;
  countOutlined?: number;
}

export const Stars: FC<StarsProps> = ({ countFill, countOutlined }) => {
  return (
    <div className='stars-container'>
      {Array.from({ length: countFill as number }).map((_star, index) => (
        <span
          style={{ fontVariationSettings: "'FILL' 1" }}
          key={index}
          className='material-symbols-outlined yellow'
        >
          star
        </span>
      ))}
      {Array.from({ length: countOutlined as number }).map((_star, index) => (
        <span
          style={{ fontVariationSettings: "'FILL' 0" }}
          key={index}
          className='material-symbols-outlined yellow'
        >
          star
        </span>
      ))}
    </div>
  );
};
