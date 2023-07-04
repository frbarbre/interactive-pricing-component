export default function Pricing({
  price,
  pageviews,
  discount,
  stylesPageviews,
  stylesPricing,
}) {
  return (
    <div className="flex gap-6 w-full justify-center md:justify-between items-center">
      <h2 className={`${stylesPageviews} uppercase font-extrabold text-text text-[14px]`}>{pageviews} Pageviews</h2>
      <h2 className={`${stylesPricing} font-extrabold text-[38px] text-cta-bg`}>{price * discount}.00$ <span className="text-text text-body inline-block translate-y-[-10px] "> / month</span></h2>
    </div>
  );
}
