
function showPage(id) {
  const pages = document.querySelectorAll('.page');
  const buttons = document.querySelectorAll('button');

  pages.forEach(page => {
    page.classList.remove('active');
  });

  buttons.forEach(btn => btn.classList.remove('active'));

  const selectedPage = document.getElementById(id);
  const selectedBtn = document.getElementById('btn-' + id);

  if (selectedPage) {
    selectedPage.classList.add('active');
  }
  if (selectedBtn) {
    selectedBtn.classList.add('active');
  }
}
