/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    question: "What is the NFT Collection ID for the Inky Super Pass?",
    answer:
      `The pass collection id is ${process.env.REACT_APP_NFT_PASS_ID}, remember you need to associate it before you can receive it in your Hedera account wallet. Remember to keep an eye out for discord and twitter announcements of when the next drop will happen, who knows surprises might happen...`,
  },
  {
    question: "Why should I care about this project?",
    answer:
      "Our wish is to carve a new pathway for any artist to make a living, to create the art they love, and build a community at the same time. To apply the concept of '1000 True Fans' to an artist exclusive NFT pass. With this pass you'll receive at least 120 unique Art NFTs over the next decade!",
  },
  {
    question: "How does a Super Inky Pass pass work?",
    answer:
      "At launch there will only be a fixed supply of 300 Super Inky Passes, every month a holder will be able to claim an NFT airdrop of a magical piece of art from Inky's brain. Simply visit this site, enter your hedera account id, associate the NFT collections, and click claim.",
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
      "You've probably heard that some cryptocurrencies are bad for the environment, like Bitcoin, this all boils down to the method to how consensus is reached. Using 'green' in this context describes the technology we use to create our NFTs which is carbon-neutral or negative by default. We use Hedera Hashgraph to deliver this ethical project.",
  },
  {
    question: "I tried to claim my NFT but it didn't work...",
    answer:
      "When you attempt to claim your NFTs we add popups to keep track of the status, normally you just need to make sure you have associated, but if there are other issues then please let us know in discord. ",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white tracking-tight">
      <div className="mx-auto max-w-7xl py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
        <div className="mt-12">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
            {faqs.map((faq, i) => (
              <div key={i}>
                <dt className="text-xl font-medium leading-6 text-gray-900 ">{faq.question}</dt>
                <dd className="mt-4 text-lg text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
