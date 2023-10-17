import { BannerImages } from '../../constants';
import Button from '../ui/Button';

const UserImage = () => (
  <img className="as" src="/images/user-image.png" alt="" />
);

const Banner = () => {
  return (
    <div className="flex items-center justify-between gap-[15px]" id="about">
      <div className="left">
        <h2 className="text-[20px] font-[400] text-gray-500">
          Hello,
          <br />
          <span className="text-[60px] font-[700]" style={{ color: "#25202F" }}>
            Adam Zakob
          </span>
        </h2>
        <p className="text-[20px] font-[400] mb-[10px]">
          a freelance UX Designer
        </p>
        <br />
        <Button text="Let’s Talk" />
      </div>
      <div className="bacground_aboutus_block flex items-end justify-center">
        <UserImage />
      </div>
      <BannerImages />
    </div>
  );
}

export default Banner;