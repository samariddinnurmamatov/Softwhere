import TestMonialsList from "./TestMonialsList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestMonialsImages, dataTestmonials } from "../../constants";


const TestMonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Add this line to hide next and previous buttons
    prevArrow: null, // Remove the previous arrow
    nextArrow: null, // Remove the next arrow
  };
  return (
    <div className="py-[30px] pb-[74px]" id="work">
      <h2 className="relative">
        <span
          className="section-title text-[18px] font-[400]"
          style={{ color: "#8643DC" }}
        >
          Testimonials
        </span>
        <span className="section-title-divider"></span>
      </h2>

      <div className="mt-[20px] relative">
        <div className="flex justify-between">
          <h2 className="font-[700] text-[36px] max-w-[217px] leading-[47px]">
            What People Says
          </h2>
        </div>
        <TestMonialsImages />
        <div className="mt-5 gap-5">
          <Slider {...sliderSettings}>
            {dataTestmonials.map((item) => (
              <TestMonialsList key={item.id} data={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestMonials;
