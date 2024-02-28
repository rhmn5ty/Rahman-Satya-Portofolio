import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="bg-dark-blue text-gold py-6 fixed w-full z-10" style={{ backgroundColor: '#003366', color: '#FFD700' }}>
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            <Image src="/logo-satya.png" alt="Logo" width={50} height={50} className="rounded-full" />
            <h1 className="text-3xl font-bold ml-4">RAHMAN SATYA</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#summary" className="hover:text-gray-300">Summary</a></li>
              <li><a href="#education" className="hover:text-gray-300">Education</a></li>
              <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-20" style={{ background: 'linear-gradient(to right, #001d3d, #003366)', backgroundColor: '#001d3d', color: '#FFD700', backgroundSize: 'cover' }}>
      <section id="summary" className="min-h-screen flex items-center justify-center">
  <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left max-w-4xl mx-auto w-full px-4 md:px-8">
    <div className="md:w-1/2">
      <h1 className="text-4xl font-bold">RAHMAN SATYA</h1>
      <p className="text-l mt-4">As an Information System and Technology student at ITB, I am deeply passionate about data and machine learning. My academic and extracurricular activities have equipped me with a strong foundation in data processing, statistical analysis, and programming. I thrive on using data to solve real-world problems and drive informed decisions. My goal is to continually expand my knowledge and apply it towards creating impactful solutions in the field of data and technology.</p>
      <div className="mt-4">
        <p className="mt-4">Email: <a href="rahman.satya@gmail.com" className="underline text-blue-500">rahman.satya@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/rahman-satya/" className="underline text-blue-500">www.linkedin.com/in/rahman-satya/</a></p>
      </div>
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
      <Image
        src="/Foto-Satya.jpg"
        alt="Rahman Satya"
        width={300}
        height={200}
        className="rounded-full"
        priority
      />
    </div>
  </div>
</section>

        <section id="education" className="min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-semibold">Education</h2>
          <p><strong>Bachelor in Information and System Technology, Institut Teknologi Bandung</strong><br />Aug 2021 - expected until Oct 2025</p>
          <p>Relevant Coursework: IST Resource Management, System Requirements Analysis, Organization & Management of Industrial Companies, Database Management, Object Oriented Programming</p>
        </section>
        <section id="experience" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
  <h2 className="text-3xl font-bold text-gold mb-8">Volunteer and Work Experience</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="bg-dark-blue rounded-lg p-4 shadow-lg">
      <Image src="/head-of-persatuan-sepakbola-itb.png" alt="Head of Persatuan Sepakbola ITB Logo" width={50} height={50} className="mx-auto"/>
      <h3 className="text-xl font-semibold">Head of Persatuan Sepakbola ITB</h3>
      <p className="text-sm text-gold">Sept 2023 - Present</p>
      <p>Improved team performance and built a lively sports culture at ITB. Led key football events, encouraging skills, teamwork, and sportsmanship. Contributed to Indonesian football development.</p>
    </div>
    {/* Card 2 */}
    <div className="bg-dark-blue rounded-lg p-4 shadow-lg">
      <Image src="/deputy-director-general-of-eventual-sports.png" alt="Deputy Director General of Eventual Sports Logo" width={50} height={50} className="mx-auto"/>
      <h3 className="text-xl font-semibold">Deputy Director General of Eventual Sports</h3>
      <p className="text-sm text-gold">Sep 2022 - Mar 2023</p>
      <p>Ran the biggest sporting event at ITB, including TPB Cup and Olimpiade KM ITB.</p>
    </div>
    {/* Card 3 */}
    <div className="bg-dark-blue rounded-lg p-4 shadow-lg">
      <Image src="/nominating-committee-for-kat-itb-2023.png" alt="Nominating Committee for KAT ITB 2023 Logo" width={50} height={50} className="mx-auto"/>
      <h3 className="text-xl font-semibold">Nominating Committee for KAT ITB 2023</h3>
      <p className="text-sm text-gold">Mar 2023 - Aug 2023</p>
      <p>Collaborated in teams to identify and nurture relevant traits within the 2023 freshman class during the student orientation event.</p>
    </div>
    {/* Card 4 */}
    <div className="bg-dark-blue rounded-lg p-4 shadow-lg">
      <Image src="/vice-project-officer-of-organizational-simulation-and-training-for-members.png" alt="Vice Project Officer of Organizational Simulation and Training for Members Logo" width={50} height={50} className="mx-auto"/>
      <h3 className="text-xl font-semibold">Vice Project Officer of Organizational Simulation and Training for Members</h3>
      <p className="text-sm text-gold">May 2023 - Sept 2023</p>
      <p>Managed organizational training at HMIF ITB, coordinating with ITB leaders and institutions for permits and finances.</p>
    </div>
    {/* Card 5 */}
    <div className="bg-dark-blue rounded-lg p-4 shadow-lg">
      <Image src="/chairman-of-stei-cup-2022.png" alt="Chairman of STEI CUP 2022 Logo" width={50} height={50} className="mx-auto"/>
      <h3 className="text-xl font-semibold">Chairman of STEI CUP 2022</h3>
      <p className="text-sm text-gold">Jun 2022 - Sep 2022</p>
      <p>Held the biggest sports competition event for STEI ITB students 2021 and 2022, including Futsal, Basketball, Badminton, and E-Sports.</p>
    </div>
  </div>
</section>


        <section id="projects" className="min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-semibold">Project Experience</h2>
          <div>
            <p><strong>Software Testing and Monitoring for Ticketing and Reservation Systems</strong></p>
            <p>Conducted integrated testing and monitoring using Apache JMeter, Prometheus, and Grafana.</p>
          </div>
        </section>
        <section id="additional" className="min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-semibold">Additional</h2>
          <p><strong>Bangkit Academy 2024 Cohort By Google, GoTo, Traveloka</strong> - Machine Learning Learning Path</p>
          <p>Currently a cohort pursuing in-depth knowledge in machine learning algorithms, data analysis, and model deployment.</p>
        </section>
        <section id="skills" className="min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-semibold">Skills & Software</h2>
          <p>Programming Language: Python (Numpy, Pandas), SQL, PostgreSQL, Java, C, PHP, JavaScript</p>
          <p>Software: Microsoft Office, Github, Visual Studio Code</p>
          <p>Language: Bahasa Indonesia, English (630 TOEFL ITP Score)</p>
        </section>
      </main>
    </>
  );
}
