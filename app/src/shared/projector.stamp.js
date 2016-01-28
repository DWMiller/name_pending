function createProjectorStamp() {
    let projector = stampit({
        refs: {
            color: '#00FF00',
            scale: config.objects.projector.scale
        }
    });

    projector = stampit.compose(stamps.particle, projector, stamps.drawable);

    return projector;
}

