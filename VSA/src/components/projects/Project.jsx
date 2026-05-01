import FeaturedProjects from "./project_components/FeaturedProjects"
import AchievementsRecognition from "./project_components/AchievementsRecognition"
import EducationQualifications from "./project_components/EducationQualifications"

const Project = () => {
  return <h2 className="text-4xl">
    <FeaturedProjects />
    <AchievementsRecognition />
    <EducationQualifications />
  </h2>
}

export default Project