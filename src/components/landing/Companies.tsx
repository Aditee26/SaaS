export const Companies = () => {
  const companies = [
    { name: 'Stratfor', logo: 'S' },
    { name: 'Ethan', logo: 'E' },
    { name: 'national', logo: 'N' },
    { name: 'UAE', logo: 'U' },
    { name: 'Africa', logo: 'A' },
  ];

  return (
    <section className="py-20 bg-[#222228]">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Companies we Worked With in Since 2015
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-24 h-24 bg-[#2A2A35] border border-[#3D3D49] rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl group-hover:border-[#FF9898]">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
                  {company.logo}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-400">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#3D3D49] to-transparent" />
      </div>
    </section>
  );
};