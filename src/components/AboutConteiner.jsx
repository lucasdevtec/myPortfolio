const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const AboutConteiner = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p>
        Olá, me chamo Lucas Gabriel, tenho {anoAtual - 2002} anos, sou graduando
        em Analise e Desenvolvimento de Sistemas pela Uninassau, previsão de
        conclusão em 2025.
      </p>
      <p>
        Meu objetivo profissional é atuar na área de Front-End, afim de adquirir
        experiência e me aprimorar ainda mais na área.
      </p>
    </section>
  );
};

export default AboutConteiner;
