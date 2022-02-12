# Remote access via SSH

In praktijk gaan we voor aan een server te werken zelden of nooit fysieke toegang hebben tot onze server. Deze kan zich bevinden in een dataroom verweg in het gebouw of zelfs de andere kant van de wereld. Met dat meeste bedrijven gebruik maken van de cloud is er zelfs weinig bekend waar deze server draait.

Kortom we hebben een veilige manier nodig om onze servers te kunenn configureren en beheren. Uit de lessen netwerken ken je onwaarschijnlijk Telnet en SSH al. In de Linux wereld word er meestal uitsluitend gebruik gemaakt van SSH. SSH heeft vooral zijn populariteit door de goede beveiliging van het protocol. Maar bied ook handige functies aan zoals: versturen van bestanden, doorsturen van netwerkverkeer en meer.

Draai je een server in de cloud dan ga je meestal een SSH login krijgen voor de server verder op te zetten. Dit is ook op onze hosting van onze les VMs het geval.


## Opzetten van SSH

### Installatie

::: warning note
Meeste Linux servers hebben al een SSH server geinstalleerd. Dit is zo het geval voor onze VMs. De volgende instructies zijn ter informatie, of als je op een Ubuntu Desktop SSH wil gebruiken.
:::

We insstalleren onze SSH server via `apt` 
```bash 
apt install openssh-server # Installeer SSH via apt
systemctl status ssh # check de status van ssh
```



Secure Shell (SSH) is een cryptografisch netwerk protocol dat gebruikt wordt om netwerkverkeer op te zetten tussen:
verzender;
ontvanger.
Er zijn een tweetal manieren om een autenticatie op een correcte manier te verzorgen bij SSH:
password based authentication;
public key-based authentication.


## The next generation: MOSH
