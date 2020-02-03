import { Typography, Box, Tooltip, Divider } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';
import { FunctionComponent } from 'react';
import { projectUrl } from '../src/consts';

interface VlinkProps {
  full: string;
  display?: string;
}

const Vlink: FunctionComponent<VlinkProps> = ({ full, display = full }) => {
  const href = `${projectUrl}/releases/tag/${full}`;
  return (
    <Link href={href} target="_blank">
      {full}
    </Link>
  );
};

const Slink: FunctionComponent<{ sha: string; display?: string }> = ({
  sha,
  display = sha.substring(0, 7),
}) => {
  const href = `${projectUrl}/commit/${sha}`;
  return (
    <Link href={href} target="_blank">
      {display}{' '}
    </Link>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'left',
    },
    link: {
      paddingLeft: theme.spacing(1),
    },
    spliter: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  })
);

const Splitr = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.spliter} component="span">
      |
    </Typography>
  );
};

export const Version = () => {
  const version = process.env.VERSION;
  const buildNumber = '1' || process.env.BUILDNUMBER;
  const fullVersion = `${version}.${buildNumber}`;
  const sha = process.env.SHA;
  const showIpfsVersion = process.env.ON_IPFS === 'no';
  const ipfsCid = process.env.IPFS_CID;

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {version && (
        <>
          <Typography component="span">Version:</Typography>
          <Tooltip title={`version: ${version}  buildNumber: ${buildNumber}`}>
            <Typography component="span"> {<Vlink full={fullVersion} />} </Typography>
          </Tooltip>
        </>
      )}

      {sha && (
        <>
          <Divider />
          <Typography component="span">commit:</Typography>
          <Tooltip title={`commit: ${sha}`}>
            <Typography component="span">
              <Slink sha={sha} />
            </Typography>
          </Tooltip>
        </>
      )}
      {showIpfsVersion && (
        <>
          <Divider />
          <Typography component="span">{`ipfs          :`}</Typography>
          <Tooltip title={`published on ipfs:  ${ipfsCid}`}>
            <Typography component="span">
              <Link href={`https://ipfs.io/ipfs/${ipfsCid}`} target="_blank">
                {ipfsCid}
              </Link>
            </Typography>
          </Tooltip>
        </>
      )}
    </Box>
  );
};
