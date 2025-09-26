import { useRef } from "react";

const UncontrolledFeedbackFrom = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameRef.current.value) {
      alert("Name required");
      nameRef.current.focus();
      return;
    }
    if (!emailRef.current.value.includes("@")) {
      emailRef.current.focus();

      alert("Valid email required");

      return;
    }
    if (!messageRef.current.value) {
      messageRef.current.focus();
      return;
    }

    console.log(
      "Form submitted:",
      nameRef.current.value,
      emailRef.current.value,
      messageRef.current.value
    );
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        type="text"
        ref={nameRef}
        placeholder="Name"
        name="name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="email"
        ref={emailRef}
        placeholder="Email"
        name="email"
      />
      <textarea
        className="border rounded-2xl p-2 my-3"
        ref={messageRef}
        placeholder="Your message"
        name="message"
      />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
};

export default UncontrolledFeedbackFrom;
