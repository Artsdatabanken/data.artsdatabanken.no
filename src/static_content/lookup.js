let searchContainer
let searchInput
let resultsDropdown
let resultsList

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementsByClassName('header_padding').item(0).parentElement
    searchInput = document.createElement('input')
    searchInput.placeholder = "Søk..."
    searchInput.id = "search-input"
    searchInput.className = "MuiInputBase-input MuiInput-input css-1x51dt5-MuiInputBase-input-MuiInput-input"

    searchContainer = document.createElement('div')
    searchContainer.className = "search-container"
    header.appendChild(searchContainer)

    searchContainer.appendChild(searchInput)
    resultsDropdown = document.createElement('div')
    resultsDropdown.id = "results-dropdown"
    searchContainer.appendChild(resultsDropdown)
    resultsList = document.createElement('ul')
    resultsDropdown.appendChild(resultsList)

    const runQuery = async () => {
        const query = searchInput.value.trim();
        if (query === this.previousQuery) return
        this.previousQuery = query
        if (query.length > 0) {
            const response = await fetch(`https://lookup.artsdatabanken.no/v1/query?q=${query}`);
            this.results = await response.json();
            this.selectedIndex = 0
            displayResults();
        } else {
            resetSearch()
        }
    }

    searchInput.addEventListener('focus', runQuery)
    searchInput.addEventListener('input', runQuery);
    searchInput.addEventListener('blur', resetSearch);

    searchInput.addEventListener('keydown', e => {
        switch (e.key) {
            case 'ArrowUp':
                e.preventDefault()
                if (this.selectedIndex > 0) {
                    this.selectedIndex = this.selectedIndex - 1;
                    displayResults(this.results);
                }
                break;
            case 'ArrowDown':
                e.preventDefault()
                if (this.selectedIndex < this.results.result.length - 1) {
                    this.selectedIndex = this.selectedIndex + 1;
                    displayResults(this.results);
                }
                break;
            case 'Enter':
                e.preventDefault()
                const item = this.results.result[this.selectedIndex]
                searchInput.value = item.title
                resultsDropdown.style.display = 'none'
                searchContainer.className = "search-container search-container-dropdown-closed"
                window.location = item.url
                break;
        }
    });
})

function displayResults() {
    if (this.results.query !== this.previousQuery) return // stale request
    resultsList.innerHTML = '';
    this.results.result.forEach((result, index) => {
        const logoItem = document.createElement('img');
        logoItem.className = "hit-logo"
        logoItem.src = `https://data.artsdatabanken.no/${result.url}/logo_24.png`

        const listItem = document.createElement('li');
        listItem.textContent = result.title;
       listItem.className = "hit"
        if (index === this.selectedIndex)
            listItem.classList.add("hover-state");
        listItem.addEventListener('click', () => {
            searchInput.value = result.title;
            resultsDropdown.style.display = 'none'; // Hide the dropdown
            searchContainer.className = "search-container search-container-dropdown-closed"
            window.url = result.url
        });

        listItem.addEventListener("mouseover", function () {
            listItem.classList.add("hover-state");
        });

        listItem.addEventListener("mouseout", function () {
            listItem.classList.remove("hover-state");
        });
        listItem.appendChild(logoItem)
        resultsList.appendChild(listItem);
    });
    if (results.result.length <= 0) {
        const listItem = document.createElement('li');
        listItem.id = "no-hits"
        listItem.textContent = `Finner ikke '${this.previousQuery}'`;
        resultsList.appendChild(listItem);
    }

    searchContainer.className = "search-container search-container-dropdown-open"
    resultsDropdown.style.display = 'block'; // Show the dropdown
}

const resetSearch = () => {
    this.previousQuery = ''
    this.results = []
    this.selectedIndex = 0
    searchContainer.className = "search-container search-container-dropdown-closed"
    resultsDropdown.style.display = 'none';
}

// Hide dropdown when clicking outside of it
document.addEventListener('click', (event) => {
    if (!resultsDropdown.contains(event.target) && event.target !== searchInput) {
        resetSearch()
    }
});
