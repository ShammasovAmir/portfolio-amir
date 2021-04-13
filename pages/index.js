import Meta from '../components/Meta'
import Link from 'next/link'
import { useMediaQuery } from '../utils/useMediaQuery'
import Image from 'next/image'

const Home = () => {
  const isBreakpoint = useMediaQuery(1280)

  return (
    <>
      <Meta />
      <header>
        <main className="grid content-center w-9/10 h-full mx-auto text-center text-col-primary-light">
          <h1 className="mb-6 font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Handcrafting Incredible
            <br /> Web Experience
          </h1>
          <p>Meet Amir</p>
          <svg
            className="w-8 mx-auto 2xl:w-10 mt-2"
            id="Scroll-indicator"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="114"
            viewBox="0 0 64 114"
          >
            <g
              id="Rectangle_463"
              data-name="Rectangle 463"
              fill="none"
              stroke="#ecf0f1"
              strokeWidth="5"
            >
              <rect width="64" height="114" rx="32" stroke="none" />
              <rect
                x="2.5"
                y="2.5"
                width="59"
                height="109"
                rx="29.5"
                fill="none"
              />
            </g>
            <g
              id="Ellipse_10"
              className="circle"
              data-name="Ellipse 10"
              transform="translate(14 15)"
              fill="#fff"
              stroke="#707070"
              strokeWidth="1"
            >
              <circle cx="18" cy="18" r="18" stroke="none" />
              <circle cx="18" cy="18" r="17.5" fill="none" />
            </g>
          </svg>
        </main>
      </header>
      {/* About Me */}
      <section className="bg-col-primary-dark h-125">
        <h2 className="text-col-primary-light text-center font-semibold pt-20 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          About Me
        </h2>
      </section>
      <section className="-mt-80">
        <main className="w-9/10 mx-auto">
          {/* About */}
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Two words about me */}
            <div className="bg-col-primary-light p-6 rounded-3xl mb-12 md:w-fifty-percent md:min-h-100 md:mb-0">
              <p>
                I'm a frontend engineer specializing in creating single-page
                applications with responsive design and interactive UI. I'm
                passionate about creating quality products that solve peoples'
                day-to-day problems and I enjoy bringing value to my colleagues.
                By the way, my name is Amir, nice to meet you.
              </p>
              <br />
              <p>
                If you are interested in my work, want to give me a job
                opportunity or just want to have a chat with me, please don't
                hesitate to contact me ☝ above or 👇 below.
                {/* Check out my{' '}
                {
                  <Link href="/blog">
                    <a className="text-col-logo hover:underline transition duration-300">
                      blog
                    </a>
                  </Link>
                }{' '}
                and learn what I think about current industry trends. */}
              </p>
            </div>
            {/* My Picture */}
            <div className="relative w-48 h-48 mb-12 mt-4 mx-auto md:mx-0 xl:w-72 xl:h-72">
              <div className="absolute top-1/10 left-1/10 bg-col-secondary-dark-gray w-48 h-48 xl:w-72 xl:h-72"></div>
              {isBreakpoint ? (
                <Image
                  src="/images/Portrait.jpg"
                  alt="My Portrait"
                  width={192}
                  height={192}
                  className="absolute z-5 object-cover"
                />
              ) : (
                <Image
                  src="/images/Portrait.jpg"
                  alt="My Portrait"
                  width={288}
                  height={288}
                  className="absolute z-5 object-cover"
                />
              )}
            </div>
          </div>
          {/* Skills */}
          <div>
            {/* Skills & Tools */}
            <div>
              <h2 className="text-2xl font-semibold border-l-4 border-col-logo pl-2">
                Skills & Tools
              </h2>
              <h3>Languages</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
              </ul>
              <h3>Frameworks</h3>
              <ul>
                <li>React</li>
                <li>NextJS</li>
                <li>TailwindCSS</li>
              </ul>
              <h3>Version Control</h3>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            {/* Technology icons */}
            <div></div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Home
