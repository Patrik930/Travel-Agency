# Verziókezelés

- ## Helyi repository létrehozása

- inicializálás:
    >git init

- git felhasználó ellenőrzése:
    >git config user.name
    
    >git config user.email


- ellenőrzés (van-e különbség a munkakönyvtár és a helyi repository között):
    >git status

- előkészítés a commit-ra(beindexelődnek) minden változást eltárolunk:
    >git add .
-ellenőrzés:
>git status

-eltárolja az újabb verziónak:
>git commit -m "First commit"


## Összekapcsolás egy távoli repositoryval

- új GitHub repository

- Helyi repository összekapcsolása a távolival:
> git remote add origin https://token@github.com/Patrik930/Travel-Agency.git

- első push-nál meg kell mondani a branch nevét:
>git push -u origin master











