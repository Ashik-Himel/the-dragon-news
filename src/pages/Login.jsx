import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <main>
      <Helmet>
        <title>Login - The Dragon News</title>
      </Helmet>
      <section>
        <div className="container">
          <h2>This is login page.</h2>
        </div>
      </section>
    </main>
  );
};

export default Login;