// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function CreateTabs(ele) {
    //create elements
    const tab = document.createElement('div');

    //add class
    tab.classList.add('tab');

    //create text content
    tab.textContent = ele;

    return tab;
}

const topics = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log(response.data)
    //headerContainer.appendChild(CreateHeader());
    response.data.topics.forEach(item => {
        topics.appendChild(CreateTabs(item));
    })
})
.catch(error => {
    console.log('the data ws not return', error)
})
