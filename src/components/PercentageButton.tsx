import { useCalculatoreStore } from "../store/Calculator.store";

interface Props {
  percent: number;
  isCustom?: boolean;
}

const PercentageButton = ({ percent, isCustom = false }: Props) => {
  const store = useCalculatoreStore();

  const isActive = store.tip === percent;

  const handleClick = () => {
    store.setTip(percent)
  }

  return (
    <button
      className={`hover:bg-Green-200 ${isActive ? "hover:bg-Green-200 text-Green-900 bg-Green-200" : "bg-Green-900 text-Grey-50"} hover:text-Green-900 transition-colors text-2xl font-bold rounded-[5px] w-full h-12 cursor-pointer $`}
      onClick={handleClick}
    >
      {isCustom ? "Custom" : `${percent}%`}
    </button>
  );
};

export default PercentageButton;
