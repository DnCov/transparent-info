import { useEffect, useState, ChangeEvent } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { query, DnsType } from '../src/dns';
export default () => {
  useEffect(() => {});

  const [value, setValue] = useState('');

  const [rst, setRst] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleQuery = async () => {
    const rst = await query('_dnslink.dncov.fox.mn', DnsType.TXT);
    // const rst = await query('_txt.dncov.fox.mn', DnsType.TXT);
    // const rst = await query('txt.fox.mn', DnsType.TXT);
    setRst(JSON.stringify(rst));
  };

  return (
    <>
      <TextField onChange={handleChange} />

      <TextField value={value} disabled />

      <Typography>{rst}</Typography>
      <Button onClick={handleQuery}>query</Button>
    </>
  );
};
