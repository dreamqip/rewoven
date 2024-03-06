import Link from "next/link";
import Reward from "./components/reward";

export default function Page() {
  return (
    <>
      <div className="flex gap-4 p-4 pt-8">
        <Link
          href="/menu"
          className="bg-rewoven-bone flex size-6 items-center rounded-full px-1 py-2"
          aria-label="Navigate back to the menu"
        >
          <span className="material-symbols-outlined icon-size-16">chevron_left</span>
        </Link>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-lg font-semibold">Rewards</h1>
          <p className="text-center text-sm text-gray-accent-6">Make purchases and earn points to buy mystery boxes.</p>
        </div>
        <span className="invisible flex size-6 items-center rounded-full px-1 py-2 opacity-0" aria-hidden></span>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-4">
        <Reward id="EH5NGS" sender="Bob Ross" title="10% Off Your Next Drink" stock={10} image="/mystery-box.png" />
        <Reward id="OU1QSS" sender="Bob Ross" title="10% Off Your Next Drink" stock={10} image="/mystery-box.png" />
      </div>
    </>
  );
}
