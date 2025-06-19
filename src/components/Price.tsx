const Price = () => {
  return (
    <section
      id="prices"
      className="max-w-6xl mx-auto px-4 py-30 md:py-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8"
    >
      <div className="price-card">
        <div className="price-card-inner">
          <div className="price-card-content">
            <h4 className="text-3xl text-gray-300 font-bold text-shadow-lg">
              Free
            </h4>
            <p className="text-sm paragraph text-center">
              Perfeito para quem quer começar. Acesso limitado a alguns cursos e
              recursos da plataforma.
            </p>
          </div>
        </div>
      </div>
      <div className="price-card">
        <div className="price-card-inner">
          <div className="price-card-content">
            <h4 className="text-3xl text-gray-300 font-bold text-shadow-lg">
              Mensal
            </h4>
            <p className="relative h-14 w-40">
              <span className="absolute top-0 left-0 text-sm font-bold">
                R$
              </span>
              <span className="absolute bottom-0 left-0 text-sm font-bold">
                12X
              </span>
              <span className="absolute bottom-0 right-0 text-5xl font-extrabold">
                29,90
              </span>
            </p>
            <p className="text-sm">ou R$ 299,00 à vista</p>
            <a href="#prices" className="btn-subscribe">
              Assinar agora
            </a>
          </div>
        </div>
      </div>
      <div className="price-card">
        <div className="price-card-inner">
          <div className="price-card-content">
            <h4 className="text-3xl text-gray-300 font-bold text-shadow-lg">
              Anual
            </h4>
            <p className="relative h-14 w-40">
              <span className="absolute top-0 left-0 text-sm font-bold">
                R$
              </span>
              <span className="absolute bottom-0 left-0 text-sm font-bold">
                12X
              </span>
              <span className="absolute bottom-0 right-0 text-5xl font-extrabold">
                19,90
              </span>
            </p>
            <p className="text-sm">ou R$197,90 à vista</p>
            <a href="#prices" className="btn-subscribe">
              Assinar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
