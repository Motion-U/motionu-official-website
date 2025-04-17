"use client";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import LogoImage from "./LogoImage";

export default function Footer() {
	return (
		<footer className="relative left-0 bottom-0 w-full px-10 md:px-80 py-10 mt-10 bg-sky-500 text-white font-semibold hover:text-white/90 border border-t-gray-300">
			<div className="flex justify-between gap-8 py-5">
				<div className="flex justify-center gap-7">
					<a href="#">Home</a>
					<a href="#">Business</a>
					<a href="#">About</a>
					<a href="#">FAQ</a>
					<a href="#">Careers</a>
					<a href="#">Contact</a>
				</div>
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
			<div className="flex justify-between items-center gap-7 py-5">
				<div className="flex gap-7 ">
					<a href="">Terms & Conditions</a>
					<a href="">Privacy Policy</a>
					<a href="">Sharing Settings</a>
					<a href="">Web Accessibility</a>
				</div>
				<LogoImage></LogoImage>
			</div>
		</footer>
	);
}
