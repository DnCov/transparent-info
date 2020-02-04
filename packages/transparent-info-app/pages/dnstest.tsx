import { useEffect, useState, ChangeEvent } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { query, DnsType, queryCid } from '../src/dns';
export default () => {
  useEffect(() => {});

  const [value, setValue] = useState('');

  const [rst, setRst] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleQuery = async () => {
    try {
      const rst = await queryCid('latest.dncov.fox.mn');
      // const rst = await query('_txt.dncov.fox.mn', DnsType.TXT);
      // const rst = await query('txt.fox.mn', DnsType.TXT);
      setRst(JSON.stringify(rst));
    } catch (e) {
      setRst(JSON.stringify(e));
    }
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
