import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl w-full text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Bem-vindo ao Backoffice!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Aqui você pode gerenciar seus eventos, ingressos e clientes.
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <Link href="/signin" passHref>
          <button className="btn bg-gray-800 text-white py-2 px-4 rounded">
            Login
          </button>
        </Link>
        <Link href="/signup" passHref>
          <button className="btn bg-white text-gray-800 py-2 px-4 rounded">
            Registrar
          </button>
        </Link>
      </div>

      <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </main>
  );
}