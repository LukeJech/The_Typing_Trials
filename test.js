let character_types = ['dark_elf_1', 'minotaur_1', 'sage']
let index = 0



const height_scale = width => {
    return width / 200
}

class Background {
    constructor() {
        this.canvas = document.getElementById('character_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 1920;
        this.height = 1080;
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.headImage = new Image();
        this.headImage.src = `images/dark_elf_1/Head.png`
        this.bodyImage = new Image();
        this.bodyImage.src = `images/dark_elf_1/Body.png`
    }

    draw_all_game_objects({headImage = this.headImage , bodyImage = this.bodyImage} = {}){
        this.ctx.clearRect(0, 0, this.width, this.height);
        setTimeout(() => {
            this.ctx.drawImage(bodyImage, 860, 380, 200, (bodyImage.height / height_scale(bodyImage.width)));
        }, 2)
        setTimeout(() => {
            this.ctx.drawImage(headImage, 860, 300, 200, (headImage.height / height_scale(headImage.width)));
        }, 2)
        this.headImage = headImage
        this.bodyImage = bodyImage
        
    }
}

const background = new Background();

window.addEventListener('load', function() { 
    background.draw_all_game_objects()
})


const change_character_piece = (index_change, body_part)=> {
    index += index_change
    if(index < 0){
        index = character_types.length -1 
    }
    if (index >= character_types.length) {
        index = 0
    }
    let newImage = new Image();
    newImage.src = `images/${character_types[index]}/${body_part}.png`
    console.log(body_part)
    if( body_part == 'Head') {
        console.log('changing head')
        background.draw_all_game_objects({headImage: newImage})
        return
    }
    if( body_part == 'Body') {
        console.log('changing body')
        background.draw_all_game_objects({bodyImage: newImage})
        return
    }
}
