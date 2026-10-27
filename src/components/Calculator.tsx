import { Input, PercentageButton, Totals } from "../components";

const Calculator = () => {
  const percents: number[] = [5, 10, 15, 25, 50];

  return (
    <div className="bg-white p-8 w-93.75 m-auto rounded-[25px]my-10 md:w-152 md:py-12 md:px-20 lg:flex lg:w-230 lg:gap-12 lg:p-8">
      <div className="lg:flex-1">
        <Input iconUrl="/images/icon-dollar.svg" label="Bill" value={0} />
        <h2 className="font-bold text-Grey-400 mb-2">Select tip %</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {percents.map((percent: number) => (
            <PercentageButton key={percent} percent={percent} />
          ))}
          <PercentageButton isCustom percent={0} />
        </div>
        <Input
          iconUrl="/images/icon-person.svg"
          label="Number of People"
          value={0}
        />
      </div>
      <Totals />
    </div>
  );
};

export default Calculator;
