import { motion } from "framer-motion";
import { Check, DollarSign, Zap, Crown } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      icon: DollarSign,
      name: "Starter",
      price: "$2,500",
      duration: "per project",
      description: "Perfect for small projects and MVPs",
      features: [
        "Single-page application",
        "Responsive design",
        "Basic SEO optimization",
        "2 rounds of revisions",
        "1 month support",
        "Source code included",
      ],
      gradient: "from-blue-600 to-cyan-600",
      popular: false,
    },
    {
      icon: Zap,
      name: "Professional",
      price: "$5,000",
      duration: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Multi-page application",
        "Advanced animations",
        "Full SEO optimization",
        "API integrations",
        "Unlimited revisions",
        "3 months support",
        "Admin dashboard",
        "Analytics setup",
      ],
      gradient: "from-purple-600 to-indigo-600",
      popular: true,
    },
    {
      icon: Crown,
      name: "Enterprise",
      price: "Custom",
      duration: "contact for quote",
      description: "For complex, large-scale projects",
      features: [
        "Full-stack application",
        "Custom integrations",
        "Advanced security",
        "Performance optimization",
        "Unlimited revisions",
        "6 months support",
        "Priority support",
        "Training included",
        "Scalable architecture",
      ],
      gradient: "from-pink-600 to-rose-600",
      popular: false,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-purple-900/30 rounded-full px-4 py-2 mb-6 border border-purple-700/30"
        >
          <DollarSign className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">PRICING</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300"
        >
          Transparent Pricing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Flexible packages tailored to your budget and requirements
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative group ${
              plan.popular ? "md:-mt-4 md:mb-4" : ""
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1 rounded-full text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              </div>
            )}

            {/* Glow Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
            ></div>

            {/* Card */}
            <div
              className={`relative h-full bg-white/5 backdrop-blur-sm border ${
                plan.popular ? "border-purple-500/50" : "border-white/10"
              } rounded-2xl p-8 hover:border-purple-500/50 transition-all`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-r ${plan.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <plan.icon className="h-7 w-7 text-white" />
              </div>

              {/* Plan Info */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm">{plan.duration}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/50"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Quote CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 mb-4">
          Need something different? Let's discuss a custom solution
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all"
        >
          Contact for Custom Quote
        </motion.button>
      </motion.div>
    </section>
  );
};

export default PricingPlans;
