import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fathers-day-hero.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center bg-gradient-earth">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight text-foreground">
                Rituais especiais para o
                <span className="block text-primary font-normal">Dia dos Pais</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Desperte os sentidos do seu pai com kits únicos que combinam 
                cosméticos naturais, cafés especiais, chás aromáticos e experiências sensoriais inesquecíveis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Ver Kits Especiais
              </Button>
              
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Produtos Naturais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Orgânicos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-primary">✨</div>
                <div className="text-sm text-muted-foreground">Experiência Única</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img src={heroImage} alt="Kits rituais especiais para o Dia dos Pais" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;