import Header from "@/components/header";
import RSVPForm from "@/components/rsvp-form";

export default function RSVP() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">RSVP</h1>
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-center mb-8">
            We're excited to celebrate with you! Please fill out this form to
            let us know if you'll be joining us.
          </p>
        </div>
        <RSVPForm />
      </main>
    </div>
  );
}
