import Meta from '../components/Meta'
import Image from 'next/image'
import { useMediaQuery } from '../utils/useMediaQuery'

const ProjectShmoom = () => {
  const isSmBreakpoint = useMediaQuery(640)
  const isMdBreakpoint = useMediaQuery(768)
  const isLgBreakpoint = useMediaQuery(1000)

  return (
    <>
      <Meta
        title="Project - Shmoom"
        description="Shmoom is a peer to peer video chat app built with react and nodejs"
        keywords=""
      />
      <main>
        <section className="bg-col-primary-dark h-350px lg:h-425px thousand:h-600px">
          <h2 className="text-col-primary-light text-center font-semibold pt-20 text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-20">
            Shmoom
          </h2>
          <div
            className="mx-auto"
            style={{ width: 'clamp(250px, 90%, 960px)' }}
          >
            <div className="flex flex-row justify-between">
              <a
                href="https://shmoom.com"
                className="bg-col-logo text-col-primary-light text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1"
              >
                Live site
              </a>
              <a
                href="https://github.com/ShammasovAmir/shmoom"
                className="bg-col-primary-light text-col-primary-dark text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1"
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
              <Image src="/images/shmoom.png" width={240} height={150} />
            </div>
          ) : isMdBreakpoint ? (
            <div className="grid justify-center mb-16">
              <Image src="/images/shmoom.png" width={560} height={350} />
            </div>
          ) : isLgBreakpoint ? (
            <div className="grid justify-center mb-20">
              <Image src="/images/shmoom.png" width={680} height={425} />
            </div>
          ) : (
            <div className="grid justify-center mb-24">
              <Image src="/images/shmoom.png" width={960} height={600} />
            </div>
          )}
          <p className="mb-12">
            Shmoom is a peer-to-peer video chat application that utilizes
            WebRTC. It uses Socket.io library to establish real-time data
            connection between the client and the server. Its interface is built
            with React and MaterialUI. To use the app you simply have to copy
            your id, send it over to your friend, and have him call you.
          </p>
          <h3 className="font-semibold lg:text-2xl 2xl:text-3xl">
            Tools I used to build this app:
          </h3>
          <ul className="py-6">
            <li>React</li>
            <li>MaterialUI</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Socket.io</li>
            <li>WebRTC</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default ProjectShmoom
