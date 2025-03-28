import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";
import "../assets/style/achievement.css";
import { Trophy } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="w-full">
      <div className="container w-full">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gradient mb-4"
          >
            Achievements
          </motion.h2>
          <div className="flex items-center justify-center space-x-4">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
            <Trophy className="w-6 h-6 text-purple-500" />
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
          </div>
        </div>

        <div className="card-container">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="achievement-card"
            >
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <div className="achievement-stats">
                  <span className="stat">
                    ⭐ {Math.floor(Math.random() * 100)}
                  </span>
                  <span className="stat">🎮 LVL {index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
