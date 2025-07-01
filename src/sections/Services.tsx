import { Card } from '@/components/ui/card';
import { BrainCircuit, Code, Users, Rocket } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: 'Desenvolvimento Pessoal',
      description: 'Coaching e mentoria para crescimento individual'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Consultoria Tecnológica',
      description: 'Soluções inovadoras para sua empresa'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Treinamentos Corporativos',
      description: 'Desenvolvimento de equipes de alta performance'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Transformação Digital',
      description: 'Implementação de estratégias digitais'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
