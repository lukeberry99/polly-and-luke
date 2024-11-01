"use client";

import { useEffect, useState } from "react";

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
    <div className="text-center mt-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Countdown</h3>
      <p className="text-3xl font-bold text-primary">{days} days</p>
    </div>
  );
}
