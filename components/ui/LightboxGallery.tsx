"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// State-based modal — no external lib. Click a thumb to open at that index;
// Escape or click outside to close. Body scroll is locked while open. Focus
// jumps to the close button so keyboard users can dismiss without grabbing
// for the mouse.

export function LightboxGallery({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  if (images.length === 0) return null;

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="relative block w-full aspect-[4/3] overflow-hidden bg-stone-100 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:ring-orange"
              aria-label={`Open ${altPrefix} image ${i + 1} full size`}
            >
              <Image
                src={src}
                alt={`${altPrefix} image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${altPrefix} image ${openIndex + 1}`}
          className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setOpenIndex(null)}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream text-charcoal hover:bg-orange hover:text-cream transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cream"
            aria-label="Close image"
          >
            <X size={22} />
          </button>
          <div
            className="relative w-full h-full max-w-6xl max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex]}
              alt={`${altPrefix} image ${openIndex + 1}, full size`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
