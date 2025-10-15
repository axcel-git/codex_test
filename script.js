document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  const closeItem = (item) => {
    const question = item.querySelector('.question');
    const button = question.querySelector('button');
    const answer = item.querySelector('.answer');

    question.classList.remove('open');
    answer.classList.remove('open');
    answer.style.maxHeight = '0px';
    button.setAttribute('aria-expanded', 'false');
  };

  const openItem = (item) => {
    const question = item.querySelector('.question');
    const button = question.querySelector('button');
    const answer = item.querySelector('.answer');

    question.classList.add('open');
    answer.classList.add('open');
    answer.style.maxHeight = `${answer.scrollHeight}px`;
    button.setAttribute('aria-expanded', 'true');
  };

  faqItems.forEach((item, index) => {
    const question = item.querySelector('.question');
    const button = question.querySelector('button');
    const answer = item.querySelector('.answer');
    const answerId = answer.id || `answer-${index}`;

    answer.id = answerId;
    button.setAttribute('aria-controls', answerId);
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', () => {
      const isCurrentlyOpen = question.classList.contains('open');

      faqItems.forEach(closeItem);

      if (!isCurrentlyOpen) {
        openItem(item);
      }
    });
  });

  window.addEventListener('resize', () => {
    faqItems.forEach((item) => {
      const answer = item.querySelector('.answer');
      if (answer.classList.contains('open')) {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
});
