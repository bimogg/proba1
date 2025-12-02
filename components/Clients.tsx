import Image from "next/image"

const logos = [
  "/images/clients/amazon.png",
  "/images/clients/dribbble.png",
  "/images/clients/hubspot2.png",
  "/images/clients/netflix.png",
  "/images/clients/notion.png",
  "/images/clients/zoom.png",
]

export function Clients() {
  return (
    <section className="container mx-auto px-6 py-10 w-full overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Client logo"
            width={100}
            height={50}
            className="object-contain grayscale dark:brightness-100 dark:invert opacity-70 dark:opacity-100"
            style={{ width: "auto", height: "auto" }}
          />
        ))}
      </div>
    </section>
  )
}

