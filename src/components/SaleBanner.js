import React from "react";

export default function SaleBanner() {
  return (
    <div className="bg-black 	grid grid-cols-3	">
      <button className="text-white">Check collection</button>
      <p className="text-white text-center	">
        NEW HERE? Get 20% off EVERYTHING!{" "}
      </p>
      <button className="text-white">Start shopping</button>
    </div>
  );
}
