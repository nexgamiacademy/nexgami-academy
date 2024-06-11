import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const getCourse = async (id: string) => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/courses/${id}`, {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch course');
		}

		return res.json();
	} catch (error) {
		console.log('Error loading course: ', error);
	}
};

const CoursePage = async ({ params: { id } }: { params: { id: string } }) => {
	let courseId = '662e907092bec4f89746c4c2';

	switch (id) {
		case '0':
			courseId = '662e907092bec4f89746c4c2';
			break;
		case '1':
			courseId = '662e9a311da6d7038bba2706';
			break;
		case '2':
			courseId = '662e9bd71da6d7038bba2707';
			break;
	}
	const resp = await getCourse(id);

	const course = resp?.data || {};
	console.log('🚀 ~ CoursePage ~ course:', course);

	const createMarkup = (html: string) => {
		return { __html: html };
	};

	return (
		<div className="px-4 xl:px-20 mb-20">
			{/* <div className="w-full flex items-center justify-center mt-10">
				<iframe
					width="850"
					height="450"
					className="rounded-lg"
					src={course?.videoURL}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; control"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>

			<div className="mt-8 flex flex-col gap-3">
				<Typography variant="h4" fontWeight={700}>
					{course?.title}
				</Typography>
				<Typography variant="body1" color="lightgray" sx={{ wordWrap: 'break-word' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odio molestias natus soluta! Dolorem necessitatibus voluptatibus, sint non blanditiis vero excepturi qui, repellendus
					nulla illo exercitationem vel, debitis vitae? Sit cupiditate possimus atque iusto fuga, nulla commodi qui sed perspiciatis impedit magni quasi laboriosam animi odit incidunt necessitatibus,
					reiciendis esse ipsa tempore. Minima, doloremque saepe veniam suscipit aspernatur repellat, earum consequuntur numquam quasi modi vel eos repudiandae praesentium similique. Praesentium
					asperiores ad nostrum perferendis facilis, nulla natus in unde? Dolor obcaecati, necessitatibus accusantium adipisci laboriosam, vel dignissimos, sequi iusto doloremque blanditiis ducimus
					quibusdam consectetur eligendi repellat inventore ipsa earum labore! Odit, recusandae? Earum, incidunt quo. Magni reiciendis cum nisi vitae cupiditate quos natus! Eos voluptatum quaerat
					aliquam facilis tempora laborum doloribus odio, commodi dolorem perspiciatis. Praesentium deserunt omnis, error itaque est explicabo aperiam? Aspernatur nam molestias, autem eveniet neque
					enim dolores ex ullam consectetur suscipit facere nemo nisi corrupti sit doloribus commodi dolorum sunt. <br />
					<br />
					Alias voluptates animi porro, tempore nesciunt laboriosam rerum eaque, sunt omnis quia veniam eius. Quidem itaque minus architecto, quos qui suscipit totam maxime soluta nemo aspernatur
					animi mollitia error alias minima aut! Ad laboriosam ipsam enim recusandae voluptate ex similique facere, porro voluptates ratione molestiae maxime. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Explicabo eius nulla quibusdam repellendus minus corporis earum modi labore iure nemo tempora deserunt quod veritatis error beatae incidunt, vitae asperiores ut, sequi qui
					dignissimos obcaecati recusandae? Veritatis ipsum commodi repudiandae obcaecati vitae. Ipsum, architecto alias illum nulla sint aperiam totam unde soluta assumenda debitis necessitatibus
					aliquam at libero eos corporis mollitia repellat vel expedita quae. Aspernatur earum ex aut qui, delectus, quidem nisi inventore repudiandae deserunt labore perferendis animi, libero
					obcaecati natus atque vel! Reprehenderit, debitis facere. Modi corporis, veritatis suscipit, doloremque tempore dignissimos, molestias illo mollitia quia eaque autem ab!
				</Typography>

				<div className="grid grid-cols-3 items-center justify-between w-full py-8">
					<div className="flex items-center xl:justify-start justify-center gap-3 col-span-3 xl:col-span-1">
						<Image className="size-16 rounded-full object-cover object-top" src={course?.instructor?.photoURL} height={300} width={300} alt={''} />

						<div className="flex flex-col gap-1">
							<Typography variant="h6" fontWeight={700}>
								{course?.instructor?.name}
							</Typography>
							<Typography variant="body1">Game Developer</Typography>
						</div>
					</div>

					<div className="flex flex-col gap-2 justify-center items-center xl:border-x col-span-3 xl:col-span-1 my-8 xl:my-0">
						<div className="flex items-center gap-3">
							<div>{[1, 2, 3, 4, 5].map((index) => (index < 5 ? <StarIcon key={index} htmlColor="#FDA43C" /> : <StarBorderIcon key={index} htmlColor="#FDA43C" />))}</div>
							<Typography variant="body1">(9,643 reviews)</Typography>
						</div>
						<Typography variant="body1">14,233 students found this helpful</Typography>
					</div>

					<Typography variant="body1" textAlign="center" className="underline xl:no-underline  hover:xl:underline cursor-pointer font-semibold col-span-3 xl:col-span-1">
						Learn More About This Course
					</Typography>
				</div>
			</div> */}
			<div dangerouslySetInnerHTML={createMarkup(course.body)}></div>
		</div>
	);
};

export default CoursePage;
