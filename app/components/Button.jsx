export default function Button({ text }) {
  return (
    <button className="bg-cta-bg text-cta-text hover:text-white transition-all px-8 text-[12px] py-3 rounded-full">
      {text}
    </button>
  );
}
