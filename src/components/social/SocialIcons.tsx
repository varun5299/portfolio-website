import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons"
import {AnimatePresence, motion} from "framer-motion"
import {useState} from "react"

const iconMap: Record<string, IconDefinition> = {
  "fa-github": faGithub,
  "fa-linkedin-in": faLinkedinIn,
  "fa-youtube": faYoutube,
  "fa-google": faGoogle,
  "fa-facebook-f": faFacebookF,
  "fa-instagram": faInstagram,
  "fa-x-twitter": faXTwitter,
}

export type SocialLink = {
  name: string;
  link: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
}

const SocialIcons = ({links}: {links: SocialLink[]}) => {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.div
      initial={{opacity: 0, y: 24}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.6, duration: 0.6, ease: "easeOut"}}
      style={{display: "flex", gap: 16, flexWrap: "wrap"}}
    >
      {links.map((item) => (
        <div
          key={item.name}
          onMouseEnter={() => {
            setHovered(item.name)
          }}
          onMouseLeave={() => {
            setHovered(null)
          }}
          style={{position: "relative"}}
        >
          <motion.div
            whileHover={{scale: 1.2, rotate: -5}}
            transition={{type: "spring", stiffness: 300}}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                borderRadius: "50%",
                backgroundColor: item.backgroundColor,
                color: "#fff",
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
            >
              <FontAwesomeIcon icon={iconMap[item.fontAwesomeIcon]} size="2x" />
            </a>
          </motion.div>

          <AnimatePresence>
            {hovered === item.name && (
              <motion.div
                initial={{opacity: 0, y: -8}}
                animate={{opacity: 1, y: -16}}
                exit={{opacity: 0, y: -8}}
                transition={{duration: 0.25}}
                style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "4px 8px",
                  background: "#000",
                  color: "#fff",
                  borderRadius: 4,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              >
                {item.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  )
}

export default SocialIcons
