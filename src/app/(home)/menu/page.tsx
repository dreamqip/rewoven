import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-rewoven-ivory flex flex-col gap-8 pt-8">
      <div className="flex gap-4 p-4 pt-8">
        <button className="bg-rewoven-bone flex size-6 items-center rounded-full px-1 py-2" aria-label="Close">
          <span className="material-symbols-outlined icon-size-16">close</span>
        </button>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg font-semibold">Menu</h1>
          <p className="text-center text-sm text-gray-accent-6">Make purchases and earn points to buy mystery boxes.</p>
        </div>
        <span className="invisible flex size-6 items-center rounded-full px-1 py-2 opacity-0" aria-hidden></span>
      </div>

      <div className="flex flex-col justify-between gap-12 p-4 pt-0">
        <div className="grid gap-4">
          <Link href={"/"} className="bg-rewoven-alabaster flex justify-between rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined icon-size-24">qr_code</span>
              <span className="font-semibold">Scan & Earn</span>
            </div>
            <span className="material-symbols-outlined icon-size-24">chevron_right</span>
          </Link>
          <Link href={"/"} className="bg-rewoven-alabaster flex justify-between rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined icon-size-24">award_star</span>
              <span className="font-semibold">Rewards</span>
            </div>
            <span className="material-symbols-outlined icon-size-24">chevron_right</span>
          </Link>
          <Link href={"/"} className="bg-rewoven-alabaster flex justify-between rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined icon-size-24">sprint</span>
              <span className="font-semibold">Transactions</span>
            </div>
            <span className="material-symbols-outlined icon-size-24">chevron_right</span>
          </Link>
          <Link href={"/"} className="bg-rewoven-alabaster flex justify-between rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined icon-size-24">help</span>
              <span className="font-semibold">Support</span>
            </div>
            <span className="material-symbols-outlined icon-size-24">chevron_right</span>
          </Link>
          <Link href={"/"} className="bg-rewoven-alabaster flex justify-between rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined icon-size-24">settings</span>
              <span className="font-semibold">Settings</span>
            </div>
            <span className="material-symbols-outlined icon-size-24">chevron_right</span>
          </Link>
        </div>

        <Link href={"/"} className="bg-rewoven-alabaster flex justify-between rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined icon-size-24">move_item</span>
            <span className="font-semibold">Sign Out</span>
          </div>
          <span className="material-symbols-outlined icon-size-24">chevron_right</span>
        </Link>
      </div>
    </div>
  );
}
