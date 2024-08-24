// Import necessary modules or dependencies
import { SocialIcons } from '@/components/social-icons';
import Image from 'next/image';
import Link from 'next/link';

// Define the Club page component
export default function JoinUs() {
  return (
    <>
      <div className="h-screen grid grid-cols-4 relative">
        <div className="col-span-3 bg-neutral-800 p-4">
          {/* Content for the larger 3/4 section */}
          <div className="flex w-full pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 50"
              width={250}
              height={50}
            >
              <text
                x="0"
                y="50%"
                fontFamily="'Roboto', sans-serif"
                fontSize="24"
                fontWeight="bold"
                dominantBaseline="middle"
                alignmentBaseline="middle"
                fill="whitesmoke"
              >
                <tspan x="0" dy="0" letterSpacing="2">
                  BREST
                </tspan>
                <tspan x="95" dy="0" fontWeight="normal">
                  Triathlon
                </tspan>
              </text>
            </svg>
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
        <h1 className="text-4xl font-bold text-center text-red-500 mt-8">
          Rejoignez-nous
        </h1>

        <div className="absolute right-[8%] bottom-0 overflow-hidden h-screen">
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
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}>
            {" "}
            {/* Update the href with your next page link */}
            <Image
              src="/images/arrow-right.png" // Path to your arrow image
              alt="Next Page"
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
            />
            <span className="text-5xl tracking-wide font-semibold text-red-500">
              04
            </span>
          </Link>
        </div>
        <SocialIcons />
    </>
  );
}
