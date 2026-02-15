export const Assets = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
              Phone Mockup
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Showcase your app with beautiful phone mockups
            </p>
            <button className="text-secondary font-semibold hover:underline">
              Download Assets →
            </button>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto w-64 h-128">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-3xl shadow-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};