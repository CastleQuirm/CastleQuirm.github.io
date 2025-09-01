'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a244d795a2bd3398f7be239ea4c1c42f",
"assets/AssetManifest.bin.json": "c6f2aee4852f57ee338412818e40549f",
"assets/AssetManifest.json": "5d6a1d58c3edefe2eb77c7954a38dff0",
"assets/assets/icons/path_sets/mountain_pass.png": "a651654198b469028a93ed448121d2fe",
"assets/assets/images/branch/card1.png": "5aef21b3a7f52da746f6c36eedc529ae",
"assets/assets/images/branch/card2.png": "b99a31716d5069a770dbe020ae608c44",
"assets/assets/images/branch/card3.png": "a934a4428949f4671c1611d8d5c53700",
"assets/assets/images/branch/card4.png": "100cb62361d538d4e691d554b10463a6",
"assets/assets/images/branch/card5.png": "9c82cda68a68b4b1c12529d20def9781",
"assets/assets/images/card_backs/challenge.png": "7c3537c860ca78d923e349bd5a06d306",
"assets/assets/images/card_backs/path.png": "315f2344b5807e57ec11b79216b4d487",
"assets/assets/images/challenge/card1.png": "72b4d75ad97ccd44e2dc8638e8cc9275",
"assets/assets/images/challenge/card10.png": "4a10130ee33c0c32750732217a957948",
"assets/assets/images/challenge/card11.png": "5a7c8604780c201330f4ec821fd339f4",
"assets/assets/images/challenge/card12.png": "c37038b96662b0af3d2ec7ce825410b7",
"assets/assets/images/challenge/card13.png": "96440ce5f23558d96fca7435e0e1e75e",
"assets/assets/images/challenge/card14.png": "e568692575bf56dd0395a8374e2ff38a",
"assets/assets/images/challenge/card15.png": "dabfb2c4cdc86c19ecffb31f09223947",
"assets/assets/images/challenge/card16.png": "25e872f0dbeae98d04462811e4026fbe",
"assets/assets/images/challenge/card17.png": "391afae31345ee06d1664611e61eacd8",
"assets/assets/images/challenge/card18.png": "647463052256a0fa6fd3fe2a8aebd946",
"assets/assets/images/challenge/card19.png": "9bfbf7fb26f19803e48604b7677ba0c1",
"assets/assets/images/challenge/card2.png": "12209f7750dea1a35f3f850d5fe14c95",
"assets/assets/images/challenge/card20.png": "c1538d58985b8115d348c15d3851077c",
"assets/assets/images/challenge/card21.png": "69a8714a6cf4a50e037f522c5b900f05",
"assets/assets/images/challenge/card22.png": "f5571498fa63e9cde7689d3a5ba55637",
"assets/assets/images/challenge/card23.png": "a2e0e771d8dad705f531fa1115eed98d",
"assets/assets/images/challenge/card24.png": "2acb956f2f210c954053552ccd84afe6",
"assets/assets/images/challenge/card3.png": "bf5aacef710b5c7af95f5f5c753dccfe",
"assets/assets/images/challenge/card4.png": "415b81580d4986653ee73c980dc2617c",
"assets/assets/images/challenge/card5.png": "0e80387a65d58ce444b728016b5fc337",
"assets/assets/images/challenge/card6.png": "3b76e04e99a2ad484865d19a2a53b13d",
"assets/assets/images/challenge/card7.png": "eda93d5af9cfb1245eb1654c577299b8",
"assets/assets/images/challenge/card8.png": "9c74f721d2dc64e15875b3a30dc97fda",
"assets/assets/images/challenge/card9.png": "b843f346f7dd7461d06fa559e56e1738",
"assets/assets/images/general/card1.png": "48acfa2a82a4c6816d7f05784a5876d3",
"assets/assets/images/general/card10.png": "cffb811a4f75192555b22455790ec6c4",
"assets/assets/images/general/card11.png": "b9fd5bf9a89a477793d78eb22103f177",
"assets/assets/images/general/card12.png": "e033b338459fa5e51b88487746c30496",
"assets/assets/images/general/card13.png": "ecba73e8528873fb0dac65b1e2420270",
"assets/assets/images/general/card14.png": "393048d44e3f9837bc31bd32bf780de9",
"assets/assets/images/general/card15.png": "2a2ef374bde569aad517ca7e5c42cccb",
"assets/assets/images/general/card2.png": "3580c8b73165e46244d50c1cafd4369f",
"assets/assets/images/general/card3.png": "5771e157ad16b161c9f6694415ac0ae4",
"assets/assets/images/general/card4.png": "a80a0abdfbfb8ce954d2162ff24601e5",
"assets/assets/images/general/card5.png": "e3b402eaabeb27b1ca2e5e3dd1e89976",
"assets/assets/images/general/card6.png": "c0983212446b8b1253a55289eab5916c",
"assets/assets/images/general/card7.png": "ddb144da648c3172db3ae90c370aa66f",
"assets/assets/images/general/card8.png": "828dbfee30ce907d11f6fcb3a6094a1c",
"assets/assets/images/general/card9.png": "a9c55d70efa3669b12dc51c3b1392ac5",
"assets/assets/images/grassland/card1.png": "abeb41d63b89f44fedcce0ca53d7a2d8",
"assets/assets/images/grassland/card10.png": "ee6aed74d66a06ed7be9c81dccfdd4e3",
"assets/assets/images/grassland/card11.png": "9fddd99d910561caf72709cc1016a22c",
"assets/assets/images/grassland/card12.png": "977a75df30a44f4f3ae1b5738403ed95",
"assets/assets/images/grassland/card2.png": "921e9b854163400224c6f63b03e910e3",
"assets/assets/images/grassland/card3.png": "204145e3a11edc4678c28f8d9c85a646",
"assets/assets/images/grassland/card4.png": "e897c086cd0ca79a0ce75c54f89d633e",
"assets/assets/images/grassland/card5.png": "779aef01ae1984fb0c75c55ecb3a7e69",
"assets/assets/images/grassland/card6.png": "61c2b46d534b284592398cef5bb481cc",
"assets/assets/images/grassland/card7.png": "2a1d1c80226362b8e3f4346eefea196d",
"assets/assets/images/grassland/card8.png": "a1092da173ff3287e8357e6a4a210dd6",
"assets/assets/images/grassland/card9.png": "46e27a39172276d4b0c6beb8d9d12ac4",
"assets/assets/images/lakeshore/card1.png": "4da4d635a4ab0ff542de97a99148c8db",
"assets/assets/images/lakeshore/card10.png": "e2c428a995c3872a674a6242e306168c",
"assets/assets/images/lakeshore/card11.png": "f8d2d8e2404b9d40ab2509aea2ad6878",
"assets/assets/images/lakeshore/card12.png": "a90ec29ce3a6a5a6e511dfb2be554c28",
"assets/assets/images/lakeshore/card2.png": "f8b2ebadd965212c94e480f440f25db8",
"assets/assets/images/lakeshore/card3.png": "0c515d333770db9dcad443fa1d159a07",
"assets/assets/images/lakeshore/card4.png": "89c6e9b26232997489a64613e08bffc9",
"assets/assets/images/lakeshore/card5.png": "a0465144cdde9b5da8d771a4658f9035",
"assets/assets/images/lakeshore/card6.png": "15b74a496194e32caf4842816cb9f6dd",
"assets/assets/images/lakeshore/card7.png": "f8fcc5bbd08df6c6d1d8b9e0b0b3819d",
"assets/assets/images/lakeshore/card8.png": "f79458f226f77c603b60f81c0de7b7fb",
"assets/assets/images/lakeshore/card9.png": "68c47f01553f0b59184def110478e6ca",
"assets/assets/images/loneTreeStation/card1.png": "93e5d3d047ea797dd8cd95e297e1a3cc",
"assets/assets/images/loneTreeStation/card2.png": "f6ec49d770cfff7aa0e954c8d16abf7f",
"assets/assets/images/loneTreeStation/card3.png": "5f3638f785b22dfa63550c6f5e4abfba",
"assets/assets/images/loneTreeStation/card4.png": "678138f3519cbb27a232bb0dfad3fb8f",
"assets/assets/images/loneTreeStation/card5.png": "9fd7ac91aa179c4d7d3480bdb9c53c19",
"assets/assets/images/marshOfRebirth/card1.png": "1a9b46b14cb3c5b2343fa5c426a7ad65",
"assets/assets/images/marshOfRebirth/card2.png": "22fa10c1ac7f806c827c0605ab3ab4bb",
"assets/assets/images/meadow/card1.png": "c01e60fe764607cab6d70edfa09f90c7",
"assets/assets/images/meadow/card2.png": "975a4515e0463ad39d518b489efff471",
"assets/assets/images/meadow/card3.png": "70527cc04420b89ea23319edbbea8b6b",
"assets/assets/images/meadow/card4.png": "0df4977bdd87af770249f6dd5bc95a9a",
"assets/assets/images/mountainPass/card1.png": "10abddb47e54a35a5342caabdd1eec9b",
"assets/assets/images/mountainPass/card10.png": "7118b55ed5948649b503bffab43f578d",
"assets/assets/images/mountainPass/card11.png": "ca1e1b64476551051703beac73a1384b",
"assets/assets/images/mountainPass/card12.png": "e301846ce8a96a39ae6c94d098e3006c",
"assets/assets/images/mountainPass/card2.png": "681f53e0eb982f6d1d6e71616bd551d9",
"assets/assets/images/mountainPass/card3.png": "694661bc158d82a1bfd993bfad9635da",
"assets/assets/images/mountainPass/card4.png": "2cdef5595079f6b010e202caafec4b81",
"assets/assets/images/mountainPass/card5.png": "6fd9500d3c62b24330d1546f74f0f672",
"assets/assets/images/mountainPass/card6.png": "293560148d90dc3de5984f7d9283abaf",
"assets/assets/images/mountainPass/card7.png": "d07d730cb64fa787f69678e245ad8b53",
"assets/assets/images/mountainPass/card8.png": "d4a149c68c6f606b2deef83551dcebdd",
"assets/assets/images/mountainPass/card9.png": "b0f37ed9a8924caf6011edc133caf3f7",
"assets/assets/images/northernOutpost/card1.png": "56390e1a4f70ad2342483e0da2f06a06",
"assets/assets/images/northernOutpost/card2.png": "982aae21faa485ab945ff4ba000e573b",
"assets/assets/images/northernOutpost/card3.png": "24eab8a9733c06b4b245568981e4a364",
"assets/assets/images/oldGrowth/card1.png": "543869b92ad919ebc04953f3063830ba",
"assets/assets/images/oldGrowth/card10.png": "d0e78a05fa7515b504b73d0f50710625",
"assets/assets/images/oldGrowth/card11.png": "092637bb22af4fa73545d46581b76751",
"assets/assets/images/oldGrowth/card12.png": "f2dd115fa8ae1e490b4ef2b90a70530d",
"assets/assets/images/oldGrowth/card2.png": "eb3b7af421013abb4b2a0bb49e4c9b51",
"assets/assets/images/oldGrowth/card3.png": "f456f70303f2f7ffb7a90f079328e9b1",
"assets/assets/images/oldGrowth/card4.png": "343876248df7518fe08c1c854b31a67d",
"assets/assets/images/oldGrowth/card5.png": "aec5f133c6bd954f05a80268cb95c714",
"assets/assets/images/oldGrowth/card6.png": "dcd999579fa894a883adfd055f8ff461",
"assets/assets/images/oldGrowth/card7.png": "c388c2d7b6b762238743c2662157cf3d",
"assets/assets/images/oldGrowth/card8.png": "e80e2d74a6794dfb5e35e95f50235535",
"assets/assets/images/oldGrowth/card9.png": "c1c0730421791dad9b19184ac81ecb7c",
"assets/assets/images/ravine/card1.png": "dc51464e3230c86912331049dce7e27c",
"assets/assets/images/ravine/card10.png": "06518b5bfecd559e5ba4c742c43afe77",
"assets/assets/images/ravine/card11.png": "3dd8a18b02441da32dadd7ea693324d7",
"assets/assets/images/ravine/card12.png": "b6280e7e00df6077c97d2fed325f2037",
"assets/assets/images/ravine/card2.png": "b8b3625a406ed9147998b4cd30ec4d8c",
"assets/assets/images/ravine/card3.png": "a668040a827c3dae3f8cd976bbfb1824",
"assets/assets/images/ravine/card4.png": "1c57a063e9305742e86cac45f7e74309",
"assets/assets/images/ravine/card5.png": "66b426cb069571e7721c979950ba8c8e",
"assets/assets/images/ravine/card6.png": "0349f357007b59ea6514316005a51ba3",
"assets/assets/images/ravine/card7.png": "fdfe3b383f139339abb3c5becf0db9c7",
"assets/assets/images/ravine/card8.png": "c2fb7e25b127a806f33f5e58f8a2195f",
"assets/assets/images/ravine/card9.png": "1cc34abed949b7a8dd80d59a042c9052",
"assets/assets/images/river/card1.png": "d57dfbcd76bd39c316d7b46a1b0b5c88",
"assets/assets/images/river/card10.png": "7c378a221bc510483527c5f18a73abc5",
"assets/assets/images/river/card11.png": "78daf65ee996b4816aa12d3097fdb79c",
"assets/assets/images/river/card12.png": "234abdc4dd7aeec62e6d966cf84c22b5",
"assets/assets/images/river/card2.png": "f8051fc2ad43adec1499b7e22232e6b7",
"assets/assets/images/river/card3.png": "715bdba8c2ef0f2083622343ac8a33ae",
"assets/assets/images/river/card4.png": "249e2a7eb95464ee89b6a8e72804f801",
"assets/assets/images/river/card5.png": "feea4020d7999a4b6a689d67ebc9f702",
"assets/assets/images/river/card6.png": "575d77a255f75d4f8dc9959f60414b3d",
"assets/assets/images/river/card7.png": "ae873cedeb435ce8524cb82dd074802e",
"assets/assets/images/river/card8.png": "f149abd080f65c2438ba2d67945611ca",
"assets/assets/images/river/card9.png": "adba9979c8a7f073c99936c280dc2777",
"assets/assets/images/spire/card1.png": "0d2a554f80ab06aaf0c7053c6b4c1dc6",
"assets/assets/images/spire/card2.png": "6d5e2309524eff5395b8db93599ca628",
"assets/assets/images/spire/card3.png": "eb0ac4877f6428851f32157b6d80b27f",
"assets/assets/images/spire/card4.png": "47fb7d88b90589399b386c5a0a2b8f86",
"assets/assets/images/spire/card5.png": "619b154dc4c1fb7ab15951136a42955b",
"assets/assets/images/spire/card6.png": "6c38783ebbfa10b925010247d6a6dbc3",
"assets/assets/images/swamp/card1.png": "744ee0b4a1c4c543d762180ef96c5df9",
"assets/assets/images/swamp/card10.png": "1907d9832aaa071fd0f0cbb5eb1f2fae",
"assets/assets/images/swamp/card11.png": "c0aeb038e8dc341341908e0d67bcdc13",
"assets/assets/images/swamp/card12.png": "678d559784dc7bb47aa97de6eea0bb94",
"assets/assets/images/swamp/card2.png": "62137efb978f04749ef4ba41e243ac01",
"assets/assets/images/swamp/card3.png": "aaa81de78e64dbfb33f009aef23476a0",
"assets/assets/images/swamp/card4.png": "3dbff92c4a4d7b177296f086ac16ec1d",
"assets/assets/images/swamp/card5.png": "934ec2d87c8ff12b38442f04512c6b84",
"assets/assets/images/swamp/card6.png": "3ea2e99bd8f6279445590931114e5ce2",
"assets/assets/images/swamp/card7.png": "cf6504fd35654f52882ec6ec374d9eed",
"assets/assets/images/swamp/card8.png": "65fd3194f5cda616fe21d6a9b08c0ddb",
"assets/assets/images/swamp/card9.png": "a753ac14ed658ca08529c240fb03e2c6",
"assets/assets/images/theFracturedWall/card1.png": "5c37f26a9be4753ebbb31baeafd8acb7",
"assets/assets/images/theFracturedWall/card2.png": "7990f840c59c93448852e2e5135fc3f0",
"assets/assets/images/theFracturedWall/card3.png": "005369139cc26949831b6f86e082e72b",
"assets/assets/images/theValley/card1.png": "8dccbbc3aa42fa7114e65db1f6894c27",
"assets/assets/images/theValley/card10.png": "493155ca8b13c7e868b3982b24fbf9e7",
"assets/assets/images/theValley/card11.png": "32678c0d64933012c7eb49bc6c1daf3a",
"assets/assets/images/theValley/card12.png": "fd187a82cb6a96f6d2b49c55d79efbba",
"assets/assets/images/theValley/card13.png": "ff6291ea1706633c8e6883a688d24c4c",
"assets/assets/images/theValley/card14.png": "9babe064b9c756aada28cca34259f7f2",
"assets/assets/images/theValley/card2-original.png": "874c2d230aefe452779577fa4d06a870",
"assets/assets/images/theValley/card2.png": "9410c8c7bf74169d16f8c6dbd04f6b1a",
"assets/assets/images/theValley/card3.png": "539c59f086d6d968ea5423668dd00166",
"assets/assets/images/theValley/card4.png": "cfae5bec0b8a177747588a2b661c7ccd",
"assets/assets/images/theValley/card5.png": "a0544a70d9ba7c23082d54cb66456520",
"assets/assets/images/theValley/card6.png": "487b3f0358751e8080a960a99eb77644",
"assets/assets/images/theValley/card7.png": "a4a7d0ebbc6dccfc5379b0230507f341",
"assets/assets/images/theValley/card8.png": "5dc583a51e87f15db6b5397904a5afb4",
"assets/assets/images/theValley/card9.png": "05ff0fbbcfb5eeac063894c44654056b",
"assets/assets/images/tumbledown/card1.png": "deb08fcd20987c4ed0d3dfad7bd71409",
"assets/assets/images/tumbledown/card2.png": "69eee80e572d2ae043add5f97d4f150c",
"assets/assets/images/tumbledown/card3.png": "f98eee4c1fbf67b4aaec5fbfc8374781",
"assets/assets/images/valleyMoments/card1.png": "da8942dedaf20b06f1e259fc750caf22",
"assets/assets/images/valleyMoments/card10.png": "f1ba8c5da26083eed6aa4fe25c7eac6b",
"assets/assets/images/valleyMoments/card11.png": "ccba7a0b1b3bbb7662bd9b7e60c20f97",
"assets/assets/images/valleyMoments/card12.png": "a187de8af69edcb56a61f4ae0e675448",
"assets/assets/images/valleyMoments/card13.png": "6ec86dfde16853eb28adc1a9356c5f8e",
"assets/assets/images/valleyMoments/card14.png": "91eff73075fd074732e2dab1a13a3f8c",
"assets/assets/images/valleyMoments/card15.png": "b8f6cc6b10902bd49df24577f3ca503d",
"assets/assets/images/valleyMoments/card16.png": "32deb22fd3acfaf586bc47f1b9f67298",
"assets/assets/images/valleyMoments/card2.png": "f1f3569b6b5339a47a6e19cd648e1e31",
"assets/assets/images/valleyMoments/card3.png": "edd3d7fb4213cb7295d322ef0dbf42b8",
"assets/assets/images/valleyMoments/card4.png": "248b5c1f7603335f18b8c430e1ea4755",
"assets/assets/images/valleyMoments/card5.png": "4167e3be9c5f5f6f9c5763246ef71689",
"assets/assets/images/valleyMoments/card6.png": "277de54c7a7b50c9d670074a86190f73",
"assets/assets/images/valleyMoments/card7.png": "97346ac627cf388c35ecaaab90f7687a",
"assets/assets/images/valleyMoments/card8.png": "bd0b9904729aed2a017f74fdda7ad1e2",
"assets/assets/images/valleyMoments/card9.png": "69e3bca08c6947f1a485479e170f78ce",
"assets/assets/images/whiteSky/card1.png": "e723c2403c367a4d3643cf60bf8791ba",
"assets/assets/images/whiteSky/card2.png": "a60cb785b40b920463a654f5de2a31f4",
"assets/assets/images/whiteSky/card3.png": "31710f7a6f02c9d06d0a6a49db5b00ac",
"assets/assets/images/whiteSky/card4.png": "b5eb33fe75516be64179bdfea0b1a39a",
"assets/assets/images/woods/card1.png": "4a724986944bbc01c4f1a3ecce5a7293",
"assets/assets/images/woods/card10.png": "86918be636e53e49bf938e51ace74552",
"assets/assets/images/woods/card11.png": "c27f683bf135c19c13f6c388babee2ea",
"assets/assets/images/woods/card12.png": "f00234560ef236a047e0879db0b96aa8",
"assets/assets/images/woods/card2.png": "5c561352d292260eeb98a01eb990eaec",
"assets/assets/images/woods/card3.png": "431232fb76bf3c540edb54a0a5342bcf",
"assets/assets/images/woods/card4.png": "b694789ae9d5ecc6f635ee85c9a956a6",
"assets/assets/images/woods/card5.png": "0c9f58f794333ed3cce8207bb1bacabc",
"assets/assets/images/woods/card6.png": "24921f93c335224ba5d7c76d485dc8f0",
"assets/assets/images/woods/card7.png": "67c43f050a7cdf56a26587ca13e06ed8",
"assets/assets/images/woods/card8.png": "3d2aab72ee5021d896b58128d850518a",
"assets/assets/images/woods/card9.png": "f96782d77ff787475700f3c9b6272b30",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad446aeb9c6803af1bc2efd1449eb9",
"assets/NOTICES": "2124828f9691cd700b9ba26d499cb7ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "3de55ce1d31d9021b27eab7be66a6c25",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bfd84af22c6f8a36fbbc0d601a24c33c",
"/": "bfd84af22c6f8a36fbbc0d601a24c33c",
"main.dart.js": "f898d83b9c41fc15859ffd51ea66a4ae",
"manifest.json": "8c7fe0e7c7c88c79157216b994ccf705",
"version.json": "c823c30f55884a92c136ccc8b7106ef7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
