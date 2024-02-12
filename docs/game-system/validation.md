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
- If location is a market, validate all market items.

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
- The action and all effects must be validated.

### Obstacle

- Title, tag and description have to be valid.
- BaseDamage must be greater than or equal to 0.
    - If it is not crossable, it must be 0.
- BaseHealth must be greater than 0 or -1 (invincible).
- All effects must be validated.

## Mechanics

### Action

- Title and description have to be valid.
- Level requirement must be greater than 0, if it is not null.
- All features must be validated.

#### Movement

- Range must be greater than 0.
- All effects must be validated.

#### Skill

- Range must be greater than 0.
    - It can be 0 only if target is `SELF`.
- Area of effect must be greater than or equal to 0.
- All effects must be validated.

#### Attack

- Range must be greater than 0.
    - It can be 0 only if target is `SELF`.
- Area of effect must be greater than or equal to 0.
- Damage must not be negative.
- Number of attacks must be greater than 0.
- All effects must be validated.

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

## Items

### Item

- Title, tag and description have to be valid.
- Action has to be validated, if it is not null.
- All effects must be validated.
<!--- Figure out requirements validation -->

### Inventory

- Amount must be between 1 and 10.
- Item must be validated.

### Market

- Price must be positive.
- Amount must be positive.
- Item must be validated.

## Characters

### Class

- Title, tag and description have to be valid.
- BaseHealth must be greater than 0.
- BaseDefence must be greater than or equal to 0.
- BaseInitiative must be greater than 0.
<!--- Figure out base initiative -->
- All actions and effects must be validated.

### Race

- Title, tag and description have to be valid.
- BaseInitiative must be greater than 0.
<!--- Figure out base initiative -->
- All actions and effects must be validated.

### Character

- Title and playerName have to be valid using Title standards.
- Race and class must be validated.
- All items must be validated.
- Character must have at most 1 of each item type (they can have 2 consumables).

### Adventure 

- Title and description have to be valid.
- Reputation must be between -100 and 100.
- Experience must be positive.
- Gold must be positive.
- Level must be greater than 0.
- All characters must be validated.