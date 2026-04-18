export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <img
              src="https://cdn.poehali.dev/projects/b0298d23-6385-473d-a9ec-9307f931124d/bucket/ed90e6fb-177b-42fc-8bee-a2804b7f384d.jpg"
              alt="Мой Сарафан"
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Платформа доверенных рекомендаций для специалистов, клиентов и посредников.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">
                Как это работает
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Роли
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-sage transition-colors">
                Шаги
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Присоединиться
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Соцсети</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Telegram
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                ВКонтакте
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Instagram
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Документы</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Политика
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Условия
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Мой Сарафан. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">Рекомендуй с умом</p>
        </div>
      </div>
    </footer>
  )
}