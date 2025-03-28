import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";
import "../assets/style/achievement.css";

const Achievements = () => {
  return (
    <section id="achievements" className="w-full">
      <div className="container w-full">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-8 px-4 break-words"
        >
          &lt;Achievements/&gt;
        </motion.h2>
        
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
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-stats">
                  <span className="stat">
                    ⭐ {Math.floor(Math.random() * 100)}
                  </span>
                  <span className="stat">
                    🎮 LVL {index + 1}
                  </span>
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
