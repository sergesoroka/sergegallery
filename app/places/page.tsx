import Card from "../components/Card";
import Header from "../components/Header";

const placesPics = [
  {
    src: "/kharkiv_house.png",
    alt: "The Red Tree",
    width: 726,
    height: 726,
    priority: true,
    description: "The Red Tree — 2025 | Acrylic on canvas, 25×30",
  },
  {
    src: "/places_1.jpg",
    alt: "The Wall",
    width: 726,
    height: 726,
    priority: true,
    description: "The Wall — 2025 | Acrylic on canvas, 25×30",
  },
  {
    src: "/road_1.jpg",
    alt: "The Road",
    width: 726,
    height: 726,
    priority: true,
    description: "The Road — 2025 | Acrylic on canvas, 23.5×30",
  },
  {
    src: "/house_1.jpg",
    alt: "The Houses",
    width: 726,
    height: 726,
    priority: true,
    description: "The Houses — 2026 | Acrylic on canvas, 20×20",
  },
  {
    src: "/road_2.jpg",
    alt: "The Road",
    width: 726,
    height: 726,
    priority: true,
    description: "The Road — 2026 | Acrylic on canvas, 20×20",
  },
  {
    src: "/places_2.jpg",
    alt: "The Town",
    width: 726,
    height: 726,
    priority: true,
    description: "The Town — 2024 | Acrylic on canvas, 23.5×30",
  },
  {
    src: "/town_2.png",
    alt: "The Town",
    width: 726,
    height: 726,
    priority: true,
    description: "The Town — 2026 | Acrylic on canvas, 25×30",
  },
  {
    src: "/town_3.png",
    alt: "The Town",
    width: 726,
    height: 726,
    priority: true,
    description: "The Town — 2026 | Acrylic on canvas, 25×30",
  },
  {
    src: "/house_2.jpg",
    alt: "The Houses",
    width: 726,
    height: 726,
    priority: true,
    description: "The Houses — 2026 | Acrylic on canvas, 25×30",
  },
  {
    src: "/red_ground.jpg",
    alt: "The Red Ground",
    width: 726,
    height: 726,
    priority: true,
    description: "The Red Ground — 2021 | Acrylic on paper, 20×30",
  },
];

function PlacesPage() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 gap-5 gap-y-24 md:grid-cols-2 lg:grid-cols-3 ">
        {placesPics.map((pic, index) => (
          <Card
            key={index}
            src={pic.src}
            alt={pic.alt}
            width={pic.width}
            height={pic.height}
            priority={pic.priority}
            description={pic.description}
          />
        ))}
      </div>
    </div>
  );
}

export default PlacesPage;
