// Lookup kontroll for søk
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'lookup.css';
document.head.appendChild(link);

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
            hideDropdown()
        }
    }

    searchInput.addEventListener('focus', runQuery)
    searchInput.addEventListener('input', runQuery)
    searchInput.addEventListener('blur', hideDropdown)

    // Focus lookup if user starts typing
    document.addEventListener('keydown', function (event) {
        console.log(event.key)
        const isCharacterOrNumber = (event.key.length === 1);
        if (isCharacterOrNumber && (document.activeElement !== searchInput))
            searchInput.focus();
    });

    // Hide dropdown when clicking outside it
    document.addEventListener('click', (event) => {
        if (!resultsDropdown.contains(event.target) && event.target !== searchInput) {
            hideDropdown()
        }
    });

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
        const text = highlightMatch(result.title, this.previousQuery)
        listItem.appendChild(div('text', text))
        if (result.kode) {
            const kode = highlightMatch(filterKode(result.kode), this.previousQuery)
            listItem.appendChild(div('kode', kode))
        }
        listItem.title = result.title
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

const hideDropdown = () => {
    this.previousQuery = ''
    this.results = []
    this.selectedIndex = 0
    searchContainer.className = "search-container search-container-dropdown-closed"
    resultsDropdown.style.display = 'none';
}

const element = (elementType, className) => {
    const el = document.createElement(elementType)
    if (className) el.className = className
    return el
}

const div = (className, child) => {
    const div = element('div', className)
    child && div.appendChild(child)
    return div
}

const span = (text) => {
    const el = element('span', null)
    el.textContent = text
    return el
}

// Marker treff i substring i søketreff
function highlightMatch(text, query) {
    if (!query) return span(text);
    const q = query.toLowerCase().split(" ")[0];
    const offset = text.toLowerCase().indexOf(q);
    if (offset < 0) return span(text);

    const end = offset + q.length;
    const el = element('span', 'textnomatch')
    el.appendChild(span(text.substring(0, offset)))
    const hilight = element('span', 'textmatch')
    hilight.appendChild(span(text.substring(offset, end)))
    el.appendChild(hilight)
    el.appendChild(span(text.substring(end, text.length)))
    return el
}

// Fjerner en del prefix på koder, eks. NN-NA-T1 => NA-T1
function filterKode(kode) {
    const prefix = kode.substring(0, 2);
    switch (prefix) {
        case "AR":
        case "AO":
        case "VV":
            return "";
        default:
            return kode.substring(3);
    }
}


