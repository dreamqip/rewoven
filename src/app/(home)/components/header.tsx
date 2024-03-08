import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-black p-4 pt-8 text-white">
      <div className="flex items-start gap-4">
        <Image src="/avatar.png" alt="Avatar" width={33} height={33} />
        <div className="flex flex-col">
          <span className="text-sm">Boba Guys Passport</span>
          <span className="text-xs text-gray-accent-6">The NextGen Customer Loyalty Program Experience</span>
        </div>
        <div className="flex items-center gap-2 self-start">
          <span className="text-sm font-semibold">637</span>
          <span className="material-symbols-outlined text-sm">database</span>
        </div>
      </div>
    </header>
  );
}
