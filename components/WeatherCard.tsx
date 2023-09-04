import Image from "next/image";

export default function WeatherCard() {
  return (
    <div className="w-32 h-auto bg-primary p-4 flex flex-col">
      <figure className="flex flex-col items-center">
        <figcaption className="text-custom-white text-base font-semibold text-center">Tomorrow</figcaption>
        <Image
          src="/hail.png"
          alt="Weather Image"
          width={30}
          height={30}
          className="object-contain mt-2 text-center"
        />
      </figure>

      <div className="text-center flex gap-4 items-center justify-center mt-2">
        <span className="text-custom-white font-semibold text-base">16&deg;C</span>
        <span className="text-custom-grey-2 font-semibold text-base">11&deg;C</span>
      </div>
    </div>
  );
}
