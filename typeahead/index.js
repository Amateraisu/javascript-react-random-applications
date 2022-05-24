const BASE_URL = "https://www.algoexpert.io/api/fe/glossary-suggestions";


let timeoutID;
const input = document.getElementById('typeahead')


input.addEventListener("input", onTypeChange);


function onTypeChange() {
    // I need to fetch from the URL 
    if (input.value.length === 0) {
        clearSuggestions();
        return;
    }
    clearTimeout(timeoutID);
    timeoutID = setTimeout(fetchAndAppendSuggestions, 500);

}


function fetchAndAppendSuggestions() {
    const url = new URL(BASE_URL);

    url.searchParams.set("text", input.value);
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then(console.log)
}