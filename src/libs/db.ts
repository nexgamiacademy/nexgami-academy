import utils from '@/utils/utils';
import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(utils.MongoURI);
		console.log('DB connection established');
	} catch (error) {
		console.error('Failed to connect to Mongo', error);
	}
};

export default connectDB;
