import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const containerLink =
  "https://www.target.com/p/rubbermaid-20pc-takealongs-meal-prep-divided-rectangle-containers-set/-/A-76539604#lnk=sametab";

const youProvide = [
  "Your kitchen",
  "1 pan, 1 pot, 1 sieve",
  "Small use of salt and oil",
  "Storage of 10 meal prep containers",
];

const iProvide = [
  "$25 / hour = $75 for 3 hours",
  "Clean the dishes",
  "Take the trash out",
];

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-stone-50 text-stone-950">
      <section className="mx-auto flex h-full w-full max-w-6xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-stone-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-semibold tracking-normal text-stone-950 sm:text-4xl">
            Meal Prep Value Exchange
          </h1>
          <div className="flex flex-wrap gap-3">
            <Button href="mailto:maddoxsciuchetti@gmail.com" variant="secondary">
              Email me
            </Button>
            <Button href="tel:+4915123180706">Call me</Button>
          </div>
        </header>

        <div className="grid min-h-0 flex-1 gap-5 py-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <Card className="flex min-h-0 flex-col justify-between p-6 text-stone-950">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-stone-500">
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal sm:text-3xl">
                Maddox Sciuchetti
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-stone-700">
                I provide three hours of paid meal prep support and leave the
                kitchen reset afterward.
              </p>
            </div>
            <div className="mt-6 grid gap-3 text-sm">
              <a
                className="rounded-md bg-stone-100 px-4 py-3 font-medium text-stone-950 transition hover:bg-stone-200"
                href="mailto:maddoxsciuchetti@gmail.com"
              >
                maddoxsciuchetti@gmail.com
              </a>
              <a
                className="rounded-md bg-stone-100 px-4 py-3 font-medium text-stone-950 transition hover:bg-stone-200"
                href="tel:+4915123180706"
              >
                +49 15123180706
              </a>
            </div>
          </Card>

          <div className="grid min-h-0 gap-5">
            <ExchangeCard
              title="What I provide"
              description="Clear compensation and cleanup after the prep session."
              items={iProvide}
            />
            <ExchangeCard
              title="What you provide"
              description="The kitchen setup and storage needed for a focused meal prep session."
              items={youProvide}
              linkLabel="View container size"
              linkHref={containerLink}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ExchangeCard({
  title,
  description,
  items,
  linkLabel,
  linkHref,
}: {
  title: string;
  description: string;
  items: string[];
  linkLabel?: string;
  linkHref?: string;
}) {
  return (
    <Card className="p-5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <ol className="space-y-2">
        {items.map((item, index) => (
          <li className="flex gap-3 text-stone-800" key={item}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-stone-100 text-sm font-semibold text-stone-700">
              {index + 1}
            </span>
            <span className="pt-0.5 leading-7">
              {item}
              {index === 3 && linkHref ? (
                <>
                  {" "}
                  <a
                    className="font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
                    href={linkHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {linkLabel}
                  </a>
                </>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
    </Card>
  );
}
