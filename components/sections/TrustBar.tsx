import { Container } from "@/components/ui";
import { BadgeCheckIcon } from "@/components/icons";

export default function TrustBar() {
  return (
    <section className="mt-6 sm:mt-7">
      <Container size="wide">
        <div className="flex items-center justify-center gap-4 rounded-4xl bg-gradient-to-br from-purple-600 to-purple-800 px-6 py-7 text-center shadow-card sm:gap-5 sm:px-10 sm:py-9">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-purple-600 shadow-soft sm:h-14 sm:w-14">
            <BadgeCheckIcon width={26} height={26} />
          </span>
          <p className="text-lg font-semibold leading-snug text-white sm:text-2xl">
            Science-backed, clinically proven instant teeth whitening
          </p>
        </div>
      </Container>
    </section>
  );
}
