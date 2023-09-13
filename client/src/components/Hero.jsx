// Logo
// import logo from "../../public/assets/logo-light.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-blue-800 w-full md:w-1/2 flex flex-col justify-center text-white px-6 md:px-12 py-8 md:py-0">
      {/* <img src={logo} alt="Logo" className="w-40" /> */}
      <h1 className="text-2xl md:text-4xl font-bold mt-8">
        Job Applications Tracker
      </h1>
      <p className="mt-8 md:mt-12">
        User-friendly web application designed to simplify and streamline the
        job search process. This app enables users to effortlessly manage and
        monitor their job applications.
      </p>
      <div className="mt-8 md:mt-12 flex items-center gap-6">
        <div className="flex -space-x-4">
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
            src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover"
            src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2906&q=80"
            alt=""
          />
        </div>
        <div className="hidden md:block border h-10" />
        <div className="hidden md:block">
          <p>1000+ satisfied users</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
