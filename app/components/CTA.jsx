import { BulletPoints, Button } from ".";

export default function CTA() {
  return (
    <div className="flex flex-col md:flex-row gap-x-[30px] md:justify-between items-center gap-y-[15px] justify-center">
      <div>
        <BulletPoints />
      </div>
      <div>
        <Button text={"Start my trial"} />
      </div>
    </div>
  );
}
