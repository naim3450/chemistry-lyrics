import { useEffect, useState } from "react";

function Test() {
    const chemistrySymbols = {
        h: { symbol: "H", name: "Hydrogen", number: 1 },
        he: { symbol: "He", name: "Helium", number: 2 },
        li: { symbol: "Li", name: "Lithium", number: 3 },
        be: { symbol: "Be", name: "Beryllium", number: 4 },
        b: { symbol: "B", name: "Boron", number: 5 },
        c: { symbol: "C", name: "Carbon", number: 6 },
        n: { symbol: "N", name: "Nitrogen", number: 7 },
        o: { symbol: "O", name: "Oxygen", number: 8 },
        f: { symbol: "F", name: "Fluorine", number: 9 },
        ne: { symbol: "Ne", name: "Neon", number: 10 },
        na: { symbol: "Na", name: "Sodium", number: 11 },
        mg: { symbol: "Mg", name: "Magnesium", number: 12 },
        al: { symbol: "Al", name: "Aluminum", number: 13 },
        si: { symbol: "Si", name: "Silicon", number: 14 },
        p: { symbol: "P", name: "Phosphorus", number: 15 },
        s: { symbol: "S", name: "Sulfur", number: 16 },
        cl: { symbol: "Cl", name: "Chlorine", number: 17 },
        ar: { symbol: "Ar", name: "Argon", number: 18 },
        k: { symbol: "K", name: "Potassium", number: 19 },
        ca: { symbol: "Ca", name: "Calcium", number: 20 },
        sc: { symbol: "Sc", name: "Scandium", number: 21 },
        ti: { symbol: "Ti", name: "Titanium", number: 22 },
        v: { symbol: "V", name: "Vanadium", number: 23 },
        cr: { symbol: "Cr", name: "Chromium", number: 24 },
        mn: { symbol: "Mn", name: "Manganese", number: 25 },
        fe: { symbol: "Fe", name: "Iron", number: 26 },
        co: { symbol: "Co", name: "Cobalt", number: 27 },
        ni: { symbol: "Ni", name: "Nickel", number: 28 },
        cu: { symbol: "Cu", name: "Copper", number: 29 },
        zn: { symbol: "Zn", name: "Zinc", number: 30 },
        ga: { symbol: "Ga", name: "Gallium", number: 31 },
        ge: { symbol: "Ge", name: "Germanium", number: 32 },
        as: { symbol: "As", name: "Arsenic", number: 33 },
        se: { symbol: "Se", name: "Selenium", number: 34 },
        br: { symbol: "Br", name: "Bromine", number: 35 },
        kr: { symbol: "Kr", name: "Krypton", number: 36 },
        rb: { symbol: "Rb", name: "Rubidium", number: 37 },
        sr: { symbol: "Sr", name: "Strontium", number: 38 },
        y: { symbol: "Y", name: "Yttrium", number: 39 },
        zr: { symbol: "Zr", name: "Zirconium", number: 40 },
        nb: { symbol: "Nb", name: "Niobium", number: 41 },
        mo: { symbol: "Mo", name: "Molybdenum", number: 42 },
        tc: { symbol: "Tc", name: "Technetium", number: 43 },
        ru: { symbol: "Ru", name: "Ruthenium", number: 44 },
        rh: { symbol: "Rh", name: "Rhodium", number: 45 },
        pd: { symbol: "Pd", name: "Palladium", number: 46 },
        ag: { symbol: "Ag", name: "Silver", number: 47 },
        cd: { symbol: "Cd", name: "Cadmium", number: 48 },
        in: { symbol: "In", name: "Indium", number: 49 },
        sn: { symbol: "Sn", name: "Tin", number: 50 },
        sb: { symbol: "Sb", name: "Antimony", number: 51 },
        te: { symbol: "Te", name: "Tellurium", number: 52 },
        i: { symbol: "I", name: "Iodine", number: 53 },
        xe: { symbol: "Xe", name: "Xenon", number: 54 },
        cs: { symbol: "Cs", name: "Cesium", number: 55 },
        ba: { symbol: "Ba", name: "Barium", number: 56 },
        la: { symbol: "La", name: "Lanthanum", number: 57 },
        ce: { symbol: "Ce", name: "Cerium", number: 58 },
        pr: { symbol: "Pr", name: "Praseodymium", number: 59 },
        nd: { symbol: "Nd", name: "Neodymium", number: 60 },
        pm: { symbol: "Pm", name: "Promethium", number: 61 },
        sm: { symbol: "Sm", name: "Samarium", number: 62 },
        eu: { symbol: "Eu", name: "Europium", number: 63 },
        gd: { symbol: "Gd", name: "Gadolinium", number: 64 },
        tb: { symbol: "Tb", name: "Terbium", number: 65 },
        dy: { symbol: "Dy", name: "Dysprosium", number: 66 },
        ho: { symbol: "Ho", name: "Holmium", number: 67 },
        er: { symbol: "Er", name: "Erbium", number: 68 },
        tm: { symbol: "Tm", name: "Thulium", number: 69 },
        yb: { symbol: "Yb", name: "Ytterbium", number: 70 },
        lu: { symbol: "Lu", name: "Lutetium", number: 71 },
        hf: { symbol: "Hf", name: "Hafnium", number: 72 },
        ta: { symbol: "Ta", name: "Tantalum", number: 73 },
        w: { symbol: "W", name: "Tungsten", number: 74 },
        re: { symbol: "Re", name: "Rhenium", number: 75 },
        os: { symbol: "Os", name: "Osmium", number: 76 },
        ir: { symbol: "Ir", name: "Iridium", number: 77 },
        pt: { symbol: "Pt", name: "Platinum", number: 78 },
        au: { symbol: "Au", name: "Gold", number: 79 },
        hg: { symbol: "Hg", name: "Mercury", number: 80 },
        tl: { symbol: "Tl", name: "Thallium", number: 81 },
        pb: { symbol: "Pb", name: "Lead", number: 82 },
        bi: { symbol: "Bi", name: "Bismuth", number: 83 },
        po: { symbol: "Po", name: "Polonium", number: 84 },
        at: { symbol: "At", name: "Astatine", number: 85 },
        rn: { symbol: "Rn", name: "Radon", number: 86 },
        fr: { symbol: "Fr", name: "Francium", number: 87 },
        ra: { symbol: "Ra", name: "Radium", number: 88 },
        ac: { symbol: "Ac", name: "Actinium", number: 89 },
        th: { symbol: "Th", name: "Thorium", number: 90 },
        pa: { symbol: "Pa", name: "Protactinium", number: 91 },
        u: { symbol: "U", name: "Uranium", number: 92 },
        np: { symbol: "Np", name: "Neptunium", number: 93 },
        pu: { symbol: "Pu", name: "Plutonium", number: 94 },
        am: { symbol: "Am", name: "Americium", number: 95 },
        cm: { symbol: "Cm", name: "Curium", number: 96 },
        bk: { symbol: "Bk", name: "Berkelium", number: 97 },
        cf: { symbol: "Cf", name: "Californium", number: 98 },
        es: { symbol: "Es", name: "Einsteinium", number: 99 },
        fm: { symbol: "Fm", name: "Fermium", number: 100 },
        md: { symbol: "Md", name: "Mendelevium", number: 101 },
        no: { symbol: "No", name: "Nobelium", number: 102 },
        lr: { symbol: "Lr", name: "Lawrencium", number: 103 },
        rf: { symbol: "Rf", name: "Rutherfordium", number: 104 },
        db: { symbol: "Db", name: "Dubnium", number: 105 },
        sg: { symbol: "Sg", name: "Seaborgium", number: 106 },
        bh: { symbol: "Bh", name: "Bohrium", number: 107 },
        hs: { symbol: "Hs", name: "Hassium", number: 108 },
        mt: { symbol: "Mt", name: "Meitnerium", number: 109 },
        ds: { symbol: "Ds", name: "Darmstadtium", number: 110 },
        rg: { symbol: "Rg", name: "Roentgenium", number: 111 },
        cn: { symbol: "Cn", name: "Copernicium", number: 112 },
        nh: { symbol: "Nh", name: "Nihonium", number: 113 },
        fl: { symbol: "Fl", name: "Flerovium", number: 114 },
        mc: { symbol: "Mc", name: "Moscovium", number: 115 },
        lv: { symbol: "Lv", name: "Livermorium", number: 116 },
        ts: { symbol: "Ts", name: "Tennessine", number: 117 },
        og: { symbol: "Og", name: "Oganesson", number: 118 }
    };

    const mathPhysicsSymbols = {
        a: { symbol: "α", name: "Alpha (α)", number: "Math" },
        d: { symbol: "Δ", name: "Delta (Δ)", number: "Math/Physics" },
        e: { symbol: "ℯ", name: "Euler's Number (ℯ)", number: "Math" },
        g: { symbol: "g", name: "Gravity (g)", number: "Physics" },
        j: { symbol: "J", name: "Joule (J)", number: "Physics" },
        l: { symbol: "ℒ", name: "Angular Momentum (ℒ)", number: "Physics" },
        m: { symbol: "M", name: "Mass (M)", number: "Physics" },
        q: { symbol: "Q", name: "Charge (Q)", number: "Physics" },
        r: { symbol: "ℝ", name: "Real Numbers (ℝ)", number: "Math" },
        t: { symbol: "T", name: "Temperature (T)", number: "Physics" },
        x: { symbol: "X", name: "X-ray (X)", number: "Physics" },
        z: { symbol: "Z", name: "Atomic Number (Z)", number: "Physics" }
    }

    const songLines = [
        "Hazar dorshok mon mojaia",
        "Nache go sundori Komola",
        "Are hazar dorshok mon mojaia",
        "Nache go sundori Komola",
        "Premik purush are Rohim Mia",
        "Rupbane nache komor dulaiya",
        "Rupbane nache komor dulaiya",
        "Are rupbane nache komor dulaiya",
        "Aha rupbane nache komor dulaiya",
        "Akash theke nambe pori",
        "Ruper bahare tar nei ko juri",
        "Aha aha aha aha oi o",
        "Moyurpongkhi ghoray chhore",
        "Asbe rajputro songopone",
        "Pawna de na puron kore",
        "Nachichhe premik mon nachre",
        "Aha aha aha aha oi o",
        "Ashor jure theila jowar othe",
        "Jatrapala aaj moner majhe",
    ];

    let [index, setIndex] = useState(0);
    let [line, setLine] = useState(songLines[index].toLocaleLowerCase());
    // let [line, setLine] = useState("Nache go sundori Komola".toLocaleLowerCase());


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % songLines.length;
                setLine(songLines[newIndex]);
                return newIndex;
            });
            // setLine(songLines[index])
        }, 1 * 300);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    let result = [];


    for (let i = 0; i < line.length;) {
        let twoChar = line.substr(i, 2);
        let oneChar = line[i];

        if (chemistrySymbols.hasOwnProperty(twoChar)) {
            result.push(chemistrySymbols[twoChar]);
            i += 2;
        }
        else if (chemistrySymbols.hasOwnProperty(oneChar)) {
            result.push(chemistrySymbols[oneChar]);
            i += 1;
        }
        else if (mathPhysicsSymbols.hasOwnProperty(oneChar)) {
            result.push(mathPhysicsSymbols[oneChar]);
            i += 1;
        } else {
            // Skip unmatched character
            i += 1;
        }
    }
    return (
        <div className="org">
            <h1>Chemistry Alphabet Grid</h1>
            <div className="gridDiv" id="alphabetGrid">
                {
                    result.map((el, idx) => {
                        return (
                            <div className="element" key={idx}>
                                <div className="number">{el?.number}</div>
                                <div className="symbol">{el?.symbol}</div>
                                <div className="name">{el?.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Test
