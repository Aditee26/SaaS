import Image from "next/image";
import { Card } from "@/components/ui/Card";

export const FeatureBoxes = () => {
  const features = [
    {
      title: "Fully Customizable",
      description:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem",
      icon: "/assets/fully_customisable1.png",
    },
    {
      title: "Smart Analytics",
      description:
        "Track user engagement and performance with powerful built-in analytics tools.",
      icon: "/assets/fully_customisable2.png",
    },
    {
      title: "Secure Platform",
      description:
        "Enterprise-level security to protect your data and user privacy.",
      icon: "/assets/fully_customisable3.png",
    },
    {
      title: "Fast Performance",
      description:
        "Optimized architecture ensures lightning-fast loading speeds.",
      icon: "/assets/fully_customisable4.png",
    },
    {
      title: "Cloud Integration",
      description:
        "Seamlessly integrate with modern cloud infrastructure.",
      icon: "/assets/fully_customisable5.png",
    },
    {
      title: "24/7 Support",
      description:
        "Dedicated support team ready to help anytime.",
      icon: "/assets/fully_customisable6.png",
    },
  ];

  return (
    <section className="py-24 bg-[#222228] relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Feature Boxes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A good design is not only aesthetically pleasing, but also functional.
            It should be able to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              variant="elevated"
              className="text-center bg-[#2A2A35] border border-[#3D3D49] hover:scale-105 transition-all duration-300 rounded-2xl p-8"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF9898] to-[#8054FF] rounded-2xl flex items-center justify-center shadow-lg">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};