export const page1 = [
  {
    id: 1,
    title: "Description",
    url: "section-1",
    text: "Les chaînes de caractères sont utiles pour stocker des données qui peuvent être représentées sous forme de texte. Parmi les opérations les plus utilisées pour manipuler les chaînes de caractères, on a : la vérification de leur longueur avec length, la construction et la concaténation avec les opérateurs + et +=, la recherche de sous-chaîne avec les méthodes includes() ou indexOf() ou encore l'extraction de sous-chaînes avec la méthode substring().",
  },
  {
    id: 2,
    title: "Créer des chaines de caractères",
    url: "section-2",
    text: "Il est possible de créer des chaînes de caractères comme des valeurs primitives ou comme des objets avec le constructeur String(). Les valeurs primitives ou les objets représentant des chaînes de caractères peuvent être utilisés de façon interchangeable dans la plupart des situations. Voir ci-après Chaînes de caractères : valeurs primitives et objets. Les valeurs littérales pour les chaînes de caractères peuvent être indiquées avec des simples quotes ('), des doubles quotes ou encore par des accents graves . Cette dernière forme permet de définir un littéral de gabarit de chaîne de caractères avec lequel on pourra interpoler des expressions dans une chaîne de caractères",
  },
  {
    id: 3,
    title: "Accéder à un caractère",
    url: "section-3",
    text: "Il existe deux façons d'accéder à un caractère dans une chaîne. La première façon consiste à utiliser la méthode charAt() : return 'chat'.charAt(2); // renvoie  La seconde méthode, introduite avec ECMAScript 5, est de manipuler la chaîne comme un tableau, où les caractères sont les éléments du tableau et ont un indice correspondant à leur position : return 'chat'[2]; // renvoie  En utilisant la seconde notation, il est impossible de supprimer ou d'affecter une valeur à ces propriétés. En effet, les propriétés concernées ne sont ni accessibles en écriture ni configurables. Pour plus d'informations, voir la page de Object.defineProperty().",
  },
  {
    id: 4,
    title: "Comparer des chaines de caractère",
    url: "section-4",
    text: "Les développeurs C utilisent la fonction strcmp() pour comparer des chaînes de caractères. En JavaScript, il est possible d'utiliser les opérateurs inférieur et supérieur : On peut obtenir un résultat semblable avec la méthode localeCompare() qui permet de prendre en compte la locale utilisée et qui est héritée par toutes les instances de String. On notera que a == b compare les chaînes de caractères a et b de façon sensible à la casse. Si on souhaite comparer des chaînes sans être sensible à la casse, on pourra utiliser une fonction semblable à : On utilise ici une conversion en majuscules plutôt qu'en minuscules, car cela cause certains problèmes de conversion pour certains caractères UTF-8.",
  },
];

export const page2 = [
  {
    id: 1,
    title: "Description",
    url: "section-1",
    text: "Les formats numériques sur plusieurs octets sont représentés différemment en mémoire selon l'architecture de la machine (voir la page du glossaire sur le boutisme pour plus d'explications). Les accesseurs DataView permettent de contrôler explicitement la façon dont se fait l'accès aux données, quel que soit le boutisme de l'ordinateur.",
  },
  {
    id: 2,
    title: "Gestion des valeurs entières sur 64 bits",
    url: "section-2",
    text: "Certains navigateurs ne prennent pas en charge DataView.prototype.setBigInt64() et DataView.prototype.setBigUint64(). Pour que les opérations sur 64 bits fonctionnent pour ces navigateurs, il est possible d'implémenter une fonction getUint64() qui permet d'obtenir des valeurs avec une précision correcte jusqu'à Number.MAX_SAFE_INTEGER, ce qui peut être suffisant selon le cas d'usage.On peut également créer un objet BigInt si on veut avoir accès à 64 bits. Sur le plan des performances, les grands entiers (BigInt ont une taille variable, aussi leur manipulation sera nécessairement plus lente que celle des nombres stockés sur 32 bits. Ceci étant écrit, les valeurs natives BigInt seront plus performantes que les implémentations tierces (bibliothèques, etc.).",
  },
  {
    id: 3,
    title: "Propriétés des instances",
    url: "section-3",
    text: "DataView.prototype.buffer L'objet ArrayBuffer référencé par la vue courante. Cette propriété est déterminée au moment de la construction et est donc uniquement accessible en lecture seule. DataView.prototype.byteLength La longueur, exprimée en octets, de cette vue, à partir du début de l'objet ArrayBuffer correspondant. Cette propriété est déterminée au moment de la construction et est donc uniquement accessible en lecture seule. DataView.prototype.byteOffset Le décalage, exprimé en octets, de cette vue, par rapport au début de l'objet ArrayBuffer correspondant. Cette propriété est déterminée au moment de la construction et est donc",
  },
  {
    id: 4,
    title: "Méthodes des instances",
    url: "section-4",
    text: "DataView.prototype.getInt8() Obtient un entier signé sur 8 bits (équivalent au type byte) situé à l'octet relatif au début de la vue. DataView.prototype.getUint8() Obtient un entier non-signé sur 8 bits (équivalent au type unsigned byte) situé à l'octet relatif au début de la vue. DataView.prototype.getInt16() Obtient un entier signé sur 16 bits (équivalent au type short) situé à l'octet relatif au début de la vue. DataView.prototype.getUint16() Obtient un entier non-signé sur 16 bits (équivalent au type unsigned short) situé à l'octet relatif au début de la vue. DataView.prototype.getInt32() Obtient un entier signé sur 32 bits (équivalent au type long) situé à l'octet relatif au début de la vue. DataView.prototype.getUint32() Obtient un entier non-signé sur 32 bits (équivalent au type unsigned long) situé à l'octet relatif au début de la vue. DataView.prototype.getFloat32() Obtient un nombre flottant signé sur 32 bits (équivalent au type float) situé à l'octet relatif au début de la vue. DataView.prototype.getFloat64() Obtient un nombre flottant signé sur 64 bits (équivalent au type double) situé à l'octet relatif au début de la vue.",
  },
];

export const page3 = [
  {
    id: 1,
    title: "Constructeur",
    url: "section-2",
    text: "Crée un nouvel objet Function. Appeler le constructeur directement permet de créer des fonctions dynamiquement, mais ouvre la porte à des problèmes de sécurité et de performances (à l'instar de la fonction eval()). Toutefois, à la différence de eval(), l impact est bien moindre, car le constructeur Function crée des fonctions qui s exécutent uniquement dans la portée globale.",
  },
  {
    id: 2,
    title: "Propriétés des instances",
    url: "section-3",
    text: "Function.prototype.arguments Deprecate n tableau contenant les arguments passés à la fonction. Cette propriété de Function est dépréciée, il faudra à la place utiliser lobjet arguments qui est disponible à lintérieur de la fonction.Function.prototype.caller Deprecated    Indique la fonction qui a appelé la fonction courante qui sexécute. Cette propriété est dépréciée et ne fonctionne que pour les fonctions non-strictes      Function.prototype.displayName    Le nom daffichage de la fonction.Function.prototype.lengthIndique le nombre darguments attendus par la fonction.Function.prototype.nameLe nom de la fonction.",
  },
  {
    id: 3,
    title: "Méthode des instances",
    url: "section-4",
    text: "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>]) Appelle une fonction et définit sa valeur this avec l'argument thisArg fourni. Les arguments peuvent être passés via un tableau. Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]]) Crée une nouvelle fonction qui, lorsqu'elle est appelée, a sa valeur this fixée avec l'argument thisArg fourni. Une suite d'arguments peut également être fournie afin qu'ils soient passés parmi les premiers arguments de la nouvelle fonction ainsi créée lorsqu'elle est appelée. Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>]) Appelle une fonction en fixant sa valeur this avec la valeur fournie. Les arguments sont passés tels quels. Function.prototype.toString() Renvoie une chaîne de caractères qui représente le code source de la fonction. Il s'agit d'une surcharge de la méthode Object.prototype.toString().",
  },
];
