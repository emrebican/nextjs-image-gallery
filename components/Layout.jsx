import Meta from './Meta'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <h1 className="text-4xl sm:text-6xl text-center mt-6 text-slate-600 hover:text-emerald-600 duration-700 ease-in-out">
        Image Gallery
      </h1>
      {children}
      <hr />
      <Footer />
    </>
  )
}

export default Layout
