import { Question } from "@/types";

export const questions: Question[] = [
  // Q1
  {
    id: 1,
    question: "What do you need to protect?",
    options: [
      { label: "Your business/product brand (name or logo) from being copied by others", goTo: 2 },
      { label: "Your new product or process that you have developed from being copied by others", goTo: 5 },
      { label: "Creative content that you have made up like photos, videos, drawings, sketches, books, training manuals, and other media", goTo: 13 },
    ],
  },
  // Q2
  {
    id: 2,
    question: "Do you want to protect a word or a logo that you sell your goods or services under, or both a word and a logo?",
    options: [
      { label: "Word/Slogan", goTo: 3 },
      { label: "Logo", goTo: 14 },
    ],
  },
  // Q3
  {
    id: 3,
    question: "It sounds like you may need a trade mark. Is your word or slogan descriptive of the goods or services that you are offering (for example Medical Care for a medical clinic), or is your word or slogan laudatory (i.e. words like great/wonderful/quality/value/top or similar words that are regularly used in advertising)?",
    options: [
      { 
        label: "Yes", 
        response: "You may wish to change your mark as words that are descriptive or common to your industry are difficult to register as trade marks. If other circumstances apply you may still be able to secure your trade mark so speak with our expert team to discuss your options.", 
        complete: true 
      },
      { label: "No", goTo: 4 },
    ],
  },
  // Q4
  {
    id: 4,
    question: "Do you know of any competitors of yours that have a similar name?",
    options: [
      { 
        label: "Yes", 
        response: "If they already have a trademark filed for their name, your application may be refused. You also risk infringing your competitor’s trade mark. A search is conducted at the trademark office during your application process. Speak to our attorneys with your details.", 
        complete: true 
      },
      { 
        label: "No", 
        response: "It sounds like your trade mark may be eligible for protection. Make sure to meet the registration requirements and consult with our attorneys for personalized advice. Please provide your details to proceed.", 
        complete: true 
      },
    ],
  },
  // Q5
  {
    id: 5,
    question: "It sounds like you may require a patent or a registered design. Have you developed technology that has not been done anywhere else in the world before, and does it offer benefits that were not available before?",
    options: [
      { label: "Yes", goTo: 6 },
      { label: "No", goTo: 11 },
    ],
  },
  // Q6
  {
    id: 6,
    question: "Does your technology relate to a new:",
    options: [
      { label: "Product", goTo: 7 },
      { label: "Process", goTo: 8 },
    ],
  },
  // Q7
  {
    id: 7,
    question: "It sounds like you might be able to get patent protection for the technology that you have developed.",
    options: [
      { 
        label: "Learn More", 
        response: "Your invention may be eligible for patent protection if it meets the criteria for a product invention. Please provide your contact details, word mark, and the goods or services for a consultation with our attorneys.", 
        complete: true 
      },
    ],
  },
  // Q8
  {
    id: 8,
    question: "Is your process invention software related?",
    options: [
      { label: "No", goTo: 9 },
      { label: "Yes", goTo: 10 },
    ],
  },
  // Q9
  {
    id: 9,
    question: "You may be able to get patent protection for a process under the right circumstances.",
    options: [
      { 
        label: "Learn More", 
        response: "Your process invention may be eligible for patent protection under the right circumstances. Please provide your contact details, word mark, and the goods or services for a consultation with our attorneys.", 
        complete: true 
      },
    ],
  },
  // Q10
  {
    id: 10,
    question: "You may be able to get patent protection for a software process invention under the right circumstances.",
    options: [
      { 
        label: "Learn More", 
        response: "Your software process invention may be eligible for patent protection if it meets the criteria for software inventions. Please provide your contact details, word mark, and the goods or services for a consultation with our attorneys.", 
        complete: true 
      },
    ],
  },
  // Q11
  {
    id: 11,
    question: "Does your product have a distinctive look about it that has not been shown by anyone else in the world before?",
    options: [
      { label: "Yes", goTo: 12 },
      { 
        label: "No", 
        response: "It may be difficult to protect your product without a distinctive look or if it is not new technology. Prior public disclosure can impact eligibility. Speak to our attorneys with your details for further advice.", 
        complete: true 
      },
    ],
  },
  // Q12
  {
    id: 12,
    question: "You may be able to get registered design protection for your product's distinctive look.",
    options: [
      { 
        label: "Learn More", 
        response: "If your product has a distinctive look or aesthetic, it may qualify for registered design protection. Please provide your contact details, word mark, and the goods or services for a consultation with our attorneys.", 
        complete: true 
      },
    ],
  },
  // Q13
  {
    id: 13,
    question: "You may already have copyright protection for your original works.",
    options: [
      { 
        label: "Learn More", 
        response: "Copyright is automatic for original works such as art, music, literature, film, or software code. If you are unsure, please speak to our attorneys with your details for further advice.", 
        complete: true 
      },
    ],
  },
  // Q14
  {
    id: 14,
    question: "You may be able to get trademark protection for your logo.",
    options: [
      { 
        label: "Learn More", 
        response: "Your logo may qualify for trademark protection. Please provide your contact details, word mark, and the goods or services for a consultation with our attorneys.", 
        complete: true 
      },
    ],
  },
];