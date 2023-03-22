// eslint-disable-next-line consistent-return

async function getPublicApis() {
	const response = await fetch(`https://api.publicapis.org/entries`, {
		mode: 'cors',
	});
	try {
		const apiData = await response.json();
		console.log(apiData);
	} catch (err) {
		console.log(err);
	}
}

export default getPublicApis;
