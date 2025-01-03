import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Tanjim Saiara Tottini",
    title: "CEO & Founder",
    description:
      "John has over 20 years of experience in the industry and is the visionary behind our company. He is passionate about driving innovation and excellence.",
    imageUrl: "https://i.ibb.co/jwjXQqH/totini.jpg",
  },
  {
    name: "Tasnia Farin",
    title: "Chief Operations Officer",
    description:
      "Jane oversees our operations with a focus on efficiency and client satisfaction. Her leadership ensures that our projects are delivered on time and to the highest standards.",
    imageUrl: "https://i.ibb.co/6PZJkW3/tasnia-farin.jpg",
  },
  {
    name: "Tanjim Saiara Tottini",
    title: "Chief Technology Officer",
    description:
      "Mike leads our technology team with a focus on innovation and quality. His expertise in software development drives our technical excellence.",
    imageUrl: "https://i.ibb.co/jwjXQqH/totini.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="py-16">
      {/* Our Mission Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex justify-center">
          <div>
            <p className="text-pink-400 text-center">--How it Works--</p>
            <h1 className="md:text-lg lg:text-2xl font-semibold text-center mb-4 text-gray-600">
              FindX Shop
            </h1>
            <Image
              width={500}
              height={500}
              alt="Image"
              src="https://i.ibb.co/SdK0n79/section-title-vector.png"
            />
          </div>
        </div>
        <p className="text-lg leading-relaxed text-justify max-w-2xl mx-auto">
          FindX has been serving Online Shop in Bangladesh since 2001. Currently
          serving thousands of customers worldwide including Bangladesh and the
          USA. All services are using many Government and Corporate
          organization. FindX builds and manages own Server infrastructure in
          Bangladesh and the USA. At present, FindX is working to extend
          infrastructure in India, Canada, South Africa, Singapore and Mexico.
        </p>
      </div>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div>
            <h1 className="md:text-lg lg:text-2xl font-semibold text-center mb-4 text-gray-600">
              Who we are
            </h1>
            <Image
              width={500}
              height={500}
              alt="Image"
              src="https://i.ibb.co/SdK0n79/section-title-vector.png"
            />
          </div>
        </div>
        <p className="text-base leading-relaxed text-justify max-w-2xl mx-auto">
          FindX is dedicated Online Shop who recognize that a successful
          technology implementation requires more than just getting the proper
          hardware and applications. It must begin with a thorough understanding
          of each customers strategy and business needs. Leadership and senior
          consultants have decades of combined experience, allowing FindX to
          bring a complete understanding of a wide range of business
          environments to every clients.
        </p>
      </div>
      {/* Meet the Team  */}
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-4xl font-bold mb-4 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-slate-500 text-white shadow-lg"
            >
              <CardContent>
                <Image
                  width={500}
                  height={500}
                  src={member.imageUrl}
                  alt={member.name}
                  className="mb-4 mt-5 w-16 h-16 rounded-full mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-center">{member.title}</p>
                <p className="text-sm text-center mt-2">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
