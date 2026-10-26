import { Input, PercentageButton } from "../components";

const Calculator = () => {
  const percents: number[] = [5, 10, 15, 25, 50];

  return (
    <div className="bg-white p-8 w-93.75 m-auto rounded-[25px]">
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
  );
};

export default Calculator;
