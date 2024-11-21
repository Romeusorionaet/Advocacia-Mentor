export function FormDashboard() {
  return (
    <form className="flex flex-col gap-6">
      <label className="block">
        Nome completo
        <input
          className="w-full rounded-md border-b border-black/20 focus:border-black focus:outline-none focus:ring-0"
          type="text"
        />
      </label>
      <label className="block">
        Email
        <input
          className="w-full rounded-md border-b border-black/20 focus:border-black focus:outline-none focus:ring-0"
          type="text"
        />
      </label>
      <label className="block">
        Telefone
        <input
          className="w-full rounded-md border-b border-black/20 focus:border-black focus:outline-none focus:ring-0"
          type="number"
        />
      </label>

      <label className="block">
        <p className="roumd rounded-md bg-white p-1">
          Mensagem <span className="opacity-50">(Opacional)</span>
        </p>
        <textarea className="mt-4 h-44 w-full resize-none border border-black/20 p-2 focus:border-black focus:outline-none focus:ring-0"></textarea>
      </label>

      <button className="rounded-md bg-green-600 p-4 uppercase text-white duration-500 md:bg-white md:text-black md:hover:bg-green-600 md:hover:text-white">
        enviar
      </button>
    </form>
  )
}
