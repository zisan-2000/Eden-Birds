import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar2 from "./../components/navbar/Navbar2";

// Import service images
import uiuxImage from "../assets/mobiledev.jpg";
import webDevImage from "../assets/uiux.jpg";
import mobileDevImage from "../assets/webdev.jpg";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-slate-800"
    >
      <Navbar2 />
      <div className="container mx-auto min-h-screen py-12">
        <h1 className="heading">Our Services</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <img
              src={webDevImage}
              alt="Web Development"
              className="mb-4 h-40 w-full rounded object-cover"
            />
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Web Development
            </h2>
            <p className="text-gray-600">
              We specialize in creating modern, responsive, and user-friendly
              websites tailored to your business needs.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <img
              src={mobileDevImage}
              alt="Mobile App Development"
              className="mb-4 h-40 w-full rounded object-cover"
            />
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Mobile App Development
            </h2>
            <p className="text-gray-600">
              Transform your ideas into powerful mobile applications that engage
              users and enhance your brand.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <img
              src={uiuxImage}
              alt="UI/UX Design"
              className="mb-4 h-40 w-full rounded object-cover"
            />
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              UI/UX Design
            </h2>
            <p className="text-gray-600">
              Craft visually stunning and intuitive interfaces that captivate
              your audience and elevate user experience.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Services;
