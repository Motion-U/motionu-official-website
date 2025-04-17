import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import LogoImage from "./LogoImage";

const FooterNew = () => {
	return (
		<footer className="w-full bg-sky-500 text-white border border-t-gray-300 py-10 mt-10 flex items-center justify-center">
			<div className="w-full max-w-7xl space-y-10">
				<div className="flex flex-row items-center justify-between">
					<div className="flex justify-center gap-2 sm:gap-7 font-bold text-xs sm:text-xl">
						<a href="#">Home</a>
						<a href="#">Business</a>
						<a href="#">About</a>
						<a href="#">FAQ</a>
						<a href="#">Careers</a>
						<a href="#">Contact</a>
					</div>
					<div className="flex gap-4 text-xs sm:text-xl">
						<a href="https://www.instagram.com/motionu.kict/">
							<FaInstagram />
						</a>
						<a href="https://www.tiktok.com/@motionu.kict">
							<FaTiktok />
						</a>
						<a href="https://twitter.com/MotionUkict">
							<FaTwitter />
						</a>
						<a href="https://www.linkedin.com/company/motionukict/">
							<FaLinkedin />
						</a>
					</div>
				</div>

				<hr />

				<div className="flex flex-row items-center justify-between">
					<div className="flex gap-2 sm:gap-7 font-bold text-xs sm:text-xl">
						<a href="#">Terms & Conditions</a>
						<a href="#">Privacy Policy</a>
						<a href="#">Sharing Settings</a>
						<a href="#">Web Accessibility</a>
					</div>
					<LogoImage />
				</div>
			</div>
		</footer>
	);
};

export default FooterNew;
