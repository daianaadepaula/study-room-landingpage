const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto min-h-11/12 px-4 py-30 md:py-40 grid grid-cols-1 md:grid-cols-2 place-items-center gap-8"
    >
      <div className="px-4 order-2 md:order-1">
        <img
          src="/src/assets/about.svg"
          alt="Imagem sobre"
          className="w-full"
        />
      </div>

      <div className="text-center px-4 order-1 md:order-2">
        <h3 className="text-3xl font-bold mb-4 md:text-right">
          Sobre a nossa plataforma
        </h3>
        <p className="mb-4 paragraph md:text-right">
          Somos uma plataforma de educação online criada para transformar sua
          forma de aprender. Aqui você encontra conteúdos atualizados, aulas
          dinâmicas, trilhas personalizadas e suporte contínuo.
        </p>
        <p className="mb-4 paragraph md:text-right">
          Nosso objetivo é oferecer uma experiência de aprendizado eficiente,
          intuitiva e flexível. Seja para iniciar uma nova carreira, se
          especializar ou desenvolver novas habilidades, aqui você encontra tudo
          que precisa.
        </p>
      </div>
    </section>
  );
};

export default About;
