import bgSvg from './assets/bg-svg.svg';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-black text-white h-screen w-screen relative flex flex-col justify-between">
      <img src={bgSvg} alt="bgSvg" className="absolute w-full h-full" />
      <Navbar />
      <MainContent />
      <Footer />
    </main>
  );
};

export default App;
