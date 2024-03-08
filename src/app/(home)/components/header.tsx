import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-black p-4 pt-8 text-white">
      <div className="flex items-start gap-4">
        <Image src="/avatar.png" alt="Avatar" width={40} height={40} />
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold">Boba Guys Passport</span>
          <span className="text-sm text-rewoven-ivory">The NextGen Customer Loyalty Program Experience</span>
        </div>
        <div className="flex items-center gap-1 self-start">
          <span className="text-base font-semibold">637</span>
          <span className="material-symbols-outlined icon-size-16">database</span>
        </div>
      </div>
    </header>
  );
}
