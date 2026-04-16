import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "917975843594"; // replace with your number

    const message = `Hello, I have a query:

Name: ${form.name}
Email: ${form.email}
Mobile: ${form.mobile}
Query: ${form.query}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    // ✅ Clear form after submit
    setForm({
      name: "",
      email: "",
      mobile: "",
      query: "",
    });
  };

  return (
    <div className="container">
      <style>{`
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
        }

        .card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          padding: 40px;
          border-radius: 20px;
          width: 350px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.8s ease;
        }

        .card h2 {
          text-align: center;
          color: #fff;
          margin-bottom: 20px;
        }

        .input-group {
          position: relative;
          margin-bottom: 20px;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          padding: 12px;
          border: none;
          outline: none;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.3);
          color: #fff;
          font-size: 14px;
        }

        .input-group textarea {
          height: 80px;
          resize: none;
        }

        .input-group label {
          position: absolute;
          top: 12px;
          left: 12px;
          color: #eee;
          font-size: 14px;
          transition: 0.3s;
          pointer-events: none;
        }

        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label,
        .input-group textarea:focus + label,
        .input-group textarea:not(:placeholder-shown) + label {
          top: -8px;
          left: 10px;
          font-size: 12px;
          background: #4facfe;
          padding: 2px 6px;
          border-radius: 6px;
        }

        button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: #25d366;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: scale(1.05);
          background: #1ebe5d;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <form className="card" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <div className="input-group">
          <input
            type="text"
            name="name"
            required
            placeholder=" "
            value={form.name}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            required
            placeholder=" "
            value={form.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="mobile"
            required
            placeholder=" "
            value={form.mobile}
            onChange={handleChange}
          />
          <label>Mobile Number</label>
        </div>

        <div className="input-group">
          <textarea
            name="query"
            required
            placeholder=" "
            value={form.query}
            onChange={handleChange}
          />
          <label>Your Query</label>
        </div>

        <button type="submit">Send via WhatsApp</button>
      </form>
    </div>
  );
}