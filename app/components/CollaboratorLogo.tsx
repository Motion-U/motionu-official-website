import Image from "next/image";

interface Props {
  image: string;
  width: number;
  height: number;
  name: string;
}

export default function CollaboratorLogo({ image, width, height, name }: Props) {
  return (
    <Image
      src={image}
      width={width}
      height={height}
      alt={name}
      className="rounded-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    />
  );
}
