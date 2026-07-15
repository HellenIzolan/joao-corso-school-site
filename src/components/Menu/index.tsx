'use client'

import { useState, useEffect } from 'react'
import { colors } from '@/tokens'
import Link from '@/components/Link'
import Image from 'next/image'
import { MAPS_URL } from '@/constants'

/**
 * Menu component.
 *
 * Used to render menu
 *
 * @example
 * ```tsx
 * <Menu />
 * ```
 */

export default function Menu() {
  const menuItems = [
    { name: 'Sobre', to: '#sobre' },
    { name: 'Contato', to: '#contato' },
    {
      name: 'Localização',
      to: MAPS_URL,
      isExternal: true,
    },
  ]

  const [openMenu, setOpenMenu] = useState(false)

  const renderLogo = (onClick?: () => void) => (
    <Link to="#home" onClick={onClick} aria-label="Ir para o início">
      <Image
        src="/images/logo-escola-joao-corso-inverse.png"
        alt="Escola Municipal João Corso Logo"
        width={120}
        height={120}
        className="h-20 w-20 object-contain md:h-[120px] md:w-[120px]"
      />
    </Link>
  )

  // close menu on escape key press
  useEffect(() => {
    if (!openMenu) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(false)
    }
    globalThis.addEventListener('keydown', handleKeyDown)
    return () => globalThis.removeEventListener('keydown', handleKeyDown)
  }, [openMenu])

  return (
    <nav
      aria-label="Menu principal"
      data-testid="menu"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      {/* Start section */}
      <div className="flex lg:flex-1">{renderLogo()}</div>
      <div className="flex lg:hidden">
        <button
          className="cursor-pointer -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          onClick={() => setOpenMenu(!openMenu)}
          aria-expanded={openMenu}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="size-6"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {openMenu && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-gray-900/90 flex flex-col items-center justify-center gap-8 z-[9999]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navega\u00e7\u00e3o"
        >
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between w-auto py-4 px-4  ">
            {renderLogo(() => setOpenMenu(false))}
            <button
              type="button"
              className="text-gray-200 cursor-pointer"
              onClick={() => setOpenMenu(false)}
              aria-label="Fechar menu"
            >
              <span className="sr-only">Fechar menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-8"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 mt-30">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                isExternal={item.isExternal}
                size="xl"
                className={colors.link}
                onClick={() => setOpenMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* End section */}
      <div className="hidden lg:flex lg:gap-x-12">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            isExternal={item.isExternal}
            size="lg"
            className={`${colors.inverseLink}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* Left section */}
      {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      </div> */}
    </nav>
  )
}
