import Project from '../components/projects/Project'

const ProjectsPage = () => {
  return (
    <section
      id="Education"   // ✅ IMPORTANT FIX
      className="min-h-screen scroll-mt-24"
    >
      <Project />
    </section>
  )
}

export default ProjectsPage