import { useRef, useState } from "react";

const ControlledFeedbackFrom = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      alert("Name required");
      nameRef.current.focus();
      return;
    }
    if (!form.email.includes("@")) {
      emailRef.current.focus();

      alert("Valid email required");

      return;
    }
    if (!form.message.length) {
      messageRef.current.focus();
      return;
    }

    console.log("Form submitted:", form.name, form.message, form.email);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        type="text"
        ref={nameRef}
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        name="name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="email"
        ref={emailRef}
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        name="email"
      />
      <textarea
        className="border rounded-2xl p-2 my-3"
        ref={messageRef}
        value={form.message}
        placeholder="Your message"
        onChange={handleChange}
        name="message"
      />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
};

export default ControlledFeedbackFrom;
