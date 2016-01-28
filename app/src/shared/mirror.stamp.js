function createMirrorStamp() {

    let mirror = stampit({
        refs: {
            color: '#0000FF',
            scale: config.objects.mirror.scale
        }
    });

    mirror = stampit.compose(stamps.particle, mirror);

    return mirror;
}