export const Sections = () => {
  const sections = [
    { name: 'Home', items: ['Home', 'Section One', 'Section Two', 'Section Three'] },
    { name: 'Home', items: ['Home', 'Section One', 'Section Two', 'Section Three'] },
    { name: 'Home', items: ['Home', 'Section One', 'Section Two', 'Section Three'] },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-white mb-4">
          Sections
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                {section.name}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};