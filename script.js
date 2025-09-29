//your JS code here. If required.
const content = document.getElementById("output");
let arr = [1, 2, 3, 4];

new Promise((resolve) => {
	setTimeout(() => {
		resolve(arr);
	}, 3000);
}).then((data) => {
	new Promise((resolve) => {
		content.innerHTML = '';
		setTimeout(() => {
			let d = data.filter(num => !(num % 2));
			content.textContent = d;
			resolve(d);
		}, 1000);
	}).then((data) => {
		setTimeout(() => {
			content.innerHTML = '';
			let a = data.map(num => num * 2);
			content.textContent = a;
		}, 3000);
	});
})