import dynamic from 'next/dynamic';

const Net = dynamic(() => import('../components/net'), {
  ssr: false,
});

const About = () => <Net />;

export default About;
