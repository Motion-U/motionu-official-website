import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectPostCard({
  title,
  date,
  image,
  link,
  credit,
  description,
}) {
  return (
    <a href={link} className="hover:opacity-95">
      <div className="rounded-2xl shadow-xl">
        {/* <Image src={image} height={1100} width={1500} className="rounded-t-2xl"></Image> */}
        <img src={image} className="w-full" />
        <div className="p-3 py-4">
          <h2 className="text-2xl text-sky-800 font-bold">{title}</h2>
          <p className="text-gray-500 text-justify">{description}</p>
          <div>
            <div className="flex justify-between items-center pt-5 ">
              <div>{date}</div>
              <div>Credit to : {credit}</div>
              <div className="flex items-center">
                <div>More&nbsp;</div>
                <div>
                  <FaArrowRight></FaArrowRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
