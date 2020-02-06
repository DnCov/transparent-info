import { useEffect, useState } from 'react';
import { ipfsGateways, isExternalUrl } from '../src/config';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
interface Props {
  src?: string;
  [key: string]: any;
}

enum ExtType {
  img,
  vedio,
  audio,
  unknown,
}

type Checker = [ExtType, RegExp];

const checkers: Checker[] = [
  [ExtType.img, /\.(jpe?g|png|gif|webp)/],
  [ExtType.audio, /\.(mp3|ogg)/],
  [ExtType.vedio, /\.(mp4)/],
];

function checkType(src?: string): ExtType {
  if (!src) {
    return ExtType.unknown;
  }
  for (let ck of checkers) {
    const [type, regex] = ck;
    if (regex.test(src)) {
      return type;
    }
  }

  return ExtType.unknown;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      maxWidth: '60vw',
    },
    video: {
      maxWidth: '70vw',
    },
  })
);

function Video(props: Props) {
  const classes = useStyles();
  const { alt, src } = props;
  return (
    <video className={classes.video} {...props} width="320" height="240" controls>
      <source src={src} type="video/mp4" />
      {alt}
    </video>
  );
}

function Audio(props: Props) {
  const { alt, src } = props;

  return (
    <audio controls>
      {/* <source src="horse.ogg" type="audio/ogg" /> */}
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element. {alt}
    </audio>
  );
}

export default (props: Props) => {
  const [baseUrl, setBaseUrl] = useState('');
  const { src } = props;
  const classes = useStyles();

  useEffect(() => {
    if (!isExternalUrl(src)) {
      if (!/ip[fn]s/.test(window.location.href)) {
        // tmp chose first
        setBaseUrl(ipfsGateways[0]);
      }
    }
  }, []);

  const type = checkType(src);
  switch (type) {
    case ExtType.img:
      return <img className={classes.img} {...props} src={`${baseUrl}${src}`} />;
    case ExtType.vedio:
      return <Video {...props} src={`${baseUrl}${src}`} />;
    case ExtType.audio:
      return <Audio {...props} src={`${baseUrl}${src}`} />;
  }
  return <span>unknown media src: {src} please check</span>;
};
