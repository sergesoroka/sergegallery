import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-5 my-13">
      <header className="flex mb-24  items-center justify-start gap-24">
        <h1>Serge Soroka</h1>
        <h2 className="">The Roofs</h2>
      </header>
      <div className="grid grid-cols-1 gap-5 gap-y-24 md:grid-cols-2 lg:grid-cols-3 ">
        <div>
          <Image
            className="dark:invert"
            src="/house_roofs.png"
            alt="Next.js logo"
            width={726}
            height={726}
            priority
          />
          <p className="mt-3 text-sm text-muted-foreground">
            The Roofs — 2026 | Acrylic on canvas, 25&times;30
          </p>
        </div>

        <div>
          <Image
            className="dark:invert"
            src="/house_roofs_1.png"
            alt="Next.js logo"
            width={726}
            height={889}
            priority
          />
          <p className="mt-3 text-sm text-muted-foreground">
            The Roofs — 2026 | Acrylic on canvas, 25&times;30
          </p>
        </div>
        <div>
          <Image
            className="dark:invert"
            src="/house_roofs_2.png"
            alt="Next.js logo"
            width={726}
            height={889}
            priority
          />
          <p className="mt-3 text-sm text-muted-foreground">
            The Roofs — 2026 | Acrylic on canvas, 25&times;30
          </p>
        </div>

        <div>
          <Image
            className="dark:invert"
            src="/town_1.png"
            alt="Town"
            width={726}
            height={889}
            priority
          />
          <p className="mt-3 text-sm text-muted-foreground">
            The Roofs — 2026 | Acrylic on canvas, 25&times;30
          </p>
        </div>
        <div>
          <Image
            className="dark:invert"
            src="/house_roofs_3.png"
            alt="Next.js logo"
            width={726}
            height={889}
            priority
          />
          <p className="mt-3 text-sm text-muted-foreground">
            The Roofs — 2026 | Acrylic on canvas, 25&times;30
          </p>
        </div>
        <div>
          <Image
            className="dark:invert"
            src="/house_roofs_4.png"
            alt="Roofs"
            width={726}
            height={889}
            priority
          />
          <p className="mt-3 text-sm text-muted-foreground">
            The Roofs — 2026 | Acrylic on canvas, 25&times;30
          </p>
        </div>
      </div>
    </main>
  );
}
