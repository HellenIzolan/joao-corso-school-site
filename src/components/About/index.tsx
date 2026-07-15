'use client'

import Carousel from '@/components/Carousel'
import Text from '@/components/Text'
import { colors } from '@/tokens'

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full flex flex-col items-center text-center gap-6 pt-16 pb-8 px-8 bg-transparent"
      data-testid="about-section"
    >
      <Text
        as="h2"
        className={`${colors.primaryInverseText} text-3xl font-bold mb-4`}
      >
        Sobre a Escola
      </Text>
      <Text
        as="p"
        className={`${colors.primaryText} text-lg max-w-2xl mx-auto`}
      >
        A Escola Municipal João Corso tem como missão promover uma educação de
        qualidade, formando cidadãos críticos e preparados para os desafios do
        futuro. Nossa história é marcada pelo compromisso com a comunidade e
        pela busca constante pela excelência no ensino.
      </Text>

      {/* Carousel de imagens apenas com CSS
      <div className="w-full max-w-xl mx-auto mt-8">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <input
            type="radio"
            name="carousel"
            id="carousel-1"
            className="hidden peer"
            defaultChecked
          />
          <input
            type="radio"
            name="carousel"
            id="carousel-2"
            className="hidden peer"
          />
          <input
            type="radio"
            name="carousel"
            id="carousel-3"
            className="hidden peer"
          />

          <div
            className="flex transition-transform duration-500"
            style={{ width: '300%' }}
          >
            <div className="w-full shrink-0">
              <Image
                src="/images/joao-corso-frente-atual.jpg"
                alt="Fachada da escola Joao Corso atualmente"
                className="w-full h-64 object-cover"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="w-full shrink-0">
              <Image
                src="/images/joao-corso-frente-antiga.jpg"
                alt="Fachada da escola Joao Corso antigamente"
                className="w-full h-64 object-cover"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
            <div className="w-full shrink-0">
              <Image
                src="/images/joao-corso-lateral-antiga.jpg"
                alt="Lateral da escola Joao Corso antigamente"
                className="w-full h-64 object-cover"
                width={400}
                height={400}
                loading="lazy"
              />
            </div>
          </div>

          {/* Navegação do carrossel */}
      {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <label
              htmlFor="carousel-1"
              className="w-3 h-3 rounded-full bg-green-400 cursor-pointer border-2 border-white transition-opacity opacity-70 hover:opacity-100"
              aria-label="Ver imagem 1"
            ></label>
            <label
              htmlFor="carousel-2"
              className="w-3 h-3 rounded-full bg-green-400 cursor-pointer border-2 border-white transition-opacity opacity-70 hover:opacity-100"
              aria-label="Ver imagem 2"
            ></label>
            <label
              htmlFor="carousel-3"
              className="w-3 h-3 rounded-full bg-green-400 cursor-pointer border-2 border-white transition-opacity opacity-70 hover:opacity-100"
              aria-label="Ver imagem 3"
            ></label>
          </div> */}

      {/* CSS do carrossel */}
      {/* <style jsx>{`
            input#carousel-1:checked ~ div > div {
              transform: translateX(0%);
            }
            input#carousel-2:checked ~ div > div {
              transform: translateX(-100%);
            }
            input#carousel-3:checked ~ div > div {
              transform: translateX(-200%);
            }
            .flex.transition-transform > div {
              transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style> */}
      {/* </div>
      </div> */}

      <Carousel
        images={[
          {
            src: '/images/joao-corso-frente-antiga.jpg',
            alt: 'Fachada da escola Joao Corso atualmente',
            description:
              'Ao Sul da cidade de Serafina Corrêa, há várias décadas, surgiu um povoado formado por imigrantes de outros municípios, na maior parte mulatos, buscando aqui trabalho e meios de sobrevivência, em face das novas indústrias implantadas no município. Em princípio era um aglomerado de casebres, e no decorrer dos anos, os novos habitantes melhoraram seu padrão de vida provocando a vinda de mais imigrantes, em resposta ao sucesso dos pioneiros. Formou-se assim um agrupamento natural, com afinidades, origens, nível social, cultural e econômico comuns. Gente simples, com vontade de vencer e conviver amigavelmente com os moradores da comunidade, colonizada por descendentes de italianos. O nome "Gramadinho" surgiu pela identificação do local e pela existência do pequeno logradouro com grama, onde jogava-se futebol. Desde longa data, é um lugar caracterizado pelas peculiaridades de sua gente. Por isso, é um lugar tradicional em Serafina Corrêa e como não poderia deixar de ser, trilhou seu progresso, buscou instrução, cultura, conhecimentos, enfim, crescimento, e o fez também através de uma escola.',
          },
          {
            src: '/images/joao-corso-lateral-antiga.jpg',
            alt: 'Fachada da escola Joao Corso antigamente',
            description:
              'Tudo isso, possibilitado pelo senhor João Corso, comerciante de muitas iniciativas, colaborador da instalação de indústrias, do hospital e da torre da igreja na cidade. Generoso, doou terreno e casa a uma família carente, e valorizando sobretudo o ensino e a educação, igualmente doou a área e apoiou a construção, em 1966 da escola na comunidade. A escola foi inaugurada em 29 de janeiro de 1965 e começou a funcionar em 01 de março de 1967, como Grupo Escolar no Bairro Gramadinho, criado pelo Decreto nº 16 127 de 20 de dezembro de 1963 que autorizou seu funcionamento. Teve como entidade mantenedora e sendo pertencente ao governo estadual, coordenada pela 16ª DE de Bento Gonçalves e propiciando o ensino de séries iniciais (1ª a 4ª séries). Na data de 10 de dezembro de 1984, foi reorganizada, passando a designar-se Escola Estadual de 1º Grau Incompleto João Corso, em homenagem ao doador e incentivador, que no dia 25 de maio de 1967, aos 67 anos, faleceu no hospital Nossa Senhora do Rosário de Serafina Corrêa, o qual ajudou a construir.',
          },
          {
            src: '/images/joao-corso-frente-atual.jpg',
            alt: 'Lateral da escola Joao Corso antigamente',
            description:
              'Em 26 de julho de 1994 a escola mudou de local, instalando-se na Rua Castro Alves 401, Bairro Rosário de Serafina Corrêa, onde funciona até hoje. Em 1997 a escola volta a ter como órgão mantenedor, a Prefeitura Municipal pelo Decreto 37290 de 10 de maço de 1997 com anuência da 16° DE. Atualmente a entidade dispõe de funcionamento durante os turnos matutino e vespertino, atendendo a comunidade do então bairro Gramadinho.',
          },
        ]}
      />
    </section>
  )
}
