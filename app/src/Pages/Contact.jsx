
export const Contact = () => {
  return (
    <div className="p-6 grid grid-cols-1  mt-10 gap-10 rounded lg:grid-cols-2 bg-pink-200 lg:m-20 " >
      <div className="flex justify-center  ">
        <img src="./bg.jpg" alt=""  className="rounded h-70 lg:h-90"/>
      </div>
      <div><h1 className="text-4xl text-center ">Stay in Touch</h1>
      <form className="flex flex-col mt-4">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input      
          type="email"
          placeholder="Your Email"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"      
          className="mb-4 p-2 border border-gray-300 rounded"
          rows="4"  
        ></textarea>
        <button
          type="submit"
          className="bg-rose-400 text-white px-3 py-2 rounded hover:bg-rose-300 transition-colors"
        >
          Send Message
        </button>
      </form>
</div>
      

    </div>

  )
}
export default Contact;