import Link from 'next/link'
import Meta from '../components/Meta'

const blog = () => {
  return (
    <>
      <Meta
        title="Blog"
        description="Amir Shammasov's blog - talking about development, tech and how to get into the industry"
        keywords=""
      />
      <main className="bg-col-primary-dark h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-col-primary-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex items-center mb-6">
          Coming soon
        </h1>
        <Link href="/">
          <a className="bg-col-logo text-col-primary-light text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1">
            Back Home
          </a>
        </Link>
      </main>
    </>
  )
}

export default blog
