import { DownloadIcon, MailboxIcon } from "@phosphor-icons/react";
import Footer from "../components/Footer";
import bg2 from "../assets/bg-2.png";

export default function Resume() {
  const RareVsPointers = [
    "Optimized React applications by implementing lazy loading, code splitting, and modern image/font formats, reducing bundle size by 40% and improving page load speed significantly.",
    "Redesigned and developed Ifundcities product page with optimized performance and interactive UI, boosting user engagement, increasing site visitors by 35%, and lowering bounce rate by 20%.",
    "Developed an AI-powered chatbot leveraging OpenAI’s APIs and webhooks, deployed on the website and Twilio channels, improving customer response times and boosting enterprise client engagement by 225% (key in onboarding JP Morgan and LuminArx Capital).",
    "Reduced JavaScript bundle size by 35% (from 2.1MB to 1.4MB) through tree shaking and using modern image and font formats.",
    "Built multiple Azure Function to integrate the company’s CRM with multiple external data import sources (Five9), enabling seamless data synchronization and automating previously manual workflows."
  ];

  const FirstAmericanPointers = [
    "Integrated Stripe.js into the React application to enable secure online payments, reducing payment failures by 15% through webhook-based transaction validation.",
    "Enhanced user experience by implementing Skeleton/Shimmer UI states, improving LCP by 40%, reducing CLS by 50%, and boosting the Lighthouse performance score.",
    "Engineered a custom in-app document-signing solution using React Canvas, replacing DocuSign, achieving 85% annual cost savings ($30,000) while maintaining compliance and improving UX.",
    "Refactored the app’s UI using Storybook-driven React components, improving consistency, reusability, and maintainability across the codebase."
  ];

  const PushProtocolPointers = [
    "Developed a scalable design system from scratch, establishing consistent UI elements and design patterns for over 50+ components, enhancing collaboration across 5+ teams and improving platform consistency for 5000+ active users.",
    "Designed and implemented key user interface components, including chat and spaces features (similar to Twitter Spaces), optimizing user engagement and improving user interaction for thousands of daily active user.",
    "Led the design of the Split Pay feature, streamlining the payment workflow and reducing transaction time by 25%, resulting in a more intuitive process for 500+ users."
  ];

  return (
    <div className="timeline max-w-5xl md:w-[60vw] border border-primaryBorder mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 bg-primaryBg">
      {/* Header */}
      <div className="timeline__wrap flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="title text-2xl font-bold">Journey</p>
        <a href={bg2} download>
          <button
            className="primary flex flex-row items-center gap-2 px-6 py-2 rounded-md 
              shadow-[0_4px_0_0_rgba(235,157,42,0.4)] 
              transition-transform duration-150
              hover:cursor-pointer
              hover:-translate-y-1 hover:shadow-[0_6px_0_0_rgba(235,157,42,0.4)]
              active:translate-y-0 active:shadow-[0_4px_0_0_rgba(235,157,42,0.4)]
              bg-primary text-white text-sm sm:text-base"
          >
            <DownloadIcon className="subtitle" size={20} weight="regular" />
            <span className="subtitle">Download</span>
          </button>
        </a>
        {/* <button
          className="primary flex flex-row items-center gap-2 px-6 py-2 rounded-md 
            shadow-[0_4px_0_0_rgba(235,157,42,0.4)] 
            transition-transform duration-150
            hover:cursor-pointer
            hover:-translate-y-1 hover:shadow-[0_6px_0_0_rgba(235,157,42,0.4)]
            active:translate-y-0 active:shadow-[0_4px_0_0_rgba(235,157,42,0.4)]
            bg-primary text-white text-sm sm:text-base"
        >
          <DownloadIcon className="subtitle" size={20} weight="regular" />
          <span className="subtitle">Download</span>
        </button> */}
      </div>

      {/* Contact */}
      <div className="timeline__contact flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 mt-6 p-4 rounded">
        <div className="wrap-1">
          <p className="text font-semibold text-white">Himanshu Kumar</p>
          <p className="navfont opacity-50 text-sm">Last Updated on 03 Oct 2025</p>
        </div>
        <div className="wrap-2 flex flex-col gap-1">
          <p className="navfont text-sm">(+91)7892446715</p>
          <a
            className="flex flex-row items-center gap-2"
            href="mailto:itshimanshuk2002@gmail.com"
          >
            <MailboxIcon className="text-primary" size={18} weight="regular" />
            <p className="navfont text-primary hover:underline text-sm">
              itshimanshuk2002@gmail.com
            </p>
          </a>
        </div>
      </div>

      {/* Experience */}
      <div className="timeline__experience py-8">
        <p className="subtitle text-xl font-semibold">Experience</p>

        {/* RareVS */}
        <div className="exp-1-wrap py-4">
          <div className="pointer-wrap flex flex-col sm:flex-row justify-between gap-2">
            <p className="text font-medium">
              Software Engineer @ RareVS Consulting (
              <a
                className="text-primary hover:underline"
                href="https://ifundcities.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ifundcities
              </a>
              )
            </p>
            <p className="navfont opacity-50 text-sm">March 2025 - Present</p>
          </div>
          <ul className="pt-2 list-disc list-inside space-y-2">
            {RareVsPointers.map((ele, index) => (
              <li className="navfont opacity-70 text-sm" key={index}>
                {ele}
              </li>
            ))}
          </ul>
        </div>

        {/* First American */}
        <div className="exp-1-wrap py-4">
          <div className="pointer-wrap flex flex-col sm:flex-row justify-between gap-2">
            <p className="text font-medium">
              Software Engineer @ 
              <a
                className="text-primary hover:underline"
                href="https://www.firstam.co.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                First American India
              </a>
            </p>
            <p className="navfont opacity-50 text-sm">
              April 2021 - March 2023
            </p>
          </div>
          <ul className="pt-2 list-disc list-inside space-y-2">
            {FirstAmericanPointers.map((ele, index) => (
              <li className="navfont opacity-70 text-sm" key={index}>
                {ele}
              </li>
            ))}
          </ul>
        </div>

        {/* Push Protocol */}
        <div className="exp-1-wrap py-4">
          <div className="pointer-wrap flex flex-col sm:flex-row justify-between gap-2">
            <p className="text font-medium">
              UX Intern @
              <a
                className="text-primary hover:underline"
                href="https://push.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Push Protocol
              </a>
            </p>
            <p className="navfont opacity-50 text-sm">
              December 2020 - March 2021
            </p>
          </div>
          <ul className="pt-2 list-disc list-inside space-y-2">
            {PushProtocolPointers.map((ele, index) => (
              <li className="navfont opacity-70 text-sm" key={index}>
                {ele}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="timeline__experience py-4">
        <p className="subtitle text-xl font-semibold">Skills</p>
        <div className="exp-1-wrap">
          <ul className="pt-2 space-y-2 text-sm">
            <li className="navfont text-navfont">
              <span className="font-bold">Frontend:</span> React, TanStack
              Query, Context API, Angular, JavaScript (ES6+), TypeScript,
              HTML5, CSS3, Tailwind CSS, Storybook, Webpack, Babel, React
              Testing Library, Jest, Vitest
            </li>
            <li className="navfont text-navfont">
              <span className="font-bold">Performance & Accessibility:</span>{" "}
              Code Splitting, Tree Shaking, Lazy Loading, Memoization,
              Virtualization, ARIA, WCAG Compliance, Google Lighthouse
            </li>
            <li className="navfont text-navfont">
              <span className="font-bold">Cloud & DevOps:</span> Azure (App
              Services, Functions, Storage, CI/CD), Docker, YAML Pipelines,
              CDN Integration
            </li>
            <li className="navfont text-navfont">
              <span className="font-bold">Backend & APIs:</span> .NET Core, REST
              APIs, Supabase
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
