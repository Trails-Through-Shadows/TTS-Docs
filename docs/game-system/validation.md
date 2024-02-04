# Validation


## Common

### Title
- Minimum of 4 characters.
- Maximum of 128 characters.
- Allowed characters: `a-z`, `A-Z`, `0-9`, `(space)`, `-`, `'`.

### Tag
- Minimum of 2 characters.
- Maximum of 32 characters.
- Allowed characters: `a-z`, `A-Z`, `0-9`, `-`.
- Prefix must be one of the following, follwed by a `-`
    - 'p': Part
    - 'o': Obstacle
    - 'l': Location
    - 'i': Item
    - 'c': Class
    - 'e': Enemy
    - 'r': Race
    - 's': Summon


## Schema

### Hex

- The sum of all coordinates (q, r, s) must be 0.

### Part

- Title and tag have to be valid.
- Minimum of 5 hexes.
- Maximum 50 hexes.
- Every hex has to be validated.
- It must be maximum of 8 hexes wide in every direction.
- No hexes can overlap.
- The center hex (0, 0, 0) must be present.
- All hexes must be connected. 

### Location

- Title and tag have to be valid.
- Enemy can't be placed on the same hex as another enemy.
- Obstacle can't be placed on the same hex as another obstacle.
- Obstacle can't be placed on the same hex as an enemy.

### Campaign

- Title and tag have to be valid.
- Must have at least 1 location.
- Must have exactly 1 starting location.
- Must have at least 1 ending location.


## Encounter

### Enemy

- Title and tag have to be valid.
- Health must be greater than 0.
- Enemy can't have multiple of the same action or base effect.
- All actions must be validated.

### Action

- Title and tag have to be valid.
- Name must be shorter than 45 characters and can't be empty.
- Name must be unique.
- Name must be alphanumeric, including `-` `'`.
