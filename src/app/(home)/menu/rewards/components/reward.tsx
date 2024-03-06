"use client";

import { Badge } from "~/components/ui/badge";
import Image from "next/image";

type Props = {
  id: string;
  sender: string;
  title: string;
  stock: number;
  image: string;
};

export default function Reward(props: Props) {
  return (
    <div className="bg-rewoven-alabaster flex flex-col gap-4 rounded-2xl p-4">
      <div className="flex items-start gap-4">
        <div className="flex gap-3">
          <span className="material-symbols-outlined">award_star</span>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-accent-6">{props.sender}</span>
            <span className="font-semibold text-black">{props.title}</span>
            <p className="text-xs text-gray-accent-6">
              A decadent discount, just for you. Enjoy 10% off on your next drink at Boba Guys
            </p>
          </div>
        </div>

        <Badge className="w-fit text-nowrap">{props.stock} in stock</Badge>
      </div>

      <div className="flex items-end justify-between">
        {/* Padding is calculated by adding size of the icon and gap between icon and text */}
        <div className="flex gap-2 pl-8">
          <span className="font-mono text-sm font-semibold uppercase">id#{props.id}</span>
          {/* TODO: Notify somehow the user that the ID has been copied */}
          <button onClick={() => navigator.clipboard.writeText(props.id)} aria-label="Copy reward ID">
            <span className="material-symbols-outlined icon-size-20">content_copy</span>
          </button>
        </div>

        {/* TODO: Add animation */}
        <Image src={props.image} alt={props.title} width={160} height={160} />
      </div>
    </div>
  );
}
