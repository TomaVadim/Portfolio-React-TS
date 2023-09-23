import { FC } from 'react';

type SocialItemProps = {
  image: string;
  link: string;
};

export const SocialItem: FC<SocialItemProps> = ({ image, link }) => {
  return (
    <li>
      <a href={link} target='_blank'>
        <img src={image} alt={image} />
      </a>
    </li>
  );
};
