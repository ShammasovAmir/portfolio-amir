import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-col-primary-dark text-col-secondary-light py-6">
      <div className="w-9/10 mx-auto grid md:grid-cols-2 md:gap-twenty-percent">
        <div className="mb-5">
          <h3 className="font-semibold lg:text-2xl 2xl:text-3xl">
            Links to Social Media
          </h3>
          <ul>
            <li className="my-2 xl:my-4">
              <a
                href="https://www.linkedin.com/in/amir-shammasov-174b6b204"
                className="text-col-secondary-light hover:text-col-logo flex items-center"
              >
                <AiFillLinkedin /> Linkedin
              </a>
            </li>
            <li className="my-2 xl:my-4">
              <a
                href="https://github.com/ShammasovAmir"
                className="text-col-secondary-light hover:text-col-logo flex items-center"
              >
                <AiFillGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold lg:text-2xl 2xl:text-3xl">Credits:</h3>
          <ul>
            <li className="my-2 xl:my-4">
              <a
                href="https://unsplash.com/@altumcode"
                className="text-col-secondary-light hover:text-col-logo"
              >
                Altum Code
              </a>
            </li>
            <li className="my-2 xl:my-4">
              <a
                href="https://github.com/devicons/devicon"
                className="text-col-secondary-light hover:text-col-logo"
              >
                Devicon
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center">&#169; 2021 amirshammasov.com</p>
    </footer>
  )
}

export default Footer
