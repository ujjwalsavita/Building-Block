import { useState } from "react";
import consultancyImage from "./assets/consultancy.jpg";

import Navbar from "./component/Navbar";

function App() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) return;

    alert(`Thank you! Email entered: ${email}`);
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar/>

      {/* Hero Section */}
      <main className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="mb-6 font-medium text-emerald-500">
            Connect With People
          </p>

          <h1 className="max-w-xl text-4xl leading-tight font-normal tracking-tight sm:text-5xl lg:text-6xl">
            <span className="font-bold">Your </span>
            <span className="text-red-500">Consultancy</span>
            <br />
            Partner for <span className="font-bold">Growth.</span>
          </h1>

          <p className="mt-7 max-w-xl max-sm:">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore vitae labore aliquam eos est illo assumenda,
            dolores nobis impedit.
          </p>

          {/* Email Form */}
          <form
            id="signup"
            onSubmit={handleSubmit}
            className="mt-10 flex max-w-xl flex-col gap-3 rounded-lg border border-slate-100 p-2 shadow-sm sm:flex-row sm:items-center"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full min-w-0 py-3 text-sm"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-green-500 px-6 py-3 text-white transition hover:bg-emerald-600"
            >
              Sign Up Free
            </button>
          </form>
        </div>

        {/* Right Illustration */}
        <section className="flex items-center justify-center">
          <img
            src={consultancyImage}
            alt="People connecting through online consultancy"
            className="h-auto w-full max-w-xl object-contain"
          />
        </section>

      </main>
    </div>
  );
}

export default App;
