import mongoose, { ObjectId, Schema } from 'mongoose';

interface IUser {
	userId: string;
	username: string;
	globalName: string;
	email: string;
	userType: 'Admin' | 'Author' | 'User';
	points: number;
	courseTaken: string[];
}

const userSchema = new Schema<IUser>(
	{
		userId: { type: String, required: true },
		username: { type: String, required: true },
		globalName: { type: String, required: true },
		email: { type: String, required: true },
		userType: { type: String, required: true },
		points: { type: Number, default: 0 },
		courseTaken: { type: [String], required: false, default: [] },
	},
	{ timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model('User', userSchema);
