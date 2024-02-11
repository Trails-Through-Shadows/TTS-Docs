# Validation


## Common

### Description
- Maximum of 1024 characters.
- Allowed characters: `a-z`, `A-Z`, `0-9`, `(space)`, `-`, `'`, `.`, `,`, `!`, `?`

### Title
- Minimum of 1 characters.
- Maximum of 128 characters.
- Allowed characters: `a-z`, `A-Z`, `0-9`, `(space)`, `-`, `'`.

### Tag
- Minimum of 3 characters.
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
- Doors can't have the same coordinates as another hex.

### Campaign

- Title and tag have to be valid.
- Must have at least 1 location.
- Must have exactly 1 starting location.
- Must have at least 1 ending location.


## Encounter

### Enemy

- Title and tag have to be valid.
- Health must be greater than 0.
- All actions and effects must be validated.
- Enemy can't have multiple of the same action or base effect.

### Summon

- Title and tag have to be valid.
- Duration must be greater than 0.
- Health must be greater than 0.


## Combat

### Action

- Title and description have to be valid.
- Level requirement must be greater than 0, if it is not null.
- All features must be validated.

#### Movement

- Range must be greater than 0.

#### Skill

- Range must be greater than 0.
    - It can be 0 only if target is `SELF`.
- Area of effect must be greater than or equal to 0.

#### Attack

- Range must be greater than 0.
    - It can be 0 only if target is `SELF`.
- Area of effect must be greater than or equal to 0.
- Damage must not be negative.
- Number of attacks must be greater than 0.

#### Summon Action

- Range must be greater than 0.
- Summon can't have the same action as the one that summoned it.
- Summon itself must be validated.

#### Restore Cards

- Number of cards must be greater than 0 or exactly -1 (infinity).

### Effect

- Description has to be valid.
- Duration must be greater than 0 or exactly -1 (infinity).
- Strength must be positive.
    - It must be null for types `Disarm`, `Root`, `Stun`, `Confusion`, `Guidance` and `Incorporeal`.

