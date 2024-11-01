import Header from "@/components/header";

export default function QandA() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Q&amp;A</h1>
      </main>
    </div>
  );
}
