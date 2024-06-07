import styles from './Brands.module.css'

export default function Brands() {
  return (
    <>
    <div className={styles.brand}>
      <h1 className={styles.h1}>Ferrari</h1>
      <img className={styles.img} src='https://www.diariomotor.com/imagenes/2013/05/ferrari-laferrari-vista-frontal-503009-720x445.webp'/>
      <img src='../../../../public/ferrari.svg' alt='ferrariLogo'/>
      <p className={styles.description}>Ferrari, una marca legendaria en el mundo del automovilismo, encarna la pasión por la velocidad, el lujo y la innovación. Desde su fundación en 1939, sus autos han sido sinónimo de rendimiento excepcional y diseño italiano elegante. Con una combinación única de tradición y tecnología de vanguardia, Ferrari continúa siendo un ícono de exclusividad y prestigio, atrayendo a entusiastas de todo el mundo que buscan experimentar la emoción de conducir un verdadero símbolo de excelencia automotriz.</p>
    </div>
    <div className={styles.brand}>
      <h1 className={styles.h1}>Lamborghini</h1>
      <img className={styles.img} src='https://c4.wallpaperflare.com/wallpaper/513/178/347/lamborghini-novitec-torado-black-front-view-wallpaper-preview.jpg'/>
      <img src='../../../../public/lamborghini.svg' alt="lamborghiniLogo" className={styles.lamboLogo}/>
      <p className={styles.description}>Lamborghini, una marca emblemática, destaca por su audacia, innovación y estilo extravagante desde su fundación en 1963. Cada automóvil Lamborghini es una obra maestra de ingeniería y diseño italiano vanguardista, combinando potencia brutal, elegancia exótica y tecnología de vanguardia. Como símbolo de estatus y lujo, los automóviles Lamborghini continúan cautivando a entusiastas de todo el mundo, desafiando los límites de la velocidad y el rendimiento tanto en carreteras como en circuitos.</p>
    </div>
    <div className={styles.brand}>
      <h1 className={styles.h1}>Porsche</h1>
      <img className={styles.img} src='https://hips.hearstapps.com/hmg-prod/images/cur7605-1605140700.jpg?crop=1xw:0.8687258687258688xh;center,top&resize=1200:*'/>
      <img src='../../../../public/porsche.svg' alt="lamborghiniLogo" className={styles.lamboLogo}/>
      <p className={styles.description}>Desde 1931, Porsche representa la excelencia en automóviles deportivos. Con el legendario Porsche 911 como emblema, la marca fusiona precisión alemana con innovación constante. Desde el ágil Cayman hasta el imponente Panamera, cada modelo es una combinación única de rendimiento y diseño. Con avances como el sistema Porsche Traction Management y el primer Taycan completamente eléctrico, Porsche continúa definiendo los estándares de la industria con su compromiso inquebrantable con la calidad y la innovación.</p>
    </div>
    <div className={styles.brand}>
      <h1 className={styles.h1}>Bentley</h1>
      <img className={styles.img} src='../../../../public/bentley.png'/>
      <br/><br/>
      <img src='https://logos.logofury.com/logo_src/1753037680796dda1d680330513ad26b.svg' alt="lamborghiniLogo" className={styles.lamboBentley}/>
      <p className={styles.description}> <br/> Desde su establecimiento en 1919, Bentley ha personificado la elegancia y el lujo en automóviles de alta gama. Con el icónico Bentley Continental GT como insignia, la marca fusiona artesanía británica con tecnología punta. Desde el imponente Bentayga hasta el refinado Flying Spur, cada modelo encarna una síntesis inigualable de potencia y refinamiento. Con innovaciones como el sistema Bentley Dynamic Ride y su incursión en la electrificación con el Bentley Bentayga Hybrid, Bentley sigue definiendo los estándares de excelencia en la industria automotriz, manteniendo un compromiso inquebrantable con la calidad y la innovación.</p>
    </div>
    <div className={styles.brand}>
      <h1 className={styles.h1}>Maserati</h1>
      <img className={styles.img} src='https://i.pinimg.com/736x/9a/cd/9c/9acd9ca240c9c8e872b48e0103da64e3.jpg'/>
      <img src='../../../../public/maserati.svg' alt="lamborghiniLogo" className={styles.maserati}/>
      <p className={styles.description}>Desde su fundación en 1914, Maserati ha encarnado la pasión y el rendimiento en automóviles de lujo. Con el emblemático Maserati Quattroporte como su símbolo, la marca combina el estilo italiano con un rendimiento excepcional. Desde el ágil Maserati Ghibli hasta el potente Levante, cada modelo representa una síntesis única de elegancia y potencia. Con avances como el sistema Maserati Q4 Intelligent All-Wheel Drive y su incursión en la electrificación con el Maserati Ghibli Hybrid, Maserati continúa definiendo los estándares de la industria con su dedicación a la calidad y la innovación.</p>
    </div>
    <div className={styles.brand}>
      <h1 className={styles.h1}>Rolls royce</h1>
      <img className={styles.img} src='https://img.goodfon.com/wallpaper/nbig/e/99/rolls-royce-black-badge-ghost-front-view-car.webp'/>
      <img src='../../../../public/Rolls-royce.svg' alt="lamborghiniLogo" className={styles.rollsRoyce}/>
      <p className={styles.description}> Desde su inicio en 1906, Rolls-Royce personifica el pináculo del lujo y la distinción en el mundo automotriz. Con el legendario Rolls-Royce Phantom como su emblema, la marca fusiona la artesanía británica con la excelencia mecánica. Desde el majestuoso Rolls-Royce Ghost hasta el imponente Cullinan, cada modelo es una expresión única de opulencia y elegancia atemporal. Con innovaciones como el sistema de suspensión activa y la introducción de su primer vehículo completamente eléctrico, Rolls-Royce continúa definiendo los estándares de la industria con su compromiso inquebrantable con la calidad y la innovación.</p>
    </div>
    </>
  )
}
