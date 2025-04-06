import { Question } from "@/types";

const questions: Question[] = [
  {
    id: 1,
    question: "What do you need to protect?",
    options: [
      { label: "Your business/product brand (name or logo) from being copied by others", goTo: 2 },
      { label: "Your new product or process that you have developed from being copied by others", goTo: 5 },
      { label: "Creative content that you have made up like photos, videos, drawings, sketches, books, training manuals, and other media", goTo: 13 },
    ],
  },
  {
    id: 2,
    question: "Do you want to protect a word or a logo that you sell your goods or services under, or both a word and a logo?",
    options: [
      { label: "Word/Slogan", goTo: 3 },
      { label: "Your new product or process that you have developed from being copied by others", goTo: 14 },
    ],
  },
  {
    id: 3,
    question: "It sounds like you may need a trade mark. Is your word or slogan descriptive of the goods or services that you are offering (for example Medical Care for a medical clinic), or is your word or slogan laudatory (i.e. words like great/wonderful/quality/value/top or similar words that are regularly used in advertising)?",
    options: [
      { label: "Yes", response: 'You may wish to change your mark as words that are descriptive or common to your industry are difficult to register as trade marks. If other circumstances apply you may still be able to secure your trade mark so speak with our expert team to discuss your options.', complete: true },
      { label: "No", goTo: 4 },
    ],
  },

];

export default questions;
