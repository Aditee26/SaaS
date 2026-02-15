import { Button } from '@/components/ui/Button';

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FF9898] to-[#8054FF]">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Love our Tool?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Feel Free to Join our 15 Days Free Trial
        </p>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-white text-[#8054FF] hover:bg-gray-100 border-white min-w-[200px]"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};