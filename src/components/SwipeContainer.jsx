// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import WelcomePage from "./WelcomePage";
// import AboutMePage from "./AboutMePage";
// import EducationPage from "./EducationPage";
// import SkillsPage from "./SkillsPage";
// import InternshipsPage from "./InternshipsPage";
// import ExperiencePage from "./ExperiencePage";
// import ProjectsPage from "./ProjectsPage";
// import AchievementsPage from "./AchievementsPage";
// import ThankYouPage from "./ThankYouPage";
// import "../css/SwipeContainer.css"; // New CSS added for responsiveness
// import { useSwipeable } from "react-swipeable";

// const SwipeContainer = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const getPage = (index) => {
//     const props = {
//       onNext: () => setCurrentPage(index + 1),
//       onBack: () => setCurrentPage(index - 1),
//     };
//     switch (index) {
//       case 0:
//         return <WelcomePage onNext={props.onNext} />;
//       case 1:
//         return <AboutMePage {...props} />;
//       case 2:
//         return <EducationPage {...props} />;
//       case 3:
//         return <SkillsPage {...props} />;
//       case 4:
//         return <InternshipsPage {...props} />;
//       case 5:
//         return <ExperiencePage {...props} />;
//       case 6:
//         return <ProjectsPage {...props} />;
//       case 7:
//         return <AchievementsPage {...props} />;
//       case 8:
//         return <ThankYouPage {...props} />;
//       default:
//         return <div>404 - Page Not Found</div>;
//     }
//   };

//   return (
//     <div className="swipe-outer-container">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentPage}
//           initial={{ x: 300, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           exit={{ x: -300, opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="swipe-inner-container"
//         >
//           {getPage(currentPage)}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SwipeContainer;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import WelcomePage from "./WelcomePage";
import AboutMePage from "./AboutMePage";
import EducationPage from "./EducationPage";
import SkillsPage from "./SkillsPage";
import InternshipsPage from "./InternshipsPage";
import ExperiencePage from "./ExperiencePage";
import ProjectsPage from "./ProjectsPage";
import AchievementsPage from "./AchievementsPage";
import ThankYouPage from "./ThankYouPage";

import "../css/SwipeContainer.css";

const SwipeContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 9;

  const goNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const goBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goBack,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false, // optional: you can enable for desktop
  });

  const getPage = (index) => {
    const props = {
      onNext: goNext,
      onBack: goBack,
    };
    switch (index) {
      case 0:
        return <WelcomePage onNext={props.onNext} />;
      case 1:
        return <AboutMePage {...props} />;
      case 2:
        return <EducationPage {...props} />;
      case 3:
        return <SkillsPage {...props} />;
      case 4:
        return <InternshipsPage {...props} />;
      case 5:
        return <ExperiencePage {...props} />;
      case 6:
        return <ProjectsPage {...props} />;
      case 7:
        return <AchievementsPage {...props} />;
      case 8:
        return <ThankYouPage {...props} />;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <div className="swipe-outer-container" {...swipeHandlers}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="swipe-inner-container"
        >
          {getPage(currentPage)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SwipeContainer;
