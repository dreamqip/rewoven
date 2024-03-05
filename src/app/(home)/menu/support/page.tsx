export default function Page() {
  return (
    <div className="flex gap-4 p-4 pt-8">
      <button
        className="bg-rewoven-bone flex size-6 items-center rounded-full px-1 py-2"
        aria-label="Navigate back to the menu"
      >
        <span className="material-symbols-outlined icon-size-16">chevron_left</span>
      </button>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-lg font-semibold">Support</h1>
        <p className="text-center text-sm text-gray-accent-6">
          For assistance with your account or to request its deletion, kindly reach out to{" "}
          <a className="text-rewoven-gold" href="mailto:support@rewoven.app">
            support@rewoven.app
          </a>
          , including a brief explanation of your concern.
        </p>
      </div>
      <span className="invisible flex size-6 items-center rounded-full px-1 py-2 opacity-0" aria-hidden></span>
    </div>
  );
}
