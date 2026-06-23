import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="AdVolcano home">
      <Image
        src="/advolcano-logo-transparent.png"
        alt="advolcano.io"
        width={863}
        height={355}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}
