import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Navigation from "@/components/Nav";
import AnimatedLogo from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="font-inter" style={{ fontFamily: inter }}>
      <section className="">
        <div className="h-screen grid grid-cols-4">
          <div className="col-span-3 bg-neutral-800 p-4">
            {/* Content for the larger 2/3 section */}
            <AnimatedLogo />
            <Navigation />
          </div>
          <div className="col-span-1 bg-white p-4">
            {/* Content for the smaller 1/3 section */}
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
          <div className="absolute right-[8%] overflow-hidden h-screen">
            <Image
              src="/images/Hero.png"
              alt="Hero"
              width={450} // Adjust the size as needed
              height={600} // Adjust the size as needed
              className="animate-slidein2"
            />
          </div>
        </div>
        <div className="fixed bottom-0 right-0 m-4">
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/le-club`}>
            {" "}
            {/* Update the href with your next page link */}
            <Image
              src="/images/arrow-right.png" // Path to your arrow image
              alt="Next Page"
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
            />
            <span className="text-5xl tracking-wide font-semibold text-red-500">
              01
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
