import Image from "next/image";
const designWorks = [
  {
    id: 0,
    link: "https://www.lovers.company/",
    description: "Lovers",
    client: "Lovers Company",
  },
  {
    id: 1,
    link: "https://medfakes.voxukraine.org/en",
    description: "Detox from propaganda | Database of medical fakes",
    client: "VoxUkraine",
  },
  {
    id: 2,
    link: "https://russiandisinfo.voxukraine.org/en",
    description: "Propaganda Dairy",
    client: "VoxUkraine",
  },
  {
    id: 3,
    link: "https://rusdisinfo.voxukraine.org/",
    description: "Propaganda Dairy | Russian fakes and disinformation",
    client: "VoxUkraine",
  },
  {
    id: 4,
    link: "https://enanomapper.adma.ai/templates/",
    description: "Template Designer",
    client: "Idea Consult",
  },
  {
    id: 5,
    link: "https://spectra.adma.ai/search/",
    description: "Sepectra Search",
    client: "Idea Consult",
  },
  //   https://spectra.adma.ai/search/
];

function DesignPage() {
  return (
    <div className="mx-4">
      <Image
        className="absolute top-4 left-30 dark:invert z-[-1]"
        src="/sergey.png"
        alt="Sergey"
        width={200}
        height={200}
      />
      <div className="mb-12">
        <p className="text-3xl md:text-4xl mt-30 mr-10">
          Hi! I’m Sergey — a designer and developer. For years I was focused on
          creating websites, web applications as well as books covers, posters,
          catalogs and so on. The most interesting aspect of a designer's work
          is discipline. Typography, grids, and modular systems: every decision
          is based on these principles, which are the main guidelines in the
          whole workflow. Below are the latest projects I have worked on.
          Please,{" "}
          <a
            className="text-orange-700 hover:underline"
            href="mailto:sergesoroka@gmail.com"
          >
            let's get in touch.
          </a>
        </p>
      </div>
      <div className="">
        {designWorks.map((work) => (
          <div className="mb-6 ml-20" key={work.id}>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              {work.description}
            </a>
            <p className="text-sm text-gray-600">Client: {work.client}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignPage;
