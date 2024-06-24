import { ObjectId } from 'mongoose';

export interface UserData {
	_id: ObjectId;
	userId: String;
	email: String;
	globalName: String;
	usernames: String;
	userType: 'Admin' | 'Author' | 'User';
	courseTaken: string[];
	points: number;
}
