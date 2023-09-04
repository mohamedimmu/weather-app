export default function Header() {
  return (
    <header className="w-full flex justify-end gap-4">
      <button className="w-10 h-10 rounded-full bg-custom-white text-base font-bold text-celsius text-center">
        &deg;C
      </button>
      <button className="w-10 h-10 rounded-full bg-fahrenheit-bg text-base font-bold text-custom-white text-center">
        &deg;F
      </button>
    </header>
  );
}
