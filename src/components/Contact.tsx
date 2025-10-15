import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os kits Maitea.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-warm-100 to-warm-200">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-warm-900">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-warm-700 mb-8">
            Entre em contato conosco pelo WhatsApp e descubra qual kit Maitea é perfeito para você. 
            Estamos aqui para criar uma experiência sensorial única.
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white gap-2 mb-8"
          >
            <Phone className="w-5 h-5" />
            Chamar no WhatsApp
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-warm-700">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>maitearituais@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
