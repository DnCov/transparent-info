import Layout from '../components/Layout';
import TimeLine from '../components/TimeLine';
import { Container } from '@material-ui/core';

export default () => {
  return (
    <Layout title="新型冠状病毒突发事件发展路线">
      <Container>
        <TimeLine />
      </Container>
    </Layout>
  );
};
