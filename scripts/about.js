const aboutArticles = page.querySelectorAll('.about__article');
aboutArticles.forEach(article => console.log(article.children))
window.addEventListener('scroll', showTextAnimation);

function showTextAnimation() {
  const triggerLine = window.innerHeight / 7 * 6;
  aboutArticles.forEach(article => {
    const articleTop = article.getBoundingClientRect().top;

    if (triggerLine > articleTop) {
      article.children[0].classList.add('fade-in-right');
      article.children[1].classList.add('fade-in-left');

    } else {
      article.children[0].classList.remove('fade-in-right');
      article.children[1].classList.remove('fade-in-left');
    };
  })
}
