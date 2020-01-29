import { FunctionComponent } from 'react';
import { projectUrl } from '../src/consts';
import Link from '../src/Link';

interface EditMeProps {
  path: string;
  title?: string;
}

const basePath = 'packages/transparent-info-app';

const fullBaseUrl = `${projectUrl}/${basePath}`;
export const EditMe: FunctionComponent<EditMeProps> = ({ path, title = '编辑此页' }) => {
  let realPath;
  if (path.startsWith('packages')) {
    realPath = `/${path}`;
  } else if (path.startsWith('/packages')) {
    realPath = path;
  } else if (path.startsWith('/')) {
    realPath = `/${basePath}${path}`;
  } else {
    realPath = `/${basePath}/${path}`;
  }

  return <Link href={`${projectUrl}/edit/master${realPath}`}>{title}</Link>;
};
