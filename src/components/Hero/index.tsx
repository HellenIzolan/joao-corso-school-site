import Link from '@/components/Link'
import Section from '@/components/Section'
import Text from '@/components/Text'
import { colors } from '@/tokens'
import Image from 'next/image'
import { WHATSAPP_URL } from '@/constants'

export default function Hero() {
  return (
    <Section yPadding="py-4 md:py-16" data-testid="hero-section">
      <div className="relative mb-6 flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
        {/* Títulos - sempre primeiro no mobile e desktop */}
        <div className="flex w-full flex-col items-center text-center md:order-1 md:w-1/2 md:items-start md:text-left">
          <Text
            as="h1"
            className={`${colors.primaryText} text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6`}
          >
            Bem-vindo à
          </Text>
          <Text
            as="h1"
            className={`${colors.primaryInverseText} text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6`}
          >
            Escola Municipal João Corso
          </Text>

          {/* Imagem - aparece após títulos no mobile, ao lado no desktop */}
          <div className="mb-6 flex w-full items-center justify-center p-4 md:hidden">
            <Image
              src="/images/hero-students.jpeg"
              alt="Grupo de estudantes diversos em ambiente escolar, incluindo estudante cadeirante, com fundo ilustrativo de natureza e elementos educacionais."
              className="w-full max-w-md rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              loading="eager"
              width={640}
              height={480}
            />
          </div>

          {/* Descrição e CTA */}
          <Text
            as="p"
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mt-2 mb-8"
          >
            Educação de qualidade para transformar vidas e construir o futuro da
            nossa comunidade.
          </Text>
          <Link
            to={WHATSAPP_URL}
            isExternal
            size="lg"
            className={`${colors.link} inline-block rounded-lg bg-green-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-600 hover:text-white focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-1`}
          >
            Fale Conosco
          </Link>
        </div>

        {/* Imagem no desktop - oculta no mobile */}
        <div className="hidden w-full items-center justify-center p-4 md:order-2 md:flex md:w-1/2">
          <Image
            src="/images/hero-students.jpeg"
            alt=""
            className="w-full max-w-md rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            loading="eager"
            aria-hidden="true"
            width={640}
            height={480}
          />
        </div>
      </div>
    </Section>
  )
}
