const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			question: null
		},
		actions: {
			getMessage: () => {
				// fetching data from the backend
				fetch("https://chilemielappdemo.herokuapp.com/mesagge")
					.then(response => response.json())
					.then(response => setStore({ message: response }));
			},
			getQuestion: () => {
				// fetching data from the backend
				fetch("https://chilemielappdemo.herokuapp.com/question")
					.then(response => response.json())
					.then(response => setStore({ question: response }));
			}
		}
	};
};

export default getState;
