fetch(
	'https://api.weatherapi.com/v1/forecast.json?key=2cf89fcf31c74d7785a20551232003&q=17051&days=7&aqi=no&alerts=yes',
	{
		mode: 'cors',
	}
)
	.then(function (response) {
		// Successful response :)
		console.log(response.json());
	})
	.catch(function (err) {
		// Error :(
		console.log(err);
	});
