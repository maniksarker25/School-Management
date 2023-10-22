/** @format */

const RootLayout = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16'>
			<div className='flex-grow'>
				<p>this is hearde</p>
				<main className='my-0 py-16'>{children}</main>
			</div>
			<p>this is footer</p>
		</div>
	);
};
