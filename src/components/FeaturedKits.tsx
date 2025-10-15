import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ritualProducts from "@/assets/ritual-products.jpg";
import handsGift from "@/assets/hands-gift.jpg";

const FeaturedKits = () => {
  const kits = [
    {
      id: 1,
      name: "Kit Força & Energia",
      subtitle: "Para pais que inspiram",
      description: "Café especial torrado artesanalmente, cosmético natural energizante, chá revigorante e texto personalizado sobre força paterna.",
      price: "R$ 189,90",
      image: ritualProducts,
      badge: "Mais Vendido",
      features: ["Café Premium", "Cosmético Natural", "Chá Energizante", "Texto Personalizado"]
    },
    {
      id: 2,
      name: "Kit Serenidade",
      subtitle: "Para momentos de calma",
      description: "Aromas relaxantes, chá calmante, cosmético hidratante e experiência completa de bem-estar para pausas especiais.",
      price: "R$ 159,90",
      image: handsGift,
      badge: "Edição Limitada",
      features: ["Aromas Relaxantes", "Chá Calmante", "Hidratante Natural", "Guia de Rituais"]
    },
    {
      id: 3,
      name: "Kit Aventureiro",
      subtitle: "Para pais exploradores",
      description: "Cosméticos naturais para a pele, café especial, energético natural e produtos para quem ama aventuras.",
      price: "R$ 219,90",
      image: ritualProducts,
      badge: "Novidade",
      features: ["Protetor Natural", "Café Intenso", "Energético Natural", "Kit Viagem"]
    }
  ];

  return (
    <section id="kits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-4">
            Kits Especiais para o
            <span className="text-primary"> Dia dos Pais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada kit é cuidadosamente curado para proporcionar uma experiência sensorial única, 
            conectando seu pai com momentos de prazer e autoconhecimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit) => (
            <Card key={kit.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={kit.image} 
                  alt={kit.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
                    {kit.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="text-2xl font-semibold text-primary">
                    {kit.price}
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
          >
            Ver Todos os Kits
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedKits;