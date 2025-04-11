import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>AI Security Scanner | Gratis Website Beveiliging Check</title>
        <meta name="description" content="Controleer je website beveiliging met onze AI-powered scanner" />
      </Head>

      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm"
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            AI Security Scanner
          </motion.h1>
          <nav className="flex space-x-8">
            <a href="#" className="font-medium hover:text-primary transition">Home</a>
            <a href="#scan" className="font-medium hover:text-primary transition">Scan</a>
            <a href="#pricing" className="font-medium hover:text-primary transition">Prijzen</a>
            <a href="#contact" className="font-medium hover:text-primary transition">Contact</a>
          </nav>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            <span className="text-primary">Gratis</span> website beveiliging scan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Onze AI controleert automatisch op beveiligingslekken en geeft persoonlijke verbeter tips
          </p>
          <motion.a
            href="#scan"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-dark transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Gratis Scan
          </motion.a>
        </motion.section>

        {/* Scan formulier sectie */}
        <section id="scan" className="mb-24">
          <h3 className="text-3xl font-bold mb-8 text-center">Scan Je Website</h3>
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Website URL</label>
                <input 
                  type="url" 
                  placeholder="https://jouwwebsite.nl" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-secondary text-white py-3 px-4 rounded-lg font-medium hover:bg-secondary-dark transition"
              >
                Start Scan
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-center">© {new Date().getFullYear()} AI Security Scanner. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
