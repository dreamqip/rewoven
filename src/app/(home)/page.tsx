"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel, Menu } from "./components";
import { Badge } from "~/components/ui/badge";

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-start gap-4 p-4 pt-8">
        <Link href="/statuses-and-tiers" className="flex items-center justify-center rounded-full bg-rewoven-bone p-2">
          <span className="material-symbols-outlined">wallet</span>
        </Link>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-rewoven-midnight text-xl font-semibold">Mystery Boxes</h1>
          <p className="text-center text-base text-gray-accent-6">
            Make purchases and earn points to buy mystery boxes.
          </p>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="flex items-center justify-center rounded-full bg-rewoven-bone p-2">
              <span className="material-symbols-outlined">lunch_dining</span>
            </button>
          </Dialog.Trigger>
          <AnimatePresence>
            {open ? (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild className="fixed inset-0 z-10 grid place-items-center overflow-y-auto">
                  <motion.div>
                    <Dialog.Content asChild>
                      <motion.div
                        className="fixed inset-0 z-50 overflow-auto bg-rewoven-ivory pt-8"
                        transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <Menu
                          close={
                            <Dialog.Close asChild>
                              <button
                                className="flex size-6 items-center rounded-full bg-rewoven-bone px-1 py-2"
                                aria-label="Close"
                              >
                                <span className="material-symbols-outlined icon-size-16">close</span>
                              </button>
                            </Dialog.Close>
                          }
                        />
                      </motion.div>
                    </Dialog.Content>
                  </motion.div>
                </Dialog.Overlay>
              </Dialog.Portal>
            ) : null}
          </AnimatePresence>
        </Dialog.Root>
      </div>

      <div className="min-w-0">
        <Carousel />
      </div>

      <div className="flex flex-col gap-6 rounded-[32px] bg-white px-4 py-8">
        <div className="flex flex-col gap-2">
          <span className="material-symbols-outlined text-rewoven-midnight">diversity_1</span>
          <h3 className="text-rewoven-midnight text-xl font-semibold">Bring A Friend</h3>
          <p className="text-base">
            Refer a friend to the Boba Guys Passport program and you'll both get 50 bonus points after their first
            purchase. As of now,{" "}
            <span className="font-bold text-gray-accent-4">you have referred 0 friends and earned 0 points.</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-rewoven-midnight text-xl font-semibold">Your Referral Link</h4>
          <div className="flex gap-2">
            <a href="#" className="text-base font-semibold text-rewoven-caramel">
              rewoven.app/ref/EH5NGS/EH5NGS
            </a>
            {/* TODO: Copy to clipboard | check if the API is available */}
            <button className="flex" aria-label="Copy your link">
              <span className="material-symbols-outlined text-rewoven-caramel">content_copy</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 rounded-[32px] bg-white px-4 py-8">
        <div className="flex justify-between gap-2">
          <h3 className="text-rewoven-midnight text-xl font-semibold">Complete Quests & Earn Points</h3>
          <div className="flex items-start">
            {Array.from({ length: 4 }).map((_, index) => (
              <Image
                key={index}
                className="-ml-2 first:-ml-0"
                src="/avatar.png"
                alt="Mystery Box"
                width={32}
                height={32}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-t border-t-rewoven-caramel pt-6 first:border-t-0 first:pt-0"
            >
              <Image src="/avatar.png" alt="Mystery Box" width={60} height={60} />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold uppercase text-gray-accent-6">Quest</span>
                  <span className="text-rewoven-midnight text-lg font-semibold">Boba in Your Wallet</span>
                </div>
                <p className="text-base text-gray-accent-4">
                  Add Boba Guys Pass to your Apple Wallet and earn 25 points
                </p>
                <Badge className="w-fit" variant="completed">
                  Completed
                </Badge>
              </div>
              <span className="text-rewoven-midnight text-nowrap text-base font-semibold">+25 points</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
