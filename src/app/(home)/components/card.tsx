import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-6">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold uppercase text-gray-accent-6">LEVEL 7</span>
          <span className="text-rewoven-midnight text-lg font-semibold">King Size</span>
        </div>
        <span className="text-rewoven-midnight text-base font-semibold">25 points</span>
      </div>
      <p className="text-base text-gray-accent-6">
        Inside, you'll find an array of surprises, but the highlight is a $10 gift card.
      </p>
    </div>
  );
}
