import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formDataObj = new FormData();
    formDataObj.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formDataObj.append("name", formData.name);
    formDataObj.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const result = await response.json();
    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="windows__utilityBar md:w-[60vw] z-0 rounded-b-md border border-primaryBorder bg-primaryBg border-t-0 py-8 px-6 md:px-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">
        Send a Message
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-5"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-primaryBorder bg-primaryBg text-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message along with contact info..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-lg border border-primaryBorder bg-primaryBg text-gray-100 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
          ></textarea>
        </div>
        <button
            type="submit"
            disabled={isSubmitting}
            className={`primary items-center justify-center gap-2 flex-1 px-8 py-2 rounded-md 
                shadow-[0_4px_0_0_rgba(235,157,42,0.4)] 
                transition-transform duration-150
                flex flex-row flex-nowrap 
                ${isSubmitting
                ? "bg-gray-500 cursor-not-allowed opacity-70 shadow-none translate-y-0"
                : "bg-primary hover:cursor-pointer hover:-translate-y-1 hover:shadow-[0_6px_0_0_rgba(235,157,42,0.4)] active:translate-y-0 active:shadow-[0_4px_0_0_rgba(235,157,42,0.4)]"
                }`}
            >
            {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`text-center mt-3 text-sm ${
              status.startsWith("✅")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
