import Link from '@/components/Link'
import Text from '@/components/Text'
import { colors } from '@/tokens'
import Image from 'next/image'
import { MAPS_URL, SOCIAL_LINKS, WHATSAPP_URL } from '@/constants'

/**
 * Footer component.
 *
 * Used to render footer
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 px-4 py-10"
      data-testid="footer"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-left">
        {/* Coluna 1: Logo e dados da escola */}
        <div className="flex flex-col items-center md:items-start gap-3 md:ml-8">
          <Image
            src="/images/logo-escola-joao-corso-inverse.png"
            alt="Logo da Escola João Corso"
            width={220}
            height={220}
            className="mb-2"
          />
        </div>

        {/* Coluna 2: Atendimento e redes sociais */}
        <div className="flex flex-col gap-3 items-center md:items-start mt-6 md:mt-0">
          <Text
            as="h3"
            id="contato"
            className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 text-center md:text-left"
          >
            Escola Municipal de <br />
            Ensino Fundamental João Corso
          </Text>
          <Text className="text-sm text-gray-700 dark:text-gray-400">
            E-mail:{' '}
            <Link to="mailto:ejcorso@net11.com.br" className={colors.link}>
              ejcorso@net11.com.br
            </Link>
          </Text>
          <Text className="text-sm text-gray-700 dark:text-gray-400">
            Fone:{' '}
            <Link
              to="tel:+555434441699"
              isExternal
              className={colors.link}
              data-testid="footer-phone-link"
            >
              (54) 3444-1699
            </Link>
          </Text>
          <Text className="text-sm text-gray-700 dark:text-gray-400">
            Rua Castro Alves, 401 | Bairro Rosário
          </Text>
          <Text className="text-sm text-gray-700 dark:text-gray-400">
            Serafina Corrêa/RS | CEP: 99250-000
          </Text>
          <Text className="text-sm text-gray-700 dark:text-gray-400">
            📍 Ver localização no{' '}
            <Link to={MAPS_URL} isExternal className={colors.link}>
              Google Maps
            </Link>
          </Text>
        </div>

        {/* Coluna 3: Atendimento e Redes Sociais */}
        <div className="flex flex-col gap-3 items-center md:items-start mt-6 md:mt-0">
          <Text
            as="h4"
            className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2"
          >
            Horário de Atendimento
          </Text>
          <Text className="text-sm text-gray-700 dark:text-gray-400">
            De Segundas a Sextas-Feiras
          </Text>
          <Text className="text-sm text-gray-700 dark:text-gray-400">
            7:30 às 11:30 | 13:00 às 17:00
          </Text>
          <Text
            as="h4"
            id="redes-sociais"
            className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2  mt-3"
          >
            Redes Sociais
          </Text>
          <div className="flex gap-4">
            <Link
              to={SOCIAL_LINKS.facebook}
              isExternal
              aria-label="Facebook"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Image
                src="/icons/facebook-icon.svg"
                alt="Facebook"
                width={28}
                height={28}
              />
            </Link>
            <Link
              to={SOCIAL_LINKS.instagram}
              isExternal
              aria-label="Instagram"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Image
                src="/icons/instagram-icon.svg"
                alt="Instagram"
                width={33}
                height={33}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400">
        2026 - Escola Municipal João Corso. Todos os direitos reservados. |
        Desenvolvido por{' '}
        <Link
          to="https://www.lumus-digital.dev.br"
          isExternal
          className={`${colors.link} font-semibold`}
        >
          Lumus Digital
        </Link>
        .
      </div>
      {/* Botão flutuante de WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 p-2 hover:scale-130 transition-transform"
      >
        <Image
          src="/icons/whatsapp-icon.svg"
          alt="WhatsApp"
          width={48}
          height={48}
          className="w-12 h-12"
          loading="lazy"
        />
      </a>
      {/* Tooltip */}
      <span className="absolute right-16 bottom-1/2 translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg">
        Fale conosco no WhatsApp
      </span>
    </footer>
  )
}
