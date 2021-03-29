import Layout from "../components/layout";
import "../styles/main.scss";
const cors = require("cors");

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
