let particle = stampit({
    x: 0,
    y: 0,
    color: '#000',
    destroyed: false,
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 1, 1);
        ctx.stroke();
    }
});
