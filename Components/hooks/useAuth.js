import { useEffect, useState } from 'react';

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchAuth = async () => {
			try {
				// const res = await fetch('../pages/api/auth');
				// const data = await res.json();
				// setIsAuthenticated(data.isAuthenticated);
				// setUser(data.user);
				// setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		fetchAuth();
	}, []);

	return {
		isAuthenticated,
		user,
		loading
	};
};
