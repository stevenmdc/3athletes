// Import necessary modules or dependencies
import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "@/components/social-icons";
import AnimatedLogo from "@/components/logo";

// Define the Club page component
export default function Entrainements() {
  return (
    <>
      <div className="h-screen grid grid-cols-4 relative">
        <div className="col-span-3 bg-neutral-800 p-4">
          {/* Content for the larger 3/4 section */}
          <div className="flex w-full pl-4">
            <Image
              src="/images/logo-3athlete-black.png"
              alt="Logo"
              width={50}
              height={50}
              className="m-4" // Add class for animation
            />
          </div>
        </div>

        <div className="col-span-1 bg-white p-4">
          {/* Content for the smaller 1/4 section */}
          <div className="transform translate-y-48 translate-x-24 rotate-90 font-bold text-lg tracking-widest">
            <p className="animate-slidein">
              &nbsp;FONDÉ EN 2020&nbsp;
              <span className="text-red-500"> •</span>
            </p>
            <p className="animate-slidein">
              IRONUMAN&nbsp;
              <span className="text-gray-500"> • • •</span>
              <span className="text-red-500"> •</span>
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 m-4">
        <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/nous-rejoindre`}>
          {" "}
          {/* Update the href with your next page link */}
          <Image
            src="/images/arrow-right.png" // Path to your arrow image
            alt="Next Page"
            width={50} // Adjust width as needed
            height={50} // Adjust height as needed
          />
          <span className="text-5xl tracking-wide font-semibold text-red-500">
            03
          </span>
        </Link>
      </div>
      <SocialIcons />
    </>
  );
}
