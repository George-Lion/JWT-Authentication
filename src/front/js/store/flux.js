const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null
		},
		actions: {
			setStoreUser: (user) => {
				setStore({ user: user })
			},

			getUser: async () => {
				let token = localStorage.getItem("token")
				if (token != null && token != undefined) {
					const response = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu43.gitpod.io/api/user", {
						method: "GET",
						headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },

					});
					const data = await response.json();
					getActions().setStoreUser(data.user)

				} else {
					getActions().setStoreUser(null)
				}

			}
		}
	};
};

export default getState;
