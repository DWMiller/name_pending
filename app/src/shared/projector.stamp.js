function createProjectorStamp() {
    let projector = stampit({
        refs: {
            color: '#00FF00',
            scale: config.objects.projector.scale
        },
        methods: {
            draw: function (ctx) {
                ctx.strokeStyle = this.color;

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);

                ctx.lineTo(this.x * 2, this.y * 2);
                ctx.stroke();
            }
        }
    });

    projector = stampit.compose(stamps.particle, stamps.drawable, projector);

    return projector;
}

