"use client";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function FirstStep({ onNext }: { onNext: () => void }) {
  function handleNext() {
    // Send email to backend
    // ...

    onNext();
  }

  return (
    <>
      <div className="grid grid-rows-[1fr_auto] bg-rewoven-ivory px-4 pb-8">
        <div className="flex">
          <Image className="m-auto" src="/avatar.png" alt="Rewoven Logo" width={128} height={128} />
        </div>
        <div>
          <div>
            <div className="text-sm font-semibold text-gray-accent-6">STEP 1 OF 2</div>
            <div className="text-lg font-semibold">Enter Your Email Address</div>
          </div>

          <Input placeholder="example@rewoven.app" aria-describedby="email-description" className="my-4" />

          <p id="email-description" className="text-sm text-gray-accent-6">
            To sign in, please enter your email address below. We'll send a One-Time Password (OTP) to your email. This
            ensures a secure sign-in process.
          </p>
        </div>
        <Button className="mt-6" onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
}
