const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("Please enter a task");
    }else{
        const li=document.createElement('li');
        li.classList.add("text-lg", "font-semibold", "flex", "gap-2", "items-center", "cursor-pointer");
        const img=document.createElement('img');
        img.src="./images/uncheck.png";
        img.style.height="20px";
        const task=document.createElement("span");
        task.textContent=inputBox.value;
        task.classList.add("flex-1");
        const delbtn=document.createElement("button");
        delbtn.textContent="X";
        delbtn.classList.add("text-lg", "text-red-500", "font-bold", "hover:text-red-700","mx-4")
        li.appendChild(img)
        li.appendChild(task);
        li.appendChild(delbtn);
        listContainer.appendChild(li);
        li.addEventListener("click", function(event) {
            if(event.target!==delbtn){
                if(img.src.includes("uncheck.png")){
                    img.src="./images/check.webp";
                    img.style.height="28px";
                    task.classList.add("line-through");
                }else{
                    img.src="./images/uncheck.png";
                    img.style.height="20px";
                    task.classList.remove("line-through");
                    
                }
            }
            
        });
        delbtn.addEventListener("click", function(){
            listContainer.removeChild(li);
        });
    }
    inputBox.value="";
}