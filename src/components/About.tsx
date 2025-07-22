import handsGift from "@/assets/hands-gift.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light text-foreground leading-tight">
                Rituais para
                <span className="text-primary block">Sentir a Vida</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A Maitea nasceu da crença de que os momentos mais importantes da vida 
                acontecem quando paramos, respiramos e nos conectamos verdadeiramente 
                com nossos sentidos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Conexão Genuína</h3>
                  <p className="text-muted-foreground">
                    Criamos experiências que vão além do material, promovendo momentos 
                    de verdadeira presença e autoconhecimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Ingredientes Puros</h3>
                  <p className="text-muted-foreground">
                    Todos os nossos produtos são feitos com ingredientes naturais, 
                    orgânicos e sustentáveis, respeitando você e o meio ambiente.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Experiência Única</h3>
                  <p className="text-muted-foreground">
                    Cada kit é uma jornada sensorial completa, com produtos e textos 
                    cuidadosamente selecionados para tocar alma e corpo.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
                "Acreditamos que os pequenos rituais diários são capazes de transformar 
                vidas e fortalecer conexões. Cada produto Maitea é um convite para 
                desacelerar e sentir."
              </blockquote>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={handsGift} 
                alt="Mãos delicadas segurando produtos naturais Maitea" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-2xl"></div>
          </div>
        </div>

        <div className="mt-20 bg-gradient-earth rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-light text-foreground mb-4">
            Uma Filosofia de Vida
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na Maitea, não vendemos apenas produtos. Oferecemos uma filosofia que valoriza 
            a pausa, o silêncio, o toque consciente e o prazer de sentir. Nossos kits são 
            ferramentas para uma vida mais plena e conectada consigo mesmo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;