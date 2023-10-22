/** @format */

import { useRouter } from "next/router";

function EventDetails() {
	const router = useRouter();
	
	
	return (
		<div>
			<p>Dynamic slug: {router.query.slug.join("/")}</p>
			<p>Other content specific to this page</p>
		</div>
	);
}

export default EventDetails;
