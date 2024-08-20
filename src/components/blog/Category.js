import { cx } from '@/src/utils';
import Link from 'next/link';
import React from 'react';

const Category = ({ link = "#", name, active, ...props }) => {
    return (
        <Link
            href={link}
            className={cx(
                "inline-block py-2 px-10 rounded-full border-2 border-solid hover:scale-105 transition-all ease duration-200 m-2",
                props.className,
                active
                    ? "bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-light"
                    : "bg-light text-dark border-dark dark:bg-dark dark:text-light dark:border-light"
            )}
        >
            #{name}
        </Link>
    );
};

export default Category;
