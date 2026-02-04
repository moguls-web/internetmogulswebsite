"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

type NavLink = { label: string; href: string }
type NavItem = NavLink | { label: string; children: NavLink[] }

export function Header() {
  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "/" }, 
      // {
      //   label: "Your Industry",
      //   children: [ 
      //     { label: "Hospitality", href: "/" },   
      //     { label: "Other Industry", href: "/digital-marketing" },   
      //   ],
      // },     
      { label: "About Us", href: "/overview" },
      { label: "Portfolio", href: "/work" },
      { label: "Solutions", href: "/services" },
      { label: "Case Studies", href: "/case-studies" },        
      { label: "Testimonials", href: "/testimonials" }, 
      { label: "Contact Us", href: "/Reach_Us" },
    ],
    []
  )

  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null) // desktop dropdown id
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null) // mobile accordion id

  const headerRef = useRef<HTMLElement | null>(null)

  const closeAll = () => {
    setOpenMenu(null)
    setMobileAccordion(null)
  }

  // Close dropdowns on outside click + Escape
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (!headerRef.current?.contains(target)) closeAll()
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll()
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  // If mobile menu closes, also close accordion
  useEffect(() => {
    if (!mobileOpen) setMobileAccordion(null)
  }, [mobileOpen])

  const isDropdownItem = (item: NavItem): item is { label: string; children: NavLink[] } =>
    "children" in item

  return (
    <header
      ref={headerRef as any}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="text-lg lg:text-xl font-semibold tracking-tight">
            <img src="/client-logos/logonew-im.png" alt="Internet Moguls" className="w-3/4" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              if (!isDropdownItem(item)) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              }

              const isOpen = openMenu === item.label
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm tracking-wide hover:text-muted-foreground transition-colors"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu((v) => (v === item.label ? null : item.label))}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div
                    className={`absolute left-0 top-full pt-3 transition-all duration-150 ${
                      isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="min-w-56 rounded-xl border border-border bg-background shadow-lg p-2">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors"
                          onClick={() => setOpenMenu(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}

            <Link
              href="/Reach_Us"
              className="text-sm tracking-wide px-5 py-2.5 bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => {
              setMobileOpen((v) => !v)
              setOpenMenu(null)
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-6 border-t border-border flex flex-col gap-4">
            {navItems.map((item) => {
              if (!isDropdownItem(item)) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm tracking-wide"
                    onClick={() => {
                      setMobileOpen(false)
                      closeAll()
                    }}
                  >
                    {item.label}
                  </Link>
                )
              }

              const isOpen = mobileAccordion === item.label
              return (
                <div key={item.label} className="flex flex-col gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-between text-sm tracking-wide"
                    aria-expanded={isOpen}
                    onClick={() => setMobileAccordion((v) => (v === item.label ? null : item.label))}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="pl-3 flex flex-col gap-2 border-l border-border">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="text-sm tracking-wide"
                          onClick={() => {
                            setMobileOpen(false)
                            closeAll()
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <Link
              href="#contact"
              className="text-sm tracking-wide px-5 py-2.5 bg-foreground text-background inline-block w-fit"
              onClick={() => {
                setMobileOpen(false)
                closeAll()
              }}
            >
              Book a Call
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
