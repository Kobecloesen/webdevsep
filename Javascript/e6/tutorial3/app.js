const metaInfo = {​​​​
    title:'INTECBRUSSEL',
    courses:{​​​​
        javascript:10,
        java:20,
        csharp:10
    }​​​​,

    contacts:{​​​​
        Bart:"bart@intecbrussel.be",
        Atilla:"atilla@intecbrussel.be"
    }​​​​,
    location:['Rouppeplein','Brussel']

}​​​​



const {title:titel,courses:vakken,contacts:contacten,location:plaats[straat,stad]} = metaInfo;


console.log(contacten)