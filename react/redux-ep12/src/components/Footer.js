const Footer = () => {
  return (
    <div className="bg-gray-900">
      <footer className=" text-white py-8 flex flex-col w-full  justify-center items-center sm:flex-col sm:px-[20%]">
        <div className="mx-4">
          <h1>Company</h1>
          <ul className="text-gray-500">
            <li>
              <a href="https://careers.swiggy.com/#/">About</a>
            </li>
            <li>
              <a href="https://careers.swiggy.com/#/">Careers</a>
            </li>
            <li>
              <a href="https://careers.swiggy.com/#/">Privacy Policy</a>
            </li>
            <li>
              <a href="https://careers.swiggy.com/#/">Terms Of Service</a>
            </li>
          </ul>
        </div>
        <div className="container w-full flex justify-center mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-3"
            title="Twitter"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M22.46 2.45a9.34 9.34 0 01-2.67.74 4.67 4.67 0 002.04-2.58 9.32 9.32 0 01-2.96 1.13 4.67 4.67 0 00-7.94 4.25c-3.89-.19-7.35-2.06-9.66-4.89a4.67 4.67 0 001.44 6.23 4.65 4.65 0 01-2.11-.58v.06a4.67 4.67 0 003.74 4.58 4.63 4.63 0 01-2.08.08 4.67 4.67 0 004.36 3.24 9.38 9.38 0 01-5.78 1.99 9.42 9.42 0 01-1.11-.06 13.25 13.25 0 007.16 2.09c8.58 0 13.27-7.1 13.27-13.28 0-.2 0-.4-.02-.6a9.49 9.49 0 002.34-2.42l.01-.02z"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-3"
            title="Facebook"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.74 7.84 6.55 9.14v-6.47H5.75v-2.68h2.8V9.81c0-2.78 1.65-4.31 4.18-4.31 1.21 0 2.52.22 2.52.22v2.76h-1.42c-1.39 0-1.82.86-1.82 1.75v2.1h3.1l-.5 2.68h-2.6v6.47C19.26 19.84 22 16.24 22 12c0-5.52-4.48-10-10-10z"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-3"
            title="Instagram"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5zm6.75-12.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.21 14.39c3.65 1.33 7.79-1.3 7.79-5.11 0-1.14-.36-2.19-.98-3.06M3.5 10.25h5.25"
              ></path>
              <circle cx="14.88" cy="9.75" r="1.5"></circle>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-3"
            title="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v16l7-3 7 3V4M4 8h16M6 12h2M6 16h2"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-3"
            title="Youube"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M21.623 6.549a2.61 2.61 0 00-1.85-1.85C18.162 4 12 4 12 4s-6.162 0-7.774.7c-.813.297-1.55 1.034-1.85 1.85C2 8.838 2 12 2 12s0 3.162.7 4.774c.297.813 1.034 1.55 1.85 1.85C5.838 19 12 19 12 19s6.162 0 7.774-.7c.813-.297 1.55-1.034 1.85-1.85C22 15.162 22 12 22 12s0-3.162-.677-4.774zM10 15V9l5.231 3L10 15z" />
            </svg>
          </a>
        </div>
      </footer>
      <h1 className="text-white text-center">
        © 2024 xyz Technologies Pvt. Ltd
      </h1>
    </div>
  );
};

export default Footer;
