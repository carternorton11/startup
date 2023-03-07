class Route{
    constructor(name,area,aspect,approach,vert){
        this.name = name;
        this.area = area;
        this.aspect = aspect;
        this.approach = approach;
        this.vert = vert;
    }
}

class Plan {
    constructor(name, date, participants, routes) {
        this.name = name;
        console.log(name)
        this.date = date;
        this.participants = participants;
        this.routes = routes;
        this.id = (Math.round(Math.random() * 10000)).toString();
        for(const route of routes){
           route.votes = 0;
       }
    }

    addParticipant(participant) {
        this.participants.push(participant);
    }

    addRoute(route) {
        this.routes.push(route);
    }

    leaveTour(participant) {
        let index = this.participants.indexOf(participant);
        this.participants.splice(index, 1);
    }

    getHTML() {
        //making accordion item
        const newPlan = document.createElement('div');
        newPlan.setAttribute("class", "accordion-item");

        //Create array of rows
        let tableRows = ``;
        for(const route of this.routes){
            const newRow =
                `<tr>
                        <td>${route.name}</td>
                        <td>${route.area}</td>
                        <td>${route.aspect}</td>
                        <td>${route.approach}</td>
                        <td>${route.vert}</td>
                        <td>
                            <input class="form-check-input" type="checkbox" value=""id="flexCheckDefault"> ${route.votes}
                        </td>
                 </tr>`;
            tableRows += (newRow);
        }
        //making accordion header
        newPlan.innerHTML = ` 
            <h2 class="accordion-header" id="heading${this.id}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}" aria-expanded="true" aria-controls="collapse${this.id}">
                    ${this.date}     | ${this.participants.reduce((all, next) => all + ", " + next)}
                </button>
            </h2>
            <div id="collapse${this.id}" class="accordion-collapse collapse show" aria-labelledby="heading${this.id}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="table-responsive">
                        <table class = "table">
                        <thead class = "table-light">
                        <tr>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Aspect</th>
                            <th>Approach</th>
                            <th>Vert</th>
                            <th>Votes</th>
                        </tr>
                        </thead>
                        <tbody>
                        ${tableRows}
                        </tbody>
                    </table>
                    </div>
                    <a href="#" class="btn btn-primary" style="justify-content: right"> Add Friends</a>
                    <a href="#" class="btn btn-danger" style="justify-content: right"> Leave Tour</a>
                </div>
            </div>`;
        return newPlan;

    }

    function
}
    function testerFunction() {
        const dummyRoute = new Route("Route 1", "Area 1", "Aspect 1", "1 mile", "1000");
        const dummyRoutes = [dummyRoute, dummyRoute];
        const dummyPlan = new Plan("Plan 1", "1/1/00", ["Jimmy", "John", "Jason"], dummyRoutes);

        console.log("called test function!");
        const accord = document.getElementById("accordionExample");
        accord.appendChild(dummyPlan.getHTML());
    }

