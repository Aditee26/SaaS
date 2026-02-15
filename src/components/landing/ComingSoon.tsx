export const ComingSoon = () => {
  const features = [
    'India Page',
    '40+ Sections',
    'HTML/CSS Version',
    'Addon ID Version',
    'Webflow Template',
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Coming Soon
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            We're working hard to bring you more features
          </p>

          <div className="bg-gradient-to-r from-secondary to-accent p-8 rounded-2xl text-white">
            <ul className="space-y-3 mb-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <p className="text-sm opacity-90">
              Need Custom Design, Development or Branding?
            </p>
            <a
              href="https://www.inkyy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-lg font-semibold underline underline-offset-4"
            >
              www.inkyy.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};