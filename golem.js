class Golem {
    constructor(game) {
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./golem.png"), 0, 0, 230, 230, 10, 0.2);

        this.x = 0;
        this.y = 220;
        this.speed = 150;
    };


    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1000) this.x = 0;
    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./run.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}