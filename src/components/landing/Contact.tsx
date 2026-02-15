import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export const Contact = () => {
  const responsibilities = ['Design', 'Development', 'Marketing', 'Sales'];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              A great designer has many responsibilities, among them:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {responsibilities.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>
          </div>

          {/* Right side - Contact Form */}
          <Card variant="elevated">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your company name"
                  className="w-full"
                />
              </div>
              
              <Button type="submit" fullWidth size="lg">
                Get in Touch
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};