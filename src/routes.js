
routes = {};
class Route{
    constructor(name,area,aspect,approach,vert){
        this.name = name;
        this.area = area;
        this.aspect = aspect;
        this.approach = approach;
        this.vert = vert;
        this.id = (Math.round(Math.random() * 10000)).toString();

        routes[this.id] = this;
    }

    getHTML(){
        const newRoute = document.createElement('div');
        newRoute.setAttribute("class", "accordion-item");

        newRoute.innerHTML =
            `
            <h2 class="accordion-header" id="heading${this.id}">
                <button id = "${this.id}headingButton" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}" aria-expanded="true" aria-controls="collapse${this.id}">
                    ${this.name}
                </button>
            </h2>
            <div id="collapse${this.id}" class="accordion-collapse collapse show" aria-labelledby="heading${this.id}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="table-responsive">
                        <table class = "table">
                            <tbody>
                            <tr>
                                <td>Area</td>
                                <td id = "${this.id}area">${this.area}</td>
                            </tr>
                            <tr>
                                <td> Aspect </td>
                                <td id = "${this.id}aspect">${this.aspect}</td>
                            </tr>
                            <tr>
                                <td>Approach</td>
                                <td id = "${this.id}approach">${this.approach}</td>
                            </tr>
                            <tr>
                                <td>Vert</td>
                                <td id = "${this.id}vert">${this.vert}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id = "${this.id}editSpace">
                        <button class="btn btn-primary" href="#" style="right: 0%" onclick="editRoute(${this.id})">edit</button>
                    </div>
                </div>
            </div>
            `
        return newRoute;

    }
}
function createNew() {
    const dummyRoute = new Route("", "", "", "", "");
    const accord = document.getElementById("accordionExample");
    accord.appendChild(dummyRoute.getHTML());
    editRoute(dummyRoute.id);
}

function editRoute(id){

    let editSpace = document.getElementById(id + "editSpace");
    let headingButton = document.getElementById(id + "headingButton");
    let areaTD = document.getElementById(id + "area");
    let aspectTD = document.getElementById(id + "aspect");
    let approachTD = document.getElementById(id + "approach");
    let vertTD = document.getElementById(id + "vert");

    //Access the prior information

    areaTD.innerHTML =
        `
        <input type="text" id = "${id}areaEdit" value = "${routes[id].area}">
        `;
    aspectTD.innerHTML =
        `
        <input type="text" id = "${id}aspectEdit" value = "${routes[id].aspect}">
        `;
    approachTD.innerHTML =
        `
        <input type="text" id = "${id}approachEdit" value = "${routes[id].approach}">
        `;
    vertTD.innerHTML =
        `
        <input type="text" id = "${id}vertEdit" value = "${routes[id].vert}">
        `;

    editSpace.innerHTML=
        `
         <button class="btn btn-danger" style="right: 0%" onclick = "cancelEdit(${id})">cancel</button>
         <button class="btn btn-primary" style="right: 0%" onclick = "saveEdit(${id})">save</button>
        `;
    headingButton.innerHTML=
        `
        <input type="text" id = "${id}nameEdit" value = "${routes[id].name}">
        `
}

function cancelEdit(id){
    route = routes[id];

    let editSpace = document.getElementById(id + "editSpace");
    let headingButton = document.getElementById(id + "headingButton");
    let areaTD = document.getElementById(id + "area");
    let aspectTD = document.getElementById(id + "aspect");
    let approachTD = document.getElementById(id + "approach");
    let vertTD = document.getElementById(id + "vert");

    //reset information

    areaTD.innerHTML = `${route.area}`;
    headingButton.innerHTML = `${route.name}`;
    aspectTD.innerHTML = `${route.aspect}`;
    approachTD.innerHTML = `${route.approach}`;
    vertTD.innerHTML = `${route.vert}`;

    editSpace.innerHTML =
        `
         <button class="btn btn-primary" href="#" style="right: 0%" onclick="editRoute(${id})">edit</button>
        `

}

function saveEdit(id){
    route = routes[id];

    let areaTD = document.getElementById(id + "areaEdit");
    let aspectTD = document.getElementById(id + "aspectEdit");
    let approachTD = document.getElementById(id + "approachEdit");
    let vertTD = document.getElementById(id + "vertEdit");
    let headingButton = document.getElementById(id + "nameEdit");

    //update route info
    route.area = areaTD.value;
    route.aspect = aspectTD.value;
    route.approach = approachTD.value;
    route.vert = vertTD.value;
    route.name = headingButton.value;

    routes[id] = route;

    cancelEdit(id);

}

