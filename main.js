const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./golem.png");
 
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Golem(gameEngine));
	//image
	//gameEngine.addEntity(new Golem());

	gameEngine.init(ctx);

	gameEngine.start();
});
