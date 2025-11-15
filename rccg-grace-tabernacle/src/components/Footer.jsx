import { Facebook, Twitter, Instagram, Youtube} from "lucide-react";

export default function Footer() {
  return (
        <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-slate-100 py-12 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                        RCCG Grace Tabernacle
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                        Raising a people of grace, truth, and power. Join us as we worship
                        and grow together in Christ.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Events</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Ministries</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4">
                        Contact Us
                    </h4>
                    <div className="space-y-1 text-sm text-slate-300">
                        <p>Email: info@gracetabernacle.org</p>
                        <p>Phone: +234 800 123 4567</p>
                        <p>Address: Ifedapo Cooperative Building, Asolo, Ibadan.</p>
                    </div>

                    <div className="flex space-x-5 mt-6">
                        <a href="#" className="text-slate-400 hover:text-[#1877F2] transition">
                            <Facebook size={22} />
                        {/* <SocialIcon url="www.facebook.com" size={22} /> */}
                        </a>
                        <a href="#" className="text-slate-400 hover:text-[#1DA1F2] transition">
                            <Twitter size={22} />
                        {/* <SocialIcon url="www.twitter.com" size={22} /> */}
                        </a>
                        <a href="#" className="text-slate-400 hover:text-[#E4405F] transition">
                            <Instagram size={22} />
                        {/* <SocialIcon url="www.instagram.com" size={22} /> */}
                        </a>
                        <a href="#" className="text-slate-400 hover:text-[#FF0000] transition">
                            <Youtube size={22} />
                        {/* <SocialIcon url="www.youtube.com" size={22} /> */}
                        </a>
                        {/* <a href="#" className="text-slate-400 hover:text-[#D14836] transition">
                        <SocialIcon url="www.twitter.com" size={22} />
                        </a> */}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} RCCG Grace Tabernacle. All rights reserved.
            </div>
        </footer>
    );
}
