import type { Faq } from "@/lib/site";

type FaqListProps = {
  faqs: Faq[];
};

export default function FaqList({ faqs }: FaqListProps) {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="card group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <span className="text-lg font-semibold leading-7 text-[color:var(--heading)]">
              {faq.question}
            </span>
            <span className="mt-1 text-xl text-[color:var(--accent)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
