import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import SocialLinkBar from "@/components/items/SocialLinkBar";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/5"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/5"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-primary-foreground/5"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-500 hover:bg-primary/90"
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
                src="/background/contactbg.png"
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

// import { motion } from "motion/react";
// import { useState, useCallback, memo } from "react";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { useToast } from "../ui/use-toast";
// import { Send, Mail, Phone, MapPin } from "lucide-react";
// import SocialLinkBar from "../items/SocialLinkBar";

// const ContactSection = memo(() => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     },
//     []
//   );

//   const handleSubmit = useCallback(
//     (e: React.FormEvent) => {
//       e.preventDefault();
//       setIsSubmitting(true);

//       // Simulate form submission
//       setTimeout(() => {
//         toast({
//           title: "Message sent!",
//           description: "Thank you for reaching out. I'll get back to you soon.",
//         });
//         setFormData({ name: "", email: "", message: "" });
//         setIsSubmitting(false);
//       }, 1000); // Reduced from 1500ms
//     },
//     [toast]
//   );

//   // Memoized contact info to prevent re-renders
//   const contactInfo = [
//     {
//       icon: <Mail className="h-5 w-5 text-purple-500" />,
//       label: "Email",
//       value: "nk10nikhil@gmail.com",
//       link: "mailto:nk10nikhil@gmail.com",
//     },
//     {
//       icon: <Phone className="h-5 w-5 text-purple-500" />,
//       label: "Phone",
//       value: "+91 7777048666",
//       link: "tel:+917777048666",
//     },
//     {
//       icon: <MapPin className="h-5 w-5 text-purple-500" />,
//       label: "Location",
//       value: "Galgotias College of Engineering and Technology, Greater Noida",
//       link: "https://maps.app.goo.gl/LfBgggkRYjunzzE49",
//     },
//   ];

//   return (
//     <section className="py-16 md:py-24">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.4 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient font-bold">
//             Get In Touch
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-xl mx-auto">
//             Have a project in mind or want to discuss opportunities? Reach out!
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4 }}
//             className="glass-morphism rounded-xl p-6 md:p-8"
//           >
//             <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <Input
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="bg-primary-foreground/5 transition-colors focus:bg-primary-foreground/10"
//               />

//               <Input
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="bg-primary-foreground/5 transition-colors focus:bg-primary-foreground/10"
//               />

//               <Textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="min-h-[120px] bg-primary-foreground/5 transition-colors focus:bg-primary-foreground/10 resize-none"
//               />

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-purple-500 hover:bg-purple-600 transition-colors duration-300"
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center">
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{
//                         duration: 1,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                       className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
//                     />
//                     Sending...
//                   </span>
//                 ) : (
//                   <span className="flex items-center">
//                     Send Message
//                     <Send className="ml-2 h-4 w-4" />
//                   </span>
//                 )}
//               </Button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4 }}
//             className="flex flex-col justify-between"
//           >
//             <div className="glass-morphism rounded-xl p-6 md:p-8 mb-8 relative overflow-hidden">
//               {/* Optimized map iframe with lazy loading */}
//               <iframe
//                 title="Location Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.84807320539!2d77.47837018208037!3d28.41388525064151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565f0000001%3A0x548952c90b21eae1!2sGCET!5e0!3m2!1sen!2sin!4v1741812611842!5m2!1sen!2sin"
//                 className="absolute top-0 left-0 w-full h-full border-0 rounded-lg filter grayscale contrast-95 opacity-15 pointer-events-none"
//                 loading="lazy"
//                 style={{ transform: "translateZ(0)" }}
//               />

//               <h3 className="text-xl font-semibold mb-6 relative z-10">
//                 Contact Information
//               </h3>

//               <div className="space-y-6 relative z-10">
//                 {contactInfo.map((item, index) => (
//                   <ContactInfoItem key={index} item={item} />
//                 ))}
//               </div>
//             </div>

//             {/* Work Together Card */}
//             <div className="glass-morphism rounded-xl p-6 md:p-8 h-[200px] relative overflow-hidden">
//               {/* Preloaded background image */}
//               <div
//                 className="absolute inset-0 w-full h-full opacity-50 bg-cover bg-center"
//                 style={{
//                   backgroundImage: 'url("/background/contactbg.png")',
//                   backgroundSize: "cover",
//                   transform: "translateZ(0)",
//                 }}
//               />

//               <div className="relative z-10 h-full flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">
//                     Let's Work Together
//                   </h3>
//                   <p className="text-muted-foreground mb-4">
//                     Ready to transform your ideas into reality? Get in touch
//                     today!
//                   </p>
//                 </div>
//                 <SocialLinkBar />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// });

// // Memoized contact info item for better performance
// const ContactInfoItem = memo(
//   ({
//     item,
//   }: {
//     item: {
//       icon: React.ReactNode;
//       label: string;
//       value: string;
//       link?: string;
//     };
//   }) => (
//     <div className="flex items-start">
//       <div className="bg-secondary rounded-full p-2 mr-4 flex-shrink-0">
//         {item.icon}
//       </div>
//       <div className="min-w-0 flex-1">
//         <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
//         {item.link ? (
//           <a
//             href={item.link}
//             className="text-foreground hover:text-purple-400 transition-colors duration-200 break-words"
//             target={item.link.startsWith("http") ? "_blank" : undefined}
//             rel={
//               item.link.startsWith("http") ? "noopener noreferrer" : undefined
//             }
//           >
//             {item.value}
//           </a>
//         ) : (
//           <p className="text-foreground break-words">{item.value}</p>
//         )}
//       </div>
//     </div>
//   )
// );

// ContactSection.displayName = "ContactSection";
// export default ContactSection;
