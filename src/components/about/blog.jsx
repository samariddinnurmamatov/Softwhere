
const Blog = () => {
  return (
    <div className="pt-[50px]" id="blog">
      <div className="flex justify-between gap-[30px]">
        <div>
          <h2 className="relative">
            <span
              className="section-title text-[18px] font-[400]"
              style={{ color: "#8643DC" }}
            >
              Blog
            </span>
            <span className="section-title-divider"></span>
          </h2>
          <div className="mt-[20px]">
            <h2 className="font-[700] text-[36px] max-w-[165px] leading-[47px]">
              Get News Feeds
            </h2>
          </div>
        </div>
        <div className="mt-[10px] flex gap-[25px]">
          <div className="max-w-[380px]">
            <picture style={{ width: "100%" }}>
              <source srcSet="/images/blog_img1.png" media="width: 100%" />
              <img
                src="/images/blog_img1.png"
                alt="Logo"
                loading="lazy"
                className="w-[100%] h-[233px]"
              />
            </picture>
            <br />
            <h3 style={{ color: "#8643DC" }}>20 June/2020</h3>
            <p className="text-[20px] font-[700]">
              Technology is evolving rapidly. New devices and applications.
            </p>
          </div>
          <div className="flex gap-[30px]">
            <div className="work w-[255px] h-[350px]">
              <img
                className="m"
                src="/images/blog_img2.png"
                alt="Logo"
                loading="lazy"
              />
              <div className="layer">
                <h3>20 June/2020</h3>
                <p className="text-[20px] font-[700]">
                  New devices and applications come to the market.
                </p>
              </div>
            </div>
            <div className="work w-[255px] h-[350px]">
              <img
                className="m"
                src="/images/blog_img3.png"
                alt="Logo"
                loading="lazy"
              />
              <div className="layer">
                <h3>20 June/2020</h3>
                <p className="text-[20px] font-[700]">
                  Every day providing solutions to problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
