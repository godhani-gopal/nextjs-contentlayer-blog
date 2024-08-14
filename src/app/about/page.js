import AboutCoverSection from "@/src/components/about/AboutCoverSection";
import Skills from "@/src/components/about/Skills";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "About",
    description: `Find more details about me at ${siteMetadata.website}`,
};

export default function About() {
    return (
        <>
            <AboutCoverSection></AboutCoverSection>
            <Skills></Skills>
            <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">Have a project or position in mind? Reach out to me ☎️ from <a href="https://godhanigopal.com/#/contact" className="!underline underline-offset-2" target="blank">here</a> and let's make it happen.😊</h2>
        </>
    )
}