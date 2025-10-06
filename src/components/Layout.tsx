// import volcanic from "../assets/volcanic-baths.jpg";
import Navbar from "./Navbar";
import DesktopIcon from "./DesktopIcon";
import WindowsSkeleton from "./WindowsSkeleton";
import Projects from "../pages/Projects";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import Home from "../pages/Home";
import Demo from "../pages/Demo";
import Resume from "../pages/Resume";
import ClickMe from "./ClickMe";
// import Footer from "./Footer";
import NotFound from "../pages/NotFound";
import portBg  from "../assets/bg-2.png";


export default function Layout() {
  const { pathname } = useLocation();
  let Page: ReactNode;
  switch (pathname) {
    case '/': Page = <Projects/>; break;
    case '/home': Page = <Home />; break;
    case '/projects': Page = <Projects />; break;
    case '/resume': Page = <Resume />; break;
    case '/about': Page = <Demo />; break;
    case '/got-you': Page = <ClickMe />; break;
    default: Page = <NotFound />;
  }

  return (
    <div
      className="relative min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${portBg})` }}
    >
      <nav>
        <Navbar />
      </nav>

      <div className="desktop__layout flex flex-col md:flex-row items-center md:items-start md:gap-36 justify-center flex-wrap w-full max-w-full overflow-x-hidden">
        <section>
          <DesktopIcon />
        </section>
        <WindowsSkeleton>{Page}</WindowsSkeleton>
      </div>

      {/* <footer className="flex items-center justify-center text-center pt-12 pb-10 md:pt-48 md:pb-20">
        <Footer />
      </footer> */}
    </div>
  );
}

