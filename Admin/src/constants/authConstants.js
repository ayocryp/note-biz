// sessionUtils.js

import Cookies from 'js-cookie';

export const handleSession = async (res) => {
	if (res.status === 440) {
		await logout();
	}
};

export const logout = async () => {
	removeCookie('accessToken');
	removeCookie('refreshToken');
	try {
		// Perform any additional cleanup or actions on logout
	} catch (error) {
		console.error('user error', error);
	}
	if (browser) {
		window.location.replace('/login');
		await goto(_routes.host('submitted'));
	}
};

export const setCookie = (key, value) => {
	Cookies.set(key, value, { httpOnly: true, sameSite: 'strict', expires: 7 });
};

export const getCookie = (key) => {
	return Cookies.get(key);
};

export const removeCookie = (key) => {
	if (browser) {
		Cookies.remove(key);
	}
};

export const authenticate = async (data) => {
	if (browser) {
		Cookies.set('token', data.token, { expires: 7, sameSite: 'lax' });
		Cookies.set('user', data.user, { expires: 7, sameSite: 'lax' });
	}
};

export const browserGet = (key) => {
	if (browser) {
		const item = localStorage.getItem(key);
		if (item) {
			return item;
		}
	}
	return null;
};

export const browserSet = (key, value) => {
	if (browser) {
		localStorage.setItem(key, value);
	}
};

export const getData = async (fetch, url) => {
	const token = getCookie('accessToken');

	try {
		const res = await fetch(url, {
			headers: { Authorization: `Bearer ${token}` },
		});
		const response = await res.json();
		return [response.data, []];
	} catch (error) {
		console.error(`Error outside: ${error}`);
		const errors = [
			{ error: 'An unknown error occurred.' },
			{ error: error.message },
		];
		return [{}, errors];
	}
};

export const postData = async (fetch, url) => {
	const token = getCookie('accessToken');

	try {
		const res = await fetch(url, {
			headers: { Authorization: `Bearer ${token}` },
		});
		const response = await res.json();
		return [response.data, []];
	} catch (error) {
		console.error(`Error outside: ${error}`);
		const errors = [
			{ error: 'An unknown error occurred.' },
			{ error: error.message },
		];
		return [{}, errors];
	}
};

export const authorization = async (url, token) => {
	const headers = { Authorization: `Bearer ${token}` };

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers,
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data);
		} else {
			throw new Error('Request failed');
		}
	} catch (error) {
		console.error(error);
	}
};
