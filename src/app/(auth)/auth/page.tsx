"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FirstStep, SecondStep, Welcome } from "./components/";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <div className="flex justify-center bg-rewoven-ivory px-4 pt-8">
        <Image src="/logo.svg" alt="Rewoven Logo" width={93} height={20} />
      </div>
      <Suspense>
        <Stepper />
      </Suspense>
    </>
  );
}

function Stepper() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function updateStep(step: number) {
    const params = new URLSearchParams(searchParams);

    params.set("step", step.toString());

    replace(`/auth?step=${step}`);
  }

  switch (Number(searchParams.get("step"))) {
    case 1:
      return <FirstStep onNext={() => updateStep(2)} />;
    case 2:
      return <SecondStep />;
    default:
      return <Welcome onNext={() => updateStep(1)} />;
  }
}
