import image from "../Assets/contact.png";

const Contact = () => {
  return (
    <div>
      <h2 className=" font-bold text-center  text-3xl my-4">Contact us</h2>
      <div className="flex w-full justify-center items-center p-2 flex-col sm:flex-row sm:justify-evenly">
        <img src={image} className="w-[300px] h-auto sm:mx-4 sm:w-[300px]" />
        <form className="flex flex-col p-10 bg-gray-200 m-3 sm:mx-4 sm:w-[400px]">
          <input
            type="text"
            className="border border-orange-500 mt-4 p-1 rounded-md"
            placeholder="Name"
          />

          <input
            type="text"
            className="border border-orange-500 mt-5 p-1 rounded-md"
            placeholder="Email"
          />
          <textarea
            placeholder="Message"
            className="resize-none border border-orange-500 mt-5 rounded-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-1 m-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
