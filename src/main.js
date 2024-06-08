import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  article: document.querySelector('.article'),
};

const toggleLoader = () => {
  refs.select.classList.toggle('hidden');
  refs.loader.classList.toggle('hidden');
};

// initial
fetchBreeds()
  .then(data => {
    const options = data.map(({ name, id }) => ({ text: name, value: id }));
    options.unshift({ text: 'Select cat breed', value: '', disabled: true });
    selectInstance.setData(options);
  })
  .catch(error => {
    iziToast.error({
      position: 'topCenter',
      message: `Ooops! Something went wrong! Try reload the page!`,
    });
    console.error(error);
  })
  .finally(() => toggleLoader());

const selectChangeHandler = newVal => {
  const [{ value: catID }] = newVal;
  if (!catID) {
    return;
  }

  selectInstance.settings.disabled = true;
  toggleLoader();
  refs.article.classList.add('hidden');
  fetchCatByBreed(catID)
    .then(responce => {
      const [
        {
          url: src,
          breeds: [{ description, name: title, temperament }],
        },
      ] = responce;

      refs.article.innerHTML = contentMarkup({
        src,
        description,
        title,
        temperament,
      });

      refs.article.classList.remove('hidden');
    })
    .catch(error => {
      iziToast.error({
        position: 'topCenter',
        message: `Ooops! Something went wrong! Try reload the page!`,
      });
      console.error(error);
    })
    .finally(() => {
      selectInstance.settings.disabled = false;
      toggleLoader();
    });
};

const selectInstance = new SlimSelect({
  select: refs.select,
  events: {
    afterChange: selectChangeHandler,
  },
});

const contentMarkup = ({ src, title, description, temperament }) => {
  return `
    <img class="article-image" src="${src}" alt="${title}">
    <div class="article-item">
      <h2 class="article-title">${title}</h2>
      <p class="article-description">${description}</p>
      <p class="article-addition">
        <strong>Temperament: </strong>
        ${temperament}
      </p>
    </div>
  `;
};
