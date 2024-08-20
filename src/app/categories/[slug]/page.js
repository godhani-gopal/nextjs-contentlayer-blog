import { allDocs as allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/blog/BlogLayoutThree";
import Categories from "@/src/components/blog/Categories";
import { slug } from "github-slugger";
import GithubSlugger from "github-slugger"

const slugger = new GithubSlugger();

export async function generateStaticParams() {
    const categories = [];
    const paths = [{ slug: "all" }];

    allBlogs.map(blog => {
        if (blog.isPublished) {
            blog.tags.map(tag => {
                let slugified = slugger.slug(tag)
                if (!categories.includes(slugified)) {
                    categories.push(slugified)
                    paths.push({ slug: slugified })
                }
            });
        }
    });
    return paths;
}

export async function generateMetadata({ params }) {
    const capitalizeWords = (str) => {
        return str.replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    const title = capitalizeWords(params.slug);
    return {
        title: `${title} Blogs`,
        description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of blogs and tutorials`,
    }
}

const CategoryPage = ({ params }) => {
    const allCategories = ["all"];
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some(tag => {
            const slugified = slug(tag);
            if (!allCategories.includes(slugified)) {
                allCategories.push(slugified)
            }
            if (params.slug === "all") {
                return true;
            }
            return slugified === params.slug
        })
    })
    return (
        <article className="mt-12 flex flex-col text-dark dark:text-light">
            <div className="px-32 flex flex-col">
                <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
                <span className="mt-2 inline-block">Discover more categories and expand your knowledge!</span>
            </div>
            <Categories categories={allCategories} currentSlug={params.slug} />
            <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
                {blogs.map((blog, index) => (
                    <article key={index} className="col-span-1 row-span-1 relative">
                        <BlogLayoutThree blog={blog} />
                    </article>
                ))}
            </div>
        </article>
    );
};
export default CategoryPage