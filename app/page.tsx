import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8">
      <section className="text-center">
        <Image
          src="/profile.jpg" // Assuming you have a profile.jpg in your public folder
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">Your Name</h1>
        <p className="text-xl mt-2">Your Professional Tagline</p>
        <p className="mt-2">A brief introduction about yourself, your background, and what you do. This section should be engaging and give a snapshot of your professional persona to attract recruiters.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {/* List your skills here */}
          <span className="px-4 py-2 bg-gray-200 rounded-full">JavaScript</span>
          <span className="px-4 py-2 bg-gray-200 rounded-full">React</span>
          <span className="px-4 py-2 bg-gray-200 rounded-full">Next.js</span>
          {/* Add more as needed */}
        </div>
      </section>

      <section className="mt-10 w-full">
        <h2 className="text-3xl font-semibold text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Portfolio items */}
          <div className="border rounded-lg p-4">
            <Image
              src="/project1.jpg" // Replace with your project image
              alt="Project 1"
              width={400}
              height={225}
              className="rounded"
            />
            <h3 className="mt-2 text-xl font-semibold">Project Title</h3>
            <p className="text-sm mt-2">Brief description of the project. What was your role, what technologies were used, etc.</p>
            <Link href="/projects/project1"><a className="text-blue-500 hover:underline mt-2 inline-block">Read more</a></Link>
          </div>
          {/* Repeat for other projects */}
        </div>
      </section>

      <section className="mt-10 w-full">
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
        <form className="flex flex-col items-center mt-4">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs mt-4" />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full max-w-xs mt-4"></textarea>
          <button type="submit" className="btn btn-primary mt-4">Send</button>
        </form>
      </section>
    </main>
  );
}
