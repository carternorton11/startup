# Startup

### Push and Pull
Github allows for easy version/source control across multiple devices and users 
Visual Studio code has built in tools that interface with Github, allowing you to manage source control of your projects directly from your IDE! 
To commit edits: simply press "CMD Enter" while highlighting whatever you have changed 
To push edits: select the source control button on the left side, then enter a update message and click the check mark to send edits through 

If you have merge problems when pulling from GitHub, use the built in merge resolver to resolve the conflicting changes. 

### Development and Production Environments
Development and Production environments are kept seperate 
You can run a deployment script from a console window using something like:

`./deploy.sh -k ~/prod.pem -h yourdomain.click -s simon`
>The -k parameter provide the credential file necessary to access your production environment. The -h parameter is the domain name of your production environment. The -s parameter represents the name of the application you are deploying (either simon or startup).

Basically, this automatically copies all your files into a new environment and sets them up to run.
