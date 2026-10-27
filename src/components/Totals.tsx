import { TotalItem, ResetButton } from "../components";
import { useCalculatoreStore } from "../store/Calculator.store";

const Totals = () => {
  const store = useCalculatoreStore();

  return (
    <div className="bg-Green-900 rounded-[15px] py-6 text-white px-8 lg:w-103.25 lg:flex lg:flex-col lg:justify-between">
      <div>
        <TotalItem text="Tip Amount" value={store.tipAmount()} />
        <TotalItem text="Total" value={store.total()} />
      </div>
      <ResetButton text="Reset" />
    </div>
  );
};

export default Totals;
