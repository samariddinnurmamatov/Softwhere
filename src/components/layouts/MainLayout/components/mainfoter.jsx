import PropTypes from "prop-types";
import React from "react";

const socialIcons = [
  { src: "/images/footer_internet.png", alt: "Internet" },
  { src: "/images/footer_instagram.png", alt: "Instagram" },
  { src: "/images/footer_linkedin.png", alt: "LinkedIn" },
];

const SocialIcon = ({ src, alt }) => {
  return (
    <picture className="cursor-pointer hover:translate-y-[-8px]" style={{transition: ".5s"}}>
      <source srcSet={src} media="(width: 100%)" />
      <img src={src || "/loading.gif"} alt={alt} loading="lazy" />
    </picture>
  );
};

SocialIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const Mainfoter = React.memo(() => {
  return (
    <div className="container mx-auto py-12 mt-[70px]">
      <h2 className="font-semibold text-3xl text-center">Let’s be Friends</h2>
      <div className="flex justify-center space-x-9 mt-5">
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
});

Mainfoter.displayName = "Mainfoter";
export default Mainfoter;
