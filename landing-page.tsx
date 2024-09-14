import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Book, Users, Brain, Calendar, Award } from 'lucide-react'

export default function Component() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Personalisierte Avatare und Quests",
      description: "Erstellen Sie einen Avatar, der Ihre aktuelle mentale Verfassung widerspiegelt. KI-gesteuerte Quests passen sich Ihren individuellen Bedürfnissen an.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Interaktive Achtsamkeitsübungen",
      description: "Entdecken Sie Meditation und Atemübungen als magische Fähigkeiten in einer immersiven VR/AR-Umgebung.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Kognitive Umstrukturierung",
      description: "Lösen Sie Rätsel, die negative Gedankenmuster repräsentieren, und lernen Sie, dysfunktionale Gedanken zu identifizieren und umzuformulieren.",
      icon: <Book className="w-6 h-6" />
    },
    {
      title: "Adaptive Herausforderungen",
      description: "Erleben Sie dynamisch angepasste Quests, die sich Ihrer emotionalen Verfassung und Ihren Fähigkeiten anpassen.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Fortschrittstracking und Reflexion",
      description: "Dokumentieren Sie Ihre 'Heldenreise' und visualisieren Sie Ihr persönliches Wachstum durch In-Game-Achievements.",
      icon: <Award className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-center text-blue-600 mb-8"
      >
        MindfulQuest
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl md:text-2xl text-center text-gray-700 mb-12 max-w-2xl"
      >
        Entdecken Sie Ihre innere Kraft durch ein fesselndes Rollenspiel-Erlebnis, speziell entwickelt für Lehrer.
      </motion.p>
      
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-blue-600 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Hauptfunktionen</h2>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className={`cursor-pointer text-white hover:text-blue-200 transition-colors duration-200 flex items-center ${activeFeature === index ? 'font-bold' : ''}`}
                  onClick={() => setActiveFeature(index)}
                >
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 p-8">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{features[activeFeature].title}</h3>
              <p className="text-gray-600">{features[activeFeature].description}</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Starten Sie Ihre Reise
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 mb-2">Erfahren Sie mehr über MindfulQuest</p>
        <ChevronDown className="w-6 h-6 text-gray-600 mx-auto animate-bounce" />
      </motion.div>
    </div>
  )
}