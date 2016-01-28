function createParticleStamp() {
    let particle = stampit({
        refs: {
            color: '#000',
            scale: config.objects.particle.scale
        },
        props: {
            x: 0,
            y: 0,
            destroyed: false
        }
    });

    particle = stampit.compose(particle, stamps.drawable);

    return particle;
}

