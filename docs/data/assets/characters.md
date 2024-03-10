# Characters

For now, we only have 4 classes and 4 races, which each character can choose from.

## Classes

- **Mage**: A character with high magic damage and low health.
- **Knight**: A strong and tough character, with high health and damage.
- **Rogue**: A character with high mobility and damage, but low health.
- **Bard**: A character with high support abilities and low damage.

## Races 

- **Human**: Balanced race with no passive effects.
- **Elf**: High initiative and confusion resistance.
- **Dwarf**: Low initiative and poison resistance.
- **Demonkin**: Fire resistance.

## Combination images

Table with combinations:
 
<table id="table" border="1">
  <thead>
    <tr> 
      <th></th>
      <th>Mage</th>
      <th>Rogue</th>
      <th>Knight</th>
      <th>Bard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Demonkin</th>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/demonkin-mage.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/demonkin-rogue.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/demonkin-knight.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/demonkin-bard.png"/></td>
    </tr>
    <tr>
      <th>Human</th>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/human-mage.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/human-rogue.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/human-knight.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/human-bard.png"/></td>
    </tr>
    <tr>
      <th>Dwarf</th>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/dwarf-mage.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/dwarf-rogue.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/dwarf-knight.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/dwarf-bard.png"/></td>
    </tr>
    <tr>
      <th>Elf</th>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/elf-mage.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/elf-rogue.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/elf-knight.png"/></td>
      <td><img class="gallery-image" src="https://api.tts-game.fun/images/characters/elf-bard.png"/></td>
    </tr>
  </tbody>
</table>

<iframe width="0" height="0" src="" onLoad={() => {
  let galleryOverlay = document.createElement('div');
  galleryOverlay.className = 'gallery-overlay';
  galleryOverlay.id = 'gallery-overlay';
  document.body.appendChild(galleryOverlay);

  let image = document.createElement('img');
  image.id = 'full-size-image';
  galleryOverlay.appendChild(image);

  galleryOverlay.addEventListener('click', function() {
    this.style.display = 'none';
    document.body.style.overflow = '';
  });

  let images = document.getElementsByTagName('img');
  console.log(images);

  images = Array.from(images);

  images.forEach(entry => {
    entry.addEventListener('click', function(event) {
      event.preventDefault();

      const overlay = document.getElementById('gallery-overlay');
      const fullSizeImage = document.getElementById('full-size-image');

      fullSizeImage.src = this.src;
      overlay.style.display = 'flex';

      document.body.style.overflow = 'hidden';
    });
  });
}}>
</iframe>