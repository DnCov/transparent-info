import { FunctionComponent } from 'react';
import { projectUrl } from '../src/consts';
import Link from '../src/Link';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import { Edit as EditIcon } from '@material-ui/icons';
interface EditMeProps {
  path: string;
  title?: string;
  btn?: boolean;
  newtab?: boolean;
}

const basePath = 'packages/transparent-info-app';

const fullBaseUrl = `${projectUrl}/${basePath}`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    editMe: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  })
);

export function getEditUrl(path: string) {
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
  return `${projectUrl}/edit/master${realPath}`;
}

export const EditMe: FunctionComponent<EditMeProps> = ({
  path,
  title = '编辑此页',
  btn = false,
  newtab = true,
}) => {
  const classes = useStyles();
  const router = useRouter();

  const full = getEditUrl(path);
  const target = newtab ? '_blank' : undefined;

  if (btn) {
    return (
      <Button variant="contained" color="secondary" href={full} target={target}>
        {title}
        {<EditIcon />}
      </Button>
    );
  } else {
    return (
      <Link className={classes.editMe} href={full} target={target}>
        {title}
      </Link>
    );
  }
};
