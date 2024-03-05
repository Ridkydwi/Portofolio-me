import myPhoto from "./assets/anime.png";
// import myPhoto2 from "./assets/senja.png";
// import myPhoto3 from "./assets/pasPhoto.png";
import myPhoto4 from "./assets/coding.jpg";
import myPhoto5 from "./assets/mario.jpg";
import myPhoto6 from "./assets/game.jpg";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-black
    md:bg-blue-50 text-black font-caw">
      <header className="py-3 bg-yellow-300">
      <nav className="flex justify-between p-4">

        <div>
          <a href="#" className="text-xl font-semibold">RIDKY DWI SULISTIO</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:underline font-semibold">Home</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:underline text-black font-semibold">Contact</a>
        </div>
      </nav>
      </header>
    
      <div className="flex justify-center items-center h-screen">
      {/* <div className="flex-beetwen rounded-bl-lg">
            <img src={myPhoto2} alt="game" className="blur-sm w-100 h-auto"/>
          </div> */}

        <div className=" gap-4 max-w-2xl">

          <div classname="flex-space-x-1 overflow-hidden">
          <img src={myPhoto} className="inline-block h-40 w-40 rounded-full ring-2 ring-yellow-300" />
        </div> 
          <h1 className="text-6xl font-bold text-white">Front end</h1>
          <h2 className="text-5xl font-bold text-white">Web developer</h2>
          <p className="text-slate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, natus sequi aliquam rerum impedit placeat voluptatibus molestias non saepe minus quaerat ex libero quasi veritatis qui! Unde sapiente ad, odio sed porro nihil aut labore eos eius amet tempore, eaque et eveniet dolorum, voluptatem debitis praesentium adipisci delectus quasi! Quam.
            With over eight years of experience, I've designed websites and SaaS apps that have had a significant impact on users and businesses across various industries.</p>
          <br></br>

          <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">My Projects</h2>
          <marquee behavior="string" direction="right linear-ifinite">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-gradient-to-r from-yellow-300 p-4 shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-extrabold mb-2 text-black">Project 1</h3>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-300 p-4 shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-extrabold mb-2 text-black">Project 2</h3>
            </div>

            <div className="bg-gradient-to-r from-yellow-300 p-4 shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-extrabold mb-2 text-black">Project 3</h3>
            </div>

            <img src={ myPhoto4 } className="blur-sm "/>
            <img src={ myPhoto5 } className="blur-sm "/>
            <img src={ myPhoto6 } className="blur-sm "/>

           </div>
            </marquee>
         </section>
        </div>
      </div>
    </div>
  );
}

export default App