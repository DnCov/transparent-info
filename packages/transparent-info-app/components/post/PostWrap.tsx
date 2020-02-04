import { FunctionComponent } from 'react';

type Category = 'posts';

export interface WrapExtra {
  fileName: string;
  title: string;
  category: Category;
  href?: string;
}

type PostProps = WrapExtra;

export type WithExtra = [FunctionComponent<PostProps>, WrapExtra];

export default function withExtra(
  WrapComponent: FunctionComponent<PostProps>,
  extra: WrapExtra
): WithExtra {
  const href = `/${extra.category}/${extra.fileName.split('.')[0]}`;
  return [
    (props: any) => <WrapComponent {...extra} {...props} />,
    {
      ...extra,
      href,
    },
  ];
}
