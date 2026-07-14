import React from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-blue-grey)] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Logo variant="monochrome" className="text-white" />
            <p className="text-gray-300 font-light max-w-xs">
              Transformando la maternidad con información basada en evidencia, empatía y mucho amor.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/themomcoterie" target="_blank" rel="noreferrer" className="text-white hover:text-[var(--color-peach)] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-lg mb-6 text-white font-medium">Navegación</h4>
            <ul className="space-y-3 font-light text-gray-300">
              <li><Link href="/" className="hover:text-[var(--color-peach)] transition-colors">Inicio</Link></li>
              <li><Link href="/sobre-mi" className="hover:text-[var(--color-peach)] transition-colors">Sobre Mí</Link></li>
              <li><Link href="/sueno" className="hover:text-[var(--color-peach)] transition-colors">Sueño Infantil</Link></li>
              <li><Link href="/alimentacion" className="hover:text-[var(--color-peach)] transition-colors">Alimentación</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-lg mb-6 text-white font-medium">Recursos</h4>
            <ul className="space-y-3 font-light text-gray-300">
              <li><Link href="/tienda" className="hover:text-[var(--color-peach)] transition-colors">Guías y E-books</Link></li>
              <li><Link href="/programas" className="hover:text-[var(--color-peach)] transition-colors">Programas de Coaching</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--color-peach)] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg mb-6 text-white font-medium">Contacto</h4>
            <ul className="space-y-3 font-light text-gray-300">
              <li><a href="mailto:hello@themomcoaching.com" className="hover:text-[var(--color-peach)] transition-colors">hello@themomcoaching.com</a></li>
              <li className="pt-4">
                <Link href="/llamada-descubrimiento" className="inline-block border border-[var(--color-peach)] text-[var(--color-peach)] hover:bg-[var(--color-peach)] hover:text-[var(--color-blue-grey)] px-6 py-2 rounded-full transition-colors">
                  Agendar Llamada
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center font-light text-sm text-gray-400">
          <p>© {new Date().getFullYear()} The Mom Coach. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
