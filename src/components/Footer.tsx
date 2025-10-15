import { Instagram, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img src="/lovable-uploads/84da48b3-2350-4a5b-a72c-39958c44c11f.png" alt="Maitea - Rituais para Sentir" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-background/80 leading-relaxed">
              Rituais para sentir a vida em sua plenitude. 
              Produtos naturais que conectam você com momentos especiais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Produtos */}
          <div className="space-y-4">
            <h3 className="font-medium text-background">Produtos</h3>
            <div className="space-y-2 text-sm">
              
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Cafés Especiais
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Cosméticos Naturais
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Chás & Aromas
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Kits Personalizados
              </a>
            </div>
          </div>

          {/* Atendimento */}
          <div className="space-y-4">
            <h3 className="font-medium text-background">Atendimento</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-background/80">
                <Phone size={16} />
                <span>(51) 99419-9189</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <Mail size={16} />
                <span>maitearituais@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-background/80">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Porto Alegre, RS<br />Brasil</span>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div className="space-y-4">
            <h3 className="font-medium text-background">Informações</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Sobre a Maitea
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Trocas e Devoluções
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2024 Maitea. Todos os direitos reservados.
            </div>
            <div className="text-sm text-background/60">
              Feito com ❤️ para despertar seus sentidos
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;