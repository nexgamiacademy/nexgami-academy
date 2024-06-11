'use client';

import { fetchUserType } from '@/libs/controller/UserController';
import { fetchUserInfo, refreshAccessToken } from '@/utils/auth';
import { UserData } from '@/utils/types/GeneralTypes';
import { ReactNode, createContext, useContext, useState } from 'react';

interface UserContextValue {
	userData?: Partial<UserData>;
	userType?: UserType;
	loadingUser?: boolean;
	setUserData?: (user: UserData) => void;
	fetchUserData: () => void;
	signOut: () => void;
}

type UserType = 'Admin' | 'Author' | 'User';

const UserContext = createContext<UserContextValue>({ fetchUserData: () => {}, signOut: () => {} });

export function useUserContext() {
	return useContext(UserContext);
}

export function UserProvider({ children }: { children: ReactNode }) {
	const [userData, setUserData] = useState<Partial<UserData>>({});
	const [loadingUser, setloadingUser] = useState<boolean>(true);

	const fetchUserData = async () => {
		setloadingUser(true);
		try {
			const accessToken = localStorage.getItem('nexgAccessToken');
			const refreshToken = localStorage.getItem('nexgRefreshToken');

			if (accessToken && refreshToken) {
				const userData = await fetchUserInfo(accessToken);
				console.log('🚀 ~ fetchUserData ~ userData:', userData);
				if (userData.error) {
					// const refreshedData = await refreshAccessToken(refreshToken);
					// console.log('🚀 ~ fetchUserData ~ refreshedData:', refreshedData);
					// localStorage.setItem('nexgAccessToken', refreshedData.access_token);
					// localStorage.setItem('nexgRefreshToken', refreshedData.refresh_token);

					// return setUserData(await fetchUserInfo(refreshedData.access_token));

					resetUser();
				}

				setUserData(userData);
			} else {
				resetUser();
			}
		} catch (error) {
			console.log(error);
			resetUser();
		} finally {
			setloadingUser(false);
		}
	};

	const signOut = async () => {
		resetUser();
		window.location.reload();
	};

	const resetUser = async () => {
		localStorage.removeItem('nexgAccessToken');
		localStorage.removeItem('nexgRefreshToken');

		setUserData({});
	};

	const values = {
		userData,
		setUserData,
		fetchUserData,
		signOut,
		loadingUser,
	};

	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
