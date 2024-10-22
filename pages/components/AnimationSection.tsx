import Image from 'next/image';
import Link from 'next/link';

// Static paths for images in the public folder
const tridentLogo = '/trident-logo.png';
const tAcademyTech = '/academy-tech.png';
const tAcademyCreative = '/academy-creative.png';
const tAcademyProfessional = '/academy-professional.png';

export default function AnimationSection() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-4">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#316b9e] text-center transition-transform transform hover:scale-105">
        Trident Group Colleges
      </h1>

      {/* Description Content */}
      <p className="text-center max-w-3xl text-gray-700 mb-8 px-4">
        The <Link href="https://trident.ac.in/" target="_blank" className="text-blue-600 underline hover:text-blue-800 transition duration-200">
          Trident Group of Institutions
        </Link>, based in Bhubaneswar, Odisha, is a premier educational organization with a mission to provide quality education and professional skills to students across various disciplines.
        It offers programs in technology, management, creative arts, and professional studies through its affiliated colleges. The group fosters a culture of innovation, leadership, and sustainability, ensuring students are equipped to meet the challenges of a rapidly evolving global workforce.
        With state-of-the-art infrastructure, experienced faculty, and a focus on holistic development,
        <Link href="https://trident.ac.in/" target="_blank" className="text-blue-600 underline hover:text-blue-800 transition duration-200">
          Trident Group of Institutions
        </Link> is dedicated to nurturing future leaders and change-makers.
      </p>

      {/* Add margin between description and logo section */}
      <div className="relative w-[80vw] max-w-[500px] h-[80vw] max-h-[500px] bg-white rounded-full shadow-2xl flex justify-center items-center mt-6 transition-shadow duration-300 hover:shadow-xl">
        {/* Central logo */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <Image
            src={tridentLogo}
            alt="Trident Group Logo"
            width={150}
            height={150}
            quality={100}
            className="z-20 object-contain"
            priority
          />
        </div>

        {/* Logos placed around the circle */}
        <Link
          href="https://www.trident.ac.in/technology"
          target="_blank"
          className="absolute top-[-40px] left-[50%] transform -translate-x-1/2 hover:scale-110 transition-transform duration-300"
        >
          <div className="flex flex-col items-center">
            <Image
              src={tAcademyTech}
              alt="Trident Academy of Technology"
              width={80}
              height={80}
              className="w-[18vw] sm:w-[10vw] object-contain transition-transform duration-300"
              quality={100}
            />
            <p className="mt-2 text-center text-xs font-semibold">
              Trident Academy of Technology
            </p>
          </div>
        </Link>

        <Link
          href="https://www.trident.ac.in/creative"
          target="_blank"
          className="absolute left-[-60px] top-[50%] transform -translate-y-1/2 sm:left-[-50px] hover:scale-110 transition-transform duration-300"
        >
          <div className="flex flex-col items-center">
            <Image
              src={tAcademyCreative}
              alt="Trident Academy of Creative Technology"
              width={70}
              height={70}
              className="w-[16vw] sm:w-[8vw] object-contain transition-transform duration-300"
              quality={100}
            />
            <p className="mt-2 text-center text-xs font-semibold sm:left-[-100px]">
              Trident Academy <br /> of Creative Technology
            </p>

          </div>
        </Link>

        <Link
          href="https://www.trident.ac.in/professional"
          target="_blank"
          className="absolute right-[-60px] top-[50%] transform -translate-y-1/2 sm:right-[-50px] hover:scale-110 transition-transform duration-300"
        >
          <div className="flex flex-col items-center">
            <Image
              src={tAcademyProfessional}
              alt="Trident Academy of Professional Studies"
              width={100}
              height={100}
              className="w-[20vw] sm:w-[10vw] object-contain transition-transform duration-300"
              quality={100}
            />
           <p className="mt-2 text-center text-xs font-normal left-[-20px]">
  Trident Academy <br /> of Professional Studies
</p>


          </div>
        </Link>
      </div>

      {/* Responsive adjustments for mobile screens */}
      <style jsx>{`
        @media (max-width: 640px) {
          .relative {
            width: 90vw;
            height: 90vw;
            max-width: 350px;
            max-height: 350px;
          }
          .absolute {
            top: auto !important;
            bottom: 20px !important;
            left: 50% !important;
            transform: translate(-50%, 0) !important;
          }
          h1 {
            font-size: 2.5rem; /* Adjust heading size for mobile */
          }
          p {
            font-size: 0.875rem; /* Adjust paragraph text size for mobile */
            padding: 0 1rem; /* Add some padding for mobile */
          }
        }
      `}</style>
    </section>
  );
}
