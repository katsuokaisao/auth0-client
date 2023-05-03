import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="w-16 h-16 px-3 py-2 flex flex-col justify-center items-center text-black font-semibold text-lg"
    >
      Logo
    </Link>
  );
}
