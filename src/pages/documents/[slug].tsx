import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

import matter from 'gray-matter';
import { NextPage } from 'next';
import { MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { Document } from '@/components';
import { DOCUMENT_EXT } from '@/constants';
import { BaseLayout } from '@/layouts';

type DocumentPageProps = {
  data: { title: string };
  mdx: MDXRemoteProps;
};

const DocumentPage: NextPage<DocumentPageProps> = ({
  data,
  mdx
}): JSX.Element => (
  <BaseLayout title={data.title}>
    <main className="container">
      <div className="row">
        <div className="col-12">
          <Document {...mdx} />
        </div>
      </div>
    </main>
  </BaseLayout>
);

export default DocumentPage;

const DOCUMENTS_ROOT = resolve(process.cwd(), 'content', 'documents');

export async function getStaticPaths() {
  const paths = readdirSync(DOCUMENTS_ROOT, { encoding: 'utf-8' })
    .filter(path => path.endsWith(DOCUMENT_EXT))
    .map(path => path.substring(0, path.length - DOCUMENT_EXT.length))
    .map(path => ({ params: { slug: path } }));

  return { fallback: false, paths };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const filePath = join(DOCUMENTS_ROOT, context.params.slug + DOCUMENT_EXT);
  const fileContent = readFileSync(filePath, { encoding: 'utf-8' });
  const { data, content } = matter(fileContent);
  const mdx = await serialize(content);

  return { props: { data, mdx } };
}
