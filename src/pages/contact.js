import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "@/components/social-icons";

export default function Contact() {
  return (
    <>
      <div className="h-screen grid grid-cols-4 relative">
        <div className="col-span-2 bg-white">
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
          {/* Contact Form */}
          <div className="mx-16 pt-4">
            <div className="flex-col">
              <div className="flex w-full pl-4">
                <span className="relative inline-flex items-center text-stone-400 justify-center">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    width="150"
                    height="75"
                    className="absolute"
                  >
                    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    width="150"
                    height="75"
                    className="absolute ml-12"
                  >
                    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                <h2 className="text-black ml-12 text-5xl font-extrabold">
                  CONTACTEZ
                </h2>
              </div>
              <svg className="h-16 w-full">
                <text
                  x="50%"
                  y="60%"
                  fontFamily="'Roboto', sans-serif"
                  fontSize="48"
                  fontWeight="bold"
                >
                  <tspan
                    letterSpacing="4"
                    opacity={1}
                    fontStyle="italic"
                    fill="transparent"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    NOUS
                  </tspan>
                </text>
              </svg>
            </div>
            <form className="space-y-4">
              <div className="flex space-x-4 justify-between">
                {" "}
                <div className="w-full">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="nom"
                    className="mt-1 block w-full p-2 border bg-zinc-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    id="prénom"
                    name="prénom"
                    placeholder="prénom"
                    className="mt-1 block w-full p-2 border bg-zinc-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="mt-1 block w-full p-2 border bg-zinc-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border bg-zinc-100 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-2 bg-neutral-800 p-4">
          {/* Content for the smaller 1/4 section */}
        </div>

        <div className="fixed right-0">
          {/* Content for the smaller 1/4 section */}
          <div className="transform translate-y-48 translate-x-4 rotate-90 font-bold text-lg tracking-widest">
            <p>
              &nbsp;FONDÉ EN 2020&nbsp;
              <span className="text-red-500"> •</span>
            </p>
            <p>
              IRONUMAN&nbsp;
              <span className="text-gray-500"> • • •</span>
              <span className="text-red-500"> •</span>
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 m-4">
        <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}`}>
          {" "}
          {/* Update the href with your next page link */}
          <Image
            src="/images/arrow-right.png" // Path to your arrow image
            alt="Next Page"
            width={50} // Adjust width as needed
            height={50} // Adjust height as needed
          />
          <span className="text-5xl tracking-wide font-semibold text-red-500">
            05
          </span>
        </Link>
      </div>
      <SocialIcons />
    </>
  );
}
