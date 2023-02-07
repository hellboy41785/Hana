import Auth from "../../components/auth/Auth";
import Cookies from "js-cookie";
import Head from "next/head";


const Login = () => {
  const token = Cookies.get("token");

  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
      <Auth />
    </>
  );
};

export default Login;
