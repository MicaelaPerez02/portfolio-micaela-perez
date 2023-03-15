export interface socialMediaContact {
    id: number;
  title: string;
  image: string;
  alt: string;
  link: string;
  description: string;
}

export const socialMediaContacts: socialMediaContact[] = [
  {
    id: 1,
    title: "Email",
    image: "https://img.icons8.com/ios/50/000000/email.png",
    alt: "Email",
    link: "mailto:",
    description: "Send me an email",
  },
  {
    id: 2,
    title: "LinkedIn",
    image: "https://img.icons8.com/ios/50/000000/linkedin.png",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/micaelacperez",
    description: "Connect with me",
  },
  {
    id: 3,
    title: "GitHub",
    image: "https://img.icons8.com/ios/50/000000/github.png",
    alt: "GitHub",
    link: "https://github.com/MicaelaPerez02",
    description: "Check out my GitHub",
  },
  {
    id: 4,
    title: "Magic Message",
    image: "",
    alt: "Magic Message",
    link: "modal",
    description: "Send me a owl post",
  },
];
