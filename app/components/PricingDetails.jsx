import { Pricing } from ".";

export default function PricingDetails({
  discount,
  state,
  stylesPricing,
  stylesPageviews,
}) {
  return (
    <div>
      {state.x >= 8 && state.x < 12 && (
        <Pricing
          price={8}
          pageviews={"10K"}
          discount={discount}
          stylesPageviews={stylesPageviews}
          stylesPricing={stylesPricing}
        />
      )}
      {state.x >= 12 && state.x < 16 && (
        <Pricing
          price={12}
          pageviews={"50K"}
          discount={discount}
          stylesPageviews={stylesPageviews}
          stylesPricing={stylesPricing}
        />
      )}
      {state.x >= 16 && state.x < 24 && (
        <Pricing
          price={16}
          pageviews={"100K"}
          discount={discount}
          stylesPageviews={stylesPageviews}
          stylesPricing={stylesPricing}
        />
      )}
      {state.x >= 24 && state.x < 36 && (
        <Pricing
          price={24}
          pageviews={"500K"}
          discount={discount}
          stylesPageviews={stylesPageviews}
          stylesPricing={stylesPricing}
        />
      )}
      {state.x === 36 && (
        <Pricing
          price={36}
          pageviews={"1M"}
          discount={discount}
          stylesPageviews={stylesPageviews}
          stylesPricing={stylesPricing}
        />
      )}
    </div>
  );
}
