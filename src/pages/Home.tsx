const Home = () => {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto min-h-screen px-4 py-4 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8"
    >
      <div className="px-4 h-[460px] w-[400px] mt-5 md:mt-0 space-y-10 flex flex-col items-center justify-center md:justify-around">
        <h1 className="text-5xl text-center md:text-left font-bold text-blue-600">
          Aprenda no seu ritmo, evolua sem limites!
        </h1>
        <p className="paragraph text-center md:text-left w-full">
          A plataforma que conecta você ao conhecimento. Tenha acesso a cursos,
          trilhas de aprendizado e ferramentas que aceleram sua jornada
          profissional — tudo em um só lugar.
        </p>
        <a href="" className="btn-secondary">
          Quero saber mais
        </a>
      </div>

      <div className="px-4 h-[460px] w-[400px]">
        <img src="/src/assets/home.svg" alt="Imagem home" className="w-full" />
      </div>
    </section>
  );
};

export default Home;
