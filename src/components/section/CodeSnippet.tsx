
import { motion } from "framer-motion";

const CodeSnippet = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-morphism rounded-xl overflow-hidden"
          >
            <div className="bg-background/40 p-4 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="p-6 text-left font-mono text-sm">
              <div className="flex gap-4">
                <div className="text-muted-foreground select-none">1</div>
                <div className="flex-1">
                  <span className="text-purple-400">window</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-blue-400">addEventListener</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">'SoftwareDeveloper'</span>
                  <span className="text-white">, () =&gt; {'{'}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="text-muted-foreground select-none">2</div>
                <div className="flex-1 pl-4">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400"> grs </span>
                  <span className="text-white">= </span>
                  <span className="text-purple-400">new</span>
                  <span className="text-green-400"> ProgrammingLanguage</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">'#rust'</span>
                  <span className="text-white">);</span>
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="text-muted-foreground select-none">3</div>
                <div className="flex-1">
                  <span className="text-white">{'}'});</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Aspiring to be a better developer?
            </h2>
            <p className="text-muted-foreground text-lg">
              We have a range of tools and resources to help you get started. From beginner to advanced, we have
              everything you need to build your web projects
            </p>
            <div className="flex gap-4 mt-8">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-600/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 0L7 9m2 3L7 15" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-600/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4v16m0-16L7 9m5-5l5 5" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeSnippet;
