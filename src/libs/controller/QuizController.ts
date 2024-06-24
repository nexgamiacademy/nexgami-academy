interface resultProps {
	courseId: string;
	answers: number[];
	userId: string;
}

export const getQuizResult = async ({ courseId, answers, userId }: resultProps) => {
	const result = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/quizes/result`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			courseId: courseId,
			answers: answers,
			userId: userId,
		}),
	});
	return await result.json();
};
