import Header from "@/components/header";
import InfoBox from "@/components/info-box";

export default function TheDay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">The Day</h1>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="mb-4">
            After 11 years, we&apos;re extremely excited to share our day with
            everybody in our lives that supported us along the way.
          </p>
          <p className="mb-4">
            Please bring yourselves and good vibes and you can expect lots of
            fun, geeky undertones and a hell of a celebration
          </p>
          <p>Deets below!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <InfoBox title="Where?" description="Gileston Manor" />
          <InfoBox title="When?" description="Friday 29th August 2025" />
          <InfoBox
            title="Travel?"
            description="Car, Taxis, Trains, Buses and Airport"
          />
          <InfoBox
            title="Accommodation?"
            description="Rooms on-site first come first served"
          />
          <InfoBox title="Gifts?" description="Coming soon" />
          <InfoBox
            title="Disclaimers"
            description="Dogs, Music, Drinks, Rules"
          />
        </div>
        <div className="max-w-4xl mx-auto mt-6">
          <InfoBox title="Day Schedule" description="Coming Soon" />
        </div>
      </main>
    </div>
  );
}
