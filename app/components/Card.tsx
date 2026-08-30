import Image from "next/image";

type CardProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  description: string;
};

function Card({ src, alt, width, height, priority, description }: CardProps) {
  return (
    <div>
      <Image
        className="dark:invert"
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
      />
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default Card;
