import { motion } from "framer-motion";
import { achievements } from "../data/portfolio";
import "../assets/style/achievement.css"; // Import the CSS file

const Achievements = () => {
  return (
    <section id="achievements">
      <div className="container mx-auto px-4">
        <h2>&lt;Achievements./&gt;</h2>
        <div className=" card-container">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="achievement-card"
            >
              <div className="achievement-content">
                {/* <div className="achievement-icon">
                  <Trophy size={24} />
                </div> */}
                <div className="achievement-image-wrapper">
                  <img
                    src={achievement.imageUrl}
                    alt={achievement.title}
                    className="achievement-image"
                  />
                </div>
                <div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
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
