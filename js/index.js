
//create resources
const resources = [
    {
        heading: "Solution 1", 
        path: "../images/s1.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis turpis eu gravida ultricies. Vestibulum vitae lectus ut libero porta suscipit. Nullam semper tincidunt ullamcorper. Proin diam nibh, sollicitudin id nisl ut, aliquet blandit eros. Fusce bibendum quis leo a porttitor. Sed et elit id enim efficitur interdum. Aliquam viverra rutrum nisl, ac dictum nibh faucibus eget. Vivamus vitae dolor elit. Curabitur sollicitudin viverra ipsum vel gravida. Etiam sit amet varius ligula. Quisque laoreet ullamcorper tortor et consequat. Maecenas imperdiet turpis cursus, commod."
    },
    {
        heading: "Solution 2",
        path: "../images/s2.jpg",
        body: "Integer id massa interdum, interdum augue vitae, efficitur risus. Etiam eu interdum felis. Etiam et sagittis sem. Etiam placerat feugiat nibh, bibendum tincidunt diam luctus eget. Suspendisse potenti. Suspendisse lacus dui, elementum vel malesuada sed, egestas a lorem. Mauris lacinia vel ipsum et tincidunt. In blandit, lorem ut rhoncus hendrerit, risus eros luctus nunc, sed porttitor turpis ante eu elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a posuere lectus. Vestibulum et justo non magna posuere malesuada eget et mauris. Etiam convallis interdum feugiat. Nunc a lacus ullamcorper, congue lorem sit amet, tempor eros. Nunc suscipit odio at magna hendrerit viverra. Maecenas et volutpat neque, at faucibus turpis."
    },
    {
        heading: "Solution 3",
        path: "../images/s3.jpg",
        body: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eleifend mauris id tincidunt lobortis. Donec imperdiet ex nec semper porta. Nunc a suscipit enim. Vestibulum id lacus hendrerit, lacinia massa ac, mattis mi. Proin fringilla dui faucibus, viverra est sed, porttitor libero. Nunc aliquet nunc enim, id hendrerit nisi auctor ac. Aenean vitae vulputate tellus."
    }
];

/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    /*console.log("content loader works");*/
    let eventTarget = ev.target.textContent;
    console.log(eventTarget.textContent);

    if (eventTarget === "1") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].heading}</h2>
                                    <img src="${resources[0].path}">
                                    <p>${resources[0].body}</p>
                                    </article>` ;
    } else if (eventTarget === "2") {
        currentContent.innerHTML = `<h2>${resources[1].heading}</h2>
                                    <img src="${resources[1].path}">
                                    <p>${resources[1].body}</p>
                                    </article>`;
    } else {
        currentContent.innerHTML = `<h2>${resources[2].heading}</h2>
                                    <img src="${resources[2].path}">
                                    <p>${resources[2].body}</p>
                                    </article>`;
    }

     // MOVE "ACTIVE" ID TO CURRENT BUTTON

    for (let btn of btns) {
        if (btn.id) {
            btn.removeAttribute("id");
            
            }
    }
    ev.currentTarget.id = "active";
    
}


/* REGISTERING EVENT CONTENT */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);