import { IoMenu, IoClose } from 'react-icons/io5'
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// Menu Animation Properties
const menuVariants = {
  initial: {
    height: '0%',
  },
  animate: {
    height: '100%',
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
  exit: {
    height: '0%',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
}

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false)
  const [dropdownMenu, setDropdownMenu] = useState(false)

  const changeNavDisplay = () =>
    window.scrollY >= 64 ? setScrollNav(true) : setScrollNav(false)

  useEffect(() => {
    window.addEventListener('scroll', changeNavDisplay)
  }, [])

  return (
    <>
      <nav className="fixed flex flex-row justify-between w-full h-16 2xl:h-20 z-20">
        {/* Left Side */}
        <div
          className={`flex items-center ${
            scrollNav ? 'bg-col-primary-dark' : ''
          } text-col-primary-light w-full md-plus:w-1/2 pl-five-percent font-open-sans font-bold uppercase`}
        >
          <a href="#">
            <span className="font-sans font-light text-col-logo">amir</span>
            shammasov
          </a>
        </div>
        {/* Right Side */}
        <div className="bg-col-primary-light hidden md-plus:flex items-center justify-between w-1/2 px-five-percent">
          <ul className="flex flex-row">
            <li className="p-3 mx-2 xl:mx-4 hover:text-col-logo transition duration-300 ml-0 lg:ml-0">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="p-3 mx-2 xl:mx-4 hover:text-col-logo transition duration-300">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="px-3 py-2 my-1 mx-2 xl:mx-4 hover:opacity-80 text-col-logo transition duration-300 bg-col-secondary-dark-gray rounded-lg">
              <Link href="/contact-me">
                <a>Contact Me</a>
              </Link>
            </li>
          </ul>
          <div className="flex flex-row space-x-2 lg:space-x-4">
            <a
              href="#"
              className="text-2xl 2xl:text-3xl hover:text-col-logo transition duration-300"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="#"
              className="text-2xl 2xl:text-3xl hover:text-col-logo transition duration-300"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
            <a
              href="#"
              className="text-2xl 2xl:text-3xl hover:text-col-logo transition duration-300"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>

        {/* Menu Button */}
        <div className="md-plus:hidden flex items-center bg-col-primary-light px-five-percent">
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          >
            {dropdownMenu ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {dropdownMenu && (
          <motion.div
            className="fixed z-10 flex items-center md-plus:hidden w-full h-full p-5 mx-auto text-center bg-col-menu-backdrop text-col-primary-light font-semibold"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            transition="transition"
            exit="exit"
          >
            <motion.ul
              className="mx-auto text-xl px-five-percent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <li className="my-ten-screen-height hover:text-col-logo">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="my-ten-screen-height hover:text-col-logo">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className="my-ten-screen-height hover:text-col-logo">
                <Link href="/contact-me">
                  <a>Contact Me</a>
                </Link>
              </li>
              <li className="my-ten-screen-height">
                <ul className="flex flex-row justify-between">
                  <li className="hover:text-col-logo">
                    <a href="#">
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li className="hover:text-col-logo">
                    <a href="#">
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li className="hover:text-col-logo">
                    <a href="#">
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
