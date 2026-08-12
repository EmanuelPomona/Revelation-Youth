import type { CommunitySection } from "@/data/community";
import SectionLabel from "@/components/common/SectionLabel";
import EditorialHeading from "@/components/common/EditorialHeading";

interface CommunityFormSectionProps {
  section: CommunitySection;
}

/**
 * One connection section (Prayer / Questions / Testimonies / Discussions).
 * Static UI — no submission logic yet. The submit button is visually present
 * but disabled with a "coming soon" note. See docs/COMPONENT_SPEC.md §7.
 */
export default function CommunityFormSection({
  section,
}: CommunityFormSectionProps) {
  const nameId = `${section.id}-name`;
  const messageId = `${section.id}-message`;

  return (
    <section
      aria-labelledby={`${section.id}-heading`}
      className="rounded-revy border border-revy-stone/25 bg-revy-ivory p-7 sm:p-9"
    >
      <SectionLabel>{section.label}</SectionLabel>

      <EditorialHeading
        as="h2"
        size="sm"
        id={`${section.id}-heading`}
        className="mt-4"
      >
        {section.title}
      </EditorialHeading>

      <p className="mt-3 font-sans text-sm leading-relaxed text-revy-ink-soft">
        {section.description}
      </p>

      {/* Static form — no submission logic in MVP */}
      <div className="mt-8 space-y-5">
        <div>
          <label
            htmlFor={nameId}
            className="block font-sans text-xs font-medium uppercase tracking-label text-revy-ink-muted"
          >
            Your name
          </label>
          <input
            id={nameId}
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            className="mt-2 w-full rounded-md border border-revy-stone/40 bg-revy-base px-4 py-3 font-sans text-sm text-revy-ink placeholder:text-revy-ink-muted/50 transition-colors focus:border-revy-forest/40 focus:outline-none focus:ring-2 focus:ring-revy-forest/10"
          />
        </div>

        <div>
          <label
            htmlFor={messageId}
            className="block font-sans text-xs font-medium uppercase tracking-label text-revy-ink-muted"
          >
            Message
          </label>
          <textarea
            id={messageId}
            rows={5}
            placeholder={section.messagePlaceholder}
            className="mt-2 w-full resize-none rounded-md border border-revy-stone/40 bg-revy-base px-4 py-3 font-sans text-sm text-revy-ink placeholder:text-revy-ink-muted/50 transition-colors focus:border-revy-forest/40 focus:outline-none focus:ring-2 focus:ring-revy-forest/10"
          />
        </div>

        <div>
          {/* type="button" + disabled — no form submission in MVP */}
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center rounded-full bg-revy-stone/25 px-6 py-3 font-sans text-sm font-medium text-revy-ink-muted"
          >
            Submit
          </button>
          <p className="mt-2 font-sans text-xs italic text-revy-ink-muted">
            Form submissions coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
