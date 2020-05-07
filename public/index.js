import "./style.css"

function search() {
    const query = document.getElementById('search_query').value;

    if (query.length < 1) {
        alert('Error: Requires atleast 1 or more characters');
        return;
    }

    const requestUrl = `https://api.jikan.moe/v3/search/anime?q=${query}&nolimit`;
    document.getElementById('search_query_url').innerHTML = '( ^ _ ^ )';
    // document.getElementById('search_query_url').href = 'javascript:void(null)';
    

    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('search_query_url').innerHTML = requestUrl;
        document.getElementById('search_query_url').href = requestUrl;

        let node = document.getElementById('search_results');
        while (node.firstChild) {node.removeChild(node.firstChild);}

        data.results.forEach(item => {
            document.getElementById('search_results')
            .insertAdjacentHTML(
                'beforeend',
                `
                <a href="${item.url}" class="card">
                    <div><span class="name">${item.title}</span></div>
                    <div><img class="image" src="${item.image_url}" /></div>
                    <div><span class="score">Score : ${item.score}</span></div>
                </a>
                `
            );
        });
    });
}

document.getElementById('search').onclick = () => search();
document.getElementById('search_query').onkeydown = (event) => {
    if (event.keyCode === 13) {
        search();
    }
};

class FooNime extends HTMLElement {
    connectedCallback(){
      this.render();}
  
  render() {
      this.innerHTML = `<a class="footer">Design by Al-Hikni</a>`;}
  }
  customElements.define("foo-nime", FooNime);

  const img = new Image(215,60);
  let div = document.getElementById('logo');
      img.onload = function() {
      div.appendChild(img);
};
  img.src= './logo.png';

    function setFavicons(favImg){
        let headTitle = document.querySelector('head');
        let setFavicon = document.createElement('link');
            setFavicon.setAttribute('rel','shortcut icon');
            setFavicon.setAttribute('href',favImg);
            headTitle.appendChild(setFavicon);
        }
    
        setFavicons('./fav.png');
  

