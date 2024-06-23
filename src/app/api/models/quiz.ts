import mongoose, { ObjectId, Schema } from 'mongoose';

interface IQuiz {
	courseId: ObjectId;
	question: string;
	options: string[];
	rightAnswer: number;
}

const QuizSchema = new Schema<IQuiz>(
	{
		courseId: { type: String, required: true },
		question: { type: String, required: true },
		options: { type: [String], required: true },
		rightAnswer: { type: Number, required: true },
	},
	{ timestamps: true }
);

export const Quiz = mongoose.models?.Quiz || mongoose.model('Quiz', QuizSchema);
