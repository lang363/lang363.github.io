(function() {
  'use strict';

  if (!window.location.pathname.includes('tag.html')) return;

  function handleTagClick(event) {
    const button = event.target.closest('button.Label');
    if (!button) return;

    document.querySelectorAll('button.Label').forEach(btn => {
      btn.style.setProperty('padding', '4px', 'important');
    });
    button.style.setProperty('padding', '0', 'important');
  }

  const tagContainer = document.getElementById('taglabel');
  if (tagContainer) {
    tagContainer.addEventListener('click', handleTagClick);
  }

  function activateTagByHash() {
    const currentHash = decodeURIComponent(window.location.hash.substring(1));
    const allTags = document.querySelectorAll('button.Label');
    
    allTags.forEach(btn => {
      btn.style.setProperty('padding', '4px', 'important');
    });

    if (!currentHash) {
      const allBtn = Array.from(allTags).find(btn => 
        btn.textContent.trim().toLowerCase().startsWith('all')
      );
      if (allBtn) allBtn.style.setProperty('padding', '0', 'important');
      return;
    }

    const activeTag = Array.from(allTags).find(btn => 
      btn.textContent.trim().includes(currentHash.trim())
    );
    if (activeTag) activeTag.style.setProperty('padding', '0', 'important');
  }

  setTimeout(activateTagByHash, 1000);
  window.addEventListener('hashchange', activateTagByHash);
})();


