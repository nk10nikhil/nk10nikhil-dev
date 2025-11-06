import { motion } from "framer-motion";
import { Check, X, Star } from "lucide-react";

const ServiceComparisonTable = () => {
  const features = [
    {
      name: "Responsive Design",
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      name: "SEO Optimization",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Advanced",
    },
    {
      name: "Number of Pages",
      starter: "1-3",
      professional: "Up to 10",
      enterprise: "Unlimited",
    },
    {
      name: "Custom Animations",
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      name: "API Integrations",
      starter: "1",
      professional: "3+",
      enterprise: "Unlimited",
    },
    {
      name: "Admin Dashboard",
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      name: "User Authentication",
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      name: "Payment Gateway",
      starter: false,
      professional: "Optional",
      enterprise: true,
    },
    {
      name: "Analytics Setup",
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      name: "Performance Optimization",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Enterprise",
    },
    {
      name: "Security Audit",
      starter: false,
      professional: "Basic",
      enterprise: "Advanced",
    },
    {
      name: "Revision Rounds",
      starter: "2",
      professional: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      name: "Support Duration",
      starter: "1 month",
      professional: "3 months",
      enterprise: "6 months",
    },
    {
      name: "Priority Support",
      starter: false,
      professional: false,
      enterprise: true,
    },
    {
      name: "Training Sessions",
      starter: false,
      professional: "Optional",
      enterprise: true,
    },
    {
      name: "Source Code",
      starter: true,
      professional: true,
      enterprise: true,
    },
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-400 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-600 mx-auto" />
      );
    }
    return <span className="text-sm text-gray-300">{value}</span>;
  };

  return (
    <section className="container mx-auto px-4 py-20 relative overflow-x-auto">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-purple-900/30 rounded-full px-4 py-2 mb-6 border border-purple-700/30"
        >
          <Star className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">
            COMPARE PACKAGES
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300"
        >
          Package Comparison
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          See what's included in each package at a glance
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-white/5 border-b border-white/10">
            <div className="font-semibold text-white">Features</div>
            <div className="text-center">
              <div className="font-semibold text-white mb-1">Starter</div>
              <div className="text-sm text-gray-400">$2,500</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-white mb-1 flex items-center justify-center gap-2">
                Professional
                <div className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Popular
                </div>
              </div>
              <div className="text-sm text-gray-400">$5,000</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-white mb-1">Enterprise</div>
              <div className="text-sm text-gray-400">Custom</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors"
              >
                <div className="text-gray-300 font-medium">{feature.name}</div>
                <div className="text-center">{renderCell(feature.starter)}</div>
                <div className="text-center">
                  {renderCell(feature.professional)}
                </div>
                <div className="text-center">
                  {renderCell(feature.enterprise)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceComparisonTable;
