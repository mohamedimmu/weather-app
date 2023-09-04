import { Dashboard, WeatherSidebar } from "@/components";

export default function Home() {
  return (
    <main className="grid grid-cols-[0.32fr_0.68fr] h-screen bg-secondary">
      <WeatherSidebar />
      <Dashboard />
    </main>
  )
}
