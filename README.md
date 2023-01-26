# README - Carter Norton & Zach Everton
## Carter's Notes

### Push and Pull
Github allows for easy version/source control across multiple devices and users Visual Studio code has built in tools that interface with Github, allowing you to manage source control of your projects directly from your IDE! To commit edits: simply press "CMD Enter" while highlighting whatever you have changed To push edits: select the source control button on the left side, then enter a update message and click the check mark to send edits through

If you have merge problems when pulling from GitHub, use the built in merge resolver to resolve the conflicting changes.

### Development and Production Environments
Development and Production environments are kept seperate You can run a deployment script from a console window using something like:

'./deploy.sh -k ~/prod.pem -h yourdomain.click -s simon'

The -k parameter provide the credential file necessary to access your production environment. The -h parameter is the domain name of your production environment. The -s parameter represents the name of the application you are deploying (either simon or startup).

Basically, this automatically copies all your files into a new environment and sets them up to run.

### Web Servers

#### The Internet
<img width="589" alt="Screen Shot 2023-01-17 at 9 33 25 AM" src="https://user-images.githubusercontent.com/99043737/212957135-9da54c7c-bb0d-4111-88e6-0886446f5c31.png">

Domain names are converted to IP address via the Domain Name System (DNS)
'trace route' console utility allows a machine to see how information travels to another IP

Routers direct information to and from specific IP addresses

#### Web Servers
Today, most programming languages can interface with HTTP

Gateways are often used to sort incoming HTTP information to different services<img width="612" alt="Screen Shot 2023-01-17 at 9 43 21 AM" src="https://user-images.githubusercontent.com/99043737/212959370-ffe9756f-35dc-4993-9ce9-1ca2cb042641.png">

My public IP address: 3.21.83.52

ssh -i ~/Desktop/AWS_KeyPairs/production.pem  ubuntu@3.21.83.52

the "dig" console utility allows us to see the IP address for any domain name
the "whois" utlity allows us to see registration for domain names

Domain name in browser -> browser checks cache -> DNS server checks cache of names -> authoritative name server checks cache 

TTL: time an IP address for an address is kept before being cleared out of caches


## Tour Pal

My friends and I have often struggled to decide where to go backcountry skiing. With hundreds of options on the Wasatch Front,
we rarely start with the same ideas about where to go, and we have to go through a messy process of explaining our ideas and 
justifying our choice. With TourPal, friends can pick a date to go skiing, and each can nominate locations, entering in key 
information like approach distance, aspect, and vertical feet. An hour of negotiation in a group chat is reduced to a few minutes on TourPal.

<img width="546" alt="Screen Shot 2023-01-12 at 8 17 29 AM" src="https://user-images.githubusercontent.com/99043737/212110064-4e6749bb-4529-4b4d-9760-6db3d5296212.png">

![Test lol](yourTours.png?raw=true "\"Your Tours\" Page")


### Key Features
Secure login with HTTPS <br>
Propose tour dates with a selected group of friends <br>
Nominate locations for a particular tour date <br>
Vote on tour locations,<br>
Save tours to a personal library<br>
Track tours completed and summary statistics (distance, time, and areas skied)<br>
Create bucket list of runs to complete in the future <br>

## Zach Notes

I was informed that we should both be keeping track of "things we learned" in the README. So this space is for the stuff I learn starting now. Notes from before are in my startup repository (deprecated).
