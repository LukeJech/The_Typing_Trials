let character_types = ['dark_elf_1', 'minotaur_1', 'goblin_1', 'citizen_women_1']
let head_index = 0
let face_index = 0
let body_index = 0
let arm_index = 0
let leg_index = 0
let weapon_index = 0



const change_character_piece = (index_change, body_part)=> {

    
    if(body_part == 'Arm') {
        arm_index = validate_index(arm_index + index_change)
        char_right_arm.src = `images/${character_types[arm_index]}/Right Arm.png`
        char_right_hand.src = `images/${character_types[arm_index]}/Right Hand.png`
        char_left_arm.src = `images/${character_types[arm_index]}/Left Arm.png`
        char_left_hand.src = `images/${character_types[arm_index]}/Left Hand.png`

    } else if(body_part == 'Leg') {
        leg_index = validate_index(leg_index + index_change)
        char_right_leg.src = `images/${character_types[leg_index]}/Right Leg.png`
        char_left_leg.src = `images/${character_types[leg_index]}/Left Leg.png`
    } else if (body_part == 'Face'){
        face_index = validate_index(face_index + index_change)
        char_face.src = `images/${character_types[face_index]}/Face 01.png`
    } else if (body_part == 'Head'){
        head_index = validate_index(head_index + index_change)
        char_head.src = `images/${character_types[head_index]}/Head.png`
    } else if (body_part == 'Weapon') {
        weapon_index = validate_index(weapon_index + index_change)
        char_weapon.src = `images/${character_types[weapon_index]}/${body_part}.png`
    } else{
        body_index = validate_index(body_index + index_change)
        char_body.src = `images/${character_types[body_index]}/${body_part}.png`
    }
}

const validate_index = index => {
    if(index < 0){
        index = character_types.length -1 
    }
    if (index >= character_types.length) {
        index = 0
    }
    return index
}