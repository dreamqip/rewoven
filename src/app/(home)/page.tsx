import Image from "next/image";
import { Carousel } from "./components";

export default function Page() {
  return (
    <>
      <div className="flex gap-4 p-4 pt-8">
        <span className="bg-rewoven-bone flex h-6 w-6 items-center rounded-full px-1 py-2">
          <span className="material-symbols-outlined text-sm">wallet</span>
        </span>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg font-semibold">Mystery Boxes</h1>
          <p className="text-center text-sm text-gray-accent-6">Make purchases and earn points to buy mystery boxes.</p>
        </div>
        <span className="bg-rewoven-bone flex h-6 w-6 items-center rounded-full px-1 py-2">
          <span className="material-symbols-outlined text-sm">lunch_dining</span>
        </span>
      </div>

      {/* TODO: Fix layout overflow */}
      <Carousel />

      <div className="flex flex-col gap-4 bg-white px-4 py-8">
        <span className="material-symbols-outlined">diversity_1</span>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Bring A Friend</h3>
          <p>
            Refer a friend to the Boba Guys Passport program and you'll both get 50 bonus points after their first
            purchase. As of now,{" "}
            <span className="font-bold text-gray-accent-4">you have referred 0 friends and earned 0 points.</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Your Referral Link</h4>
          <div className="flex gap-4">
            <a href="#" className="text-rewoven-caramel font-semibold">
              rewoven.app/ref/EH5NGS/EH5NGS
            </a>
            <span className="material-symbols-outlined text-rewoven-caramel">content_copy</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 rounded-[32px] bg-white px-4 py-8">
        <div className="flex justify-between gap-2">
          <h3 className="text-lg font-semibold">Complete Quests & Earn Points</h3>
          <div className="flex items-start">
            {Array.from({ length: 4 }).map((_, index) => (
              <Image
                className="-ml-2 first:-ml-0"
                key={index}
                src="/avatar.png"
                alt="Mystery Box"
                width={32}
                height={32}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {Array.from({ length: 4 }).map((_) => (
            <div className="flex items-start gap-3 border-t border-t-gray-accent-6 pt-6 first:border-t-0 first:pt-0">
              <Image src="/avatar.png" alt="Mystery Box" width={60} height={60} />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-xs uppercase text-gray-accent-6">Quest</span>
                  <span className="font-semibold">Boba in Your Wallet</span>
                </div>
                <p className="text-sm text-gray-accent-4">Add Boba Guys Pass to your Apple Wallet and earn 25 points</p>
                <span className="bg-rewoven-jade inline-flex w-fit rounded-2xl px-2 py-1 text-xs font-semibold uppercase text-white">
                  Completed
                </span>
              </div>
              <span className="text-nowrap text-sm font-semibold">+25 points</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
