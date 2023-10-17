import React from "react";
import { BlogSingle } from "../components/blog/BlogSingle";

function Blog() {
	return (
		<div class="bg-white dark:bg-gray-900">
			<div class="py-20 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
				<h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-primary-blue lg:mb-6 md:text-5xl xl:text-6xl dark:text-primary-blue">
					Hey there! Welcome to my Blog section!
				</h1>
				<p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
					I'll be sharing my diverse range of thoughts on everything
					tech-related.
					<br /> Get ready for some exciting insights and updates - don't miss
					out! Stay connected for more. 🚀
				</p>
				<BlogSingle />
			</div>
		</div>
	);
}

export default Blog;
