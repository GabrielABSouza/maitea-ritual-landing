import { Button } from "@/components/ui/button";
import { Heart, Gift, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-warm text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              Desperte os Sentidos do
              <span className="block font-normal">Seu Pai Neste Dia Especial</span>
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Um presente que vai além do material. Uma experiência que conecta, 
              emociona e cria memórias inesquecíveis.
            </p>
          </div>

          <div className="flex justify-center items-center space-x-12 py-8">
            <div className="flex flex-col items-center space-y-2">
              <Heart className="w-8 h-8" />
              <span className="text-sm opacity-80">Feito com Amor</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Gift className="w-8 h-8" />
              <span className="text-sm opacity-80">Embalagem Especial</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="w-8 h-8" />
              <span className="text-sm opacity-80">Experiência Única</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-medium"
              >
                Escolher Kit Perfeito
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                Criar Kit Personalizado
              </Button>
            </div>
            
            <div className="text-sm opacity-80">
              <p>🚚 Entrega gratuita para todo o Brasil • 💝 Embalagem presente inclusa</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <div className="font-medium mb-2">Entrega Rápida</div>
                <div className="opacity-80">
                  Receba em até 3 dias úteis em todo o Brasil
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">Garantia de Qualidade</div>
                <div className="opacity-80">
                  100% de satisfação ou seu dinheiro de volta
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">Suporte Especializado</div>
                <div className="opacity-80">
                  Nossa equipe te ajuda a escolher o kit ideal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;