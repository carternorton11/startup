# Web Servers

### The Internet
<img width="589" alt="Screen Shot 2023-01-17 at 9 33 25 AM" src="https://user-images.githubusercontent.com/99043737/212957135-9da54c7c-bb0d-4111-88e6-0886446f5c31.png">

Domain names are converted to IP address via the Domain Name System (DNS)
'trace route' console utility allows a machine to see how information travels to another IP

Routers direct information to and from specific IP addresses

### Web Servers
Today, most programming languages can interface with HTTP

Gateways are often used to sort incoming HTTP information to different services<img width="612" alt="Screen Shot 2023-01-17 at 9 43 21 AM" src="https://user-images.githubusercontent.com/99043737/212959370-ffe9756f-35dc-4993-9ce9-1ca2cb042641.png">

My public IP address: 3.21.83.52

ssh -i ~/Desktop/AWS_KeyPairs/production.pem  ubuntu@3.21.83.52

the "dig" console utility allows us to see the IP address for any domain name
the "whois" utlity allows us to see registration for domain names

Domain name in browser -> browser checks cache -> DNS server checks cache of names -> authoritative name server checks cache 

TTL: time an IP address for an address is kept before being cleared out of caches
