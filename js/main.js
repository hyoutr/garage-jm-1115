// メニュー（ドロワー）の開閉
(function () {
  var btn = document.querySelector('.menu-btn');
  var drawer = document.getElementById('drawer');
  if (!btn || !drawer) return;

  function open() {
    drawer.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    var close = drawer.querySelector('.drawer__close');
    if (close) close.focus();
  }

  function close() {
    drawer.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    btn.focus();
  }

  btn.addEventListener('click', open);
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !drawer.hidden) close();
  });
})();
