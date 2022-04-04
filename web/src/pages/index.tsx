import { getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

const Home = () => {
  return null;
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      }
    }
  }
  
  return {
    redirect: {
      destination: '/app',
      permanent: false,
    }
  }
}