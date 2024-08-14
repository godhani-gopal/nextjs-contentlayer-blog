import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
    title: "Contact",
    description: `Please contact me through the personal website contact page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
    return (

        <section className='w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
            <div className='w-1/2 flex flex-col text-center items-center justify-center px-16'>
                <h1 className='text-9xl'>🌎</h1>
                <a href='https://godhanigopal.com/#/contact' target='_blank' rel='noopener noreferrer'>
                    <span className='flex flex-row font-bold text-6xl mt-4 bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>Contact Here👆</span>
                </a>
                <h3 className='font-bold capitalize text-2xl pt-24 pb-3'>Every connection starts with a conversation.</h3>
                <h3 className='font-bold capitalize text-2xl'>Let's create something amazing together!</h3>
            </div>
        </section>
    );
}
