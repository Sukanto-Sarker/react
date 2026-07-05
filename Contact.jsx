const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        Contact Page
      </h1>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border rounded-lg p-3"
        ></textarea>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>

      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">
          Contact Information
        </h2>

        <p>Email: info@example.com</p>
        <p>Phone: +880 1234-567890</p>
        <p>Address: Dhaka, Bangladesh</p>
      </div>
    </div>
  );
};

export default Contact;