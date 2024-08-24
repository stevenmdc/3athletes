import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "./social-icons";

const Navigation = () => {
  return (
    <nav className="text-neutral-800 text-8xl font-bold p-4">
      <ul className="-mt-4 -space-y-2">
        <li className="flex group">
          <h1
            id="nav-titles"
            className="nav-titles stroke-1 text-slate-300 text-transparent cursor-pointer hover:text-slate-300 animate-showup2"
          >
            <Link href="#">
              <div className="flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-50">
                  <Image
                    src="/images/big-arrow.png"
                    alt="Arrow Icon"
                    width={50}
                    height={50}
                    className="hidden items-center mt-2 group-hover:block"
                  />
                </span>
                ACCEUIL
              </div>
            </Link>
          </h1>
          <span className="text-sm mt-4 ml-2 text-stone-400">01</span>
        </li>
        <li className="flex group">
          <h1
            id="nav-titles"
            className="nav-titles stroke-1 text-slate-300 text-transparent cursor-pointer hover:text-slate-300 animate-showup"
          >
            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/le-club`}>
              <div className="flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-50">
                  <Image
                    src="/images/big-arrow.png" // Path to your image
                    alt="Image Description"
                    width={50} // Set the width
                    height={50} // Set the height
                    className="hidden items-center mt-2 group-hover:block" // Hide the image on mobile
                  />
                </span>
                LE CLUB
              </div>
            </Link>
          </h1>
          <span className="text-sm mt-4 ml-2 text-stone-400">02</span>
        </li>

        <li className="flex group">
          <h1
            id="nav-titles"
            className="nav-titles stroke-1 text-slate-300 text-transparent cursor-pointer hover:text-slate-300 animate-showup2"
          >
            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/entrainements`}>
              <div className="flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-50">
                  <Image
                    src="/images/big-arrow.png"
                    alt="Arrow Icon"
                    width={50}
                    height={50}
                    className="hidden items-center mt-2 group-hover:block"
                  />
                </span>
                ENTRAINEMENTS
              </div>
            </Link>
          </h1>
          <span className="text-sm mt-4 ml-2 text-stone-400">03</span>
        </li>

        <li className="flex group">
          <h1
            id="nav-titles"
            className="nav-titles stroke-1 text-slate-300 text-transparent cursor-pointer hover:text-slate-300 animate-showup4"
          >
            <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}>
              <div className="flex items-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-50">
                  <Image
                    src="/images/big-arrow.png" // Path to your image
                    alt="Image Description"
                    width={50} // Set the width
                    height={50} // Set the height
                    className="hidden items-center mt-2 group-hover:block" // Hide the image on mobile
                  />
                </span>
               CONTACT
              </div>
            </Link>
          </h1>
          <span className="text-sm mt-4 ml-2 text-stone-400">04</span>
        </li>
      </ul>
      <button
        onClick={() => window.location.href = '/nous-rejoindre'}
        className="btn group flex mt-4 bg-red-500 text-white items-center text-sm rounded-full font-extrabold hover:text-black hover:bg-white"
      >
        NOUS REJOINDRE
        <span className="relative inline-flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            width="15"
            height="15"
            className="absolute ml-4 opacity-0 transition-all ease-in group-hover:translate-x-1.5 group-hover:opacity-100 motion-reduce:transform-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            width="15"
            height="15"
            className="absolute ml-6 opacity-0 transition-all ease-in group-hover:translate-x-2.5 group-hover:opacity-100 motion-reduce:transform-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
      <SocialIcons />
    </nav>
  );
};

export default Navigation;
