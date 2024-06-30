interface Ifilter {
	difficulties?: string[];
	categories?: string[];
}

const utils = {
	MongoURI: process.env.MongoDB_URI || '',
};

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

export const getCoursesByFilter = async (filter: Ifilter) => {
	console.log('🚀 ~ getCoursesByFilter ~ filter:', filter);
	const response = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/courses/filter`, {
		method: 'POST',
		body: JSON.stringify(filter),
	});
	console.log('🚀 ~ getCoursesByFilter ~ response:', response);
	return await response.json();
};

export const difficulties = ['beginner', 'intermediate', 'advanced'];

export default utils;
