"use client";

import { useEffect, useState } from "react";

export function HeaderInfo() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setTime(new Date());
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return null;
  }

  return (
    <div className="fixed top-8 left-0 right-0 w-full px-8 flex justify-between items-center pointer-events-none z-40 text-sm font-mono text-zinc-400">
      <div>Asia/Jakarta</div>
      <div>
        {time.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
    </div>
  );
}
