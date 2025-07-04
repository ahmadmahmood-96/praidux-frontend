import Image from "next/image";
import Link from "next/link";
import footerLinks from "@/app/links";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#096AD8] via-[#34749b] to-[#4194b4] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <div className="bg-white/40 backdrop-blur-md p-2 rounded-xl border border-white/20 mb-4">
            <Link href="/">
              <Image
                src="/hikar-logo.png"
                alt="Hikar Logo"
                width={160}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          <span className="text-sm text-white">
            &copy; 2024 Hikar Trading Co. All rights reserved.
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-white mb-3">
            Quick Links
          </span>
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-white hover:text-[#EAF3FF] mb-2 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Policies */}
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-white mb-3">Auction</span>
          <Link
            href="#"
            className="text-sm text-white hover:text-[#EAF3FF] mb-2 transition-colors"
          >
            Take Part in Auction
          </Link>
        </div>
      </div>
    </footer>
  );
}
