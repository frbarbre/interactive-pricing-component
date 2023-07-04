import { useState } from "react";
import { PricingDetails, InputSlider, BillChoice } from ".";

export default function Options() {
  const [state, setState] = useState({ x: 22 });
  const [discount, setDiscount] = useState(1);
  const [active, setActive] = useState(false);
  return (
    <>
      <PricingDetails
        state={state}
        discount={discount}
        stylesPricing={"hidden md:block"}
      />
      <InputSlider
        x={state.x}
        setState={setState}
        active={active}
        setActive={setActive}
      />
      <div className="md:hidden">
        <PricingDetails
          state={state}
          discount={discount}
          stylesPageviews={"hidden"}
        />
      </div>
      <div className="flex justify-center mt-6 md:mt-2">
        <BillChoice setDiscount={setDiscount} />
      </div>
    </>
  );
}
