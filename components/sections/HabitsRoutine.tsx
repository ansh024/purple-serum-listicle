import Image from "next/image";
import { Container } from "@/components/ui";
import confidence from "@/public/images/confidence.png";

export default function HabitsRoutine() {
  return (
    <section className="mt-14 sm:mt-20">
      <Container size="wide">
        {/* Mobile: heading → image → copy (DOM order, no reordering needed).
            Desktop: image left, heading + copy stacked on the right. */}
        <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center md:grid md:max-w-none md:grid-cols-2 md:items-center md:gap-x-14 md:gap-y-0 md:text-left">
          <h3 className="font-serif text-xl leading-snug text-ink sm:text-2xl md:col-start-2 md:row-start-1">
            You can&rsquo;t give up your morning coffee.{" "}
            <span className="text-purple-600">You can change your routine.</span>
          </h3>

          <figure className="overflow-hidden rounded-4xl shadow-card ring-1 ring-purple-100 md:col-start-1 md:row-span-2 md:row-start-1">
            <Image
              src={confidence}
              alt="A woman hesitant to smile with yellow teeth, then smiling confidently and widely after using purple serum."
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 512px"
              placeholder="blur"
            />
          </figure>

          <p className="text-base leading-relaxed text-ink sm:text-lg md:col-start-2 md:row-start-2">
            Tea, coffee, curries, and smoking are what stain your teeth in the
            first place — that&rsquo;s not changing anytime soon. What can
            change is the 60 seconds after: a swipe of purple serum before you
            head out, and the stains stay concealed.
          </p>
        </div>
      </Container>
    </section>
  );
}
