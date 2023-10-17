import { dataClients } from "../../constants";
import ClientsList from "./clients.list";

const Clients = () => {
  return (
    <div className="pt-[30px]">
      <h2 className="relative">
        <span
          className="section-title text-[18px] font-[400]"
          style={{ color: "#8643DC" }}
        >
          Clients
        </span>
        <span className="section-title-divider"></span>
      </h2>

      <div className="mt-[20px]">
        <h2 className="font-[700] text-[36px] max-w-[140px] leading-[47px]">
          Big Deal With
        </h2>
        <div className="mt-[40px] grid grid-cols-5 gap-[20px]">
          {dataClients.map((item) => (
            <ClientsList
              key={item.id}
              data={item}
              color={item.color}
              shadowClass={item.shadowClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
