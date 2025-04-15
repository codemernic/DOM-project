//Define the UI 

const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const Filter = document.querySelector("#search")

// console.log(form);
// console.log(taskInput);
// console.log(taskList);
// console.log(clearBtn);
// console.log(search);

//Event - action on something

function LoadEventListeners(){
    form.addEventListener("submit", addTask)
    clearBtn.addEventListener("click",clearTask)
    taskList.addEventListener("click", removeTask)
    Filter.addEventListener("keyup", filterTask)
}
LoadEventListeners();

function addTask(e){
    //It will stop refresh behaver whenever we click // very important
    e.preventDefault()
    
    //Validatation

    if (taskInput.value ===""){
        alert("Please fill the fields");
    }else{
        
        // Create element
        const li = document.createElement("li")
        // console.log(li);
        
        // Adding className for Li

        li.className="collection-items"

        // Adding innerText

        li.innerText= taskInput.value

        console.log(li);

        // Creating <a> tag

        const link= document.createElement("a")
        link.className="delete-item secondary-content"
        //adding icon
        link.innerHTML=`<i class="fa fa-remove"></i>`
        console.log(link);

        //Appending the child

        li.appendChild(link)

        //Adding li to Ul

        taskList.appendChild(li)

        taskInput.value="" // It will prevent to add recurring value 

        console.log(taskList);
    }
    
}
//RemoveTask

// Method-1
// function removeTask(event){
//     if(event.target.parentElement.className==="delete-item secondary-content"){
//         if(confirm("Are you sure")){
//             event.target.parentElement.parentElement.remove()
//      }
        
//     } // target will provide the whom I will clicking 
//     // i - tag will be displayed after clicked
// }

//Method-2
//Using the classslist - DomTokenList -Method

function removeTask(event){
    if(event.target.parentElement.classList.contains("delete-item")){
        // console.log("true"); //Testing purpose
        
        event.target.parentElement.parentElement.remove()
    }
}
//ClearTask
function clearTask(){
    
    // taskList.innerText=""
    // console.log(taskInput.children)

    //Converting to array
    const listItem =Array.from(taskList.children)

    //I will remove one by one

    listItem.forEach(function(element){
        element.remove()
    })
    console.log(listItem);
    
    
}

//Filter

function filterTask(e){
    // console.log(e.target); // It will only give the input so we can ask the value
    console.log(e.target.value);

    //Convert this to lowercase so even user types in upper the result will match
    const value = e.target.value.toLowerCase();
    console.log(value);

    //Using IndexOf method 

    document.querySelectorAll(".collection-items").forEach(function(e){
        const item = e.firstChild.textContent
            console.log(item);      
    })
    
    

    
}

//|event delegation
//Lots of elements but handle one by one 

// Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.
// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
// In the handler we get event.target to see where the event actually happened and handle it.


// --------------------------

// Small example of indexof method

// const name =["balaji","prethi","shanthi"]
// console.log(name.indexOf("shanthi")); 

// If the value is present in the array than it will provide the index value. if not then the value gonna be a -1

//Example of include method

// console.log(name.includes('shanth'));

// if the value is present in the array then i will provide the true else false will be provided


// different btween indexof and include

// ✅ Summary:

// Use includes() when you only care about whether the value exists.

// Use indexOf() if you need the position or index of the value.

// ⚡ Example with NaN:

// let arr = [NaN];
// console.log(arr.includes(NaN));   // true ✅
// console.log(arr.indexOf(NaN));    // -1 ❌


/*
=========================
Difference: includes() vs indexOf()
=========================

1️⃣ includes()
- Purpose: Checks if an element exists in an Array or String.
- Returns: true / false.
- Syntax: array.includes(value) or string.includes(value)
- Clean and easy for condition checks.
- Can detect NaN.
- Introduced in ES6.

Example:
let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana"));  // true

2️⃣ indexOf()
- Purpose: Finds the index of an element in an Array or String.
- Returns: index (>=0) or -1 if not found.
- Syntax: array.indexOf(value) or string.indexOf(value)
- Useful when you need position.
- Cannot detect NaN (returns -1).
- Introduced in ES5.

Example:
let fruits = ["apple", "banana", "mango"];
console.log(fruits.indexOf("banana"));  // 1

=========================
💡 Quick Tip:
Use includes() for YES/NO checks.
// Use indexOf() when you need the

*/

// e and firstchild and textcontent explaination

// 1️⃣ e.firstChild
// e is a single DOM element (each .collection-items).

// .firstChild grabs the first child node inside that element.

// ⚠️ Important: firstChild can be any node — text, element, comment, etc. Not just HTML tags!

// 2️⃣ .textContent
// After grabbing the child node, .textContent reads the text inside that node.

// If the first child is a Text Node (like plain text, not an HTML tag), it will print the text.

// If it's an element node, .textContent still gives the text inside that element.

