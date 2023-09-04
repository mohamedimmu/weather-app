import Image from "next/image";
import { MdGpsFixed, MdLocationOn } from "react-icons/md";

export default function WeatherSidebar() {
  return (
    <div className="bg-primary py-8 flex flex-col">
      <div className="px-8 w-full display flex justify-between mb-8">
        <button className="bg-custom-grey text-base font-medium text-custom-white px-4 py-2">
          Search for places
        </button>
        <button className="rounded-full bg-custom-grey p-2">
          <MdGpsFixed className="w-6 h-6 text-custom-white" />
        </button>
      </div>

      <div className="relative h-72 flex justify-center items-center">
        <Image
          src="/cloud-background.png"
          alt="Clouds Background"
          width={650}
          height={240}
          className="object-cover absolute z-0 top-0 right-0 opacity-20 h-72"
        />
        <Image
          src="/shower.png"
          alt="Shower"
          priority
          width={202}
          height={234}
          className="object-contain"
        />
      </div>

      <div className="text-center w-full">
        <h1 className="text-custom-white font-medium text-9xl leading-none">
          15
          <span className="text-custom-grey-2 font-medium text-5xl leading none">
            &deg;C
          </span>
        </h1>
      </div>

      <div className="mt-6 mb-auto">
        <h2 className="text-custom-grey-2 font-semibold text-4xl text-center">
          Shower
        </h2>
      </div>

      <div className="text-custom-grey-3 text-base font-medium text-center flex items-center justify-center gap-4 w-full mt-auto">
        <p>Today</p>
        <span className="text-base text-custom-grey-3 font-medium font-montserrat">
          &middot;
        </span>
        <p>Fri 5 Jun</p>
      </div>

      <div className="flex items-center justify-center gap-1 mt-2">
        <MdLocationOn className="w-6 h-6 text-custom-grey-3" />
        <p className="text-custom-grey-3 font-semibold text-[18px]">Helsinki</p>
      </div>
    </div>
  );
}
