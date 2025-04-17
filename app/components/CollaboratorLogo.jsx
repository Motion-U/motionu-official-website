import Image from "next/image";

export default function CollaboratorLogo({ image, width, height}) {
  return (
    <Image
              src={image}
              width={width}
              height={height}
              className="rounded-full transition ease-in-out hover:scale-150"
            ></Image>
  );
}

