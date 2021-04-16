import Link from 'next/link'
import Meta from '../components/Meta'

const Custom404 = () => {
  return (
    <>
      <Meta title="Page not found" description="" keywords="" />
      <main className="bg-col-primary-dark h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-col-primary-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex items-center">
          404
        </h1>
        <p className="text-col-primary-light my-6">Page not found.</p>
        <Link href="/">
          <a className="bg-col-logo text-col-primary-light text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1">
            Back Home
          </a>
        </Link>
      </main>
    </>
  )
}

export default Custom404
