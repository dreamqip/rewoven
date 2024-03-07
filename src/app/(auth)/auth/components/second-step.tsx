"use client";

import Image from "next/image";
import { useRef } from "react";
import { Input } from "~/components/ui/input";

const REGEX = /^\d$/;

export default function SecondStep() {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  function sendResult() {
    const otp = inputsRef.current.map((input) => input.value).join("");

    if (otp.length !== 6) {
      return;
    }

    // Authenticate user and redirect
    // ...
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, nextElementSibling },
    } = e;
    if (REGEX.test(value) && nextElementSibling !== null) {
      (nextElementSibling as HTMLInputElement).focus();
    } else if (REGEX.test(value) && nextElementSibling === null) {
      sendResult();
    } else {
      e.target.value = "";
    }

    sendResult();
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    if (key === "Backspace") {
      if (target.value === "") {
        if (target.previousElementSibling !== null) {
          const t = target.previousElementSibling as HTMLInputElement;
          t.value = "";
          t.focus();
          e.preventDefault();
        }
      } else {
        target.value = "";
      }
      sendResult();
    }
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedValue = e.clipboardData.getData("Text");

    let currentInput = 0;

    for (let i = 0; i < pastedValue.length; i++) {
      const pastedCharacter = pastedValue.charAt(i);
      const currentValue = inputsRef.current[currentInput]?.value;
      if (pastedCharacter.match(REGEX) && !currentValue) {
        inputsRef.current[currentInput]!.value = pastedCharacter;
        if (inputsRef.current[currentInput]?.nextElementSibling !== null) {
          (inputsRef.current[currentInput]!.nextElementSibling as HTMLInputElement).focus();
          currentInput++;
        }
      }
    }
    sendResult();

    e.preventDefault();
  };

  return (
    <>
      <div className="grid grid-rows-[1fr_auto] bg-rewoven-ivory px-4 pb-8">
        <div className="flex">
          <Image className="m-auto" src="/avatar.png" alt="Rewoven Logo" width={128} height={128} />
        </div>
        <div>
          <div>
            <div className="text-sm font-semibold text-gray-accent-6">STEP 2 OF 2</div>
            <div className="text-lg font-semibold">Enter Your One-Time Password</div>
          </div>

          <div className="my-4 flex gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Input
                key={i}
                ref={(el: HTMLInputElement) => {
                  inputsRef.current[i] = el;
                }}
                maxLength={1}
                type="tel"
                placeholder="0"
                inputMode="numeric"
                pattern="[0-9]{1}"
                min="0"
                max="9"
                aria-describedby="otp-description"
                autoComplete={i === 0 ? "one-time-code" : "off"}
                className="text-center"
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
                onFocus={handleOnFocus}
                onPaste={handleOnPaste}
              />
            ))}
          </div>

          <p id="email-description" className="text-sm text-gray-accent-6">
            To sign in, please enter your email address below. We'll send a One-Time Password (OTP) to your email. This
            ensures a secure sign-in process.
          </p>
        </div>
      </div>
    </>
  );
}

