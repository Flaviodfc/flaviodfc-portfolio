import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Entre em Contato</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Seu Nome" />
            <Input placeholder="Seu Email" type="email" />
          </div>
          <Input placeholder="Assunto" />
          <Textarea placeholder="Sua Mensagem" rows={5} />
          <Button className="w-full" type="submit">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  );
}
