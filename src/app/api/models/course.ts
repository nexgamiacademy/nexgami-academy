import mongoose, { Schema } from 'mongoose';

interface Instructor {
	name: string;
	photoURL: string;
}

interface ICourse {
	title: string;
	description: string;
	videoURL: string;
	featured: boolean;
	instructor: Instructor;
}

const courseSchema = new Schema<ICourse>(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		videoURL: { type: String, required: true },
		featured: { type: Boolean, default: false },
		instructor: {
			name: { type: String, required: true },
			photoURL: { type: String, required: true },
		},
	},
	{ timestamps: true }
);

export const Course = mongoose.models?.Course || mongoose.model('Course', courseSchema);
