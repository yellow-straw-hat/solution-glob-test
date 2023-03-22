La fonction foo() prend en entrée une liste de listes, chacune contenant deux nombres. 

Elle combine les listes qui se chevauchent ou se touchent, en fusionnant les intervalles en un seul intervalle englobant tous les nombres. 

Elle renvoie une liste de listes contenant les intervalles fusionnés.




Pour appeler le programme, utiliser NodeJs:

```
node main.js "3,6" "3,4" "15,20" "16,17" "1,4" "6,10" "3,6" ./foo.js "0,3" "6,10"
```

Output: 
[[1,10],[15,20]]


```
node main.js "0,5" "2,4"
```

Output: 
[[0,5]]
