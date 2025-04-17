import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function page() {
  return (
    <section className="text-center flex flex-col flex-grow min-h-screen lg:text-left lg:mx-40 text-gray-700">
      <h1 className="text-3xl lg:text-6xl font-bold text-sky-800 inline-block mx-5 mt-10 lg:mt-20">
        Contact us!
      </h1>
      <div className="lg:w-1/2 m-5">
        <div className="flex justify-between my-8">
          <p className="font-semibold">Address</p>
          <p className="text-right">
            Level 1, Kulliyyah of Information and Communication Technology –
            KICT
          </p>
        </div>
        <hr />
        <div className="flex justify-between my-8">
          <p className="font-semibold">Get in touch</p>
          <a href="mailto:motionu.kict@gmail.com" className="text-right">motionu.kict@gmail.com</a>
        </div>
        <hr />
        <div className="flex justify-between my-8">
          <p className="font-semibold">Social media</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/motionu.kict/"
              className="inline-block text-xl"
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              href="https://www.tiktok.com/@motionu.kict"
              className="inline-block text-xl"
            >
              <FaTiktok></FaTiktok>
            </a>
            <a
              href="https://twitter.com/MotionUkict"
              className="inline-block text-xl"
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              href="https://www.linkedin.com/company/motionukict/"
              className="inline-block text-xl"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}
