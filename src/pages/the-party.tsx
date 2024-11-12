import Header from "@/components/header";
import PartyMember from "@/components/party-member";

export default function TheParty() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">The Party</h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-center mb-8">The ultimate showdown</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Groom&apos;s party
            </h2>
            <PartyMember
              name="Luke"
              role="Groom"
              imageUrl="https://placehold.co/150x150"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Bride&apos;s party
            </h2>
            <PartyMember
              name="Polly"
              role="Bride"
              imageUrl="https://placehold.co/150x150"
            />
            <PartyMember
              name="Callie"
              role="Maid of Honour"
              imageUrl="https://placehold.co/150x150"
            />
            <PartyMember
              name="Emma"
              role="Bridesmaid"
              imageUrl="https://placehold.co/150x150"
            />
            <PartyMember
              name="Mady"
              role="Bridesmaid"
              imageUrl="https://placehold.co/150x150"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
