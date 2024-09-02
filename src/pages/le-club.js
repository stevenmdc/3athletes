import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "@/components/social-icons";
import AnimatedLogo from "@/components/logo";

export async function getStaticProps() {
  // Load the JSON data from the file
  const filePath = path.join(process.cwd(), "src", "data", "athletes.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const athletes = JSON.parse(jsonData);

  return {
    props: {
      athletes,
    },
  };
}

export default function Club({ athletes }) {
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

        <div className="container mx-auto px-4 py-8 col-span-3">
          <h1 className="text-4xl font-bold text-center mb-8">Le Club</h1>
          <p className="text-lg text-center mb-12">
            Notre club de triathlon est composé de passionnés qui se réunissent
            pour partager leur amour du sport, s&apos;entraîner ensemble et
            participer à des compétitions de tous niveaux. Nous accueillons des
            athlètes de tous âges et de tous horizons, qu&apos;ils soient
            débutants ou expérimentés.
          </p>

          <section>
            <h2 className="text-3xl font-semibold text-center mb-8">
              Nos Athlètes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {athletes.map((athlete, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <Image
                    src={athlete.photoUrl}
                    alt={athlete.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    width={400}
                    height={200}
                  />
                  <h3 className="text-2xl font-bold mb-2">{athlete.name}</h3>
                  <p className="italic text-gray-600 mb-2">
                    {athlete.category}
                  </p>
                  <p className="text-gray-800 mb-4">
                    <strong>Spécialité :</strong> {athlete.specialty}
                  </p>
                  <ul className="list-disc list-inside mb-4">
                    {athlete.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                  <p className="italic text-gray-600">{athlete.quote}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 m-4">
        <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/entrainements`}>
          <Image
            src="/images/arrow-right.png"
            alt="Next Page"
            width={50}
            height={50}
          />
          <span className="text-5xl tracking-wide font-semibold text-red-500">
            02
          </span>
        </Link>
      </div>

      <SocialIcons />
    </>
  );
}
