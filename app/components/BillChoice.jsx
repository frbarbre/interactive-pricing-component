import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { YearlyBilling } from ".";

export default function BillChoice({ setDiscount }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    enabled ? setDiscount(0.75) : setDiscount(1);
  }, [enabled]);

  return (
    <div className="flex gap-3 text-[12px] text-text items-center flex-col sm:flex-row">
      <p>Montly Billing</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-soft-cyan" : "bg-toggle-bg"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable yearly billing for 25% off</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <YearlyBilling />
    </div>
  );
}
