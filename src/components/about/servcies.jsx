import { dataServcies } from "../../constants";
import ServicesList from "./services.list";

const Servcies = () => {
  return (
    <div className="pt-[30px]" id="services">
      <h2 className="relative">
        <span
          className="section-title text-[18px] font-[400]"
          style={{ color: "#8643DC" }}
        >
          Services
        </span>
        <span className="section-title-divider"></span>
      </h2>

      <div className="mt-[20px]">
        <h2 className="font-[700] text-[36px] max-w-[246px] leading-[47px]">
          What actually I love to do
        </h2>
        <div className="mt-[40px] grid grid-cols-3 justify-center gap-[15px]">
          {dataServcies.map((item) => (
            <ServicesList key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servcies