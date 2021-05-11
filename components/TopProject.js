import Link from 'next/link'

const TopProject = ({ title, route, description, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 2xl:py-8">
      <article className="md:max-w-1/2">
        <h3 className="font-open-sans tracking-wider text-2xl uppercase mb- lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:mb-8">
          {title}
        </h3>
        <p className="py-6">{description}</p>
        <Link href={`/${route}`}>
          <a className="bg-col-logo text-col-primary-light text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1">
            Learn More
          </a>
        </Link>
      </article>
      <div className="flex justify-center py-6">{children}</div>
    </div>
  )
}

export default TopProject
