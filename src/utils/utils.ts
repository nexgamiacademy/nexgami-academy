const utils = {
	MongoURI: process.env.MongoDB_URI || '',
};

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

export default utils;
