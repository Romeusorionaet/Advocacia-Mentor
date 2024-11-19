import { Countdown } from '@/components/count-down'
import '../assets/styles/sticky.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section className="relative flex h-screen w-full flex-col justify-between bg-[url('/img/networking-business.jpeg')] bg-cover bg-center bg-no-repeat p-2 md:p-4">
        <h1 className="mt-32 text-4xl font-extrabold text-black md:text-7xl">
          BOUTIQUE TRAVEL AGENCY DISCOVER UNIQUE TRAVEL EXPERIENCES WITH VOYAGER
        </h1>

        <div className="mt-20 flex flex-col gap-10 rounded-md bg-black/40 px-4 py-6 md:w-[50%] xl:w-[40%]">
          <p className="text-center font-extrabold">
            Estamos com bônus exclusivo para os primeiros 100 inscritos
          </p>

          <button className="rounded-md bg-white/90 p-1 uppercase text-black duration-500 hover:bg-white">
            Garanta Sua Vaga Agora
          </button>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1000px] space-y-4 px-2 pb-16">
        <h2 className="my-20 text-center text-4xl font-thin md:text-7xl">
          porque que nos escolher?
        </h2>

        <div className="sticky-group">
          <div className="sticky-item h-44 w-full">
            <div className="h-full w-[42%]">
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
            <div className="h-full w-[42%]">
              <div className="rounded-lg bg-white">
                <h3 className="rounded-lg text-center font-bold text-black  md:text-xl">
                  Especialização Comprovada
                </h3>
              </div>
            </div>

            <div className="flex w-[57%] justify-start">
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
            <div className="h-44 w-[42%]">
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
            <div className="flex w-[57%] justify-start">
              <p className="text-end max-md:text-justify max-md:text-xs md:text-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci commodi accusantium assumenda beatae obcaecati nam
                voluptate reiciendis excepturi minima veniam. Mollitia, dolorem
                repellat libero natus soluta distinctio voluptates iure
                nesciunt?. Facilis quisquam asperiores earum error sapiente
                veniam quasi et quibusdam eaque nulla. Culpa similique quod.
              </p>
            </div>

            <div className="h-full w-[42%]">
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
            <div className="h-full w-[42%]">
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
            <div className="h-full w-[42%]">
              <div className="rounded-lg bg-white">
                <h3 className="rounded-lg text-center font-bold text-black  md:text-xl">
                  Resultados Comprovados
                </h3>
              </div>
            </div>

            <div className="flex w-[57%] justify-start">
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
          <h2 className="text-center text-4xl font-thin md:text-7xl">
            Estamos com{' '}
            <span className="font-extrabold text-orange-200">
              oferta especial
            </span>{' '}
            para essa nova turma
          </h2>
          <p className="mt-10 text-center text-xl">confira!</p>
        </div>

        <div className="w-[90%] max-w-4xl space-y-6 rounded-lg bg-white p-8 shadow-lg">
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
            <div
              className="h-4 rounded-full bg-green-500"
              style={{ width: '92%' }}
            ></div>
          </div>
        </div>

        <div className="-mb-48 h-screen w-full bg-[url('/img/networking.jpeg')] bg-center bg-no-repeat" />
      </section>

      <section className="flex flex-col pt-28">
        <h2 className="mb-20 text-center text-4xl font-thin md:text-7xl">
          Quem Está Por Trás da Nossa Mentoria
        </h2>

        <div className="flex flex-wrap justify-evenly md:gap-10">
          <article className="mb-32 flex h-[50rem] w-80 flex-col items-center gap-2">
            <header className="h-[60%] space-y-4 p-2">
              <Image
                width={800}
                height={800}
                src="/img/steve-carell.jpg"
                alt="Steve Carell"
                className="h-[90%] min-w-full rounded-lg"
              />
              <h3 className="text-center text-4xl font-extrabold">
                Steve Carell
              </h3>
            </header>

            <div className="h-[30%] space-y-4">
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

            <footer className="mt-6 h-[10%]">
              <button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-transparent to-blue-500 bg-right p-4 hover:bg-[length:200%_100%]">
                <span className="relative z-10 text-white">LinkedIn</span>
              </button>
            </footer>
          </article>

          <article className="mb-32 flex h-[50rem] w-80 flex-col items-center gap-2">
            <header className="h-[60%] space-y-4 p-2">
              <Image
                width={800}
                height={800}
                src="/img/jenna-fischer.jpg"
                alt="Jenna fischer"
                className="h-[90%] min-w-full rounded-lg"
              />
              <h3 className="text-center text-4xl font-extrabold">
                Jenna fischer
              </h3>
            </header>

            <div className="h-[30%] space-y-4">
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

            <footer className="mt-6 h-[10%]">
              <button className="relative overflow-hidden rounded-lg bg-gradient-to-r from-transparent to-blue-500 bg-right p-4 hover:bg-[length:200%_100%]">
                <span className="relative z-10 text-white">LinkedIn</span>
              </button>
            </footer>
          </article>
        </div>
      </section>

      <section className="my-20 p-2 md:p-4">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          O que você terá na Mentoria/Comunidade{' '}
          <span className="uppercase">advocacia-mentor</span>?
        </h2>
        <div className="mx-auto mt-6 w-full rounded-lg bg-white/90 p-2 text-black lg:w-[60%]">
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

      <section className="bg-gray-50 pt-20 text-gray-800"></section>
    </main>
  )
}
