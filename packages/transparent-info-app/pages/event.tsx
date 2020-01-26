import Layout from '../components/Layout';
import { TimeLineEvent } from '../components/TimeLine';
import { Container, Fab } from '@material-ui/core';
import React, { useState } from 'react';
import { SortBy } from '../src/consts';
import SortIcon from '@material-ui/icons/Sort';

export default () => {
  const [sortBy, setSortBy] = useState(SortBy.Desc);

  const changeSort = (e: React.MouseEvent) => {
    if (sortBy == SortBy.Asc) {
      setSortBy(SortBy.Desc);
    } else {
      setSortBy(SortBy.Asc);
    }
  };

  return (
    <Layout title="新型冠状病毒突发事件发展路线">
      <Container>
        <TimeLineEvent sortBy={sortBy} />
        <Fab onClick={changeSort}>
          <SortIcon color={sortBy === SortBy.Asc ? 'secondary' : 'primary'} />
        </Fab>
      </Container>
    </Layout>
  );
};
