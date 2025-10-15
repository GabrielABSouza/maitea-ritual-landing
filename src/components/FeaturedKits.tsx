import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ritualProducts from "@/assets/ritual-products.jpg";
import handsGift from "@/assets/hands-gift.jpg";
import { useCart } from "@/contexts/CartContext";
const FeaturedKits = () => {
  const { addToCart } = useCart();
  const kits = [{
    id: 1,
    name: "Kit Amanhecer",
    subtitle: "Inspiração para o seu dia",
    description: "Drip Coffee com grãos especiais selecionados, sabonete artesanal de alecrim e sal grosso, sais de banho aromatizados, exercício de escrita matinal e uma playlist energizante.",
    price: 124.90,
    image: ritualProducts,
    badge: "Mais Vendido",
    features: ["Drip Coffee Especial", "Sabonete Artesanal", "Sais de Banho", "Exercício de Escrita", "Playlist Energizante"]
  }, {
    id: 2,
    name: "Kit Sentir",
    subtitle: "Conecte-se com seu corpo",
    description: "Chá Puerh com notas de pimenta, óleo corporal afrodisíaco, tônico de lavanda relaxante, exercício de escrita erótica e uma playlist.",
    price: 189.00,
    image: handsGift,
    badge: "Edição Limitada",
    features: ["Chá Puerh Premium", "Óleo Corporal Afrodisíaco", "Tônico de Lavanda", "Exercício de Escrita", "Playlist Sensorial"]
  }];
  return <section id="kits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-4">
            Para cada momento,
            <span className="text-primary"> uma Maitea</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada kit é cuidadosamente curado para proporcionar uma experiência sensorial única. 
            Faça por você: crie momentos de prazer e autoconhecimento com a Maitea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {kits.map(kit => <Card key={kit.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={kit.image} alt={kit.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {kit.badge}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-foreground">{kit.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {kit.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {kit.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Inclui:</div>
                  <div className="flex flex-wrap gap-2">
                    {kit.features.map((feature, index) => <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>)}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="text-2xl font-semibold text-primary">
                    R$ {kit.price.toFixed(2)}
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => addToCart({
                      id: kit.id,
                      name: kit.name,
                      price: kit.price,
                      image: kit.image
                    })}
                  >
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>;
};
export default FeaturedKits;