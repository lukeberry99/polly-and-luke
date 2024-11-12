type NavLink = {
  name: string;
  bgColor: string;
  defaultBgColor?: string;
  textColor?: string;
};
export const navLinks: NavLink[] = [
  { name: "Home", bgColor: "bg-gray-200" },
  { name: "The Story", bgColor: "bg-blue-200" },
  { name: "The Day", bgColor: "bg-green-200" },
  { name: "The Party", bgColor: "bg-yellow-200" },
  { name: "Q&A", bgColor: "bg-purple-200" },
  {
    name: "RSVP",
    bgColor: "bg-red-200",
    defaultBgColor: "bg-black",
    textColor: "text-white",
  },
];

export const weddingDate = new Date("2025-08-29T12:00:00Z");

export const events = [
  {
    date: "2013",
    title: "League",
    description: "Some description",
  },
  {
    date: "2013",
    title: "Spoons",
    description: "Some description",
  },
  {
    date: "2013",
    title: "The night",
    description: "Some description",
  },
  {
    date: "2013",
    title: "Planning dogs",
    description: "Some description",
  },
  {
    date: "2013",
    title: "Bristol",
    description: "Some description",
  },
  {
    date: "2013",
    title: "First christmas together",
    description: "Some description",
  },
  {
    date: "2013",
    title: "Seeing our song live",
    description: "Some description",
  },
  {
    date: "2013",
    title: "Cardiff",
    description: "Some description",
  },
  {
    date: "2013",
    title: "Foot",
    description: "Some description",
  },
  {
    date: "2013",
    title: "D&D",
    description: "Some description",
  },
  {
    date: "2013",
    title: "Our home",
    description: "Some description",
  },
  {
    date: "2013",
    title: "Fluffies",
    description: "Some description",
  },
];

export const questions = [
  {
    question: "RSVP Deadline",
    answer: "Some Answer",
  },
  {
    question: "+1s",
    answer: "Some Answer",
  },
  {
    question: "Kids",
    answer: "Some Answer",
  },
  {
    question: "Weather",
    answer: "Some Answer",
  },
  {
    question: "Accessibility",
    answer: "Some Answer",
  },
  {
    question: "Indoor vs outdoor",
    answer: "Some Answer",
  },
  {
    question: "Shoes",
    answer: "Some Answer",
  },
  {
    question: "Attire",
    answer: "Some Answer",
  },
  {
    question: "Photos / phones",
    answer: "Some Answer",
  },
  {
    question: "Any other Qs",
    answer: "Some Answer",
  },
];
