import { useState, useEffect } from "react";

export default function Countdown({ targetDate }: { targetDate: Date }) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const days = Math.ceil(difference / (1000 * 3600 * 24));
      setDays(days);
    };

    calculateCountdown();

    const timer = setInterval(calculateCountdown, 1000 * 60 * 60);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative border-2 border-black p-4 mt-16 w-80 mx-auto">
      {/* Image positioned above the border */}
      <img
        src="/samoyed.png"
        alt="Dog with paws on the border"
        className="w-24 absolute -top-12 left-0"
      />
      <p className="text-3xl font-bold text-primary text-left">{days} days</p>
    </div>
  );
}
