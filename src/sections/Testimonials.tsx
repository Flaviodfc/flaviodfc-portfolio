import { Card } from '@/components/ui/card';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'CEO, Tech Solutions',
      text: 'O trabalho do Flavio transformou nossa empresa, tanto na parte tecnológica quanto no desenvolvimento da equipe.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Maria Santos',
      role: 'Gerente de RH',
      text: 'Os treinamentos foram incríveis! Nossa equipe nunca esteve tão alinhada e produtiva.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Depoimentos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
