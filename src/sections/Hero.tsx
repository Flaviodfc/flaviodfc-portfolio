import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Transformando Pessoas e Tecnologias
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Especialista em Desenvolvimento Humano e Tecnológico, ajudando
          indivíduos e empresas a alcançarem seu máximo potencial.
        </p>
        <Button className="gap-2" size="lg">
          Conheça Meu Trabalho
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
