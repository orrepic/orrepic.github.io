function jumpBlocks(){

    for (i=1; i<41; i++){

        t = String('.block:nth-child(' + i + ')')
        anime({
            targets: t,
            translateY: function() {
                return (anime.random(0, -100))
            },
            // duration: 500,
            delay: anime.stagger(10),
            easing: "easeOutElastic(1, 0.6)",
        })

    }

    anime({
        complete: jumpBlocks,
    })

}

jumpBlocks()