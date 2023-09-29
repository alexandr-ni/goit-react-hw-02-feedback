import { Layout, Title } from './Sextion.styled';

export const Section = ({ title, children }) => {
  return (
    <Layout>
      <Title>{title}</Title>
      {children}
    </Layout>
  );
};
