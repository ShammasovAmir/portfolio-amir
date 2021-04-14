import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-col-primary-light text-col-secondary-darker text-base 2xl:text-xl">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
