window.addEventListener('load',() =>{
    const form=document.querySelector("#new-task-form");
    const input=document.querySelector("#new-task-input");
    const input2=document.querySelector("#title");
    const list_el=document.querySelector("#tasks");
    
    form.addEventListener('submit',(e) =>{
        e.preventDefault();

        console.log("Submit Form");

        const title=input2.value;
        const task= input.value;
        if (!task){
            alert("Please fill");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const title_el=document.createElement("div");
        title_el.classList.add("title");
        task_el.appendChild(title_el);

        const title_input_el=document.createElement("input");
        title_input_el.classList.add("title_input");
        title_input_el.type="text";
        title_input_el.value=title;
        title_el.appendChild(title_input_el);

        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);

        const task_input_el= document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);

        const task_action_el=document.createElement("div");
        task_action_el.classList.add("actions");

        const action_el=document.createElement("button");
        action_el.classList.add("delete");
        action_el.innerHTML="X";
        task_action_el.appendChild(action_el);
        task_el.appendChild(task_action_el);

        action_el.addEventListener('click',()=> {
            list_el.removeChild(task_el);
        });
        

        list_el.appendChild(task_el);
    })
})
