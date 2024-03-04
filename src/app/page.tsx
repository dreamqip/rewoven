import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <header className="flex items-center justify-center bg-black p-4 pt-8 text-white">
        <div className="flex items-start">
          <Image src="/avatar.png" alt="Avatar" width={33} height={33} />
          <div className="ml-4 flex flex-col">
            <span className="text-sm">Boba Guys Passport</span>
            <span className="text-xs text-[#999999]">The NextGen Customer Loyalty Program Experience</span>
          </div>
          <div className="ml-8 flex items-center gap-2 self-start">
            <span className="text-sm font-semibold">637</span>
            <span className="material-symbols-outlined text-sm">database</span>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-8 bg-[#F4EEE2] pt-8">
        <div className="flex gap-4 p-4 pt-8">
          <span className="flex h-6 w-6 items-center rounded-full bg-[#E7DECC] px-1 py-2">
            <span className="material-symbols-outlined text-sm">wallet</span>
          </span>
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-lg font-semibold">Mystery Boxes</h1>
            <p className="text-center text-sm text-[#999999]">Make purchases and earn points to buy mystery boxes.</p>
          </div>
          <span className="flex h-6 w-6 items-center rounded-full bg-[#E7DECC] px-1 py-2">
            <span className="material-symbols-outlined text-sm">lunch_dining</span>
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 p-4 pb-8">
          <Image src="/mystery-box.png" alt="Mystery Box" width={240} height={240} />
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-6">
            <div className="flex w-full justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold uppercase text-[#999999]">LEVEL 7</span>
                <span className="text-lg font-semibold">King Size</span>
              </div>
              <span>25 points</span>
            </div>
            <p className="text-[#666666]">
              Inside, you'll find an array of surprises, but the highlight is a $10 gift card.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-white px-4 py-8">
          <span className="material-symbols-outlined">diversity_1</span>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Bring A Friend</h3>
            <p>
              Refer a friend to the Boba Guys Passport program and you'll both get 50 bonus points after their first
              purchase. As of now,{" "}
              <span className="font-bold text-[#666666]">you have referred 0 friends and earned 0 points.</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold">Your Referral Link</h4>
            <div className="flex gap-4">
              <a href="#" className="font-semibold text-[#C39B5E]">
                rewoven.app/ref/EH5NGS/EH5NGS
              </a>
              <span className="material-symbols-outlined text-[#C39B5E]">content_copy</span>
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
              <div className="flex items-start gap-3 border-t border-t-[#999999] pt-6 first:border-t-0 first:pt-0">
                <Image src="/avatar.png" alt="Mystery Box" width={60} height={60} />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-[#999999]">Quest</span>
                    <span className="font-semibold">Boba in Your Wallet</span>
                  </div>
                  <p className="text-sm text-[#666666]">Add Boba Guys Pass to your Apple Wallet and earn 25 points</p>
                  <span className="inline-flex w-fit rounded-2xl bg-[#00C868] px-2 py-1 text-xs font-semibold uppercase text-white">
                    Completed
                  </span>
                </div>
                <span className="text-nowrap text-sm font-semibold">+25 points</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
