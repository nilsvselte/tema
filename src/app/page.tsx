"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState(100);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clear the timer when component is unmounted or countdown reaches 0
      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center mt-72 justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>{countdown != 0 && <p className="text-9xl">{countdown}</p>}</div>
      <div>
        {countdown > 95 && countdown < 98 && (
          <>
            <p>Jaa, dette tok jo litt tid</p>
          </>
        )}
        {countdown > 70 && countdown <= 95 && (
          <>
            <p>Du får nesten ta opp mobilen og følge @x_morsom i mellomtiden</p>
          </>
        )}
        {countdown > 50 && countdown <= 70 && (
          <>
            <p>Så har du tid til å lese resten av posten på Slack.</p>
          </>
        )}
        {countdown > 40 && countdown <= 50 && (
          <>
            <p>Hva med å ta en kaffe?</p>
          </>
        )}
        {countdown > 30 && countdown <= 40 && (
          <>
            <p>...eller en øl?</p>
          </>
        )}
        {countdown > 20 && countdown <= 30 && (
          <>
            <p>Spennendeeeeee....</p>
          </>
        )}
        {countdown > 10 && countdown <= 20 && (
          <>
            <p>...</p>
          </>
        )}

        {countdown === 0 && (
          <>
            <p className="text-5xl font-bold">SANG</p>
            <div className="text-lg">
              <p>Hæææ?? hva skal det bety?</p>
              <p>Det betyr at du skal ta på kostyme som matcher en sang</p>
              <p>
                For eksempel hvis du liker "raining men" kan du ta på en skjorte
                med menn. Og hvis du liker "I'm blue" kan du ta på blå klær.
              </p>
              <p className="font-bold">LYKKE TIL!! Vi sees</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
