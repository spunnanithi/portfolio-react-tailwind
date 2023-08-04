function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/spunnanithi/portfolio-react-tailwind"
					target="__blank"
					className="hover:underline hover:text-primary-blue dark:hover:text-primary-blue ml-1 duration-500">
					React & Tailwind CSS Portfolio
				</a>
				.
				<a
					href="/"
					target="__blank"
					className="text-primary-blue dark:text-primary-blue font-medium uppercase hover:underline hover:text-primary-blue dark:hover:text-primary-blue ml-1 duration-500">
					Developed by Sirasit Punnanithi
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
