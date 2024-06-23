import mongoose, { Schema } from 'mongoose';

interface Instructor {
	name: string;
	photoURL?: string;
}

interface ICourse {
	title: string;
	body: string;
	image: string;
	videoURL?: string;
	featured: boolean;
	author: Instructor;
}

const courseSchema = new Schema<ICourse>(
	{
		title: { type: String, required: true },
		image: { type: String, required: true },
		body: { type: String, required: true },
		videoURL: { type: String, required: false },
		featured: { type: Boolean, default: false },
		author: {
			name: { type: String, required: true },
			photoURL: { type: String, required: false },
		},
	},
	{ timestamps: true }
);

export const Course = mongoose.models?.Course || mongoose.model('Course', courseSchema);
