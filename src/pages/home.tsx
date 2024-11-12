import Countdown from "@/components/countdown";
import Header from "@/components/header";
import { weddingDate } from "@/lib/consts";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Polly &amp; Luke&apos;s Wedding
            </h2>
            <p className="text-lg text-gray-600">
              Gileston Manor
              <br />
              Friday 29th August 2025
            </p>
            <Countdown targetDate={weddingDate} />
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-[500px] h-[300px] bg-gray-200 rounded-lg shadow-md"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
