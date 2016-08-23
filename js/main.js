/* */

//testmyoutput
console.log('foobar');

//vars

//anime-example
anime({
	targets: 'div',
	translateX: '30rem',
	scale: [.75, .9],
	delay: function(el, index){
		//hier eventuell eine Math.random * index
		return index*200;
	},
	direction: 'alternate',
	loop: true
});

