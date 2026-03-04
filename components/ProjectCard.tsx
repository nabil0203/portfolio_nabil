'use client'

import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Project } from '@/data/portfolioData'

const LINK_COLOR_RGB = '59, 130, 246'

interface ProjectCardProps {
  project: Project & {
    imageUrl?: string
  }
  index: number
}

const linkHoverVariants: Variants = {
  hover: {
    scale: 1.05,
    borderColor: [
      `rgba(${LINK_COLOR_RGB}, 0.5)`,
      `rgba(${LINK_COLOR_RGB}, 1)`,
      `rgba(${LINK_COLOR_RGB}, 0.5)`,
    ],
    boxShadow: [
      `0 0 4px rgba(${LINK_COLOR_RGB}, 0.2)`,
      `0 0 8px rgba(${LINK_COLOR_RGB}, 0.5)`,
      `0 0 4px rgba(${LINK_COLOR_RGB}, 0.2)`,
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    }
  },
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 p-5 sm:p-8 transition-colors flex flex-col h-full shadow-lg shadow-black/20 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.06)", borderColor: "rgba(255, 255, 255, 0.2)" }}
      transition={{ duration: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/10 group-hover:bg-accent/20 blur-[3rem] rounded-full transition-colors duration-100" />
      {project.imageUrl && (
        <div className="-mx-5 -mt-5 mb-4 sm:-mx-8 sm:-mt-8 sm:mb-6 h-40 sm:h-52 overflow-hidden shadow-inner border border-white/5 relative group-hover:border-white/10 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
          <img
            src={project.imageUrl}
            alt={`Preview image for ${project.title} project`}
            className="w-full h-full object-cover transition-transform duration-100 hover:scale-110"
            loading="lazy"
          />
        </div>
      )}

      <h3 className="text-white font-bold text-xl sm:text-2xl mb-2 sm:mb-4">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="mt-3 sm:mt-4 mb-6 sm:mb-8 flex-grow">
        <div className="flex items-center gap-1.5 mb-3">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <h4 className="text-gray-400 text-sm font-semibold">Built With:</h4>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
          {project.tools.map((tool, toolIndex) => (
            <span
              key={toolIndex}
              className="text-[10px] sm:text-xs font-medium tracking-wide text-cyan-300 bg-cyan-400/10 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-cyan-400/20 shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 sm:gap-4 pt-4 border-t border-white/5">
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 bg-surface/80 hover:bg-accent hover:text-white transition-colors duration-100 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium border border-blue-400 text-xs sm:text-sm"
            style={{ borderWidth: '1px' }}
            variants={linkHoverVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </motion.a>
        )}
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 bg-surface/80 hover:bg-accent hover:text-white transition-colors duration-100 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium border border-blue-400 text-xs sm:text-sm"
            style={{ borderWidth: '1px' }}
            variants={linkHoverVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            aria-label={`View live demonstration of ${project.title}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}