import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-lg text-gray-600 mb-6">
              Com mais de 15 anos de experiência, atuo nas áreas de Desenvolvimento
              Humano e Tecnologia, integrando conhecimentos de psicologia,
              coaching e inovação tecnológica para criar soluções transformadoras.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">15+</span>
                </div>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">500+</span>
                </div>
                <p className="text-gray-600">Clientes Atendidos</p>
              </div>
            </div>
          </div>
          <Card className="p-8">
            <img
              src="https://www.flaviodfc.com.br/images/flavio.jpg"
              alt="Flavio Del Fiol"
              className="rounded-lg"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
