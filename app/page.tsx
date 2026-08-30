import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid grid-cols-1 gap-5 gap-y-24 md:grid-cols-2 lg:grid-cols-3 ">
        <Card
          src="/house_roofs.png"
          alt="The Roofs"
          width={726}
          height={726}
          priority
          description="The Roofs — 2026 | Acrylic on canvas, 20&times;20"
        />

        <Card
          src="/house_roofs_1.png"
          alt="Next.js logo"
          width={726}
          height={889}
          priority
          description="The Roofs — 2026 | Acrylic on canvas, 25&times;30"
        />

        <Card
          src="/house_roofs_2.png"
          alt="Next.js logo"
          width={726}
          height={889}
          priority
          description="The Roofs — 2026 | Acrylic on canvas, 25&times;30"
        />

        <Card
          src="/town_1.png"
          alt="Town"
          width={726}
          height={889}
          priority
          description="The Roofs — 2026 | Acrylic on canvas, 25&times;30"
        />

        <Card
          src="/house_roofs_3.png"
          alt="Next.js logo"
          width={726}
          height={889}
          priority
          description="The Roofs — 2026 | Acrylic on canvas, 25&times;30"
        />

        <Card
          src="/house_roofs_4.png"
          alt="Roofs"
          width={726}
          height={889}
          priority
          description="The Roofs — 2026 | Acrylic on canvas, 30&times;40"
        />

        <Card
          src="/house_roofs_5.png"
          alt="Roofs"
          width={726}
          height={889}
          priority
          description="The Roofs — 2026 | Acrylic on canvas, 15&times;20"
        />
      </div>
    </main>
  );
}
