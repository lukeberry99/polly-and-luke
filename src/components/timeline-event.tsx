export default function TimelineEvent({
  date,
  title,
  description,
  isLeft,
}: {
  date: string;
  title: string;
  description: string;
  isLeft: boolean;
}) {
  return (
    <div
      className={`mb-16 flex justify-between items-center w-full ${isLeft ? "flex-row-reverse" : ""}`}
    >
      <div className="order-1 w-5/12">
        <div className={`p-4 ${isLeft ? "text-right" : "text-left"}`}>
          <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-600">
            {description}
          </p>
        </div>
      </div>
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-16 h-16 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{date}</h1>
      </div>
      <div className="order-1 w-5/12"></div>
    </div>
  );
}
