var clicks = 0
let colores = ['#323764', '#8c3d65', '#73c29a'];
let textos = ['La Iris camina por el pastito de la plaza y ve: una mujer descalza porque no tiene nada para ponerse en los pies, percudidos los pies, sucia la mujer: pobre la Iris se saca las alpargatitas, se pone al sol y piensa en la Vitamina D, piensa en la Irma, piensa en la Cristal, y levanta los pies los pone arriba del banco, dice: siempre hay dos maneras de estar descalza.', 
'Cuando la Doris escuchó el disparo, salió afuera. Salió a mirar qué había pasado. Adentro estaba la Irma y afuera no había sido. La Cristal dice que los portazos, si una los da, tiene que darlos desde adentro. La Iris no dice nada. La abraza. Se acuerdan de la Consuelo y de su perra Chicha. Las cuidaba en las navidades. ¿Por dónde le entra la bala a la Doris? ¿Y a la Cristal? Pobre la Irma.',
'Y la Cristal es algo más que la Cristal, razón por la cual no puede existir. Los que la vieron están enloquecidos por una visión que carece de significado. Por eso, en su sensatez, la Irma se rodea de cosas muertas y piensa en el pasado cuando estaban vivas, se movían y tenían ser. La Irma de curiosa vive en una estación de ferrocarril abandonada y mira películas de cuando los trenes pasaban. ¡Qué viva!', 'Cuando a la Irma le falta el aire, la Iris compra spray. Le compra spray de eucalipto y menta, mezcla de aceites, la Irma suspira y dice no. Que se lo ponga en la almohada o sobre el pañuelo, que despeja y refresca. La Irma dice no. Dice hay dos formas de pedir aire: la frescura, el oxígeno por asfixia.', 'La Cristal tiene siempre una pregunta más, la hace siempre cuando se está yendo. Eso a la Irma la exaspera. La acompaña al podólogo y, a último momento, una consulta más. La preguntita. Como si algunas cosas sólo pudiera preguntarlas yéndose. Y así con la ginecóloga, el cardiólogo y el servicio del teléfono celular. Dice que gracias a eso se salvó la vida, porque cuando se iba le dijo al médico “ah, doctor, puede ser que tenga un bultito acá?”. Después cuando la Irma murió y se encargó la Iris, La Cristal miraba. Y cuando se iban, dio la vuelta de siempre, estuvo a punto la Cristal se volvió y estuvo a punto, pero esos movimientos ya no eran de la vida. No había pregunta.',
'La Irma dice te sentaste conmigo a la mesa e hiciste relaciones de palabras sin mi consentimiento y esas palabras hablaban de mí, ponían en duda una Cristal una Doris, es violento incluso que las hayas puesto sobre la mesa, algunas palabras no me gusta que otras las convoquen si van a hablar de mí, por qué debería ser clara sobre cosas que no son claras de por sí, para mí las palabras que vienen a pararse sobre la mesa y pedir claridad cuando la claridad es mentira son violentas, toda tu violencia sentada con brillo frente a mí si no es clara ¿no es real una Cristal? si apenas puedo recordar su nombre pero puedo sentir el tacto nunca fuiste clara, pero voy a agarrarme de la mano de la claridad de tu no como la cosa más hermosa del mundo y deberías tenerme miedo vos y tu madre y tu salto hacia atrás, hablé desde la locura porque me indagaste y alguna vez vi que en el centro de mi miedo hay algo obvio: que todas morimos solas no hay ni Irma ni Iris, ni Doris ni Cristal',
'La Iris y la Irma esperan en la fila del baño de un restaurant. Justo antes de ellas, discute la Mimí con otra que no conocen. Piensan será la novia. Algo en el aire se vuelve chicle: una fila que no avanza, palabras que se van olvidando una atrás de la otra, como si no terminaran de discutir, como si no llegaran a discutir del todo. Hasta que la Mimí le da a la otra una cachetada fuerte y las despierta a todas. La violencia es una mierda, pero a tu cerebro le encanta. La violencia es una mierda pero a tu cerebro le encanta.',
'Cuando la Doris vio el cadáver vio que la Irma no estaba más. Una Irma que andaba siempre de acá para allá y que en los últimos días, se quedaba paradita, aunque no daba más, como si no quisiera recostarse, más bien seguir bien firme y de pie. Cuando la Doris vio, pensó cadáver, cadáver… pero no se acordaba a qué era que se entragaba la carne. Y prefirió no pensar más. Agarró el tejido y dio veinticinco vueltas de una sola vez.',
'La Irma ve pasar a un hombre sobre una carreta que arrastra un caballo. La mirada perdida del hombre, la Irma ve. Cuando llega a la esquina frena, pasa un auto, la mirada del hombre continúa mirando quién sabe qué, nada de este mundo, la Irma piensa, y al caballo que frena nadie lo ve, salvo la Irma, y dice: dos maneras de estar perdida, porque al caballo ese no lo conduce nadie y si embargo va, pobre animal.',
'Se pasean gráciles, acompasadas, como si su tarea fuese sostener, por encima del hueso nasal, sus lentes negros de carey. Como si se iniciara un desfile, a veces, la Doris y la Iris se dirigen al mar, con paso majestuoso. Después la Cristal se detiene y se queda quieta, pensando. La Doris mira: la Iris, la Irma, muy a menudo, están inmóviles. Cuando vuelve a mirar, unos instantes más tarde, están más cerca del agua, una vez más, completamente inmóviles.',
'Suelen sentarse juntas en la arena, pero a veces, se echan en sus lonas, una lejos de la otra, separadas por lo que ocuparía la Irma si se acostara paralela al mar, en lugar de observarlo. La Cristal y la Iris salen del agua y quedan en la orilla, quietas. Pasan unos minutos y rodeando sus cuatro piernas se forma un canal. Quietas unos minutos más y las piernas se hunden. Quietas se acerca la Irma y mira. La Cristal dice “estás más alta”. Las tres en fila miran.', 
'Entonces, la Doris aparece del agua. Puede pararse junto a la Cristal o junto a la Irma. Se queda al lado de la Irma, porque le queda cerca, aunque quizás preferiría estar del lado de la Cristal.  La Cristal saca una pierna. Después la otra. Y se va. Desde atrás mira lo que las otras están haciendo. Cualquiera de las cuatro, si quisiera, podría mirar lo que las otras tres hacen.',
'A veces van en grupo al mar. La Irma es más corajuda y se adelanta, se sumerge de forma inmediata. La Doris no. Se queda y siente cómo la línea del agua enfría con cada paso unos centímetros más del cuerpo. Los brazos levantados son casi lo último que se moja. La Iris se pone de costado cuando la ola viene. De un lado el espigón, del otro, la ciudad que por una curva se deja ver completa. Lenta, pero avanza. La mira a la Doris.',
'La Cristal solo avanza cuando ve que la Iris avanza. Se fijan una en la otra, salvo la Irma, que va sin mirar a nadie hasta donde no hace pie. Y así, guiándose una por otra, avanzan hacia lo que tienen frente a ellas.   Puede ocurrir que la Irma avance y llegue a un promontorio, quedando por encima de las otras. En ese caso, las otras pasan a estar en un pozo y desesperan, mueven los brazos en señal de alarma hasta que las rescatan.', 
' Les gusta lamer la sal que les queda en el cuerpo. Y les gusta que las laman. La Doris lame el brazo de la Cristal y la Cristal se lame su propia mano. Se alimentan del agua salitrosa que sana las heridas y no daña.   Y si no hay, no comen. Porque no tienen. Porque nadie les preguntó cómo iban a arreglárselas la una sin las otras. Y si suena el silbato, las cuatro miran al mar y se cruzan de brazos, atentas. ',
'Como cuando después de cada ola gigante sienten primero un golpe y después un profundo silencio.  Se nubla de repente y se llena de alguaciles. La gente se va. Paradas en círculo enfrentan cada uno de los cuatro puntos cardinales, dicen el viento no viene de acá, hasta que una dice: pasa, se la traga el mar.',
'La Olga cuenta en la mesa que la última vez que se metió al mar fue con ellas y que ha vuelto a meterse hoy, que también las ve. Eso fue hace más de quince años, dice. Estábamos en la playa, era pleno mediodía y el mar estaba calmo. Nos metimos bien hondo. La Iris, la Irma, la Cristal y la Doris cuentan: cuántas veces se habrán metido al mar cada una desde ese día hasta hoy. ¿Mil? ¿Diez mil? ¿Noventa mil? Pero ellas también se acuerdan. La Olga dice que hablaban y eran cuatro cabezas fuera del agua, más la suya, se movían así: y se mueve como si fuera el movimiento de la ola. La Irma le dice: sí.',
'La gente se va. Paradas en círculo enfrentan cada uno de los cuatro puntos cardinales, dicen el viento viene de acá, de acá, de acá, dan la espalda al desastre, se toman de la mano. Bailan. Sienten el agua helada en la nuca, y un poco más atrás también.  Vuelven caminando, se fueron por la orilla hasta pasados los acantilados. No conocen la zona y si el agua crece no pueden volver. Después de la tormenta no hay nadie en las playas.  La Cristal se queda un poco atrás, las deja que avancen. Entonces frena, hace pis en la orilla y el chorro hace en la arena un agujerito perfecto, como el de una almeja.', 
'Cuando la Irma murió llamaron a los hombres para llevar el cajón y de una sola vez ocurrió –quiero decir que ocurrió al mismo tiempo– que no había ningún hombre y que las otras tres dieron un paso unánime y lo agarraron: no necesitaron demasiada fuerza ni equilibrio, cualquiera que estuviese allí hubiese jurado que la propia Irma llevaba el cajón del vértice que le correspondía, acostumbradas como estaban a llevar las cosas las cuatro, en ningún momento una de ellas pensó en tomar el cajón por delante, como si formaran un triángulo, más bien dejó que el cajón rengueara, y algo de eso hubo de ahí en más en cada momento de sus vidas, algo como de llevarse a sí mismas a la muerte sería fácil decir, pero hubo algunos desvíos, como llevarse a casa, llevarse a tomar el té una con la otra o con la otra y ya no más con la otra, llevarse bien, darse algún gusto de estar vivas. Y si parte del trabajo tuvieron que dejarlo hacer, porque ellas no estaban dispuestas a enterrar a nadie, fue doloroso escuchar “es tanto”, pero se pagó y se dijo: yo ya existía había que pagar por eso, yo ya existía había que pagar por eso, yo ya existía había que pagar por eso, y se dijo la cantidad de veces que fue necesario y ninguna más.',
'Por vos la Iris me desprendo ahora de todas mis mejores palabras, que han sido para mí como una casa. Y de aquí en adelante serás llamada en mi lugar la Iris, la tantas veces grande, la que no dice la palabra a tiempo, pero acerca el gesto, toma del brazo a monstruos asustados, no teme a sus palabras desencadenadas, no tiene aliados, pero canta, y cuando está por llegar el que ya siempre ha llegado, canta. Abraza y baila: quizás en las palabras que no dice encuentre una violencia tranquila, un arrebato, algo del mundo a su favor.  Quizás: algo del mundo.',
'Esa tarde, en la merienda, la Doris agarró una masita con la mano izquierda y con la otra mano la partió en dos. La Irma, agarró una masita con la mano derecha y con la otra mano la partió en dos. La coordinación de sus movimientos fue tan precisa que no parecían la Doris y la Irma sentadas la una enfrente de la otra, sino un artificio de espejos. Ese espectáculo que la Doris y la Irma concibieron en el momento en que les llegó la consciencia de ser iguales, comenzó a repetirse cada vez que aparecía la Cristal. Sólo que la Cristal no lo advertía, ella estaba tan ajena a todo que ni se fijaba en la Doris ni en la Irma. La Iris era la única que lo notaba y entonces, en mitad de la merienda, se les sentaba en frente y las miraba a la cara con el único fin de desbaratar la escena.',
'Y ahí la Cristal se enfrenta a la Iris abierta y habla: ¿tanta asquerosidad tenemos en el cuerpo? Y se hace necesario devolverle a la Cristal la vida, reconciliarla con el cuerpo de ella, con el de la Cristal y con lo que tiene dentro, o al ras, con sus protuberancias y anfructuosidades, con sus hedores y colgajos, su descomposición, su pequeña excrecencia. Y eso supone dar por tierra con toda palabra mágica que la aleje del cuerpo de sí misma, traerla a sí. Y así es como la Cristal abre una grieta en su rostro, se deja atravesar desde dentro de sí.', 
'Ahora hay un hombre y dice “la vida pende de un hilo del corazón”. Y la Doris siente que le va a costar mucho morirse porque su corazón es fuerte, muy fuerte. Ella siente que todo ya se ha muerto alrededor, pero sigue pendiendo del hilo del corazón. Porque la Doris es toda corazón. Como una nena adulta siempre. Siempre nena, siempre adulta. Su corazón sigue fuerte, cree que les da sangre a las otras. Nos morimos todas, dice, porque su corazón es la vía de la vida del mundo. Y sigue de pie, porque si se acuesta muere, y un poco quiere llevarse a las otras consigo. Pero una voz le dice se puede morir parada y acompañada “aunque es difícil encontrar compañía si se sabe lo que va a pasar”.',
'La Irma, la Doris, la Cristal y la Iris son mujeres difíciles: se divierten trastornándolo todo, rompen cualquier límite, no poseen humildad. Creen ser mejores que las que las rodean y se abandonan a su juego absurdo de cambiar de lugar. Incluso la figura del comodín les teme porque en su juego vive, mientras que ellas han perdido el lugar de ese juego y no pueden consagrarse sino al deterioro y la rivalidad.', 
'Ser la Iris y la Irma a la vez, con la eficacia de máscaras equívocas, gestos de simulación. Y así exorcizar todo lo que asedia y reclama esencia y privilegio. La Iris es amable y transgresora a la vez. La Irma tiene la levedad tortuosa de quien ni mira atrás, está en las palabras que dice y no en las que dijo antes. En este sentido, la Iris, la Irma son presente absoluto, pequeñas liendres apegadas a la línea en que están, y a ninguna otra.',
'¿Puede la Irma estar en un lugar y la Cristal en otro? Claro que sí. Podría hacerse una lista. Poner uno debajo del otro los lugares donde ha estado la Irma y no, claro que la Cristal no ha estado allí. La otra opción, a la inversa, es más difícil de ver. Pensar en el cuerpo de la Cristal solo, abandonado, sin conciencia de sí, da algo de terror. Sólo es posible verla desde afuera. Entre medio de mucha gente, por ejemplo. Gente que quiere cambiarse de lugar, que avanza, retrocede. De pie, ella es el lugar exacto por donde se abren los pasillos entre la gente amontonada. No es necesario pedir permiso, no hay ningún secreto, sencillamente hay espacio ahí. O también otras veces, la Cristal sola posa para la foto, sonríe, pero en el revelado no hay más que espacio y luz, algún paisaje radiante en primavera. Es la prueba de que los rayos pueden atravesar un cuerpo o un bloque de hormigón y mostrar cualquier cosa que esté por detrás. Sólo la Cristal es modelo de esas fotos: sus piernas y sus brazos no aparecen porque los rayos van más allá. Y no hay truco ni maravilla, sencillamente está en otro lado. La Cristal sólo puede registrar su cuerpo cuando no está allí.',
'Las pequeñas Doris son hijas de las Irmas. Estas últimas las depositan sobre las superficies claras, y allí permanecen hasta que eclosionan. Pueden estar vivas o vacías. Es importante saber diferenciar su estado. Las Doris ya eclosionadas pueden ser evidencia de una Doris pasada. Las vivas se abrazan a lo que las rodea. Las muertas ya han colapsado hacia dentro y han empujado forzosamente las paredes hasta desmoronarlas.',
'Situación entre dos de ellas –generalmente la Irma y la Cristal. Se miran una a la otra y esperan cada una que la otra diga hacer algo que las dos desean, pero ninguna de las dos está verdaderamente dispuesta. Así cada una está esperando que la otra se decida a hacer algo que sólo sería posible hacer las dos. No dicen nada.',
'La Iris sueña que está tomando algo con la Cristal. Es de noche y de repente desde los edificios la gente se asoma, para avisar que se tienen que ir. Todo el mundo se apura, se levantan rápido y empiezan a caminar hacia el mar, por una avenida. Es una procesión. No se sabe si es que huyen de algo o es que en la playa hay una fiesta. Vos estás ahí. Y te vas. La fiesta tiene la forma de un campo abierto en que se multiplican muchos conejos. A esta fiesta no necesita invitarte nadie, sencillamente estás. Pero a la vez tampoco hay nadie. Y cuando querés bailar me tomás de la mano. La fiesta continúa, sí, aunque ahí afuera alguien quema a una mujer. Y alguien más viene a ponerle palabras. A decir lo que hubiera dicho si. ¿Seguro? ¿Seguro que no es mejor dejar que no diga nada? Respetar ahora su silencio, como seguramente no debe haber sido respetado antes. Y la obligamos a hablar. Y a decir. Y a que se acomode a lo que queríamos. No estoy segura de qué es peor. Es una duda, me lo pregunto. En todo caso, bienvenidx. Esta fiesta se llama no has sido señalada, no has sido nombrada, no estás. No puede entrar cualquiera, como a las otras fiestas. Igual. Te felicito por estar. A algunos lugares se entra solo con mucho atropello. Por eso estás.',
'Un día la Iris se anima a tirar las cenizas de la Irma al mar. Se sienta en la escollera, va con la Cristal. No me parece que hayan sido cenizas –dice– de hecho parecían escombros –dice– tranquilamente en el cementerio podrían darte otra cosa en su lugar. La escollera no es un lugar cómodo, ni un lugar fácil para arrojar-desde. Nunca las cosas son como las imagino –dice. Tarda y da mil vueltas. Se siente incómoda. Porque a la Cristal se le ocurre decirle que a esto hace ya un tiempo lo han prohibido. Dice si fueras una asesina ya estarías muerta. Y dice también: a la Irma me la imagino en esta situación muriéndose de risa. Y eso a la Iris le gusta. Porque no puede imaginarse nada. Como un pedazo de mundo donde no hay elaboración. Como una formación rocosa. Y cuando ve esos escombros, la escollera, piensa: todas las palabras deberían ser iguales, o empezar igual que escombros, parecerse un poco a restos. Siente que todo es material puro y duro o a lo sumo alguna modulación, esa conciencia, ahora, como algo que resalta entre las cosas, como una ilusión óptica, y de seguro es algo que solo puedo pensar visualmente, y que adivina tiene que ver con la teoría de conjuntos o con una figura que se forma frente a un fondo y pasa a otro nivel. La Irma no está acá –dice– y escribe su nombre entre las rocas, justo en el lugar en el que la dejó. Le sirve de punto de referencia. A veces puede ocurrir que esté así: el mar crecido y la Irma debajo del agua, en territorio nacional. Pero también sucede que el mar baja y la Irma está otra vez en su jurisdicción. La Iris se ríe: si quiero hablo de la Irma y si quiero la declaro de interés municipal.',
'Entre los elementos repartidos entre las amigas de la Doris cuando la encerraron, figuraban: varios objetos de plata, una sortija de oro esmaltado con un diamante, un crucifijo con su pedestal, sillas, un baúl antiguo, dos juegos de sábanas de seda, tinajas de aceitunas, una cruz grande y negra, varias botellas de vino, un escritorio de madera, apuntes, cinco canarios con sus jaulas, un frasco de mermelada con flores de papaver nudicaule, un diario. La Irma no quiso conservar nada excepto las fotos; incluso las paredes de su habitación fueron derrumbadas unas pocas semanas después de su encierro, y quemados el resto de sus elementos.',
'Pero en la otra habitación estaban las cosas que no podrían repartir nunca, las tiene ahora la Cristal consigo: “penes de tiburón monstruosamente pequeños, ratas intersexuales con pezones inesperados, gaviotas verdes lesbianas conviviendo con juguetes identificados como hechos en China, que en cualquier momento podrían descomponerse y hacer circular plomo en el torrente sanguíneo de niños pequeños”. Los guarda bajo llave. Como guardaba la Doris las notas de sus experimentos. Hay personas que representan un peligro tan grande que precisan estar confinadas. Es difícil para la Iris, para la Irma recorrer su casa sabiendo que en pocos días la derrumbarán.',
'Cuando a la Doris le apareció el teratoma, la Irma se despachó con un discurso sobre los teratomas: que se asociaban en la antigüedad al castigo divino. Podían surgir por el canibalismo o por adulterio con el demonio, decía la Irma y se regocijaba en haber encontrado algo que cuadraba tan bien con la Doris, pero que le podría haber tocado también a la Iris o incluso a la Cristal. A la Doris le costaba creer que la Irma le estuviera haciendo esto. La Doris con ese pequeño monstruo en su interior, hecho de pelos, dientes, hueso, quizás hasta de órganos más complejos como manos, pies, o un corazón. Se acuerda que en el campo le contaban de las piedras bezoar en el estómago de las vacas, y de sus propiedades curativas. Y está segura o cree por lo menos que podría asegurar no haber comido nunca carne humana a pesar del hambre. Lo que sí reconoce y es lo que le duele: haber tenido, sí, con el demonio algún trato carnal.',
'Un perro sigue a la Doris, se le mete en la casa y no quiere salir. La Irma tiene que ayudarla. La Doris va a comprar y cuando quiere entrar, detrás de la puerta hay un nenito que la mira y no la deja pasar. Si la Doris empuja, el nenito se cae. Hace señas, golpea, pero nadie oye. Dice la Irma: esas señales las tenés que interpretar. Un día a ella se le aparecían todo el tiempo escaleras. Escaleras acá, escaleras allá, escalera cuando iba a lo de la Iris, escalera en la iglesia una escalera que sostiene la virgen, escalera real. La Doris hace fuerza y dice ¿qué son el perro y el nenito que se me meten en el camino? Son el perro y el nenito con los que no sé hablar y necesito que se cambien de lugar. Angelitos, dice la Irma. Después dice que con todo hay que aprender a hablar. La Doris va y le juega a la quiniela.',
'Gracias a la Irma, la Doris puede comprender la lengua de la Cristal. Una de las cualidades de la Irma es la de ser traductora. Según la Irma, todo el mundo no es otra cosa sino una traducción de la lengua divina a la lengua de ellas. Por eso todo para ella es una continua revelación. Y lo que no quiere ver lo decide también ella. Porque su punto ciego es suyo. Y así decide lo que se ve y lo que no se ve. Otra cualidad de la Irma es que tiene una visión muy profunda, reconoce a los ángeles, que tienen formas humanas o de otros animales. Los hace hablar. Dice la mayoría son serafines perversos que se vuelven parásitos, difíciles de sacar de su lugar.',
'La Irma dice ese ángel se parece a vos, dice tengo que aprender a hablar con todo. Hasta con los peces que hablan otra lengua más porque no tienen párpados. Una vez fueron las cuatro al cine para mujeres sin párpados. Era difícil de ver. La Irma decía hay un montón de historias de las que nos protegen los párpados. La Irma dice a menudo me gustaría tomarte una foto ahora, con una cara en particular, justo ahora que voy a decapitarte y crecerás dos veces, y cuatro, y ',
'Y así la Doris, la Cristal y la Iris se invitan a cenar, se abrazan, se retroalimentan. Ninguna de las tres es más importante que la otra, porque lo cierto es que ninguna vive sin las otras. Y a veces se encabritan y va una en detrimento de las demás, por cosas más grandes que ellas, o porque no pueden tomar el mismo rumbo. Pero cuando se encuentran frente a esa situación respiran y cuentan hasta tres, parece que están de pie de nuevo y entonces aparece la Irma, que había quedado afuera y multiplica un malestar infinito.',
'La Iris tiene un sueño. Una mujer, en una pulpería, canta. Va y viene de una mesa a la otra, de acá para allá. Es de día, pero se hace de noche de un momento a otro. La mujer habla y tiene voz ronca, distinta de cuando estaba cantando. Ahora toma una copa de vino. Otra vez canta y suena muy diferente. Van pasando distintos escenarios –una perfumería, el campo abierto, una caballeriza, una escuela, el patio de la casa de una abuela que nunca conoció–, pero la mujer siempre elige el mismo lugar donde pararse y cantar. No podría decir por qué, ni cuál es ese lugar, pero la Iris sabe que es el mismo. De repente aparecen tres caballos. La mujer los sigue, está montada en uno, cabalgan de noche en un campo abierto, que no es más escenario, es la oscuridad. Van los tres caballos solos y va la Iris, con otro más. Porque es ella la que cabalga, está segura ahora, puede verse la cara casi, si se acerca un poco más.',
'Habla la Doris, la Irma la interrumpe. La Cristal habla y la interrumpe la Iris. Habla la Doris, la Irma la interrumpe. La Iris habla y la interrumpe la Cristal. Habla la Doris, la Cristal la interrumpe. La Irma habla y la interrumpe la Iris. Habla la Doris, la Cristal la interrumpe. La Iris habla y la interrumpe la Irma. Habla la Doris, la Iris la interrumpe. La Irma habla y la interrumpe la Cristal. Habla la Doris, la Iris la interrumpe. La Cristal habla y la interrumpe la Irma. Habla la Irma, la Doris la interrumpe. La Cristal habla y la interrumpe la Iris. Habla la Irma, la Doris la interrumpe. La Iris habla y la interrumpe la Cristal. Habla la Irma, la Cristal la interrumpe. La Doris habla y la interrumpe la Iris. Habla la Irma, la Cristal la interrumpe. La Iris habla y la interrumpe la Doris. Habla la Irma, la Iris la interrumpe. La Doris habla y la interrumpe la Cristal. Habla la Irma, la Iris la interrumpe. La Cristal habla y la interrumpe la Doris. Habla la Cristal, la Doris la interrumpe. La Irma habla y la interrumpe la Iris. Habla la Cristal, la Doris la interrumpe. La Iris habla y la interrumpe la Irma. Habla la Cristal, la Irma la interrumpe. La Doris habla y la interrumpe la Iris. Habla la Cristal, la Irma la interrumpe. La Iris habla y la interrumpe la Doris. Habla la Cristal, la Iris la interrumpe. La Doris habla y la interrumpe la Irma. Habla la Cristal, la Iris la interrumpe. La Irma habla y la interrumpe la Doris. Habla la Iris, la Doris la interrumpe. La Irma habla y la interrumpe la Cristal. Habla la Iris, la Doris la interrumpe. La Cristal habla y la interrumpe la Irma. Habla la Iris, la Irma la interrumpe. La Doris habla y la interrumpe la Cristal. Habla la Iris, la Irma la interrumpe. La Cristal habla y la interrumpe la Doris. Habla la Iris, la Cristal la interrumpe. La Doris habla y la interrumpe la Irma. Habla la Iris, la Cristal la interrumpe. La Irma habla y la interrumpe la Doris.',
'La Doris tiene un sexto sentido, una intuición. Cuando le viene se pone circunspecta y grave. Ella sabe cuando le viene, pero se lo reserva con dignidad y misterio. Y las demás, la tratan con respeto. La Irma, porque sabe que puede hacerle un daño. La Cristal, porque cuenta con su palabra. Le viene la intuición y no le queda más que seguirle el rastro, va como sin mirar, guiada por algo que no son sus ojos. Está guiada por algo que para las otras es imperceptible. Anda de casa en casa, pasa por lo de la Iris y ni la saluda, ni frena en los semáforos, hasta que da con lo que viene a buscar ¡Es este! dice, e inmediatamente queda encerrada, es la evidencia misma de que esos rastros la malconducen, la mala entraña que deparan, para qué negarla.',
'Hay una fila de Irmas, Iris, Cristales y Doris, son varias, una al lado de la otra. Pueden estar en tres estados: alegre, triste, indiferente. Representamos esta situación como una lista que en cada posición tiene un 0 (alegre), un 1 (triste) y un -1 (indiferente). La tristeza se propaga de forma inmediata de una a la otra, de cualquier Irma, Iris, Cristal o Doris triste a cualquier Irma, Iris, Cristal o Doris indiferente que tenga a su lado. Si está alegre no se contagia.'








 
]


let myFont;
function preload() {
  myFont = loadFont('Inconsolata.ttf');
}


  
 
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // crear objetos
 
  button = createButton('>> Siguiente >>');
  button.position(1100,550);
  button.mousePressed(entrar);
  button.style('font-size', '30px');
  button.style('fontFamily', 'Inconsolata');
  button.style('border-style', 'none');
  button.style('background', 'transparent');
  button.style('color', '#73c29a');

  bug1 = new Jitter();
  bug2 = new Jitter();
  bug3 = new Jitter();
  bug4 = new Cristal();
 
  

   img0 = loadImage('ladoris.png');
   img1 = loadImage('lairma.png');
   img2 = loadImage('lairis.png');
   img3 = loadImage('lacristal.png');
   
   inconsolata = loadFont('Inconsolata.ttf');
   
   textFont(inconsolata);
   texto = random(textos);
   color = random(colores);

}


function entrar() {
 
 location.assign('lasexhaustas2.html')
  }

function draw() {

    
  background(0);
 
  bug1.move();
  bug1.display();
 // bug1.escribiris();
  bug1.serdoris();
  
  

  bug2.move();
  bug2.display();
 // bug2.escribdoris(); 
  bug2.seriris();
  
  bug3.move();
  bug3.display();
 // bug3.escribirma();
  bug3.serirma();

  bug4.move();
  bug4.display();
  bug4.escribcristal();
  bug4.sercristal();
  
  
  noStroke();
 

  

  
}





// clase Jitter
class Jitter {
  constructor() {
    this.x = random(-600, 500);
    this.y = random(100, 200);
    this.diameter = random(50, 150);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  serdoris(){
    texture(img0);
  }

  seriris(){
    texture(img1);
  }

  serirma(){
    texture(img2);
  }

  clicked() {
        window.location.reload();
       }
  }

 
  function mousePressed(){
    //bug1.clicked(); 
   }
   

   class Cristal {
    constructor() {
      this.x = -650;
      this.y = -100;
      this.diameter = 100;
      this.speed = 1;
    }

    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
      }
    
      display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
      }
    
      sercristal(){
        texture(img3);
      }

      escribcristal(){
    
     
        
        textFont(myFont);
        textSize(this.diameter/6);
        
        text(texto, this.x+50, this.y, windowWidth-200);
        textWrap(WORD);
        fill(color);
        
       }
    
   }  








  
 

  
