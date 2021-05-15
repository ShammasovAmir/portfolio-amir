import Meta from '../components/Meta'
import { useMediaQuery } from '../utils/useMediaQuery'

const ProjectGaLa = () => {
  const isSmBreakpoint = useMediaQuery(640)
  const isMdBreakpoint = useMediaQuery(768)
  const isLgBreakpoint = useMediaQuery(1000)

  return (
    <>
      <Meta
        title="Project - Ga-la agency"
        description="Ga-la agency is a clone of a template from leadpages.com"
        keywords=""
      />
      <main>
        <section className="bg-col-primary-dark h-350px lg:h-425px thousand:h-600px">
          <h2 className="text-col-primary-light text-center font-semibold pt-20 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-20">
            GA-LA Agency Website
          </h2>
          <div
            className="mx-auto"
            style={{ width: 'clamp(250px, 90%, 960px)' }}
          >
            <div className="flex flex-row justify-between">
              <a
                href="https://gala-agenci.com"
                className="bg-col-logo text-col-primary-light text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1"
                target="_blank"
              >
                Live site
              </a>
              <a
                href="https://github.com/ShammasovAmir/social-marketing-lead-page"
                className="bg-col-primary-light text-col-primary-dark text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
        <section
          style={{ width: 'clamp(250px, 90%, 960px)' }}
          className="mx-auto -mt-16 lg:-mt-64"
        >
          {isSmBreakpoint ? (
            <div className="grid justify-center mb-12">
              <img
                src="/images/ga-la-agenci.png"
                style={{ width: '240px', height: '150px' }}
                alt="Shmoom screenshot"
                className="object-cover"
              />
            </div>
          ) : isMdBreakpoint ? (
            <div className="grid justify-center mb-16">
              <img
                src="/images/ga-la-agenci.png"
                style={{ width: '560px', height: '350px' }}
                alt="GA-LA screenshot"
                className="object-cover"
              />
            </div>
          ) : isLgBreakpoint ? (
            <div className="grid justify-center mb-20">
              <img
                src="/images/ga-la-agenci.png"
                style={{ width: '680px', height: '425px' }}
                alt="GA-LA screenshot"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="grid justify-center mb-24">
              <img
                src="/images/ga-la-agenci.png"
                style={{ width: '960px', height: '600px' }}
                alt="GA-LA screenshot"
                className="object-cover"
              />
            </div>
          )}
          <p className="mb-12">
            Ga-la agency is a recreation of a template from{' '}
            <a href="https://www.leadpages.com">leadpages.com</a>. It's fully
            responsive, the popup window is animated and it has basic form
            validation.
          </p>
          <h3 className="font-semibold lg:text-2xl 2xl:text-3xl">
            Tools I used to build this site:
          </h3>
          <ul className="py-6">
            <li>Parcel</li>
            <li>JavaScript</li>
            <li>Sass</li>
            <li>FontAwesome</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default ProjectGaLa
