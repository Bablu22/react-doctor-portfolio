const ContactForm = () => {
  return (
    <div className="px-4 py-12 bg-white md:px-12">
      <div className="container w-full mx-auto md:w-3/5">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Contact Us</h2>
        </div>
        <form className="mx-auto mt-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-4 md:w-1/2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full px-4 py-2 bg-white border rounded border-primary focus:outline-none focus:border-primary"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="w-full px-4 mb-4 md:w-1/2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full px-4 py-2 bg-white border rounded border-primary focus:outline-none focus:border-primary"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="w-full px-4 mb-4 md:w-1/2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 bg-white border rounded border-primary focus:outline-none focus:border-primary"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="w-full px-4 mb-4 md:w-1/2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="w-full px-4 py-2 bg-white border rounded border-primary focus:outline-none focus:border-primary"
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div className="w-full px-4 mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 bg-white border rounded border-primary focus:outline-none focus:border-primary"
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button
                className="px-4 py-2 text-white rounded bg-primary hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
