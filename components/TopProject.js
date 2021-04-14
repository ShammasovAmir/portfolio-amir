import Link from 'next/link'

const TopProject = ({ title, route, description, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 2xl:py-8">
      <article className="md:max-w-1/2">
        <h3 className="font-semibold lg:text-2xl 2xl:text-3xl">{title}</h3>
        <p className="py-6">{description}</p>
        <Link href={`/${route}`}>
          <a className="px-3 py-2 hover:opacity-80 text-col-primary-light transition duration-300 bg-col-logo rounded-lg">
            Learn More
          </a>
        </Link>
      </article>
      <div className="flex justify-center py-6">{children}</div>
    </div>
  )
}

export default TopProject
