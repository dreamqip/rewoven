"use client";

import MenuLink from "../menu/components/menu-link";

export default function Menu({ close }: { close: JSX.Element }) {
  return (
    <>
      <div className="flex gap-4 p-4 pt-8">
        {close}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg font-semibold">Menu</h1>
          <p className="text-center text-sm text-gray-accent-6">Make purchases and earn points to buy mystery boxes.</p>
        </div>
        <span className="invisible flex size-6 items-center rounded-full px-1 py-2 opacity-0" aria-hidden></span>
      </div>

      <div className="flex w-full flex-1 flex-col justify-between gap-12 p-4 pt-0">
        <div className="grid gap-4">
          <MenuLink title="Scan & Earn" link="/" icon="qr_code" />
          <MenuLink title="Rewards" link="/menu/statuses-and-tiers" icon="award_star" />
          <MenuLink title="Transactions" link="/menu/statuses-and-tiers" icon="sprint" />
          <MenuLink title="Support" link="/menu/support" icon="help" />
          <MenuLink title="Settings" link="/menu/support" icon="settings" />
        </div>

        <MenuLink title="Sign Out" link="/menu/support" icon="move_item" />
      </div>
    </>
  );
}
