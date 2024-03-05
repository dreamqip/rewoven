import Link from "next/link";

type Props = {
  title: string;
  link: string;
  icon: string;
};

export default function MenuLink(props: Props) {
  return (
    <Link href={props.link} className="bg-rewoven-alabaster flex justify-between rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined icon-size-24">{props.icon}</span>
        <span className="font-semibold">{props.title}</span>
      </div>
      <span className="material-symbols-outlined icon-size-24">chevron_right</span>
    </Link>
  );
}
