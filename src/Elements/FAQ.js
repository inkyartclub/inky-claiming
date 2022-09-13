/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 0,
    question: "How does a Super Inky Pass pass work?",
    answer:
      "At launch there will only be a fixed supply of 300 Super Inky Passes, every month a holder will be able to claim an NFT airdrop of a magical piece of art from Inky's brain. Simply visit this site, enter your hedera account id, and click claim.",
  },
  {
    id: 1,
    question: "Who is behind this project?",
    answer:
      `Inky's Art Club is a combination of efforts from LittleInkStain, Matthew Smithies (CTO DOVU) and our designer Suberverted Norms. The project is an application of the technology from Trust Enterprises, all of the code is open-source.`,
  },
  {
    id: 2,
    question: "What is the long term view of the project?",
    answer:
      "Our wish is to carve a new pathway for any artist is to make a living, to create the art they love, and build a community at the same time. To apply concept of '1000 True Fans' to an artist exclusive NFT pass.",
  },
  {
    id: 3,
    question: "What charities will you be supporting?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "How do I acquire a pass and be part of the community?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "How can I support or partner with Inky's Art Club?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "Is there a roadmap?",
    answer:
      "There are no roadmap vibes here, you are ",
  },
  {
    id: 7,
    question: "What if 300 NFT passes isn't enough?",
    answer:
      "The potential problem we might face is that the secondary market value of the passes could be too cost prohibitive. Depending on the demand of our community we might issue a new pass, regardless this would be something that we would carefully discuss and vote with the Inky Pass Holders.",
  },
  {
    id: 8,
    question: "Is the project sustainable, how will you make money?",
    answer:
      "Outside of selling Super Inky Passes through NFT marketplaces we have applied a 5% royalty to every single NFT generated through the project for secondary market sales, we will also be offering rare one-of-one NFTs that pass holders will have a discount to.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
        <div className="mt-12">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
