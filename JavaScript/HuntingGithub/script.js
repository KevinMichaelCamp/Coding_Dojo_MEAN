$(document).ready(() => {
  $('#search-button').click(()=> {
    const input = $('#user-name').first();
    const name = input.val().trim();

    $('.user-content').first().hide();

    input.val('');

    if (name) {
      return search(name);
    }

    displayError('You must provide a username');
  })
})

function search(name) {
  $('#error-section').hide();

  new Promise((resolve, reject) => {
    $.get({
      url: `https://api.github.com/users/${name}`,
      success: resolve,
      error: reject,
    });
  })
  .then(createCard)
  .catch(error => {
    displayError(`Something went wrong, ensure the user you are requesting exists: ${name}`);
    });
  }

function createCard(user) {
  console.log('user ', user);

  const element = `
    <div #id='card' class='card'>
      <img class='img avatar' src="${user.avatar_url}" alt="avatar">
      <p>Login: ${user.login}</p>
      <p>Name: ${user.name || 'N/A'}</p>
      <p>Repos: ${user.public_repos}</p>
      <p>Gists: ${user.public_gists}</p>
    </div>
  `;

  $('.user-content').first().empty().show().append(element);
}

function displayError(message) {
  $('#error-section')
    .empty()
    .show()
    .append(`<p>${message}</p>`);
}
