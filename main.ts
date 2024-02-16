/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/
let watt:number=0;
let konecna_cena:number=0;
let sekundy:number=0;
type Odber = {
    cas: number, //čas je v sekundách
    spotreba: number //spotřeba ve watech za hodinu
}
const cena: number = 6.70; // Kč / kWh
let data: Array<Odber> = [
    { cas: 600, spotreba: 3500 },
    { cas: 120, spotreba: 0 },
    { cas: 300, spotreba: 1700 }, // data[2].cas
    { cas: 60, spotreba: 0 },
    { cas: 800, spotreba: 1500 },
]

for (const peceme of data){
    console.logValue("čas: ", peceme.cas);
    console.logValue("spotřeba: ", peceme.spotreba);
    console.logValue("spotřebováno: ", peceme.spotreba / 3600 * peceme.cas);
}
for (let i = 0; i < 5; i++) {
    watt += data[i].spotreba
    sekundy += data[i].cas
    watt *= (sekundy/3600)
}
konecna_cena = (watt *= cena)
console.log("konečná cena:")
console.log(konecna_cena)

