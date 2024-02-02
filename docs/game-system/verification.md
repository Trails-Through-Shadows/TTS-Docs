# Verification

## Hex

- The sum of all coordinates (q, r, s) must be 0.

## Part

- Minimum of 5 hexes.
- Maximum 50 hexes.
- Every hex has to be validated.
- It must be maximum of 8 hexes wide in every direction.
- No hexes can overlap.
- The center hex (0, 0, 0) must be present.
- All hexes must be connected. 

## Location

- Enemy can't be placed on the same hex as another enemy.
- Obstacle can't be placed on the same hex as another obstacle.
- Obstacle can't be placed on the same hex as an enemy.

## Campaign

- Must have at least 1 location.
- Must have exactly 1 starting location.
- Must have at least 1 ending location.

## Enemy

- Health must be greater than 0.
- Name must be shorter than 45 characters and can't be empty.
- Name must be unique.
- Name must be alphanumeric, including `-` `'`.
- Enemy can't have multiple of the same action or base effect.