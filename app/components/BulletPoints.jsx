import { BulletPoint } from ".";
import { bulletPoints } from "../constants";

export default function BulletPoints() {
  return (
    <ul className="flex flex-col gap-2">
      {bulletPoints.map((point) => (
        <BulletPoint text={point.text} />
      ))}
    </ul>
  );
}
