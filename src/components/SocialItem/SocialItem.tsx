import { FC } from 'react';

interface SocialItemProps {
  image: string;
  link: string;
}

export const SocialItem: FC<SocialItemProps> = ({ image, link }) => {
  return (
    <li>
      <a href={link}>
        <img src={image} alt={image} />
      </a>
    </li>
  );
};
