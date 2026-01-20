import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { FC } from 'react';

import styles from './Document.module.scss';

type DocumentProps = MDXRemoteProps;

export const Document: FC<DocumentProps> = (props): JSX.Element => (
  <article className={styles.Document}>
    <MDXRemote {...props} />
  </article>
);
