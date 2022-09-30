/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    question: "Why should I care about this project?",
    answer:
        "Our wish is to carve a new pathway for any artist is to make a living, to create the art they love, and build a community at the same time. To apply concept of '1000 True Fans' to an artist exclusive NFT pass.",
  },
  {
    question: "How does a Super Inky Pass pass work?",
    answer:
      "At launch there will only be a fixed supply of 300 Super Inky Passes, every month a holder will be able to claim an NFT airdrop of a magical piece of art from Inky's brain. Simply visit this site, enter your hedera account id, and click claim.",
  },
  {
    question: "Who is behind this project?",
    answer:
      `Inky's Art Club is a combination of efforts from LittleInkStain, Matthew Smithies (CTO DOVU) and our designer Suberverted Norms. The project is an application of the NFT Ecosystem project from Trust Enterprises, all of the code is open-source.`,
  },
  {
    question: "What charities will you be supporting?",
    answer:
      "The first charity we are focusing on is The Survivors Trust, a UK-based charity that supports survivors of sexual assault. As the months go on, we'll donate to a larger pool of charities, all of which will be shared within the discord.",
  },
  {
    question: "How do I acquire a pass and be part of the community?",
    answer:
      "Firstly, join our Discord to meet with the community, then you may acquire a pass through our launchpad partner or secondary marketplaces, like Zuse Market.",
  },
  {
    question: "How can I support or partner with Inky's Art Club?",
    answer:
      "We are continually looking for partners to collaborate with, to do new interim cross-collab NFT drops to our community, speak with us on Discord and if we align then lets make it happen!",
  },
  {
    question: "Is there a roadmap?",
    answer:
      "There are no roadmap vibes here, in the traditional sense, but to provide a path that other creatives and artists can build their own sustainable community. With a Super Inky Pass you are directly supporting Inky, in return you'll receive monthly NFT drops and special extras.",
  },
  {
    question: "What if 300 NFT passes isn't enough?",
    answer:
      "The potential problem we might face is that the secondary market value of the passes could be too cost prohibitive. Depending on the demand of our community we might issue a new pass, regardless this would be something that we would carefully discuss and vote with the Inky Pass Holders, original pass holders will always have significantly better perks.",
  },
  {
    question: "Is the project sustainable, how will you make money?",
    answer:
      "Outside of selling Super Inky Passes through NFT marketplaces we have applied a 5% royalty to every single NFT generated through the project for secondary market sales, we will also be offering rare one-of-one NFTs that pass holders will have a discount to, depending on demand their might even be a merch store on the horizon.",
  },
  {
    question: "What on earth is a Green NFT?",
    answer:
      "You've probably heard that some cryptocurrencies are bad for the environment, like Bitcoin, this all boils down to the method to how consensus is reached. Using 'green' in this context describes the technology we to create our NFTs is carbon-neutral or negative by default, we use Hedera Hashgraph to deliver this ethical project.",
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
            {faqs.map((faq, i) => (
              <div key={i}>
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
