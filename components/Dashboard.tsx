import { Header, Highlights, WeatherCard } from ".";

export default function Dashboard() {
  return (
    <div className="bg-secondary flex flex-col p-6 mx-auto">
      <Header />
      <div className="flex gap-6 mt-6">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <WeatherCard key={i} />
        ))}
      </div>
      <Highlights />

      <footer className="mt-auto">
        <p className="font-montserrat text-base font-medium text-center text-custom-grey-2">
          created by&nbsp;
          <a
            href="https://www.linkedin.com/in/mohamed-imran-2495951a2"
            target="_blank"
            className="font-bold underline"
          >
            Mohamed Imran
          </a>{" "}
          - devChallenges.io
        </p>
      </footer>
    </div>
  );
}
