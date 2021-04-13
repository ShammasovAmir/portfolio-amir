import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-col-primary-light text-col-secondary-darker text-base 2xl:text-xl">
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default Layout
