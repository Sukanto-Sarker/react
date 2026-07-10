const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        About Page
      </h1>

      <p className="text-gray-700 text-lg mb-4">
        We are a passionate team dedicated to building modern and responsive
        web applications using React and Tailwind CSS.
      </p>

      <p className="text-gray-700 text-lg mb-6">
        Our goal is to create fast, user-friendly, and beautiful websites
        that provide the best experience for users.
      </p>

      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
        alt="About"
        className="w-full rounded-lg"
      />
    </div>
  );
};
// this is about page 
export default About;
