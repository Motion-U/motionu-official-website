import Heading from "../components/Heading";
import Image from "next/image";

export default function about() {
  return (
    <section className="py-12">
      <div className=" lg:px-64 ">
        <div className="flex flex-col gap-8 justify-center animate-fade-down">
          <div className="mx-5 rounded-2xl border-1 shadow shadow-blue-300 p-6 ">
            <div className="text-center">
              <Heading text={"Background"}></Heading>
            </div>
            <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">
              Motion-U Club is a Special Interest Group (SIG) based in Kulliyyah
              of Information and Communication Technology (KICT) of
              International Islamic University Malaysia (IIUM). The Motion-U
              Club fosters a vibrant community where technology enthusiasts
              converge to innovate and embark on entrepreneurial journeys.
              Through workshops, talks, and hands-on projects, members explore
              the intersection of technology and entrepreneurship, equipped with
              skills and networks to shape the future of innovation and make
              meaningful impact.
            </p>
          </div>
          <div className="mx-5 rounded-2xl border-1 shadow shadow-blue-300 p-6 ">
            <div className="text-center">
              <Heading text={"Mission"}></Heading>
            </div>
            <ol className="text-wrap mt-3 leading-8 text-justify text-gray-700 m-3 list-decimal">
              <li className="">
                To offer thorough technical education, ensuring members gain
                proficiency in key IT areas like web and mobile app development
                through hands-on projects and workshops.
              </li>
              <li>
                To cultivate business skills among members through tailored
                training, seminars, and mentorship, empowering them with
                strategic planning, financial management, and market analysis
                expertise.
              </li>
              <li>
                To foster a culture of innovation and collaboration,
                facilitating idea exchange, interdisciplinary projects, and
                networking events to encourage creative problem-solving and
                exploration of new technologies.
              </li>
              <li>
                To provide mentorship by industry experts and resources for
                fundraising, legal compliance, and team building, ensuring
                members receive guidance and support to overcome challenges and
                achieve their entrepreneurial goals.
              </li>
              <li>
                To promote ethical and sustainable practices, emphasizing social
                responsibility and environmental sustainability in members'
                ventures, aiming to create positive social impact alongside
                financial success.
              </li>
            </ol>
          </div>
          <div className="mx-5 rounded-2xl border-1 shadow shadow-blue-300 p-6 ">
            <div className="text-center">
              <Heading text={"Vision"}></Heading>
            </div>
            <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">
              Motion-U Club envisions a future where aspiring technopreneurs are
              equipped with a diverse range of IT skills, including web and
              mobile application development, among others, enabling them to
              create lucrative business opportunities. Complementing these
              technical competencies, Motion-U Club also instills robust
              business skills, fostering a holistic approach to
              entrepreneurship. Through mentorship and a supportive community,
              Motion-U Club aims to cultivate innovative leaders who seamlessly
              integrate technical expertise with strategic thinking, poised to
              revolutionize industries and drive impactful change in the dynamic
              landscape of technology-driven entrepreneurship.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 bg-gradient-to-br from-sky-300 via-white to-sky-200 w-full py-10">
        <Heading text={"Motion-U Club Members 2024/2025"}></Heading>
        <div className="flex justify-center mt-5 mx-5">
          <Image
            src="/images/org_chart.png"
            width={1200}
            height={1200}
            className="rounded-2xl border-4 border-sky-700 shadow-lg "
          ></Image>
        </div>
      </div>
    </section>
  );
}
