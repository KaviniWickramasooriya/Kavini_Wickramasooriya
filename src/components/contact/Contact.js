import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    // Validate
    if (!username) return setErrMsg("Username is required!");
    if (!phoneNumber) return setErrMsg("Phone number is required!");
    if (!email) return setErrMsg("Please give your Email!");
    if (!emailValidation(email)) return setErrMsg("Give a valid Email!");
    if (!subject) return setErrMsg("Please give your Subject!");
    if (!message) return setErrMsg("Message is required!");

    setErrMsg(""); // Clear previous errors

    const formData = {
      access_key: "3c2b6575-366b-4b10-b9cd-dd28b265323b",
      name: username,
      phone: phoneNumber,
      email_address: email,
      subject: subject,
      message: message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMsg(
          `Thank you dear ${username}, your message has been sent successfully!`
        );
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setErrMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrMsg("Failed to send message. Please try again later.");
    }
  };

  // Clear success or error messages after 3 seconds
  useEffect(() => {
    if (successMsg || errMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg("");
        setErrMsg("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, errMsg]);

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              onSubmit={handleSend}
            >
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Please give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>

              {/* Feedback Messages */}
              {(errMsg || successMsg) && (
                <div className="w-full pt-4">
                  {errMsg && (
                    <p className="text-center text-orange-500 text-base tracking-wide animate-fade-in">
                      {errMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="text-center text-green-500 text-base tracking-wide animate-fade-in">
                      {successMsg}
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;