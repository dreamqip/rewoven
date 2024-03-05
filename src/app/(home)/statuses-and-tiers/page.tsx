import Image from "next/image";
import { Badge } from "~/components/ui/badge";

type Props = {
  level: number;
  tier: string;
  benefits: string;
  // Create an enum?
  status: "completed" | "uncompleted";
  allPoints?: number;
  pointsToNextLevel?: number;
};

const fakeData: Props[] = [
  {
    level: 1,
    tier: "Bronze",
    benefits: "Add Boba Guys Pass to your Apple Wallet and earn 25 points",
    status: "uncompleted",
    allPoints: 0,
    pointsToNextLevel: 25,
  },
  {
    level: 2,
    tier: "Silver",
    benefits: "Add Boba Guys Pass to your Apple Wallet and earn 25 points",
    status: "completed",
  },
];

export default function Page() {
  return (
    <div className="bg-rewoven-ivory flex flex-col gap-8 pt-8">
      <div className="flex items-start gap-4 p-4 pt-8">
        <span className="bg-rewoven-bone flex h-6 w-6 items-center rounded-full px-1 py-2">
          <span className="material-symbols-outlined icon-size-16">close</span>
        </span>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg font-semibold">Statuses & Tiers</h1>
          <p className="text-center text-sm text-gray-accent-6">Make purchases and earn points to buy mystery boxes.</p>
        </div>
        <span className="flex h-6 w-6 flex-grow-0 items-center rounded-full px-1 py-2 opacity-0"></span>
      </div>

      <div className="flex flex-col gap-4 px-4">
        {fakeData.map((data) => (
          <StatusCard key={data.level} {...data} />
        ))}
      </div>
    </div>
  );
}

function StatusCard(props: Props) {
  return (
    <div className="bg-rewoven-alabaster flex items-start gap-3 rounded-2xl p-4">
      <Image src="/avatar.png" alt="Avatar" width={60} height={60} />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="text-xs uppercase text-gray-accent-6">LEVEL {props.level}</span>
          <span className="font-semibold">{props.tier}</span>
        </div>
        <p className="text-sm text-black">{props.benefits}</p>
        <Badge variant={props.status} className="w-fit">
          {props.status === "completed" ? "Completed" : `${props.allPoints} / ${props.pointsToNextLevel}`}
        </Badge>
      </div>
    </div>
  );
}
