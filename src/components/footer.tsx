import Image from 'next/image'

export function Footer() {
  const listIcons = [
    'whatsapp.png',
    'instagram.png',
    'linkedin.png',
    'youtube.png',
    'facebook.png',
  ]
  return (
    <footer className="bg-gradient-to-b from-white to-gray-400 p-8">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {listIcons.map((icon) => (
          <Image
            key={icon}
            width={500}
            height={500}
            src={`/social-media/${icon}`}
            alt={icon}
            className="h-10 w-10 hover:scale-105 hover:shadow-sm md:h-16 md:w-16"
          />
        ))}
      </div>

      <div className="mt-16 space-y-10 text-center text-black">
        <p>
          © 2024 por{' '}
          <span>
            <a
              href="https://romeu-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Romeu soares
            </a>
          </span>
          , desenvolvedor web
        </p>

        <ul className="text-start text-sm">
          <li>romeuindexjs@gmail.com</li>
          <li>(84) 981127596</li>
        </ul>
      </div>
    </footer>
  )
}
