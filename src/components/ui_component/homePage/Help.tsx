import Image from "next/image";
import { FaCheckCircle, FaMoneyCheckAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";

const steps = [
  {
    icon: <MdProductionQuantityLimits className="text-4xl text-yellow-500" />,
    title: "Select a Product",
    description: "Choose the perfect product you want to order.",
  },
  {
    icon: <FaOpencart className="text-4xl text-lime-600" />,
    title: "Buy Now",
    description:
      "From the product page click on Buy Now if you just want a single product to order.",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-green-500" />,
    title: "Confirm Booking",
    description: "Review and confirm your booking details.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-4xl text-sky-500" />,
    title: "Done with Payment",
    description: "Complete the payment to finalize your booking.",
  },
];

const HowWorkWebsite = () => {
  return (
    <div className="py-16 md:mt-12 px-8">
      <div className="flex justify-center">
        <div>
          <p className="text-pink-400 text-center">--How it Works--</p>
          <h1 className="md:text-lg lg:text-2xl font-semibold text-center mb-4 text-gray-600">
            Need Help?
          </h1>
          <Image
            width={500}
            height={500}
            alt="Image"
            src="https://i.ibb.co/SdK0n79/section-title-vector.png"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-3 flex-col items-center"
          >
            <div className="mb-4 text-[#5a685a]">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[#5a685a]">
              {step.title}
            </h3>
            <p className="text-center text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorkWebsite;
