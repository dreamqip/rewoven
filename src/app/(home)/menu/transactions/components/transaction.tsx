type Props = {
  sender: string;
  title: string;
  date: string | Date;
};

export default function Transaction(props: Props) {
  return (
    <div className="bg-rewoven-alabaster flex justify-between gap-4 rounded-2xl p-4">
      <div className="flex gap-3">
        <span className="material-symbols-outlined">award_star</span>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-gray-accent-6">{props.sender}</span>
          <span className="font-semibold text-black">{props.title}</span>
        </div>
      </div>
      <span className="text-nowrap text-xs font-semibold text-gray-accent-6">
        {new Date(props.date).toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </span>
    </div>
  );
}
