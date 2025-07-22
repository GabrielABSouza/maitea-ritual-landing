import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Leaf, Sparkles, FileText } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: Coffee,
      title: "Cafés Especiais",
      description: "Grãos selecionados e torrados artesanalmente para uma experiência sensorial única.",
      features: ["Origem rastreada", "Torra artesanal", "Embalagem sustentável"]
    },
    {
      icon: Leaf,
      title: "Cosméticos Naturais",
      description: "Produtos orgânicos que cuidam da pele com ingredientes puros da natureza.",
      features: ["100% naturais", "Livres de químicos", "Testados dermatologicamente"]
    },
    {
      icon: Sparkles,
      title: "Chás & Aromas",
      description: "Blends especiais e aromas terapêuticos para momentos de conexão interior.",
      features: ["Ervas selecionadas", "Propriedades terapêuticas", "Aromaterapia natural"]
    },
    {
      icon: FileText,
      title: "Textos Personalizados",
      description: "Reflexões e mensagens únicas criadas especialmente para cada experiência.",
      features: ["Conteúdo exclusivo", "Mensagens inspiradoras", "Personalização completa"]
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-4">
            Nossos
            <span className="text-primary"> Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada categoria foi pensada para estimular diferentes sentidos e proporcionar 
            uma jornada completa de bem-estar e conexão pessoal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="text-sm text-secondary font-medium flex items-center justify-center"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-card rounded-2xl border border-border/50 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-foreground">
                Experiência Completa dos Sentidos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada kit Maitea é uma jornada cuidadosamente orquestrada que desperta o <strong>tato</strong> através 
                de texturas naturais, o <strong>olfato</strong> com aromas únicos, o <strong>paladar</strong> com 
                sabores especiais, e a <strong>mente</strong> com reflexões profundas. Uma experiência que transcende 
                o comum e conecta com o essencial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;