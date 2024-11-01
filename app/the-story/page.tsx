import Header from "@/components/header";
import TimelineEvent from "@/components/timeline-event";
import { events } from "@/lib/consts";

export default function TheStory() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">The Story</h1>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="mb-4">
            After being introduced online through a friend (shoutout to Sam
            Barton!) playing League of Legends on our computers, it wasn't until
            3 months later that we finally met up in person for a joint birthday
            bash. We both knew we had feelings for each other and after meeting
            up a few times over the next two months, we realized we were
            actually just dating. After a dramatic night out in good ol'
            Bridgwater, Luke ran after Polly and the rest is history.
          </p>
          <p>
            After learning how to cook risotto together, pay bills together,
            love through loss, explore cities, complete degrees, build careers
            and raise two fluffballs together, we're ready to tie the knot and
            continue the roller coaster life we've built together.
          </p>
        </div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          {events.map((event, eventIdx) => (
            <TimelineEvent
              key={eventIdx}
              {...event}
              isLeft={eventIdx % 2 === 1}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
