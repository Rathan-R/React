const Contact = () => {
  return (
    <div>
      <h2 className=" font-bold text-center  ">Contact us</h2>
      <div className="flex w-full justify-center p-2">
        <form className="flex flex-col p-10 bg-gray-200 m-3">
          <label>Name</label>
          <input
            type="text"
            className="border border-black my-2 p-1 rounded-lg"
            placeholder="Enter your name"
          />
          <label>Message</label>
          <input
            type="text"
            className="border border-black my-2 p-1 rounded-lg"
            placeholder="Enter your Message"
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
