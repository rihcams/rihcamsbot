module.exports = {
	name: "ready",
	once: true,
	async execute(client, Discord) {
		console.log(`${client.user.tag}, kullanıma hazır.`);
		client.user.setPresence({
			activities: [{ name: `Gurlu <3`, type: `WATCHING` }],
			status: `dnd`,
		});		
	},
};
