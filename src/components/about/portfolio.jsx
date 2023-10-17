import { Link } from "react-router-dom";
import { BannerArrowIcon } from "../../assets/svg";

const Portfolio = () => {
  return (
    <div className="pt-[30px]" id="work">
      <h2 className="relative">
        <span
          className="section-title text-[18px] font-[400]"
          style={{ color: "#8643DC" }}
        >
          Portfolio
        </span>
        <span className="section-title-divider"></span>
      </h2>

      <div className="mt-[20px]">
        <div className="flex justify-between">
          <h2 className="font-[700] text-[36px] max-w-[246px] leading-[47px]">
            All Creative Projects
          </h2>
          <div>
            <Link
              to="/"
              className="flex items-center gap-[15px] text-[24px] text-decoration"
            >
              Explore More <BannerArrowIcon fill="#8643DC" />
            </Link>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-5">
          {["/images/portfolio_img1.png", "/images/portfolio_img2.png"].map(
            (img, index) => (
              <div key={index}>
                <picture>
                  <source srcSet={img} media="(width: 100%)" />
                  <img
                    src={img || "/loading.gif"}
                    alt={`Portfolio${index + 1}`}
                    loading="lazy"
                  />
                </picture>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
