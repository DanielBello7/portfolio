


import Header from '../components/Header';
import Landing from '../components/Landing';
import Work from '../components/Work';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
  <main className="container-xl w-100 d-flex flex-column overflow-hidden">
  <Header />
  <br /><br />
  <Landing />
  <br /><br />
  <Work />
  <br /><br />
  <Resume />
  <br /><br />
  <Contact />
  <Footer />
  </main>
  );
}

export default Home;