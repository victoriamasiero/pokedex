export interface PokemonFullDTO {
    'abilities': Array<{}>, 
    'base_experience': number, 
    'forms': Array<{}>, 
    'game_indices': Array<{}>, 
    'height': number, 
    'held_items': Array<{}>, 
    'id': number, 
    'is_default': boolean, 
    'location_area_encounters': string, 
    'moves': Array<{}>, 
    'name': string, 
    'order': number, 
    'past_types': Array<{}>, 
    'species': {name: string; url: string}, 
    'sprites': {front_shiny: string}, 
    'stats': Array<{}>, 
    'types': Array<{}>, 
    'weight': number
}