# Enemies

There are not that many enemies in the game, but they are all unique and have their own abilities.

## Images

<div id="enemydata"></div>
<iframe width="0" height="0" src="" onLoad={() => {
  let enemydata = document.getElementById('enemydata');
  let contents = document.getElementsByClassName('table-of-contents').item(0);

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

  fetch('https://api.tts-game.fun/enemies').then(response => response.json()).then(data => {
    let entries = data.entries;
    entries.forEach(entry => {
      let enemy = document.createElement('h2');
      enemy.id = entry.tag;
      enemy.className = 'anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module';
      enemy.innerHTML = `${entry.title}<a href="#${entry.tag}" class="hash-link"></a>`;
      enemydata.appendChild(enemy);

      let enemyImage = document.createElement('img');
      enemyImage.src = entry.url;
      enemyImage.className = 'gallery-image';
      enemyImage.style = 'width: 50%; margin-bottom: 2em;';
      enemydata.appendChild(enemyImage);

      enemyImage.addEventListener('click', function(event) {
        event.preventDefault();

        const overlay = document.getElementById('gallery-overlay');
        const fullSizeImage = document.getElementById('full-size-image');

        fullSizeImage.src = this.src;
        overlay.style.display = 'flex';

        document.body.style.overflow = 'hidden';
      });

      let contentLink = document.createElement('li');
      contentLink.innerHTML = `<a href="#${entry.tag}" class="table-of-contents__link toc-highlight">${entry.title}</a>`;
      contents.appendChild(contentLink);
    });
  });

  contents.childNodes[0].remove();
  document.getElementById('images').remove();
}}>
</iframe>
