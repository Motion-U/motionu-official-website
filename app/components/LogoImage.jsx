import Image from "next/image";

export default function LogoImage() {
  return (
    <a href="/">
      <Image src="/images/motionu.png" width={50} height={50}></Image>
    </a>
  );
}
