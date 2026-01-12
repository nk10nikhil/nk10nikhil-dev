import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import SocialLinkBar from "@/components/elements/SocialLinkBar";
import { useRef } from "react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    // Send to Formspree via fetch
    const res = await fetch("https://formspree.io/f/xqanbaro", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-purple-500" />,
      label: "Email",
      value: "nk10nikhil@gmail.com",
      link: "mailto:nk10nikhil@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-purple-500" />,
      label: "Phone",
      value: "+91 7777048666",
      link: "tel:+917777048666",
    },
    {
      icon: <MapPin className="h-5 w-5 text-purple-500" />,
      label: "Location",
      value: "Galgotias College of Engineering and Technology, Greater Noida",
      link: "https://maps.app.goo.gl/LfBgggkRYjunzzE49",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient font-bold">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-morphism rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-primary-foreground/5"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-primary-foreground/5"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="min-h-[150px] bg-primary-foreground/5"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-500 hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div className="glass-morphism rounded-xl p-6 md:p-8 mb-8">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.84807320539!2d77.47837018208037!3d28.41388525064151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565f0000001%3A0x548952c90b21eae1!2sGCET!5e0!3m2!1sen!2sin!4v1741812611842!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-lg filter grayscale contrast-95 opacity-15"
                loading="lazy"
                allowFullScreen
                style={{ pointerEvents: "none" }}
              />
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-secondary rounded-full p-2 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-morphism rounded-xl p-6 md:p-8 h-[200px] relative overflow-hidden">
              <img
                src="/images/contactbg.png"
                alt="Illustration"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">
                  Let's Work Together
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ready to transform your ideas into reality? Get in touch
                  today!
                </p>
                <SocialLinkBar />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
