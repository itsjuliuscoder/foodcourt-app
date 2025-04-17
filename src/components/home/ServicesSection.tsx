const services = [
  {
    icon: '🌍',
    title: 'Global Shipping',
    description: 'Fast and reliable shipping to US, UK, and Canada with proper packaging to maintain freshness',
  },
  {
    icon: '🥘',
    title: 'Authentic Products',
    description: 'Genuine African ingredients sourced directly from trusted local suppliers',
  },
  {
    icon: '📦',
    title: 'Bulk Orders',
    description: 'Special rates for bulk orders and regular subscriptions for restaurants and events',
  },
  {
    icon: '🔒',
    title: 'Safe Packaging',
    description: 'Hygienically packed products with temperature-controlled shipping when required',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="section-title text-center">Why Choose Chiommy Consumables</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-all"
            >
              <div className="text-4xl mb-4 bg-[--secondary]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                {service.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 