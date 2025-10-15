import { Button } from "@/components/ui/button";
import { Heart, Gift, Star } from "lucide-react";
const CTA = () => {
  return <section className="py-24 bg-gradient-warm text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              <span className="block font-normal">Desperte os seus Sentidos</span>
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Uma experiência que vai além do material: conecta e cria memórias inesquecíveis
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
              <a href="#kits">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-medium">
                  Escolher Kit Perfeito
                </Button>
              </a>
            </div>
            
            <div className="text-sm opacity-80">
              
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                
                
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;