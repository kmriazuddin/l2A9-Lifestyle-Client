import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAddIcCall, MdOutlineMail } from "react-icons/md";
import { FaStore } from "react-icons/fa6";

const ContactUs = () => {
//   const handleMessage = () => {
//     swal("Thank you!", "We will definitely reply your message", "success");
//   };

  return (
    <div className="md:px-12 w-full p-4 md:mt-12 rounded-md">
      <div className="md:flex items-start gap-8">
        <div className="md:w-1/2 w-full rounded-lg p-4">
          <div className=" w-full">
            <h2 className="text-4xl tracking-widest mb-1 font-bold md:w-10/12 mx-auto text-center">
              Visit Our Shop
            </h2>
            <h2 className=" tracking-widest mb-7 md:w-8/12 text-center mx-auto">
              16 Eastern Housing Pallabi, Mirpur 2, Dhaka Bangladesh.
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3649.8688611499197!2d90.352846230202!3d23.82326186464779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1722330190009!5m2!1sen!2sbd"
              width="700"
              height="500"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
        <div className="md:w-1/2 w-full rounded-lg p-4">
          <div className=" w-full ">
            <h2 className="text-4xl tracking-widest mb-1 font-bold w-10/12">
              Message Here
            </h2>
            <h2 className=" md:tracking-widest mb-7 md:w-8/12">
              Simple causal reasoning about a feedback system is difficult
              because the first system influences the second and second system
              influences the first, leading to a circular argument. This makes
              reasoning based upon cause and effect tricky, and it is necessary
              to analyze the system as a whole.
            </h2>
            <div className="mt-5">
              <h2>Name*</h2>
              <div className="flex justify-center">
                <input
                  name="name"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                />
              </div>
            </div>
            <div className="mt-2">
              <h2>Email*</h2>
              <div className="flex justify-center">
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                />
              </div>
            </div>
            <div className="mt-2">
              <h2>Phone Number*</h2>
              <div className="flex  justify-center">
                <input
                  name="number"
                  className="w-full rounded-lg border border-slate-300 mt-2 p-2"
                />
              </div>
            </div>
            <div className="mt-8">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-lg"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
            //   onClick={handleMessage}
              className="text-white text-lg mt-6 mx-auto px-5 py-2 rounded-xl bg-pink-500"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="md:grid-cols-4 grid-cols-1 grid mx-3 items-center mt-10 gap-5">
        <div
          className="text-center rounded-md p-3"
          style={{
            boxShadow: "9px 9px 20px #e0e0e0, -9px -9px 20px #ffffff",
            borderRadius: "30px",
          }}
        >
          <div className="flex bg-green-200 rounded-full mx-auto w-20 h-20 items-center justify-center">
            <FaStore className="mb-2 text-center text-black text-3xl" />
          </div>
          <h2 className="mb-1 text-lg font-medium">OPENING HOURS</h2>
          <p className="mb-2 lg">Sunday-Thursday: 09:00AM-9:00PM</p>
        </div>
        <div
          className="text-center rounded-md p-3"
          style={{
            boxShadow: "9px 9px 20px #e0e0e0, -9px -9px 20px #ffffff",
            borderRadius: "30px",
          }}
        >
          <div className="flex bg-green-200 rounded-full mx-auto w-20 h-20 items-center justify-center">
            <FaMapMarkerAlt className="mb-2 text-center text-black text-3xl" />
          </div>
          <h2 className="mb-1 text-lg font-medium">Address</h2>
          <p className="mb-2 text-base">Pallabi, Mirpur 2</p>
        </div>
        <div
          className="text-center rounded-md p-3"
          style={{
            boxShadow: "9px 9px 20px #e0e0e0, -9px -9px 20px #ffffff",
            borderRadius: "30px",
          }}
        >
          <div className="flex bg-green-200 rounded-full mx-auto w-20 h-20 items-center justify-center">
            <MdAddIcCall className="mb-2 text-center text-black text-3xl" />
          </div>
          <h2 className="mb-1 text-lg font-medium">Contact</h2>
          <p className="mb-2 text-base">(+0123456789)</p>
        </div>
        <div
          className="text-center rounded-md p-3"
          style={{
            boxShadow: "9px 9px 20px #e0e0e0, -9px -9px 20px #ffffff",
            borderRadius: "30px",
          }}
        >
          <div className="flex bg-green-200 rounded-full mx-auto w-20 h-20 items-center justify-center">
            <MdOutlineMail className="mb-2 text-center text-black text-3xl" />
          </div>
          <h2 className="mb-1 text-lg font-medium">Email</h2>
          <p className="mb-2 text-base">findx.info@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
