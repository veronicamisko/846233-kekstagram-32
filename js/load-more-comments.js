const COMMENT_SHOW_STEP = 5;

const loadMoreCommentsButton = document.querySelector('.social__comments-loader');
const commentsShowCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');

function addLoadMoreCommentsEvent() {
  loadMoreCommentsButton.addEventListener('click', onLoadMoreCommentsButtonClick);
  if (commentsShowCount.textContent === commentTotalCount.textContent) {
    loadMoreCommentsButton.classList.add('hidden');
    loadMoreCommentsButton.removeEventListener('click', onLoadMoreCommentsButtonClick);
  } else {
    loadMoreCommentsButton.classList.remove('hidden');
  }
}

function onLoadMoreCommentsButtonClick() {
  const hiddenComments = document.querySelectorAll('.social__comment.hidden');
  if (hiddenComments.length <= COMMENT_SHOW_STEP) {
    commentsShowCount.textContent = Number(commentsShowCount.textContent) + hiddenComments.length;
    for (let i = 0; i < hiddenComments.length; i++) {
      hiddenComments[i].classList.remove('hidden');
    }
    loadMoreCommentsButton.classList.add('hidden');
  } else {
    commentsShowCount.textContent = Number(commentsShowCount.textContent) + COMMENT_SHOW_STEP;
    for (let i = 0; i < COMMENT_SHOW_STEP; i++) {
      hiddenComments[i].classList.remove('hidden');
    }
  }
  if (loadMoreCommentsButton.classList.contains('hidden')) {
    loadMoreCommentsButton.removeEventListener('click', onLoadMoreCommentsButtonClick);
  }
}

export { addLoadMoreCommentsEvent, onLoadMoreCommentsButtonClick };
