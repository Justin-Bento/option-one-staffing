import { Dialog } from '@headlessui/react'
import { useState } from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Appbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="mb-16 lg:mb-32 bg-primary-50">
      <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 hover:opacity-80">
            <span className="sr-only">Your Company</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24"><path d="M6.36461 6L15.1491 15.6629L15.8699 15.38C17.5538 14.719 18.7326 13.2237 18.9607 11.4839C18.8083 11.4946 18.655 11.5 18.501 11.5C15.2512 11.5 12.5584 9.11509 12.0774 6H6.36461ZM14.001 5C14.001 7.48528 16.0157 9.5 18.501 9.5C19.306 9.5 20.0617 9.28861 20.7155 8.91831C20.9013 9.53558 21.001 10.1891 21.001 10.8654C21.001 13.7561 19.1794 16.2295 16.6006 17.2417L20.001 21H3.00098V4H14.001C14.0381 4 14.0753 4.00028 14.1123 4.00085C14.0394 4.3222 14.001 4.65661 14.001 5ZM18.501 7.5C17.1203 7.5 16.001 6.38071 16.001 5C16.001 3.61929 17.1203 2.5 18.501 2.5C19.8817 2.5 21.001 3.61929 21.001 5C21.001 6.38071 19.8817 7.5 18.501 7.5ZM5.00098 7.47V19H15.481L5.00098 7.47Z"></path></svg>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 hover:opacity-80">
              <span className="sr-only">Your Company</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M6.36461 6L15.1491 15.6629L15.8699 15.38C17.5538 14.719 18.7326 13.2237 18.9607 11.4839C18.8083 11.4946 18.655 11.5 18.501 11.5C15.2512 11.5 12.5584 9.11509 12.0774 6H6.36461ZM14.001 5C14.001 7.48528 16.0157 9.5 18.501 9.5C19.306 9.5 20.0617 9.28861 20.7155 8.91831C20.9013 9.53558 21.001 10.1891 21.001 10.8654C21.001 13.7561 19.1794 16.2295 16.6006 17.2417L20.001 21H3.00098V4H14.001C14.0381 4 14.0753 4.00028 14.1123 4.00085C14.0394 4.3222 14.001 4.65661 14.001 5ZM18.501 7.5C17.1203 7.5 16.001 6.38071 16.001 5C16.001 3.61929 17.1203 2.5 18.501 2.5C19.8817 2.5 21.001 3.61929 21.001 5C21.001 6.38071 19.8817 7.5 18.501 7.5ZM5.00098 7.47V19H15.481L5.00098 7.47Z"></path></svg>
              </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
