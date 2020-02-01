import { Typography } from '@material-ui/core';
import Link from '../src/Link';
import { FunctionComponent } from 'react';
import { projectUrl } from '../src/consts';

interface VlinkProps {
  full: string;
  display?: string;
}

const Vlink: FunctionComponent<VlinkProps> = ({ full, display = full }) => {
  const href = `${projectUrl}/releases/tag/${full}`;
  return <Link href={href}>{full} </Link>;
};

const Slink: FunctionComponent<{ sha: string; display?: string }> = ({
  sha,
  display = sha.substring(0, 7),
}) => {
  const href = `${projectUrl}/commit/${sha}`;
  return <Link href={href}>{display} </Link>;
};

export const Version = () => {
  const version = process.env.VERSION;
  const fullVersion = `${version}.${process.env.BUILDNUMBER}`;
  const sha = process.env.SHA;

  return (
    <>
      {version && <Typography> {<Vlink full={fullVersion} />} </Typography>}
      {sha && (
        <Typography>
          <Slink sha={sha} />{' '}
        </Typography>
      )}
    </>
  );
};
