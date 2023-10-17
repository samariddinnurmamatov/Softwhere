import TestMonials from "../components/about/Testmonials";
import Banner from "../components/about/banner";
import Blog from "../components/about/blog";
import Clients from "../components/about/clients";
import Contact from "../components/about/contact";
import Portfolio from "../components/about/portfolio";
import Servcies from "../components/about/servcies";
import DefaultContainer from "../container/default-container";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Banner />
      </div>
      <DefaultContainer container>
        <Servcies />
      </DefaultContainer>
      <div className="bgrang">
        {/* bg-gradient-to-t from-[rgba(188,133,255,0.14)]
        via-[rgba(255,177,222,0.19)] to-transparent */}
        <DefaultContainer container>
          <Portfolio />
        </DefaultContainer>
      </div>
      <DefaultContainer container>
        <Clients />
      </DefaultContainer>
      <div className="mt-[100px] bgrang1">
        <DefaultContainer container>
          <TestMonials />
        </DefaultContainer>
      </div>

      <DefaultContainer container>
        <Blog />
      </DefaultContainer>
      <div className="mt-[100px] bgrang2">
        <DefaultContainer container>
          <Contact />
        </DefaultContainer>
      </div>
    </div>
  );
}

export default Home;