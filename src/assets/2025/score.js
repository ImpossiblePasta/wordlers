const X="X"
const na="na"

export const keys = {Eve:"Eve", 
    Joey:"Joey", 
    Kath:"Kath", 
    Murphy:"Murphy", 
    Sarah:"Sarah", 
    Till:"Till", 
    Twig:"Twig"}

export const scoreData = [
{ date: new Date(2025, 12, 1), Eve:4,Joey:6,Kath:3,Murphy:2,Sarah:2,Till:3,Twig:4},
{ date: new Date(2025, 12, 2), Eve:4,Joey:5,Kath:4,Murphy:4,Sarah:5,Till:5,Twig:6},
{ date: new Date(2025, 12, 3), Eve:3,Joey:4,Kath:3,Murphy:3,Sarah:3,Till:5,Twig:6},
{ date: new Date(2025, 12, 4), Eve:3,Joey:3,Kath:4,Murphy:3,Sarah:4,Till:5,Twig:4},
{ date: new Date(2025, 12, 5), Eve:4,Joey:5,Kath:3,Murphy:2,Sarah:6,Till:3,Twig:4},
{ date: new Date(2025, 12, 6), Eve:6,Joey:3,Kath:4,Murphy:4,Sarah:4,Till:5,Twig:4},
{ date: new Date(2025, 12, 7), Eve:4,Joey:3,Kath:2,Murphy:2,Sarah:4,Till:4,Twig:5},
{ date: new Date(2025, 12, 8), Eve:4,Joey:5,Kath:3,Murphy:3,Sarah:5,Till:5,Twig:5},
{ date: new Date(2025, 12, 9), Eve:4,Joey:6,Kath:4,Murphy:4,Sarah:4,Till:4,Twig:5},
{ date: new Date(2025, 12, 10), Eve:3,Joey:6,Kath:2,Murphy:4,Sarah:4,Till:5,Twig:5},
{ date: new Date(2025, 12, 11), Eve:3,Joey:4,Kath:5,Murphy:3,Sarah:5,Till:4,Twig:5},
{ date: new Date(2025, 12, 12), Eve:4,Joey:6,Kath:3,Murphy:3,Sarah:5,Till:5,Twig:3},
{ date: new Date(2025, 12, 13), Eve:3,Joey:3,Kath:4,Murphy:3,Sarah:5,Till:4,Twig:4},
{ date: new Date(2025, 12, 14), Eve:4,Joey:3,Kath:3,Murphy:3,Sarah:6,Till:5,Twig:4},
{ date: new Date(2025, 12, 15), Eve:5,Joey:5,Kath:5,Murphy:4,Sarah:5,Till:4,Twig:4},
{ date: new Date(2025, 12, 16), Eve:3,Joey:4,Kath:3,Murphy:3,Sarah:6,Till:5,Twig:4},
{ date: new Date(2025, 12, 17), Eve:4,Joey:6,Kath:4,Murphy:3,Sarah:3,Till:4,Twig:4},
{ date: new Date(2025, 12, 18), Eve:4,Joey:5,Kath:5,Murphy:4,Sarah:X,Till:5,Twig:5},
{ date: new Date(2025, 12, 19), Eve:4,Joey:6,Kath:5,Murphy:4,Sarah:5,Till:5,Twig:2},
{ date: new Date(2025, 12, 20), Eve:5,Joey:5,Kath:3,Murphy:3,Sarah:4,Till:2,Twig:3},
{ date: new Date(2025, 12, 21), Eve:5,Joey:6,Kath:5,Murphy:3,Sarah:4,Till:5,Twig:5},
{ date: new Date(2025, 12, 22), Eve:4,Joey:4,Kath:5,Murphy:3,Sarah:4,Till:5,Twig:5},
{ date: new Date(2025, 12, 23), Eve:4,Joey:3,Kath:3,Murphy:3,Sarah:3,Till:3,Twig:2},
{ date: new Date(2025, 12, 24), Eve:3,Joey:4,Kath:3,Murphy:3,Sarah:3,Till:3,Twig:4},
{ date: new Date(2025, 12, 25), Eve:3,Joey:X,Kath:4,Murphy:3,Sarah:3,Till:3,Twig:4},
{ date: new Date(2025, 12, 26), Eve:2,Joey:5,Kath:4,Murphy:3,Sarah:3,Till:3,Twig:4},
{ date: new Date(2025, 12, 27), Eve:3,Joey:4,Kath:6,Murphy:3,Sarah:2,Till:5,Twig:X},
{ date: new Date(2025, 12, 28), Eve:4,Joey:6,Kath:4,Murphy:X,Sarah:6,Till:X,Twig:4},
{ date: new Date(2025, 12, 29), Eve:1,Joey:5,Kath:4,Murphy:3,Sarah:4,Till:4,Twig:3},
{ date: new Date(2025, 12, 30), Eve:4,Joey:3,Kath:5,Murphy:3,Sarah:4,Till:4,Twig:3},
{ date: new Date(2025, 12, 31), Eve:2,Joey:6,Kath:3,Murphy:3,Sarah:4,Till:4,Twig:3},
];


export const playerData = [
    { name:'Eve', dec1:1, dec2:3, dec3:5, dec4:7, dec5:'na', dec6:0, dec7:'X', dec8:5, dec9:5,
        info: [
            { fact: 'total', value: 100 },
            { fact: 'average', value: 5 },
            { fact: 'missed', value: 2 },
        ]
     },
    { name:'Twig', dec1:1, dec2:3, dec3:5, dec4:7, dec5:'na', dec6:0, dec7:'X', dec8:5, dec9:5,
        info: [
            { fact: 'total', value: 99 },
            { fact: 'average', value: 4 },
            { fact: 'missed', value: 5 },
        ]
     },
];