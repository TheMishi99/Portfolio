import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import AboutMe from "./Sections/AboutMe";
import ContactMe from "./Sections/ContactMe";
import MyProjects from "./Sections/MyProjects";

function App() {
  return (
    <div
      id="app"
      className="w-full flex flex-col justify-center items-center p-2 gap-2 bg-[url('/galaxy-background-5.png')] bg-cover"
    >
      <Header />
      <div
        id="main"
        className="w-full flex flex-col justify-center items-center p-2 gap-2"
      >
        <AboutMe />
        <MyProjects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
