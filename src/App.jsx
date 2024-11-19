// import { Abount } from "./component/Abount/Abount";
// import AutoPlay from "./component/carrousel/Carrousel";
// import { Hero } from "./component/Hero/Hero";
import { Layout } from "./component/layout/Layout";
import { Navbar } from "./component/Navbar/Navbar.jsX";

import Routes from "./routes/Routes";
import Footer from './component/footer/footer';

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
        <Footer/>
      </Layout>
    </>
  );
}

export default App;
