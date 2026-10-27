import { Input, PercentageButton, Totals, CustomButton } from "../components";
import { useCalculatoreStore } from "../store/Calculator.store";

const Calculator = () => {
  const store = useCalculatoreStore();

  const percents: number[] = [5, 10, 15, 25, 50];

  return (
    <div className="bg-white p-8 w-93.75 m-auto rounded-[25px]my-10 md:w-152 md:py-12 md:px-20 lg:flex lg:w-230 lg:gap-12 lg:p-8">
      <div className="lg:flex-1">
        <Input
          variant="bill"
          iconUrl="/images/icon-dollar.svg"
          label="Bill"
          setValue={store.setBill}
          value={store.bill}
        />
        <h2 className="font-bold text-Grey-400 mb-2">Select tip %</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {percents.map((percent: number) => (
            <PercentageButton key={percent} percent={percent} />
          ))}
          <CustomButton />
        </div>
        <Input
          variant="people"
          iconUrl="/images/icon-person.svg"
          label="Number of People"
          value={store.people}
          setValue={store.setPeople}
        />
      </div>
      <Totals />
    </div>
  );
};

export default Calculator;
