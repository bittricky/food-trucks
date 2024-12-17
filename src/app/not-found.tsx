"use client";

import Link from "next/link";
import { Truck } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900 p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-9xl font-bold animate-bounce-slow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-300 border-4 border-yellow-300 rounded-xl px-4">
              404
            </span>
          </h1>
          <h2 className="text-3xl font-semibold text-white">
            Uh-oh! Take a wrong turn did we?
          </h2>
          <div className="space-y-2 text-purple-200">
            <p className="text-xl">
              Looks like this food truck ended up on the wrong street...
            </p>
            <p className="text-lg italic">
              (Probably chasing that perfect parking spot!)
            </p>
          </div>
          <div className="mt-8 animate-pulse">
            <Link
              href="/"
              className="px-6 py-3 bg-yellow-300 text-purple-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
            >
              <span>Find Other Food Trucks</span>
              <Truck className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
