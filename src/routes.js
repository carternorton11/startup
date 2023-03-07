class Route{
    constructor(name,area,aspect,approach,vert){
        this.name = name;
        this.area = area;
        this.aspect = aspect;
        this.approach = approach;
        this.vert = vert;
        this.id = (Math.round(Math.random() * 10000)).toString();
    }

    getHTML(){
        const newRoute = document.createElement('div');
        newRoute.setAttribute("class", "accordion-item");

        newRoute.innerHTML =
            `
            <h2 class="accordion-header" id="heading${this.id}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}" aria-expanded="true" aria-controls="collapse${this.id}">
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
                                <td>${this.area}</td>
                            </tr>
                            <tr>
                                <td> Aspect </td>
                                <td>${this.aspect}</td>
                            </tr>
                            <tr>
                                <td>Approach</td>
                                <td>${this.approach}</td>
                            </tr>
                            <tr>
                                <td>Vert</td>
                                <td>${this.vert}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <button class="btn btn-primary" href="#" style="right: 0%">edit</button>
                </div>
            </div>
            `
        return newRoute;

    }
}
function testerFunction() {
    const dummyRoute = new Route("Route 1", "Area 1", "Aspect 1", "1 mile", "1000");

    console.log("called test function!");
    const accord = document.getElementById("accordionExample");
    accord.appendChild(dummyRoute.getHTML());
}