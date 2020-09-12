import React from 'react'

interface Props {}

function About(props: Props) {
    const {} = props

    return (
       <div className="About">
           <div className="container">
                <p>„AUDIO PIRTIS” – tai lietuviškos pirties patirtis garsais. Pirtys - kupinos unikalių garsų, kurie persipina su
                nuoširdžiomis žmonių emocijomis. Projekto autorės Karolina Latvytė-Bibiano ir Judita Ragauskaitė,
                siekdamos įamažinti šiuos patyrimus, kartu su vietos pirtininkais įrašė būtent mūsų, lietuviškai pirčiai
                būdingas ceremonijas. Šiuos garsus menininkės sudėjo į šešis audio takelius, kuriais keliaudami galite
                atrasti tikrąją lietuviškos pirties dvasią. Projektas yra <a href="https://magiccarpets.eu">magiccarpets.eu</a> ir <a href="https://bienale.lt/2021/">kaunasbiennal</a> dalis.</p>
                <p>Dėkojame: Giedriui Bučiui, Astai Bučienei, Ilonai Latvei ir visiems pirties bičiuliams, kurie prisidėjo prie
                projekto.</p>
                <p>Partneriai: „Kaunas 3022”, „Ten kur gera”</p>
            </div>
       </div> 
    )
}

export default About;