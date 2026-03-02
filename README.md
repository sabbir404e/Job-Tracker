1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll are given below:

(i) getElementById() :  Selects one element by id and also returns single element.

(ii) getElementsByClassName() : Selects elements by class and also returns HTMLcollection.

(iii) querySelector() : Selects first matching CSS selector.

(iv) querySelectorAll() : Selects all matching CSS selectors and returns nodelist.



2️. Create and insert new element into DOM given below

Step 1: create element
Step 2: add content
Step 3: append to parent

example: const div = document.createElement("div");
         div.innerText = "SABBIR";
         document.body.appendChild(div);



3. Event Bubbling means event starts from the target element then  moves upward to parent to grandparent to document.

 example: when we click button inside div then Button event to div event to Body event.

 

4. Event Delegation means instead of adding event to many children, we add one event listener to the parent easily.

example: parent.addEventListener("click", function(event){

});

Useful:  Less memory, Works for dynamic elements, Cleaner code.



5. Difference between preventDefault() and stopPropagation()

preventDefault(): Stops default browser behavior. 
example: stop form submit or stop link redirect.

stopPropagation(): Stops event bubbling upward. 
One stops browser action and one stops event flow.
