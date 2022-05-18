class Leagues {
  constructor(comment, like) {
    this.comment = comment;
    this.like = like;
  }

leagueData = [];

BaseUrl = 'https://api-football-standings.azharimm.site/leagues';

externalBaseUrl = '';

getLeagues=(data) => {
  const contentBody = document.querySelector('.content-body');
  contentBody.innerHTML = data.map((el) => `<div class="content-card">
    <div class="card-img-wrapper"><img src=${el.logos.light} alt="logo"/></div>
    <div class="card-description"><h4>${el.name}</h4><span class="card-likes"><i class="fa-regular fa-heart"></i><small>5 likes</small></span></div>
    <button class="comment-button" id="${el.id}">Comments</button>
    </div>
`).join('');
}

fetchLeague = () => {
  fetch(this.BaseUrl).then((res) => res.json())
    .then((data) => this.getLeagues(data.data.slice(0, 6)));
}
}

export default Leagues;
