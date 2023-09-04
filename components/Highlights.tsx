import { MdNearMe } from "react-icons/md";

export default function Highlights() {
  const bigCarddetails = [
    {
      name: "Wind status",
      data: "7",
      unit: "mph",
      icon: <MdNearMe />,
      status: "WSW",
    },
    {
      name: "Humidity",
      data: 84,
      unit: "%",
      icon: false,
      status: 80,
    },
  ];

  const smallCardDetails = [
    {
      name: "Visibility",
      data: "6,4",
      unit: "miles",
    },
    {
      name: "Air Pressure",
      data: "998",
      unit: "mb",
    },
  ];
  return (
    <div>
      <h2 className="text-custom-white text-2xl font-bold mt-10 text-left self-start mb-6">
        Today&apos;s Highlights
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {bigCarddetails?.map((detail) => (
          <div
            className="bg-primary text-custom-white p-4 w-full h-40 flex flex-col items-center"
            key={detail.name}
          >
            <p className="text-base font-medium text-center">{detail.name}</p>
            <p className="text-5xl font-bold text-center leading-none">
              7<span className="text-2xl font-medium">{detail.unit}</span>
            </p>

            {detail.icon ? (
              <div className="flex items-center gap-2 mt-4">
                <span className="w-8 h-8 rounded-full bg-custom-grey flex items-center justify-center">
                  <MdNearMe className="rotate-180 text-white w-5 h-5" />
                </span>
                <p className="text-custom-white font-medium text-base">
                  {detail.status}
                </p>
              </div>
            ) : (
              <div className="mt-2">
                <span className="mb-1 w-full flex items-center justify-between text-custom-grey-2 text-sm font-bold">
                  <p>0</p>
                  <p>50</p>
                  <p>100</p>
                </span>

                <div className="relative rounded-[80px] w-56 h-2 bg-custom-white overflow-hidden">
                  <span
                    className={`block h-full w-[${detail.status}%] bg-yellow-400`}
                  />
                </div>

                <span className="w-full flex items-center justify-end text-custom-grey-2 text-sm font-bold mt-1">
                  <p>%</p>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {smallCardDetails.map((detail) => (
          <div
            className="bg-primary text-custom-white p-6 flex flex-col items-center w-full h-32"
            key={detail.name}
          >
            <p className="text-base font-medium">{detail.name}</p>
            <p className="text-5xl font-bold mt-2 text-center">
              {detail.data}&nbsp;<span className="font-medium text-2xl">{detail.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
