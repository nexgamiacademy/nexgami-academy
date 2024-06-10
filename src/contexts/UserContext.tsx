'use client';

import { fetchUserInfo, refreshAccessToken } from '@/utils/auth';
import { UserData } from '@/utils/types/GeneralTypes';
import { ReactNode, createContext, useContext, useState } from 'react';

interface UserContextValue {
	userData?: Partial<UserData>;
	loadingUser?: boolean;
	setUserData?: (user: UserData) => void;
	fetchUserData: () => void;
	signOut: () => void;
}
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
				if (userData.error) {
					const refreshedData = await refreshAccessToken(refreshToken);
					localStorage.setItem('nexgAccessToken', refreshedData.access_token);
					localStorage.setItem('nexgRefreshToken', refreshedData.refresh_token);

					return setUserData(await fetchUserInfo(refreshedData.access_token));
				}

				setUserData(userData);
			} else {
				setUserData({});
			}
		} catch (error) {
			console.log(error);
			setUserData({});
		} finally {
			setloadingUser(false);
		}
	};

	const signOut = async () => {
		localStorage.removeItem('nexgAccessToken');
		localStorage.removeItem('nexgRefreshToken');

		setUserData({});
		window.location.reload();
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
