import Meta from '../components/Meta'
import Link from 'next/link'
import { useMediaQuery } from '../utils/useMediaQuery'
import TopProject from '../components/TopProject'

const Home = () => {
  const isSmBreakpoint = useMediaQuery(640)
  const isXlBreakpoint = useMediaQuery(1280)
  const is2XlBreakpoint = useMediaQuery(1536)

  return (
    <>
      <Meta
        title="Amir Shammasov | Frontend Engineer"
        description="Amir Shammasov's Web Developer Portfolio"
        keywords="Web Developer, Frontend Developer, Frontend Software Engineer, JavaScript Developer, Product-oriented Engineer, Remote Software Developer."
      />
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
              {isXlBreakpoint ? (
                <img
                  loading="lazy"
                  src="/images/Portrait.jpg"
                  alt="My Portrait"
                  style={{ width: '192px', height: '192px' }}
                  className="absolute z-5 object-cover"
                />
              ) : (
                <img
                  loading="lazy"
                  src="/images/Portrait.jpg"
                  alt="My Portrait"
                  style={{ width: '288px', height: '288px' }}
                  className="absolute z-5 object-cover"
                />
              )}
            </div>
          </div>
          {/* Skills */}
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Skills & Tools */}
            <div>
              <h2 className="text-2xl font-semibold border-l-4 border-col-logo pl-2 mb-6 lg:text-3xl xl:text-4xl xl:border-l-8 2xl:text-5xl 2xl:mb-8">
                Skills & Tools
              </h2>
              <h3 className="font-semibold lg:text-2xl 2xl:text-3xl">
                Languages:
              </h3>
              <ul className="py-6">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
              </ul>
              <h3 className="font-semibold lg:text-2xl 2xl:text-3xl">
                Frameworks:
              </h3>
              <ul className="py-6">
                <li>React</li>
                <li>NextJS</li>
                <li>TailwindCSS</li>
              </ul>
              <h3 className="font-semibold lg:text-2xl 2xl:text-3xl">
                Version Control:
              </h3>
              <ul className="py-6">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            {/* Technology icons */}
            <div className="flex flex-row flex-wrap md:w-1/2 h-full md:align-middle">
              {isXlBreakpoint ? (
                <>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/next-js.svg"
                      style={{ width: '75px', height: '75px' }}
                      alt="NextJS logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/sass-original.svg"
                      style={{ width: '75px', height: '75px' }}
                      alt="Sass logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/html5-original-wordmark.svg"
                      style={{ width: '75px', height: '75px' }}
                      alt="HTML5 logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/css3-original-wordmark.svg"
                      style={{ width: '75px', height: '75px' }}
                      alt="CSS3 logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/git-original-wordmark.svg"
                      style={{ width: '75px', height: '75px' }}
                      alt="Git logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/javascript-original.svg"
                      style={{ width: '75px', height: '75px' }}
                      alt="JavaScript logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/react-original-wordmark.svg"
                      style={{ width: '75px', height: '75px' }}
                      alt="React logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/tailwindcss.svg"
                      style={{ width: '75px', height: '75px' }}
                      alt="TailwindCSS logo"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/next-js.svg"
                      style={{ width: '125px', height: '125px' }}
                      alt="NextJS logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/sass-original.svg"
                      style={{ width: '125px', height: '125px' }}
                      alt="Sass logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/html5-original-wordmark.svg"
                      style={{ width: '125px', height: '125px' }}
                      alt="HTML5 logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/css3-original-wordmark.svg"
                      style={{ width: '125px', height: '125px' }}
                      alt="CSS3 logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/git-original-wordmark.svg"
                      style={{ width: '125px', height: '125px' }}
                      alt="Git logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/javascript-original.svg"
                      style={{ width: '125px', height: '125px' }}
                      alt="JavaScript logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/react-original-wordmark.svg"
                      style={{ width: '125px', height: '125px' }}
                      alt="React logo"
                    />
                  </div>
                  <div className="m-6">
                    <img
                      className="object-contain"
                      loading="lazy"
                      src="/images/tailwindcss.svg"
                      style={{ width: '125px', height: '125px' }}
                      alt="TailwindCSS logo"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </section>
      {/* Top Projects */}
      <section className="mt-8">
        <main className="w-9/10 mx-auto">
          <h2 className="text-2xl font-semibold border-l-4 border-col-logo pl-2 mb-6 lg:text-3xl xl:text-4xl xl:border-l-8 2xl:text-5xl 2xl:mb-8">
            Top Projects
          </h2>
          <TopProject
            title="Ga-la Agency"
            route="project-ga-la"
            description="Ga-la agency website is based on a template from leadpages. It's built using vanilla JavaScript, Parcel and Sass."
          >
            {isSmBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/ga-la-on-screen.jpeg"
                style={{ width: '250px', height: '175px' }}
                alt="Ga-la agency site on screen"
              />
            ) : isXlBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/ga-la-on-screen.jpeg"
                style={{ width: '400px', height: '280px' }}
                alt="Ga-la agency site on screen"
              />
            ) : is2XlBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/ga-la-on-screen.jpeg"
                style={{ width: '600px', height: '420px' }}
                alt="Ga-la agency site on screen"
              />
            ) : (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/ga-la-on-screen.jpeg"
                style={{ width: '800px', height: '560px' }}
                alt="Ga-la agency site on screen"
              />
            )}
          </TopProject>
          <TopProject
            title="Shmoom"
            route="project-shmoom"
            description="Shmoom is a simple peer to peer video chat app. It uses react, nodejs, material-ui, socket.io, WebRTC."
          >
            {isSmBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/shmoom-on-screen.jpeg"
                style={{ width: '250px', height: '175px' }}
                alt="Shmoom on screen"
              />
            ) : isXlBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/shmoom-on-screen.jpeg"
                style={{ width: '400px', height: '280px' }}
                alt="Shmoom on screen"
              />
            ) : is2XlBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/shmoom-on-screen.jpeg"
                style={{ width: '600px', height: '420px' }}
                alt="Shmoom on screen"
              />
            ) : (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/shmoom-on-screen.jpeg"
                style={{ width: '800px', height: '560px' }}
                alt="Shmoom on screen"
              />
            )}
          </TopProject>
          <TopProject
            title="Starbucks Landing Page"
            route="project-starbucks"
            description="This is a demo version of a Starbucks landing page. It's made with vanilla HTML, CSS and JavaScript."
          >
            {isSmBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/starbucks-clone-on-screen.jpeg"
                style={{ width: '250px', height: '175px' }}
                alt="Starbucks Landing on screen"
              />
            ) : isXlBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/starbucks-clone-on-screen.jpeg"
                style={{ width: '400px', height: '280px' }}
                alt="Starbucks Landing on screen"
              />
            ) : is2XlBreakpoint ? (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/starbucks-clone-on-screen.jpeg"
                style={{ width: '600px', height: '420px' }}
                alt="Starbucks Landing on screen"
              />
            ) : (
              <img
                loading="lazy"
                className="object-contain"
                src="/images/starbucks-clone-on-screen.jpeg"
                style={{ width: '800px', height: '560px' }}
                alt="Starbucks Landing on screen"
              />
            )}
          </TopProject>
        </main>
      </section>
      <section>
        <div className="--section-styling">
          <h2 className="text-2xl font-semibold text-col-primary-light mb-6 lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:mb-8">
            Want to have a chat?
          </h2>
          <Link href="/contact-me">
            <a className="bg-col-logo text-col-primary-light text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1">
              Contact Me
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
