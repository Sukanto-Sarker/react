const Home = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Home Page
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        Welcome to our website! This is the Home page. Here you can find
        information about our services, latest updates, and featured content.
      </p>

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
        alt="Home"
        className="w-full rounded-lg"
      />
    </div>
  );
};

export default Home;