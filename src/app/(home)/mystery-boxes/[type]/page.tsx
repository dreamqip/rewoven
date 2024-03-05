import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-rewoven-ivory flex flex-col gap-8 pt-8">
        <div className="flex gap-4 p-4 pt-8">
          {/* TODO: Blocker, the button gets squeezed, expected size 24x24, but it's 17x24 */}
          <button className="bg-rewoven-bone flex size-6 items-center justify-center rounded-full" aria-label="Close">
            <span className="material-symbols-outlined icon-size-16">close</span>
          </button>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-lg font-semibold">King Size</h1>
              <p className="text-center text-sm text-gray-accent-6">
                Inside, you'll find an array of surprises, but the highlight is a $10 gift card.
              </p>
            </div>
            <span className="text-sm font-semibold">25 points</span>
          </div>
          <span className="flex size-6 items-center rounded-full opacity-0"></span>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 px-4 pb-8 pt-4">
          <Image src="/mystery-box.png" alt="Mystery Box" width={240} height={240} />
          {/* TODO: Swipe to open button */}
          <button className="bg-rewoven-biscuit h-10 w-60 rounded-[40px] p-1">
            <span className="font-semibold text-white">Swipe & Buy</span>
          </button>
        </div>

        <div className="flex flex-col gap-6 rounded-[32px] bg-white px-4 py-8">
          <div className="flex justify-between gap-2">
            <h3 className="text-lg font-semibold">
              Buy Mystery Box & <br /> Receive Rewards
            </h3>
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
                  <span className="font-semibold">Boba in Your Wallet</span>
                  <p className="text-sm text-gray-accent-4">
                    Add Boba Guys Pass to your Apple Wallet and earn 25 points
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
