'use client';

import Image from 'next/image';
import React from 'react';
import logo from '@/Assets/NexgamiLogo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, IconButton } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between p-3 bg-base-200 text-white sticky top-0 z-20">
			<ul className="flex items-center gap-8">
				<Link href={'/'}>
					<li className="flex items-center gap-2">
						<Image className="h-10 w-10" src={logo} alt="NexGami" />
						<div className="flex flex-col text-sm leading-4">
							<p>NexGami</p>
							<p className="pl-2">Academy</p>
						</div>
					</li>
				</Link>

				<Link href={'/courses'} className="xl:flex hidden">
					<p>Articles</p>
					<ArrowDropDownIcon />
				</Link>
				<li className="">
					<Link href={'/courses'} className="flex">
						<p>Courses</p>
						<ArrowDropDownIcon />
					</Link>
				</li>
				<Link href={`/courses`} className="xl:flex hidden">
					<p>Learn & Earn</p>
					<ArrowDropDownIcon />
				</Link>
				<Link href={`/partners`} className="xl:flex hidden">
					<p>Partnership</p>
					<ArrowDropDownIcon />
				</Link>
				<Link href={`/courses`} className="xl:flex hidden">
					<p>Study Week</p>
					<ArrowDropDownIcon />
				</Link>
			</ul>

			<ul className="xl:flex items-center gap-2 xl:gap-7 hidden">
				<li>
					<IconButton>
						<SearchIcon htmlColor="white" />
					</IconButton>
				</li>

				<li>
					<p className="text-xs xl:text-base">Log In</p>
				</li>
				<li>
					<Button
						size="small"
						variant="contained"
						sx={{
							textTransform: 'capitalize',
							fontSize: { xs: '8px', xl: '12px' },
						}}>
						Register
					</Button>
				</li>
				<li>
					<IconButton>
						<LanguageIcon htmlColor="white" />
					</IconButton>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
