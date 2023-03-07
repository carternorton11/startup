class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.routes = [];
        this.plans = [];
        this.friends = [];
        this.friendRequests = [];
        this.bio = "Add your bio here";
        this.picture = undefined;
    }
    populateFriends(){
        const friendList = document.getElementById("friendsList");
        let friendString = "";
        for(const friend of this.friends){
            friendString +=
            `<div class = "friend">
                 <h5>
                     ${friend}
                 </h5>
             </div>`
        }
        friendList.innerHTML = friendString;
        const requestList = document.getElementById("requestList");
        let requestString = "";
        for(const friend of this.friendRequests){
            requestString += `
            <div class = "friend">
                <h5>
                    ${friend} <a href="#" class="btn btn-sm btn-primary justify-content-end" onclick = "testUser.addRequest('${friend}')"> Accept</a><a href="#" class="btn btn-sm btn-danger justify-content-end" onclick = "testUser.deleteRequest('${friend}')"> Delete</a>
                </h5>
            </div>`;
        }
        requestList.innerHTML = requestString;
    }
    deleteRequest(requestName){
        this.friendRequests = this.friendRequests.filter(request => request !== requestName);
        this.populateFriends();
    }
    addRequest(requestName){
        this.friends.push(requestName);
        this.friendRequests = this.friendRequests.filter(request => request !== requestName);
        this.populateFriends();
    }
    editBio(){
        const bio = document.getElementById("bioText");
        bio.innerHTML = `
        <textarea id="bioEdit" rows="8" cols="50">${this.bio}</textarea>
        <a href="#" class="btn btn-primary justify-content-end" onclick = "testUser.acceptBio()"> Save </a>
        <a href="#" class="btn btn-danger justify-content-end" onclick = "testUser.refreshBio()"> Cancel </a>
        `;
    }
    acceptBio(){
        const textBox = document.getElementById("bioEdit");
        this.bio = textBox.value;
        this.refreshBio();
    }
    refreshBio(){
        const bio = document.getElementById("bioText");
        bio.innerHTML = `
        <p>${this.bio}</p>
        <a href="#" class="btn btn-primary justify-content-end" onclick = "testUser.editBio()"> Edit </a>
        `
    }
}

let testUser = new User("Zach", "evertonzachary@byu");
testUser.friends = ["Carter", "Ryson", "Braden"];
testUser.friendRequests = ["user1", "Joe", "Sarah"]
testUser.populateFriends();