import Meta from '../components/Meta'

const ContactMe = () => {
  return (
    <>
      <Meta title="Contact me" description="" keywords="" />
      <section
        className="relative block py-24 lg:pt-0 bg-col-primary-dark"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center h-screen">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-col-primary-light">
                <form
                  name="contact"
                  action="/success"
                  method="POST"
                  className="flex-auto p-5 lg:p-10"
                  data-netlify="true"
                >
                  <h2 className="text-2xl font-semibold mb-6 lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:mb-8">
                    Want to work with me?
                  </h2>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="font-semibold lg:text-2xl 2xl:text-3xl"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded shadow focus:outline-none focus:shadow-outline md:py-4 w-full mt-2 2xl:mt3 2xl:py-5"
                      placeholder="Full Name"
                      style={{ transition: 'all .15s ease' }}
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="font-semibold lg:text-2xl 2xl:text-3xl"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded shadow focus:outline-none focus:shadow-outline md:py-4 w-full mt-2 2xl:mt3 2xl:py-5"
                      placeholder="Email"
                      style={{ transition: 'all .15s ease' }}
                      required
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="font-semibold lg:text-2xl 2xl:text-3xl"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded shadow focus:outline-none focus:shadow-outline md:py-4 w-full mt-2 2xl:mt3 2xl:py-5 resize-none"
                      placeholder="Type a message..."
                      required
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-col-logo text-col-primary-light text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1"
                      type="submit"
                      style={{ transition: 'all .15s ease' }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactMe
