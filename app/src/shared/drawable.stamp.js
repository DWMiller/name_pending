function createDrawableStamp() {
    return stampit({
        methods: {
            draw(ctx) {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.scale, this.scale);
                ctx.stroke();
            }
        }
    });
}

