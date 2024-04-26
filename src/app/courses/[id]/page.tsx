import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const CoursePage = () => {
	return (
		<div className="px-20 mb-20">
			<div className="w-full flex items-center justify-center mt-10">
				<iframe
					width="850"
					height="450"
					className="rounded-lg"
					src="https://www.youtube.com/embed/603_L_66ouI?si=iwaksQ1az-SPiMyA"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>

			<div className="mt-8 flex flex-col gap-3">
				<Typography variant="h4" fontWeight={700}>
					What us NexGami and Web 3.0 gaming?
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
					<div className="flex items-center gap-3">
						<Image
							className="size-16 rounded-full object-cover object-top"
							src={
								'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1714144624~exp=1714148224~hmac=28ba062408da3ee00b0b3b4b39683b8fd208febc58b4869563c3604343762442&w=1380'
							}
							height={300}
							width={300}
							alt={''}
						/>

						<div className="flex flex-col items-center gap-1">
							<Typography variant="h6" fontWeight={700}>
								Lauren Jones
							</Typography>
							<Typography variant="body1">Game Developer</Typography>
						</div>
					</div>

					<div className="flex flex-col gap-2 justify-center items-center border-x">
						<div className="flex items-center gap-3">
							<div>{[1, 2, 3, 4, 5].map((index) => (index < 5 ? <StarIcon key={index} htmlColor="#FDA43C" /> : <StarBorderIcon key={index} htmlColor="#FDA43C" />))}</div>
							<Typography variant="body1">(9,643 reviews)</Typography>
						</div>
						<Typography variant="body1">14,233 students found this helpful</Typography>
					</div>

					<Typography variant="body1" textAlign="center" className="hover:underline cursor-pointer font-semibold">
						Learn More About This Course
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default CoursePage;
