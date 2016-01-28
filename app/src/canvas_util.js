let canvasUtil = {
    clear: function(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    blurClear: function(ctx) {
        // this.clear(ctx);
        ctx.fillStyle = 'rgba(0,0,0,' + config.canvasBlurRate + ')';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
};
