export default function BulletPoint({ text }) {
  return (
    <li className="translate-x-[15px] relative text-[12px] text-text">
      <span>
        <img
          className="absolute left-[-15px] top-[50%] translate-y-[-50%]"
          src="/icon-check.svg"
          alt="checkmark-icon"
        />
      </span>
      {text}
    </li>
  );
}
