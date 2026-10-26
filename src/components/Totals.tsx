import { TotalItem } from "../components";

const Totals = () => {
  return (
    <div className="bg-Green-900 rounded-[15px] py-6 text-white px-8">
      <TotalItem text="Tip Amount" value={0} />
      <TotalItem text="Total" value={32.79} />
    </div>
  );
};

export default Totals;
