import Mainheader from "./components/mainheader";
import MainFooter from "./components/MainFooter";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const HeaderComponent = <Mainheader />;
  const FooterComponent = <MainFooter />;
  // Bunaqa yozish sababi keyinchalik MainHeader Mobile bo'lsa ternary operator bilan tekshirib yozib ketsa bo'ladi

  return (
    <div className="relative">
      {HeaderComponent}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {FooterComponent}
    </div>
  );
};

export default MainLayout;
