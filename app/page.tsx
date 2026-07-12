import { Badge } from "@/components/ui/badge";
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
    <main className="min-h-screen bg-stone-50 text-stone-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-4 border-b border-stone-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Badge>Meal prep value exchange</Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-normal text-stone-950 sm:text-5xl lg:text-6xl">
              Simple meal prep help in exchange for kitchen access.
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="mailto:maddoxsciuchetti@gmail.com" variant="secondary">
              Email me
            </Button>
            <Button href="tel:+4915123180706">Call me</Button>
          </div>
        </header>

        <div className="grid flex-1 gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <Card className="flex flex-col justify-between bg-emerald-950 p-7 text-white">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-200">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
                Maddox Sciuchetti
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-emerald-50">
                I provide three hours of paid meal prep support and leave the
                kitchen reset afterward.
              </p>
            </div>
            <div className="mt-10 grid gap-3 text-base">
              <a
                className="rounded-md bg-white/10 px-4 py-3 font-medium text-white transition hover:bg-white/15"
                href="mailto:maddoxsciuchetti@gmail.com"
              >
                maddoxsciuchetti@gmail.com
              </a>
              <a
                className="rounded-md bg-white/10 px-4 py-3 font-medium text-white transition hover:bg-white/15"
                href="tel:+4915123180706"
              >
                +49 15123180706
              </a>
            </div>
          </Card>

          <div className="grid gap-6">
            <ExchangeCard
              title="What you provide"
              description="The kitchen setup and storage needed for a focused meal prep session."
              items={youProvide}
              linkLabel="View container size"
              linkHref={containerLink}
            />
            <ExchangeCard
              title="What I provide"
              description="Clear compensation and cleanup after the prep session."
              items={iProvide}
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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <ol className="space-y-3">
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
