import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Footer = () => {
  const { serverURL } = useContext(AuthContext);
  const [comment, setComment] = useState({
    name: "", email: "", message: ""
  })
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    fetch(`${serverURL}/comment`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your comment has been send to our team. We will get you soon.",
            showConfirmButton: false,
            timer: 1500
          }); e.target.reset();
          setComment({ name: "", email: "", message: "" })
        }
      })
  }
  return (
    <footer className="relative overflow-hidden">
      <img src="images/more/13.jpg" className="absolute -z-10 top-0 left-0" />
      {/* top section */}
      <section className="flex justify-between items-center gap-[154px] 2xl:px-[300px] lx:px-[200px] lg:px-[100px] px-14 pt-[120px] pb-12">
        {/* left site */}
        <div className="flex flex-col gap-8">
          <img src="images/more/logo1.png" className="w-[75px] h-[90px]" />
          <h1 className="shaded-text">Espresso Emporium</h1>
          <p className=" text-[#1a1919] text-xl font-raleway leading-9">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

          <div className="flex items-center gap-5">
            <img src="images/social-logos/facebook.png" />
            <img src="images/social-logos/twitter.png" />
            <img src="images/social-logos/instagram.png" />
            <img src="images/social-logos/linkedin.png" />
          </div>
          <h1 className="shaded-text">Get in Touch</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <img src="images/contact-icons/phone.png" />
              <p className="text-[#1a1919] text-xl font-Raleway leading-9">+88 01533 333 333</p>
            </div>
            <div className="flex gap-6 items-center">
              <img src="images/contact-icons/mail.png" />
              <p className="text-[#1a1919] text-xl font-Raleway leading-9">info@gmail.com</p>
            </div>
            <div className="flex items-center gap-6">
              <img src="images/contact-icons/location.png" />
              <p className="text-[#1a1919] text-xl font-Raleway leading-9">72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>
        {/* right side */}
        <form onSubmit={handleCommentSubmit} className="flex flex-col w-1/2 items-start">
          <h1 className="shaded-text mb-8">Connect with Us</h1>
          <input
            type="text"
            className="mb-4 px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm" placeholder="Name"
            required
            onChange={(e) => setComment({ ...comment, name: e.target.value })}
          />

          <input
            type="email"
            className="mb-4 px-3 py-4 w-full outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm" placeholder="Email"
            required
            onChange={(e) => setComment({ ...comment, email: e.target.value })}
          />
          <textarea
            type="text"
            className="px-3 py-4 w-full mb-6 outline-[#331a15] focus:outline focus:outline-[.5px] rounded-sm"
            placeholder="Message"
            required
            onChange={(e) => setComment({ ...comment, message: e.target.value })}
            rows='5'
          />
          <button className="btn font-rancho bg-transparent rounded-full text-2xl font-normal text-[#331a15] border-[#331a15] px-6 hover:text-white hover:bg-[#331a15cb] hover:border-white">Send Message</button>
        </form>
      </section>
      {/* bottom part */}
      <section className="relative py-3 h-12 overflow-hidden">
        <img src="images/more/15.jpg" className="absolute top-0 left-0 -z-10" />
        <h1 className="text-white text-xl font-rancho text-center">Copyright Espresso Emporium ! All Rights Reserved</h1>
      </section>
    </footer>
  );
};

export default Footer;