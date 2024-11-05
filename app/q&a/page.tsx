import Header from "@/components/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { questions } from "@/lib/consts";

export default function QandA() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Q&amp;A</h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-center mb-8">Some blurb about Q&A?</p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {questions.map((q) => (
            <AccordionItem key={q.question} value={q.question}>
              <AccordionTrigger>{q.question}</AccordionTrigger>
              <AccordionContent>{q.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
