import { FormDashboard } from '@/components/form-dashboard'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Countdown } from '@/components/count-down'
import '../assets/styles/sticky.css'
import Image from 'next/image'
import { faqItems } from '@/lib/data-faq'

export default function Home() {
  return (
    <main>
      <section className="relative flex h-screen w-full flex-col justify-between bg-cyan-950/60 p-2 md:p-4">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/img/networking-business.jpeg')] bg-cover bg-center bg-no-repeat" />
        <h1 className="mt-32 text-4xl font-extrabold uppercase text-shadow-xl md:text-7xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          veritatis eligendi quidem.
        </h1>

        <div className="mt-20 flex flex-col gap-10 rounded-md bg-black/40 px-4 py-6 md:w-1/2 xl:w-2/5">
          <p className="text-center font-extrabold">
            Estamos com bônus exclusivo para os primeiros 100 inscritos
          </p>

          <button className="rounded-md bg-white/90 p-1 uppercase text-black duration-500 hover:bg-white">
            Garanta Sua Vaga Agora
          </button>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl space-y-4 px-2 py-16">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/img/bg-1.jpg')] bg-cover bg-center bg-no-repeat blur-lg" />
        <h2 className="mb-20 text-center text-4xl font-thin md:text-7xl">
          porque que nos escolher?
        </h2>

        <div className="sticky-group">
          <div className="sticky-item h-44 w-full">
            <div className="h-full w-2.02/5">
              <Image
                width={800}
                height={800}
                src="/img/certification.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="sticky-item flex h-56 w-full justify-end gap-2">
            <div className="h-full w-2.02/5">
              <div className="rounded-lg bg-white">
                <h3 className="rounded-lg text-center font-bold text-black  md:text-xl">
                  Especialização Comprovada
                </h3>
              </div>
            </div>

            <div className="flex w-1.07/2 justify-start">
              <p className="text-end max-md:text-justify max-md:text-xs md:text-start">
                Contamos com uma equipe de especialistas com vasta experiência
                no mercado jurídico, prontos para compartilhar estratégias que
                realmente funcionam. Nossas metodologias são validadas por
                resultados concretos. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Facilis quisquam asperiores earum error
                sapiente veniam quasi et quibusdam eaque nulla. Culpa similique
                quod.
              </p>
            </div>
          </div>
        </div>

        <div className="sticky-group">
          <div className="sticky-item flex w-full justify-end">
            <div className="h-44 w-2.02/5">
              <Image
                width={800}
                height={800}
                src="/img/digital-tools.svg"
                className="h-full"
                alt=""
              />
            </div>
          </div>

          <div className="sticky-item flex h-56 w-full justify-end gap-2">
            <div className="flex w-1.07/2 justify-start">
              <p className="text-end max-md:text-justify max-md:text-xs md:text-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci commodi accusantium assumenda beatae obcaecati nam
                voluptate reiciendis excepturi minima veniam. Mollitia, dolorem
                repellat libero natus soluta distinctio voluptates iure
                nesciunt?. Facilis quisquam asperiores earum error sapiente
                veniam quasi et quibusdam eaque nulla. Culpa similique quod.
              </p>
            </div>

            <div className="h-full w-2.02/5">
              <div className="rounded-lg bg-white">
                <h3 className="rounded-lg text-center font-bold text-black md:text-xl">
                  Ferramentas Exclusivas
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-group">
          <div className="sticky-item h-44 w-full">
            <div className="h-full w-2.02/5">
              <Image
                width={800}
                height={800}
                src="/img/growth-analytics.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="sticky-item flex h-56 w-full justify-end gap-2">
            <div className="h-full w-2.02/5">
              <div className="rounded-lg bg-white">
                <h3 className="rounded-lg text-center font-bold text-black md:text-xl">
                  Resultados Comprovados
                </h3>
              </div>
            </div>

            <div className="flex w-1.07/2 justify-start">
              <p className="text-end max-md:text-justify max-md:text-xs md:text-start">
                Contamos com uma equipe de especialistas com vasta experiência
                no mercado jurídico, prontos para compartilhar estratégias que
                realmente funcionam. Nossas metodologias são validadas por
                resultados concretos. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Facilis quisquam asperiores earum error
                sapiente veniam quasi et quibusdam eaque nulla. Culpa similique
                quod.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-white pt-20 text-gray-800">
        <div className="py-10 text-gray-800">
          <h2 className="text-center text-4xl font-thin text-shadow-sm md:text-7xl">
            Estamos com{' '}
            <span className="font-extrabold text-orange-200">
              oferta especial
            </span>{' '}
            para essa nova turma
          </h2>
          <p className="mt-10 text-center text-xl">confira!</p>
        </div>

        <div className="w-11/12 max-w-4xl space-y-6 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            <span className="text-orange-300">Bônus exclusivo</span> para os{' '}
            <span className="border-b border-orange-300">
              primeiros 100 inscritos
            </span>
          </h2>
        </div>

        <div className="rounded-lg bg-blue-100 p-4 text-center text-blue-800 shadow-md">
          <p className="text-sm font-bold">Selo Exclusivo</p>
          <p className="text-xs">
            Desconto especial garantido para a primeira turma!
          </p>
        </div>

        <div className="my-20 flex flex-wrap justify-center gap-6">
          <article className="w-80 border p-2">
            <header>
              <h3 className="mb-8 text-center font-bold uppercase">
                Planejamento de Carreira
              </h3>
            </header>

            <ul className="list-inside list-disc space-y-4">
              <li>
                <strong>Definição de objetivos profissionais</strong>: Ajudar os
                mentorados a entender onde estão e onde querem chegar.
              </li>
              <li>
                <strong>Orientação sobre áreas de atuação</strong>: Identificar
                especializações em alta e aquelas que se alinham ao perfil do
                mentorado.
              </li>
              <li>
                <strong>Construção de um plano de carreira</strong>: Traçar um
                caminho claro com metas de curto, médio e longo prazo.
              </li>
            </ul>
          </article>

          <article className="w-80 border p-2">
            <header>
              <h3 className="mb-8 text-center font-bold uppercase">
                Planejamento de Carreira
              </h3>
            </header>

            <ul className="list-inside list-disc space-y-4">
              <li>
                <strong>Definição de objetivos profissionais</strong>: Ajudar os
                mentorados a entender onde estão e onde querem chegar.
              </li>
              <li>
                <strong>Orientação sobre áreas de atuação</strong>: Identificar
                especializações em alta e aquelas que se alinham ao perfil do
                mentorado.
              </li>
              <li>
                <strong>Construção de um plano de carreira</strong>: Traçar um
                caminho claro com metas de curto, médio e longo prazo.
              </li>
            </ul>
          </article>

          <article className="w-80 border p-2">
            <header>
              <h3 className="mb-8 text-center font-bold uppercase">
                Planejamento de Carreira
              </h3>
            </header>

            <ul className="list-inside list-disc space-y-4">
              <li>
                <strong>Definição de objetivos profissionais</strong>: Ajudar os
                mentorados a entender onde estão e onde querem chegar.
              </li>
              <li>
                <strong>Orientação sobre áreas de atuação</strong>: Identificar
                especializações em alta e aquelas que se alinham ao perfil do
                mentorado.
              </li>
              <li>
                <strong>Construção de um plano de carreira</strong>: Traçar um
                caminho claro com metas de curto, médio e longo prazo.
              </li>
            </ul>
          </article>
        </div>

        <div className="flex w-full justify-between gap-4 px-2 max-md:flex-col md:justify-center">
          <div className="space-y-4 rounded-lg bg-white p-4 text-center text-red-800 shadow-lg">
            <p className="text-lg font-bold">Restam apenas:</p>
            <p className="text-4xl font-extrabold">16 vagas</p>
            <p className="text-sm">Garanta a sua agora!</p>
          </div>

          <Countdown />
        </div>

        <div className="mt-16 text-center">
          <button className="animate-pulse rounded-lg bg-orange-300 px-6 py-3 font-bold text-white duration-500 hover:animate-none hover:bg-green-600">
            Garanta Sua Vaga Agora!
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Vagas limitadas. Não perca esta oportunidade!
          </p>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-sm text-gray-700">
            92% das vagas preenchidas
          </p>
          <div className="h-4 w-full rounded-full bg-gray-200">
            <div className="h-4 w-11/12 rounded-full bg-green-500" />
          </div>
        </div>

        <div className="-mb-48 h-screen w-full bg-[url('/img/networking.jpeg')] bg-center bg-no-repeat" />
      </section>

      <section className="relative flex flex-col pt-28">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/img/bg-2.jpg')] bg-cover bg-center bg-no-repeat blur-md" />
        <h2 className="mb-20 text-center text-4xl font-thin md:text-7xl">
          Quem Está Por Trás da Nossa Mentoria
        </h2>

        <div className="flex flex-wrap justify-evenly md:gap-10">
          <article className="mb-32 flex h-50r w-80 flex-col items-center gap-2">
            <header className="h-4.0/6 space-y-4 p-2">
              <Image
                width={800}
                height={800}
                src="/img/steve-carell.jpg"
                alt="Steve Carell"
                className="h-11.0/12 min-w-full rounded-lg"
              />
              <h3 className="text-center text-4xl font-extrabold">
                Steve Carell
              </h3>
            </header>

            <div className="h-1.0/3 space-y-4">
              <p>
                <strong>Função</strong>: Especialista em desenvolvimento
                profissional que ajuda os participantes a definir objetivos de
                carreira, traçar metas e planejar a evolução na advocacia.
              </p>
              <p>
                <strong>Perfil</strong>: Coach certificado com experiência no
                setor jurídico.
              </p>
            </div>

            <footer className="mt-6 h-1.0/6">
              <button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-transparent to-blue-500 bg-right p-4 hover:bg-[length:200%_100%]">
                <span className="relative z-10 text-white">LinkedIn</span>
              </button>
            </footer>
          </article>

          <article className="mb-32 flex h-50r w-80 flex-col items-center gap-2">
            <header className="h-4.0/6 space-y-4 p-2">
              <Image
                width={800}
                height={800}
                src="/img/jenna-fischer.jpg"
                alt="Jenna fischer"
                className="h-11.0/12 min-w-full rounded-lg"
              />
              <h3 className="text-center text-4xl font-extrabold">
                Jenna fischer
              </h3>
            </header>

            <div className="h-1.0/3 space-y-4">
              <p>
                <strong>Função</strong>: Ensina os participantes a se
                posicionarem nas redes sociais, criarem autoridade e atrair
                clientes respeitando o Código de Ética da OAB.
              </p>
              <p>
                <strong>Perfil</strong>: Profissional com experiência em
                branding e marketing voltado para advogados.
              </p>
            </div>

            <footer className="mt-6 h-1.0/6">
              <button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-transparent to-blue-500 bg-right p-4 hover:bg-[length:200%_100%]">
                <span className="relative z-10 text-white">LinkedIn</span>
              </button>
            </footer>
          </article>
        </div>
      </section>

      <section className="relative mb-20 p-2 md:p-4">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/img/bg-1.jpg')] bg-cover bg-center bg-no-repeat blur-md" />

        <h2 className="text-center text-2xl font-bold md:text-3xl">
          O que você terá na Mentoria/Comunidade{' '}
          <span className="uppercase">advocacia-mentor</span>?
        </h2>
        <div className="mx-auto mt-6 w-full rounded-lg bg-white/90 p-2 text-black lg:w-4.06/6">
          <ul className="space-y-4">
            <li className="rounded-lg border p-2 hover:border-black">
              <span className="font-bold uppercase">Networking avançado</span>:
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              fugit deleniti, at nam expedita dignissimos illum tenetur dolorum
              dolore distinctio.
            </li>
            <li className="rounded-lg border p-2 hover:border-black">
              <span className="font-bold uppercase">Networking avançado</span>:
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              vero, voluptates eius consequuntur distinctio quaerat fugit
              temporibus debitis possimus ipsam.
            </li>
            <li className="rounded-lg border p-2 hover:border-black">
              <span className="font-bold uppercase">Networking avançado</span>:
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore dignissimos. Volupta cupiditate nostrum! Iste quasi
              exercitationem laboriosam odit.
            </li>
            <li className="rounded-lg border p-2 hover:border-black">
              <span className="font-bold uppercase">Networking avançado</span>:
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt, ipsam est voluptates modi eveniet in praesentium.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-orange-200 py-12 text-black">
        <div className="flex flex-wrap items-center justify-center">
          <h2 className="text-center text-4xl font-thin text-shadow-lg md:text-7xl">
            Perguntas Frequentes
          </h2>

          <div>
            <Image width={500} height={500} src="/img/faq.png" alt="" />
          </div>
        </div>

        <div className="mx-auto mt-10 space-y-4 px-1 md:max-w-4xl">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-100 p-4"
            >
              <summary className="cursor-pointer text-lg font-semibold">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-16 md:justify-around">
          <div className="text-center">
            <h3 className="text-xl font-extrabold">Ficou alguma dúvida?</h3>
            <div>
              <p className="uppercase">Me chame agora mesmo no</p>
              <button className="rounded-md bg-green-600 p-2 text-white duration-500 hover:bg-green-500">
                WhatsApp
              </button>
            </div>
          </div>

          <div>
            <button className="animate-pulse rounded-md bg-white p-4 uppercase text-black duration-500 hover:animate-none hover:bg-green-600 hover:text-white">
              quero minha vaga agora
            </button>
          </div>
        </div>
      </section>

      <section className="relative flex flex-wrap justify-center gap-16 bg-[url('/img/man-run.png')] bg-left bg-no-repeat px-2 py-12 text-black md:bg-bottom">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-white blur-sm md:blur-xl" />
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-thin text-shadow-lg max-md:text-center md:text-7xl">
            Você está no caminho certo
          </h2>
          <div className="flex items-center max-md:flex-col">
            <p className="text-xl max-md:text-center">
              A um passo para o sucesso!
            </p>
            <ArrowRight
              size={56}
              className="rounded-full bg-white max-lg:hidden"
            />
            <ArrowDown size={56} className="lg:hidden" />
          </div>
        </div>

        <FormDashboard />

        <p>
          Preencha seus dados e prepare-se para transformar sua carreira —
          entraremos em contato rapidamente!
        </p>
      </section>

      <section className="bg-white px-2 py-12">
        <h2 className="text-4xl font-thin text-black text-shadow-lg max-md:text-center md:text-7xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>

        <div className="mt-16 flex justify-center gap-2 max-md:flex-col max-md:items-center">
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="flex h-11.0/12 items-center justify-center rounded-lg bg-orange-300 p-2">
              <p className="textxl text-shadow-md md:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore sed libero autem dolorum velit quod fugit laborum
                veritatis eum qui voluptatum voluptate dolor hic, cumque odit,
                eaque enim reiciendis totam.
              </p>
            </div>

            <div className="flex h-14 items-center justify-center rounded-lg bg-black">
              <p>dteg frerfgr</p>
            </div>
          </div>

          <div className="mx-auto h-96 w-full md:h-40r md:w-3/6">
            <Image
              width={800}
              height={800}
              src="/img/man-on-step.jpeg"
              alt="um homem de terno azul marinho no topo de um degrau em direção ao céu"
              className="h-full w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
