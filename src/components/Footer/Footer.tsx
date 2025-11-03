import { FC } from 'react';

import { HOST, VERSION } from '@/constants';

type FooterProps = {
  host?: string;
  version?: string;
};

export const Footer: FC<FooterProps> = ({
  host = HOST,
  version = VERSION
}): JSX.Element => (
  <footer>
    <div>{host}</div>
    <div>v{version}</div>
  </footer>
);
