class Route{
    constructor(name,area,aspect,approach,vert){
        this.name = name;
        this.area = area;
        this.aspect = aspect;
        this.approach = approach;
        this.vert = vert;
    }
}

class Plan{
    constructor(name, date, participants, routes){
        this.name = name;
        console.log(name)
        this.date = date;
        this.participants = participants;
        this.routes = routes;
//        for(route of routes){
//            route.votes = 0;
//        }
    }
    addParticipant(participant){
         this.participants.push(participant);
    }
    addRoute(route){
        this.routes.push(route);
    }
    leaveTour(participant){
        let index = this.participants.indexOf(participant);
        this.participants.splice(index, 1);
    }
    getHTML(){
        //making accordion item
        const newPlan = document.createElement('div');
        newPlan.setAttribute("class","accordion-item");
        //making accordion header
        const newPlanHeader = document.createElement('h2');
        newPlanHeader.setAttribute("class", "accordion-header");
        newPlanHeader.setAttribute("id", this.name);
        newPlan.appendChild(newPlanHeader);
        const newPlanButton = document.createElement('button');
        newPlanButton.setAttribute("class","accordion-button");
        newPlanButton.setAttribute("type","button");
        newPlanButton.setAttribute("data-bs-toggle","collapse");
        newPlanButton.setAttribute("data-bs-target", "#collapse"+this.name);
        newPlanButton.setAttribute("aria-expanded","true");
        newPlanButton.setAttribute("aria-controls","collapse"+this.name);
        let namesText = "";
        for(name of this.participants){
           namesText += name;
           namesText += ", ";
        }
        namesText= namesText.substring(0, namesText.length - 2);
        newPlanButton.textContent = this.date + "     |    " + namesText;
        newPlanHeader.appendChild(newPlanButton);
        const newPlanCollapse = document.createElement('div');
        newPlanCollapse.setAttribute("class", "accordion-collapse collapse show");
        newPlanCollapse.setAttribute("id", "collapse"+this.name);
        newPlanCollapse.setAttribute("aria-labelledby", this.name);
        newPlanCollapse.setAttribute("data-bs-parent","#accordionExample");
        newPlan.appendChild(newPlanCollapse);
        const newPlanBody = document.createElement('div');
        newPlanBody.setAttribute("class", "accordion-body");
        newPlanCollapse.appendChild(newPlanBody);
        const newPlanTDiv = document.createElement('div');
        newPlanTDiv.setAttribute("class","table-responsive");
        newPlanBody.appendChild(newPlanTDiv);
        //making table
        const newPlanTable = document.createElement("table");
        newPlanTable.setAttribute("class", "table");
        newPlanTDiv.appendChild(newPlanTable);
        //making table header
        const newPlanTableHeader = document.createElement("thead");
        newPlanTableHeader.setAttribute("class","table-light");
        newPlanTable.appendChild(newPlanTableHeader);

        //Fill in header with items from routes
        const headerRow = document.createElement("tr");
        for (item in this.routes[0]){
            const columnText = document.createElement("td");
            columnText.textContent = item;
            headerRow.appendChild(columnText);
        }
        newPlanTableHeader.appendChild(headerRow);

        //create table body
        const newPlanTableBody = document.createElement("tbody");
        newPlanTable.appendChild(newPlanTableBody);
        //Loop for filling table body
        for (route of routes){
            const row = document.createElement("tr");
            for(item of route){
                const text = document.createElement("td");
                text.textContent = item;
                row.appendChild(text);
            }
            newPlanTableBody.appendChild(row);
        }
        //create buttons for the end of the accordion
        const button1 = document.createElement("a");
        button1.setAttribute("class", "btn btn-primary");
        button1.textContent = "Add Friends";
        newPlanBody.appendChild(button1);

        const button2 = document.createElement("a");
        button2.setAttribute("class", "btn btn-danger");
        button2.textContent = "Leave Tour";
        newPlanBody.appendChild(button2);
        return newPlan;
    }
}


function testerFunction(){
    dummyRoute = new Route("Route 1", "Area 1", "Aspect 1", "1 mile", "1000");
    dummyRoutes = [dummyRoute];
    dummyPlan = new Plan("Plan 1", "1/1/00", ["Jimmy", "John", "Jason"],dummyRoutes);

    console.log("called test function!");
    accord = document.getElementById("accordionExample");
    accord.appendChild(dummyPlan.getHTML());
}

