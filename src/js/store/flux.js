const getState = ({ getState, getStore, setStore }) => {

	return {
		store: {

			characters: [],
			planet: [],
			favorites: [],
			isOn: false,


		},

		actions: {

			getCharacters(url) {

				fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({
							characters: data.results
						})
					})
					.catch(error => {
						console.log(error);
					});
			},

			getPlanets(url) {

				fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({
							planet: data.results
						})
					})
					.catch(error => {
						console.log(error);
					});
			},
			

			addFavorites: (value) => {

				const store = getStore();

				setStore({

					favorites: [...store.favorites, [value]],

				})

				return store.favorites
			},

			countFavorites: () => {

				const store = getStore();
				const length = store.favorites.length;
				return length;

			},

			deleteFavorites: (i) => {

				const store = getStore();

				const listFavorite = store.favorites.filter((item, j) => i !== j);

				setStore({

					favorites: [...listFavorite],

				})

			}

		}
	}
};

export default getState;
