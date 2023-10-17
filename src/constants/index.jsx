const BannerImages = () => (
  <>
    <div className="absolute left-[585px] top-[150px]">
      <img src="/images/banner_yumaloq.png" alt="Nuqta" />
    </div>
    <div className="absolute right-[260px] top-[20px]">
      <img src="/images/banner_yumaloq.png" alt="Nuqta" />
    </div>
    <div className="absolute right-[170px] top-[130px]">
      <img src="/images/Vector.png" alt="Chiziq" />
    </div>
    <div className="absolute right-[0px] top-[155px]" style={{ zIndex: "-1" }}>
      <img src="/images/Group2.png" alt="nuqta nuqtalar" />
    </div>
  </>
);
export { BannerImages };


const dataClients = [
  {
    id: 1,
    icon: "/images/clients_slack.png",
    title: "Slack",
    rang: "rose",
    shadowClass: "shaddow1",
  },
  {
    id: 2,
    icon: "/images/clients_medium.png",
    title: "Medium",
    rang: "green",
    shadowClass: "shaddow2",
  },
  {
    id: 3,
    icon: "/images/clients_microsoft.png",
    title: "Microsoft",
    rang: "blue",
    shadowClass: "shaddow3",
  },
  {
    id: 4,
    icon: "/images/clients_zeplin.png",
    title: "Zeplin",
    rang: "yellow",
    shadowClass: "shaddow4",
  },
  {
    id: 5,
    icon: "/images/clients_shopify.png",
    title: "Shopify",
    rang: "green",
    shadowClass: "shaddow5",
  },
];
export { dataClients };


const inputPlaceholders = [
  "What's your name?",
  "Your email",
  "Tell me about your project",
];
export { inputPlaceholders };

const dataServcies = [
  {
    id: 1,
    icon: "/images/footer_internet.png",
    title: "UX Research",
    text: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.",
  },
  {
    id: 2,
    icon: "/images/footer_internet.png",
    title: "Brand Design",
    text: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.",
  },
  {
    id: 3,
    icon: "/images/footer_internet.png",
    title: "Web Development",
    text: "New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.",
  },
];
export { dataServcies };

const dataTestmonials = [
  {
    id: 1,
    icon: "/images/testmonials_undov.png",
    title:
      "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
    img: "/images/testmonials_img1.png",
    name: "Michal John",
    text: "CEO of MZP",
  },
  {
    id: 2,
    icon: "/images/testmonials_undov.png",
    title:
      "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
    img: "/images/testmonials_img1.png",
    name: "Mchn Brown",
    text: "MZP",
  },
  {
    id: 3,
    icon: "/images/testmonials_undov.png",
    title:
      "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
    img: "/images/testmonials_img1.png",
    name: "Oka Down",
    text: "CEO",
  },
  {
    id: 4,
    icon: "/images/testmonials_undov.png",
    title:
      "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
    img: "/images/testmonials_img1.png",
    name: "Akel Diel",
    text: "TSL",
  },
  {
    id: 5,
    icon: "/images/testmonials_undov.png",
    title:
      "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
    img: "/images/testmonials_img1.png",
    name: "Richs John",
    text: "TIU",
  },
  {
    id: 6,
    icon: "/images/testmonials_undov.png",
    title:
      "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
    img: "/images/testmonials_img1.png",
    name: "Michal John",
    text: "Mr",
  },
];
export { dataTestmonials };

const TestMonialsImages = () => (
  <>
    <div className="absolute left-[45px] top-[160px]">
      <img src="/images/testmonials_mask_img1.png" alt="Mack1" />
    </div>
    <div className="absolute left-[180px] top-[380px]">
      <img src="/images/testmonials_mask_img2.png" alt="Mack2" />
    </div>
    <div className="absolute right-[45px] top-[160px]">
      <img src="/images/testmonials_mask_img3.png" alt="Mack3" />
    </div>
    <div className="absolute right-[180px] top-[380px]">
      <img src="/images/testmonials_mask_img4.png" alt="Mack4" />
    </div>
  </>
);
export { TestMonialsImages };
