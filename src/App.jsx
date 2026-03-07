import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import { ToastContainer } from 'react-toastify';


const App = () => {
  return <main>
  <ToastContainer position="top-right" />
  <ThemeToggle />
  <SearchForm />
  <Gallery />
  </main>;
};
export default App;
