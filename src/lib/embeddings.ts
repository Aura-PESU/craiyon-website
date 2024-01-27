"use server";
const embeddings = [
  [
    -0.0025363616, 0.032620765, -0.053202916, -0.011019217, 0.043106012,
    -0.02232969, -0.0023300548, 0.012718215, -0.01834918, 0.010776503,
    -0.018543351, -0.028931512, 0.028931512, -0.0029368398, -0.00536398,
    -0.004635838, -0.006262022, 0.029708197, -0.040193442, -0.010873589,
    0.014271585, 0.05708634, -0.011310474, 0.0063591073, 0.02320346,
    -0.06368816, 0.03495082, 0.042329326, 0.009854189, 0.023785975, 0.029125683,
    -0.0012803165, 0.019320037, 0.026407287, 0.014659927, 0.035144992,
    0.00796102, 0.023300547, 0.016407467, 0.013980328, 0.03805756, 0.008786248,
    -0.030679053, -0.024853917, -0.045436066, 0.0052183517, -0.0072814208,
    -0.05747468, -0.015145355, -0.0035921675, 0.0539796, -9.623232e-6,
    0.011747359, 0.032232422, -0.011795902, -0.02126175, 0.004587295,
    -0.009805647, 0.014077414, -0.05048452, 0.0036892532, -0.040970128,
    0.06368816, -0.021164663, 0.043106012, 0.011698816, -0.028931512,
    -0.02436849, -0.047960293, -0.0145628415, -0.000570378, -0.013203643,
    0.0010133311, -0.092037156, -0.019417122, 0.0063591073, -0.02368889,
    0.045436066, 0.023785975, 0.045436066, -0.03805756, 0.02679563,
    -0.037086703, 0.020193808, -0.021941349, 0.013203643, 0.022135518,
    -0.036310017, -0.040970128, -0.019611293, 0.027766485, -0.113396,
    -0.0071357926, 0.0035678963, 0.055144627, -0.04563024, -0.06834827,
    -0.0020630693, -0.04271767, -0.008640619, -0.0060193078, -0.048931148,
    -0.024465574, -0.019708378, 0.011698816, -0.031067396, -0.01592204,
    -0.008397905, -0.026601458, -0.016407467, -0.048154462, 0.0013106557,
    -0.031455737, -0.008786248, 0.043688525, 0.05708634, 0.021747177,
    -0.006553279, 0.0073299636, -0.0089804195, 0.044076867, -0.036892533,
    -0.020873407, 0.045436066, 0.060969763, -0.011310474, -0.0013895378,
    0.003737796, 0.005485337, 0.016989982, -0.047183607, 0.014271585,
    0.0025727686, 0.023300547, 0.02718397, -0.044076867, -0.038834244,
    0.011456102, 0.02524226, 0.016116211, -0.004878552, -0.03825173,
    -0.012718215, 0.0038834244, -0.03359162, 0.017184153, 0.0048300093,
    0.010873589, -0.0054610656, -0.00065532787, 0.03650419, 0.0066989074,
    0.04155264, -0.0005005977, -0.005606694, 0.053202916, -0.024174318,
    0.011164845, -0.012912386, 0.010630875, -0.064464845, 0.032814935,
    0.008931876, -0.034174137, -0.019611293, -0.0013895378, -0.032620765,
    -0.032232422, -0.032232422, 0.040581785, -0.020290893, -0.022135518,
    0.02524226, -0.014465756, -0.026213115, 0.022912204, 0.01160173,
    0.0020630693, 0.003495082, -0.024562659, 0.01160173, -0.036115848,
    0.022135518, -0.02232969, -0.06291147, 0.0023421904, -0.04446521,
    0.022426777, -0.0695133, 0.032232422, -0.01262113, -0.015727868, -0.0269898,
    -0.008494991, -0.010533789, -0.032038253, -0.045047723, 0.040970128,
    -0.034562476, -0.032426596, -0.06291147, 0.026601458, -0.021164663,
    0.016213298, 0.01679581, -0.035727505, 0.0025727686, -0.05863971,
    -0.010485246, 0.040193442, 0.00268199, -0.058251366, -0.004029053,
    -0.011795902, -0.017184153, 0.019514209, 0.0009465847, -0.008543534,
    -0.0036649818, 0.031067396, -0.010582332, -0.018252095, -0.02320346,
    -0.019611293, -0.037475046, 0.078445174, 0.045436066, 0.034562476,
    -0.027960656, 0.02543643, -0.022135518, -0.024562659, 0.0041746814,
    -0.0020630693, -0.0020509334, 0.03475665, 0.0269898, 2.0289375e-5,
    0.092037156, 0.0023421904, 0.007038707, -0.00883479, -0.013883242,
    -0.0021480191, -0.035727505, 0.013980328, 0.023106376, -0.0384459,
    0.08582368, -0.021164663, -0.008689162, 0.02543643, 0.054756284,
    0.019611293, 0.005145537, -0.0061649363, -0.031067396, 0.010630875,
    -0.014757013, -0.03786339, -0.0073785065, 0.025824772, -0.023009289,
    -0.010145446, 0.011553188, 0.055144627, -0.05553297, -0.016310383,
    0.040970128, -0.020485064, 0.022718033, 0.00519408, 0.09281384, 0.03475665,
    0.029319854, 0.011553188, -0.06019308, 0.012281329, 0.018543351,
    0.017863752, -0.06757159, -0.014659927, 0.035921678, -0.014951184,
    -0.024853917, -0.030679053, -0.028349, 0.0256306, -0.0020752049,
    -0.02281512, -0.02679563, 0.098250635, -0.0041261385, -0.02281512,
    0.03029071, -0.04077596, 0.03650419, 0.0020266622, -0.04291184, -0.08388197,
    -0.028154828, 0.02368889, -0.0134949, -0.0029489754, -0.021553006,
    -0.012087159, 0.034562476, -0.008058106, 0.05902805, 5.119749e-5,
    0.06524153, -0.018057924, 0.02854317, -0.009126048, -0.07611512,
    -0.008106649, 0.004441667, 0.01834918, 0.02873734, -0.00063712435,
    -0.008009563, 0.0008737705, -0.00259704, -0.005169809, -0.0040775957,
    0.0022572405, -0.009417304, 0.02543643, -0.012135701, -0.06485319,
    0.027572313, -0.008689162, -0.03805756, 0.08349363, -0.0269898, 0.01922295,
    -0.030679053, -0.048542805, 0.017281238, 0.0003944103, 0.040387616,
    -0.027572313, -0.000934449, 0.043882698, 0.0256306, 0.013689071,
    -0.07106667, -0.03029071, 0.015436612, -0.0037863387, 0.01747541,
    0.052037887, 0.015630784, 0.005145537, 0.030484881, -0.011844445,
    -0.026601458, 0.011067759, -0.005655237, 0.031067396, -0.03669836,
    -0.003252368, 0.055144627, -0.023397632, 0.02679563, 0.012718215,
    -0.021067578, 0.018737523, 0.031261567, -0.049707834, -0.027378142,
    0.02543643, -0.007766849, -0.02038798, -0.02873734, -0.00259704,
    -0.016310383, -0.017184153, 0.03300911, 0.023106376, 0.051649544,
    0.07106667, 0.030873224, -0.05048452, -0.0043688524, 0.029125683,
    -0.027378142, 0.016407467, 0.040193442, 0.017087068, -0.0052183517,
    0.0036407104, -0.06718324, -0.01902878, 0.0035921675, 0.034562476,
    -0.010679417, 0.016601639, 0.03786339, 0.036892533, -0.02126175,
    -0.022620948, -0.024853917, 0.03786339, -0.009805647, -0.022135518,
    -0.02524226, 0.008883334, 0.01747541, -0.0071357926, -0.02281512,
    0.014659927, 0.04873698, 0.021553006, 0.04621275, 0.044271037, 0.013591985,
    0.018446267, 0.011067759, 0.02524226, 0.004757195, -0.018155009,
    -0.05242623, -0.04291184, -0.020485064, -0.0256306, -0.003495082,
    -0.020485064, 0.035533335, -0.047183607, -0.028154828, -0.02368889,
    -0.02854317, 0.036310017, -0.039028417, -0.03961093, -0.027378142,
    -0.0032280965, -0.06174645, 0.013591985, 0.045436066, -0.0027305328,
    -0.031067396, -0.07572678, -0.012135701, -0.030873224, -0.019417122,
    -0.046601094, -0.0053397086, 0.002645583, -0.01160173, 0.014465756,
    0.003543625, 0.0031552825, 0.040193442, 0.0037863387, 0.002645583,
    0.03359162, 0.02873734, -0.010436703, -0.021844262, -0.046601094,
    -0.02679563, 0.0046601095, 0.0030703323, -0.039999273, -0.01679581,
    0.003543625, 0.0067959926, -0.032038253, 0.015436612, -0.019417122,
    -0.0020630693, 0.029319854, 0.012087159, -0.0256306, -0.016407467,
    -0.017863752, 0.019514209, -0.011553188, 0.005800865, -0.008640619,
    0.027960656, 0.018155009, -0.01140756, -0.020582149, 0.019611293,
    0.022135518, -0.032232422, 0.02281512, 0.012087159, -0.00917459,
    -0.030679053, 0.03475665, -0.0049270946, 0.008397905, 0.045436066,
    -0.009077504, -0.005291166, 0.043106012, 0.06718324, -0.022232605,
    0.0068445355, -0.0039562387, 0.008349363, -0.064076506, -0.005897951,
    0.017572496, -0.010873589, 0.019805465, -0.07883351, -0.00917459,
    0.042329326, 0.009028962, 0.0014320128, 0.014465756, -2.1237478e-5,
    -0.0067959926, 0.047960293, 0.021941349, 0.00796102, -0.0013713343,
    -0.018155009, 0.012426958, -0.001425945, -0.046018578, -0.016019126,
    0.012135701, -0.022523861, -0.009708561, -0.037086703, -0.0016383197,
    0.0019053051, 0.037086703, -0.013203643, 0.010436703, 0.013591985,
    -0.06058142, 0.008931876, 0.072620034, -0.022718033, -0.003373725,
    0.0026213115, -0.007232878, -0.046018578, -0.016310383, -0.009805647,
    0.018834608, 0.016892897, 0.0012863843, -0.027960656, -0.004417395,
    -0.0046843807, 0.016310383, 0.018543351, -0.022038434, -0.060969763,
    0.03009654, 0.0008373634, 0.046795264, 0.0052668946, -0.008494991,
    -0.017766668, -0.014951184, -0.032814935, 0.007863934, -0.14213334,
    0.06795993, 0.027378142, 0.022038434, 0.006456193, -0.0030824682,
    0.0048542805, 0.018640438, -0.010145446, 0.005048452, -0.009077504,
    -0.018446267, 0.01592204, -0.026407287, -0.022038434, -0.040193442,
    0.00883479, 0.01160173, -0.07145501, -0.04271767, 0.01262113, -0.019805465,
    -0.02718397, -0.025824772, -0.0145628415, -0.004587295, 0.022038434,
    -0.024465574, -0.0061163935, -0.02388306, 0.021358835, 3.3183558e-5,
    0.027572313, -0.0033251822, -0.023300547, 0.00640765, 0.033785794,
    0.014951184, -0.044853553, 0.06368816, -0.048542805, 0.020096721,
    -0.026407287, 0.013009472, 0.009417304, 0.0055824225, 0.018737523,
    0.011310474, 0.01747541, -0.010096904, 0.018737523, -0.0141745, 0.017863752,
    -0.013980328, 0.007669763, 0.014077414, -0.04271767, -0.01747541,
    0.10951257, -0.011019217, 0.009805647, -0.042329326, -0.019805465,
    -0.014951184, -0.029708197, 0.08893042, -0.0029853825, 0.037086703,
    0.008058106, -0.0012135701, 0.015145355, -0.023106376, 0.08582368,
    0.03475665, 0.0384459, 0.04951366, 0.014659927, 0.023591803, -0.021553006,
    -0.032038253, 0.02077632, 0.015630784, -0.007718306, 0.011990073,
    -0.0024271403, 0.13203643, -0.027766485, 0.03825173, 0.007232878,
    0.02388306, -0.048348635, 0.02854317, 0.13436648, 0.030484881, -0.055921312,
    -0.019805465, 0.014951184, -0.009660019, 0.0256306, 0.00026698544,
    0.03495082, 0.0010315346, 0.039028417, -0.028154828, 0.007815392,
    0.00013349272, 0.043688525, -0.007766849, 0.017960839, -0.04582441,
    0.016310383, 0.02038798, -0.004417395, -0.028349, -0.040970128, 0.007718306,
    0.025048088, 0.032814935, 0.041164298, 0.004538752, -0.0009829918,
    -0.009077504, -0.015339526, 0.014854099, 0.0028276185, -0.00075241347,
    0.020582149, -0.16155046, 0.018446267, -0.024271403, -0.026213115,
    -0.0020630693, 0.0055338796, 0.05359126, 0.016407467, -0.0063591073,
    0.064076506, 0.021358835, 0.0020266622, -0.08116357, 0.022912204,
    -0.05242623, 0.018543351, 0.038834244, -0.039222587, 0.030679053,
    -0.02145592, 0.02873734, 0.0068445355, 0.0075726775, 0.009271676,
    -0.024465574, 0.0046843807, 0.036892533, 0.005048452, 0.029902369,
    0.009077504, 0.048348635, -0.010242532, -0.04291184, -0.002475683,
    0.036892533, 0.012378415, 0.0032766394, 0.024659745, -0.009854189,
    -0.037086703, -0.0047814664, -0.022038434, 0.03009654, -0.013689071,
    0.00640765, 0.013397815, 0.09475556, -0.019805465, -0.014659927,
    0.0049028234, 0.024271403, 0.029514026, -0.012378415, 0.00640765,
    -0.029319854, -0.007863934, -0.07456175, -0.0256306, 0.020290893,
    -0.0084464485, -0.0042960383, 0.019611293, 0.07456175, -0.0030217897,
    -0.008689162, 0.02436849, -0.011261931, 0.07728015, 0.011844445,
    0.013203643, -0.009708561, 0.023980146, -0.032426596, 0.009271676,
    -0.040581785, 0.00013880209, -0.005825137, 0.055921312, -0.021747177,
    0.02854317, 0.01592204, 0.014951184, -0.00020782389, 0.014659927,
    -0.025824772, -0.016892897, -0.023591803, 0.029902369, 0.033203278,
    0.020873407, -0.0021844262, 0.006553279, 0.015436612, 0.02320346,
    0.014465756, -0.039028417, -0.011067759, -0.024659745, -0.0027183972,
    0.013786157, -0.008931876, 0.0256306, 0.04873698, -0.022135518,
    -0.015824955, -0.0010011954, 0.017184153, 0.037280876, 0.043494355,
    -0.0074270493, -0.026601458, 0.022620948, -0.062523134, 0.020679235,
    -0.0059464937, -0.14601676, -0.011844445, 0.0026091759, -0.0134949,
    -0.00010315346, -0.05359126, 0.005121266, 0.019999636, -0.021358835,
    0.021164663, 0.022912204, -0.029319854, 0.0071357926, 6.978028e-5,
    -0.015242441, 0.021358835, 0.012718215, -0.03495082, -0.014757013,
    -0.0120386155, -0.009126048, -0.03495082, 0.04776612, 0.06329982,
    0.021358835, 0.03029071, 0.027960656, 0.0141745, -0.031455737, -0.01990255,
    0.032038253, -0.029514026, -0.0052668946, 0.043688525, 0.057863023,
    -0.0013227914, -0.00640765, -0.0269898, -0.021553006, -0.022912204,
    0.052037887, -0.016407467, 0.013009472, 0.03475665, 0.00040047814,
    -0.03805756, 0.004441667, -0.0026334473, 0.019999636, -0.011213388,
    0.02854317, 0.05553297, -0.0053882515, -0.049707834, -0.01072796,
    -0.026213115, 0.011553188, -0.029514026, -0.022426777, 0.014757013,
    -0.0017596767, -0.04465938, 0.03650419, 0.040970128, -0.02281512,
    -0.008349363, 0.013980328, -0.017863752, -0.05048452, -0.02524226,
    -0.014854099, -0.016892897, 0.04271767, -0.0145628415, 0.026601458,
    -0.05359126, -0.008543534, -0.021164663, -0.027766485, 0.052814573,
    -0.0028761611, -0.020970492, -0.0040533245, 0.02077632, 0.013689071,
    0.004393124, -0.011213388, -0.0015169627, 0.0014138093, -0.034174137,
    -0.03825173, -0.024659745, 0.021358835, 0.011261931, -0.0027305328,
    0.015436612, 0.014854099, 0.03533916, -0.034368306, 0.016213298, 0.04155264,
    0.00045205487, 0.01160173, 0.004999909, 0.004344581, -0.0134949,
    -0.052814573, -0.0076212203, -0.056698, -0.02543643, 0.035727505,
    0.037475046, 0.062523134, 0.01902878, 0.03669836, -0.05747468, 0.029514026,
    -0.005800865, -0.0014987591, -0.06329982, 0.022620948, -0.00019037882,
    -0.007524135, 0.0005370048, 0.002281512, 0.01902878, 0.032814935,
    -0.042329326, -0.020873407, -0.00042171564, -0.004587295, 0.0398051,
    -0.015533698, -0.011892987, 0.019611293, 0.016698726, -0.02718397,
    0.02854317, -0.02126175, -0.019320037, 0.01262113, 0.066406555,
    -0.041746814, 0.00018886186, -0.021358835, 0.029319854, 0.024174318,
    0.07339672, -0.030873224, 0.018543351, 0.03650419, -0.018543351,
    -0.0014562842, -0.025048088, 0.029319854, 0.026407287, 0.0008252277,
    0.011310474, -0.025824772, 0.015630784, -0.0073299636, -0.02543643,
    -0.041164298, -0.003931967, -0.011990073, -0.011892987, -0.034368306,
    -0.001340995, -0.023980146, 0.030873224, 0.013106558, -0.012426958,
    0.019708378, -0.030873224, -0.07572678, -0.03495082, 0.010485246,
    -0.007863934, 0.004441667, 0.0056309653, -0.022135518, 0.004393124,
    -0.024077231, -0.07339672, 0.016213298, -0.04291184, -0.01592204,
    -0.017572496, -0.031455737, 0.017572496, 0.032232422, 0.0029004326,
    0.0037863387, 0.05863971, 0.02679563, 0.0016989982, 0.0044902097,
    -0.030679053, -0.0066989074, 0.034562476, -0.019999636, -0.02145592,
    -0.017960839, 0.031261567, -0.00081915985, 0.050096177, 0.030484881,
    0.021067578, 0.0071357926, 0.015630784, -0.019514209, 0.01902878,
    -0.006310565, -0.016504554, 0.014659927, 0.0059950366,
  ], //1
  [], //2
  [], //3
  [], //4
  [], //5
  [], //6
  [], //7
  [], //8
  [], //9
  [], //10
];

const textEmbeddings = [
  [
    -0.008701111, 0.015122902, -0.0062265126, -0.03137266, -0.004763522,
    0.029067729, 0.009482226, -0.0015966443, -0.030143363, -0.012485038,
    0.008950812, -0.019079698, -0.006850764, -0.013522256, 0.0062937397,
    -0.016249757, 0.031731203, -0.0285043, 0.03531665, -0.0056342734,
    -0.014700332, 0.003335746, 0.009482226, -0.0018583499, -0.004885171,
    -0.0052693263, 0.013957632, -0.0001033417, 0.03203853, -0.021474265,
    0.01910531, 0.0035086158, -0.01873396, -0.012248142, -0.003796732,
    -0.01452106, 0.02376639, 0.0072285165, 0.0009851975, -0.01806809,
    0.019002868, 0.008605072, 0.023830416, -0.011447819, -0.03001531,
    0.03677644, -0.011863987, -0.013125296, -0.01955349, 0.0056854943,
    0.0030332238, 0.017338196, -0.007811152, -0.013176517, 0.0005274128,
    -0.007862372, -0.0036398687, 0.027198175, 0.008348969, 0.002092044,
    0.0065882583, 0.01135178, -0.0098471735, 0.0168516, 0.000924373,
    -0.0028363445, 0.012292961, 0.025213374, -0.0072413217, 0.010961222,
    0.01070512, 0.0142009305, -0.010660302, 0.0027691172, 0.032089747,
    -0.00089476106, -0.007119673, 0.019451048, -0.0076510874, -0.009603875,
    -0.0052725277, -0.032653175, -0.00996242, 0.018401025, 0.013727139,
    0.015302175, 0.022268185, 0.0038351475, -0.0408997, -0.012453025,
    -0.017632715, 0.029759208, -0.007081257, 0.016019264, 0.0138808,
    0.037263036, 0.010897197, 0.026737189, -0.012216129, -0.011742338,
    -0.010845976, 0.009898394, -0.037749633, -0.022485873, 0.015097292,
    -0.003863959, 0.022114523, -0.02225538, 0.0112365335, -0.026916461,
    -0.0062041036, 0.010224925, 0.0013181319, -0.012036857, 0.012043259,
    0.0023833616, -0.0041872896, 0.010986833, -0.014905214, -0.006463408,
    0.017094897, 0.009527044, 0.013714334, -0.022012081, 0.02424018,
    0.0014221738, -0.022716366, -0.003425382, -0.0005978412, -0.003090847,
    0.03385686, 0.007580659, -0.003182084, 0.007894386, -0.010096874,
    0.015238148, -0.028760405, 0.043255854, -0.018247362, 0.0014942029,
    0.016787574, 0.030322636, 0.027889654, -0.014444228, -0.016518665,
    0.024944466, -0.0056342734, -0.023676753, 0.022562705, 0.0034157783,
    -0.008406592, 0.006133675, 0.0040560365, -0.017376611, 0.01806809,
    0.022345016, -0.001984801, 0.011896, -0.0030796425, -0.023625532,
    -0.014533864, 0.017210145, 0.0027515101, -0.008931604, 0.0055350335,
    0.04000334, 0.010487432, -0.0029179775, -0.031142166, 0.013739944,
    -0.0041296664, 0.01187039, -0.03449712, 0.02109011, -0.016838795,
    -0.0075230356, 0.0043377504, -0.014930825, 0.0055030202, 0.00076070696,
    -0.006901985, -0.0022985274, 0.023279794, 0.037954513, 0.0062169083,
    -0.0074654124, 0.01727417, -0.008630683, 0.010103277, -0.020936448,
    0.0114222085, 0.020795591, 0.0146619165, -0.011735936, -0.67693233,
    -0.022396237, -0.001466992, 0.0014693929, -0.007273335, 0.0067547257,
    -0.008067255, 0.047353506, -0.008195307, 0.020629125, -0.011883195,
    0.033805642, -0.012485038, -0.021179747, -0.013150906, -0.01804248,
    0.0042193024, -0.000047994366, -0.033575147, -0.007958411, -0.036520336,
    -0.0042193024, -0.030220194, 0.014328982, 0.015481447, -0.010199316,
    0.0016294575, -0.024765193, -0.020846812, 0.01692843, -0.024176154,
    -0.0034958106, 0.022754781, -0.006978816, 0.044894915, 0.0063161487,
    -0.021026084, 0.02911895, -0.0077727363, 0.025405452, -0.013701528,
    -0.0073245554, 0.016825989, -0.0033901678, 0.0056694876, -0.007727918,
    -0.0095206415, 0.0051092617, 0.005951201, 0.0031180582, 0.017312586,
    0.006658687, -0.023036495, -0.0033645576, 0.0035790442, -0.0060632466,
    0.020437047, -0.0051348717, -0.0015814381, -0.010500236, -0.01209448,
    0.0020456254, -0.021461459, -0.021666342, -0.020539487, 0.0011468627,
    -0.0064249923, 0.008963617, -0.023164546, -0.0038319463, 0.005480611,
    -0.00026850833, -0.01984801, 0.00260265, 0.008112073, 0.037672803,
    0.013867996, -0.016992457, 0.01838822, -0.019783983, 0.009040448,
    -0.01414971, -0.0010444215, 0.0029627956, 0.0113773905, -0.0098919915,
    -0.045612004, -0.01650586, 0.007394984, -0.0050772484, 0.017965648,
    0.017901624, -0.00017056882, -0.0060088243, 0.0015814381, 0.012126493,
    -0.02076998, 0.013522256, 0.010673107, 0.0016582691, -0.00031592746,
    -0.0009315759, 0.026455475, 0.011230132, 0.027889654, 0.014508254,
    -0.011038054, 0.013906411, 0.019399827, -0.0042129, 0.010922807,
    -0.00731175, -0.015827186, 0.0056406762, 0.034958106, -0.02763355,
    0.011403001, 0.008329761, 0.004990814, -0.02418896, -0.0007531039,
    0.0050068204, 0.021154135, -0.019361412, 0.00021188549, 0.027864043,
    -0.0052149044, -0.020308994, -0.028939677, 0.009360577, 0.0015078085,
    -0.011178911, -0.0003903575, -0.006156084, 0.00847702, -0.0030940485,
    0.03303733, -0.0029836039, 0.006232915, -0.0018631518, 0.0003479404,
    -0.013893606, 0.010116082, 0.012670713, -0.005871169, -0.017363807,
    -0.007177296, -0.006901985, -0.011639897, -0.0025050107, -0.020898033,
    0.0065466417, -0.0012388999, 0.012427415, -0.003105253, -0.009296551,
    -0.005871169, -0.039491136, -0.008240125, -0.016979652, 0.013304569,
    0.0076446845, -0.023984078, -0.0017591098, 0.013791164, -0.011684715,
    -0.0034766027, 0.014021657, -0.024355428, -0.02678841, 0.008137683,
    -0.018849205, -0.010826768, -0.018900426, 0.0028091334, 0.0074782176,
    -0.017389417, 0.004664282, 0.002639465, -0.0071580885, -0.015289369,
    0.0225499, -0.0007447005, 0.019361412, 0.026404254, 0.01566072, 0.017978454,
    0.018721154, -0.017427832, 0.022818808, -0.0023465469, 0.022844417,
    -0.026224982, -0.0011572669, 0.009495031, 0.006450603, -0.019899229,
    0.012356986, 0.005980013, 0.008112073, 0.026429864, 0.002706692,
    0.030168973, -0.0015430226, -0.024624337, -0.00230493, 0.019451048,
    -0.026609138, 0.027146954, 0.017607104, 0.010967625, 0.006389778,
    0.0070556467, -0.020885227, 0.012062468, -0.0058775716, -0.009283746,
    0.0070492444, -0.025635945, 0.014047268, 0.028811626, 0.019515075,
    0.021423044, -0.030373856, -0.0064922194, 0.0141112935, 0.028196977,
    0.03836428, 0.008220918, -0.020641929, 0.0076574897, 0.020193748,
    0.004324945, 0.015750356, 0.01496924, 0.0059864153, -0.018490661,
    -0.044638813, 0.050554797, -0.011934415, 0.0012901205, 0.01414971,
    0.022473067, -0.027787212, 0.027659161, 0.015596693, 0.004420984,
    0.015302175, -0.0045842496, 0.020987669, 0.00090356456, -0.0018439441,
    -0.025021296, -0.0040688417, 0.015110097, -0.007619074, -0.00862428,
    0.013304569, 0.029016508, 0.029707987, 0.012709128, 0.031218996,
    0.0069211926, -0.014008853, 0.0057559223, -0.0031708796, -0.0059159873,
    -0.0050420347, 0.0020456254, -0.0072861398, -0.02188403, 0.005957604,
    0.03285806, -0.0006498622, 0.035060547, -0.015161318, -0.0037935306,
    -0.0050964565, -0.023587117, 0.027275005, -0.009866381, -0.030220194,
    0.020180942, -0.0015854398, -0.0014477841, -0.0009323762, -0.021730369,
    0.00042217036, -0.008259333, 0.008080061, 0.003164477, 0.017530274,
    -0.007081257, 0.0029451884, -0.0022521087, 0.017197339, 0.02919578,
    -0.00013935623, 0.006901985, -0.004222504, 0.008566657, 0.008214515,
    -0.024201766, -0.020654734, 0.019515075, -0.0023945663, 0.00065266335,
    -0.022409042, -0.01791443, -0.022460263, 0.013535062, -0.0037038946,
    -0.0030172174, -0.0010732331, 0.010871586, 0.006287337, -0.014136904,
    -0.015007655, 0.024393843, -0.0035790442, -0.005592657, 0.00035694402,
    0.004161679, 0.013355789, 0.09173621, 0.01680038, 0.015827186, 0.011812766,
    -0.005016424, -0.0017543079, -0.012011247, -0.049453553, 0.019796789,
    -0.018605908, 0.008515436, -0.016467445, -0.0013397406, 0.025968878,
    0.0034413885, 0.014982046, 0.012030454, -0.0065242327, -0.00195759,
    -0.016685132, -0.0034926094, 0.026148152, 0.0062585254, 0.014047268,
    0.00006387578, 0.014457033, 0.010730729, 0.010231328, 0.0007366973,
    -0.0145722795, -0.020283384, 0.01987362, 0.005323748, 0.026276203,
    0.008131281, 0.028888457, -0.0028603543, 0.019643126, 0.0020104111,
    0.017197339, 0.004750717, 0.025264595, 0.0027771206, -0.016569886,
    0.020513877, -0.0067291153, -0.009559057, 0.02448348, 0.018349804,
    -0.00056742894, -0.0028875652, 0.010199316, -0.025290204, -0.0049107815,
    0.003905576, 0.0151741225, -0.010621886, -0.027172564, -0.013003647,
    0.008208112, -0.02686524, 0.0054998193, 0.0004465802, 0.0006954806,
    -0.0037903294, -0.041514352, -0.015993653, -0.025213374, -0.008297748,
    0.01380397, -0.019899229, -0.024649946, -0.017722351, 0.009949614,
    0.018554688, 0.0076959054, 0.0049459958, -0.0032749213, -0.003425382,
    -0.00037175, 0.0143417865, -0.04282048, 0.05001698, -0.015904017,
    -0.011665507, 0.012184116, 0.028657963, -0.00069387996, -0.016992457,
    0.040310666, -0.00087315234, 0.031423878, 0.02683963, -0.034830052,
    0.008387384, 0.015238148, 0.0045714444, 0.010244134, -0.0116078835,
    -0.0074654124, -0.022741977, -0.012177714, -0.02537984, -0.019771177,
    0.005643877, 0.014725942, 0.010602678, 0.022114523, -0.03372881,
    0.004587451, 0.025418255, -0.023804804, 0.01650586, -0.01913092,
    0.018119311, 0.034164187, 0.0074590095, -0.005951201, 0.006082454,
    -0.033805642, 0.021666342, -0.035752025, 0.02919578, -0.023958467,
    -0.008208112, 0.014982046, -0.017824793, -0.027403057, 0.0003281324,
    -0.02418896, -0.0007002826, -0.0069532054, -0.017811988, -0.024304207,
    -0.010340172, -0.04458759, -0.0034573951, 0.0024970076, -0.028094536,
    -0.016749159, -0.025059711, -0.006284136, -0.017965648, -0.0017270969,
    -0.01910531, -0.029451884, 0.000026060516, 0.016979652, -0.0050452356,
    0.015097292, -0.024368232, 0.01417532, -0.011076469, 0.013906411,
    0.011198118, -0.035367873, 0.0143417865, 0.011409404, 0.032473903,
    0.010154497, 0.04835231, 0.025789605, 0.03600813, -0.020155333,
    -0.008265736, -0.015161318, 0.003281324, 0.00071268756, -0.0032637168,
    0.0103081595, 0.015750356, 0.031270217, 0.015494252, 0.0017623111,
    0.008713916, -0.0036622777, -0.005496618, 0.00006787739, -0.011319768,
    -0.017747961, -0.0012405006, -0.00009223722, -0.015430226, 0.0023881637,
    0.006200902, -0.0020152132, 0.00939259, -0.0031148568, 0.011031651,
    -0.018426634, 0.020629125, -0.017286975, -0.001984801, -0.009655096,
    0.012331376, -0.004773126, -0.01987362, -0.01618573, 0.018477855,
    0.009725524, 0.013855191, 0.00021648736, 0.003982407, 0.00015776366,
    0.0025434264, 0.008144086, 0.0014461835, -0.01417532, 0.012401804,
    0.033062942, -0.0025642347, -0.018401025, 0.011928013, 0.011223729,
    0.0107755475, 0.0038703617, 0.0008651491, 0.017094897, -0.022409042,
    -0.027428668, -0.010717925, -0.016390614, 0.013932021, 0.015250954,
    0.013099685, 0.029887259, 0.015609498, 0.015609498, 0.0008379381,
    0.001355747, 0.0023161345, 0.01417532, 0.03974724, -0.0034734015,
    -0.014008853, 0.004763522, -0.0113773905, 0.0064698104, -0.023331014,
    0.000090636575, 0.03739109, -0.001979999, -0.003953595, 0.009418201,
    -0.017018067, 0.018106505, -0.005355761, -0.002572238, -0.012081675,
    -0.008733124, -0.024381038, 0.01717173, -0.012677115, 0.018465051,
    0.006223311, 0.005102859, 0.0012501044, 0.0033933693, -0.0016822788,
    0.0026970883, 0.00075790583, 0.02609693, -0.0055030202, -0.0015782368,
    -0.0203218, 0.01950227, 0.001534219, -0.019438243, 0.0055478388,
    0.019822398, -0.018055284, -0.016006459, -0.030117752, 0.007868775,
    -0.010993236, 0.025584724, 0.0052533196, -0.0043601594, -0.017056482,
    0.0010132089, 0.030629959, 0.0071388804, -0.022652341, 0.008304151,
    -0.005301339, -0.031884864, -0.019591905, 0.0029836039, 0.015942432,
    -0.028709184, -0.035495922, -0.013547867, 0.020398632, 0.024176154,
    0.013714334, -0.0025594328, -0.003105253, 0.013355789, -0.00081672956,
    0.0017815188, -0.011166106, 0.01881079, -0.031731203, -0.0010044053,
    -0.0108651845, -0.021679148, -0.0004966004, -0.020603513, -0.030527517,
    -0.01576316, -0.0066778944, -0.01187039, 0.00011554662, -0.018119311,
    0.004369763, 0.022319406, 0.012632297, -0.012139298, -0.03616179,
    0.014034463, -0.013637503, 0.012779556, -0.0024297803, -0.027735991,
    -0.0034605963, -0.00146219, 0.00063465605, 0.018593103, -0.01761991,
    -0.0038351475, 0.012081675, 0.009200512, -0.008214515, -0.028914066,
    -0.015455836, -0.0032028924, -0.009463019, -0.0009283746, -0.008182501,
    0.023177352, 0.02842747, 0.015699135, 0.028990898, -0.00939259,
    -0.032730006, -0.01729978, -0.026967682, -0.019335803, -0.021179747,
    -0.0149436295, -0.008675501, 0.043307073, -0.009181305, -0.008534644,
    -0.033062942, -0.019822398, -0.036699608, -0.017235754, -0.0009603875,
    -0.00019948049, 0.0013917616, -0.012075272, 0.0023881637, 0.009181305,
    0.004651477, -0.0107755475, -0.0030732402, -0.0071004652, 0.0040848483,
    -0.012324973, -0.0076574897, -0.01648025, -0.03895332, -0.009808758,
    0.007766334, -0.015507057, 0.006901985, 0.017082093, -0.0130420625,
    -0.0048755673, 0.014764357, -0.008201709, 0.022242574, 0.006991621,
    -0.0018663531, -0.026250592, -0.020808397, 0.02339504, -0.015596693,
    -0.016275367, -0.00651783, 0.022882834, -0.025763996, -0.006434596,
    -0.018554688, -0.019041283, 0.013496646, 0.0017318989, 0.005487014,
    0.017120508, -0.011863987, -0.002721098, 0.014764357, -0.003313337,
    0.0014902013, 0.004324945, -0.020040086, 0.00023009285, 0.010807561,
    -0.030245803, -0.007350166, -0.024419453, -0.009360577, -0.01152465,
    -0.0080416445, -0.016467445, -0.0145722795, -0.036699608, 0.018913232,
    -0.0040560365, -0.0051092617, 0.0053397547, -0.025828023, -0.041847285,
    -0.0036046545, -0.015302175, 0.02755672, -0.009610278, 0.0056854943,
    0.03534226, -0.023062106, -0.018618712, 0.024893245, 0.01913092,
    0.0025322218, 0.022690756, 0.23090278, -0.010372185, -0.0034926094,
    0.020629125, -0.0027371044, 0.008297748, 0.0040656403, 0.0046898923,
    0.00451062, -0.0022809203, -0.0037839268, -0.008509033, -0.022076108,
    0.005771929, -0.0020504273, -0.007811152, -0.030220194, -0.014393007,
    -0.015417421, 0.0060632466, 0.022421848, 0.0028283412, 0.0013221335,
    -0.023190157, 0.043076582, 0.010525847, -0.0074013863, 0.00401442,
    0.0056886952, 0.003982407, -0.008137683, -0.002391365, 0.009917602,
    0.018644324, 0.013022855, -0.0077727363, 0.015071682, -0.004565042,
    0.008905994, -0.00082113134, 0.0116078835, 0.010634691, -0.0113773905,
    -0.026685968, 0.013919217, -0.0034766027, 0.0013957632, -0.037903294,
    -0.0090596555, 0.018900426, -0.016224146, -0.02837625, 0.022665145,
    0.037442308, 0.0014293768, -0.016966846, 0.0037006931, 0.0027130947,
    -0.015724745, -0.002476199, -0.015494252, 0.022383431, -0.008156891,
    0.015161318, 0.0035374274, 0.010942015, -0.0017479053, 0.024995686,
    0.023843221, -0.008169697, -0.0031292627, 0.006309746, 0.014008853,
    -0.000785517, -0.009008435, -0.012760349, 0.00939259, -0.00877154,
    0.019284582, 0.0018087298, -0.00827854, 0.012427415, -0.01078195,
    -0.019655932, -0.00008668498, -0.0062041036, 0.0067995437, 0.02683963,
    0.010564263, 0.0062361164, -0.0028571528, -0.0033677588, -0.016595496,
    0.0076831, 0.022831613, 0.0007967215, 0.0037455114, 0.012286558,
    -0.011108482, -0.012830777, -0.008380982, 0.03229463, 0.0032941292,
    -0.016006459, -0.008432202, 0.008112073, -0.0001246503, 0.020411436,
    0.0046450743, -0.0030892466, 0.006024831, -0.015942432, 0.011556664,
    -0.0005182091, 0.027172564, -0.010269743, 0.0050004176, 0.0023945663,
    0.008637085, 0.003425382, 0.020385826, -0.014072878, -0.0063257525,
    0.001231697, -0.0005126068, 0.001105246, -0.00040216226, 0.000897162,
    0.007862372, -0.016236952, 0.00936698, 0.009456616, 0.0018423434,
    -0.018119311, -0.030220194, 0.0025114133, 0.024432259, 0.002381761,
    -0.012702726, -0.032730006, 0.0009131685, -0.025367036, -0.013086881,
    -0.0024105727, 0.0049331905, -0.021743173, 0.016416224, -0.03070679,
    -0.005003619, -0.028401861, -0.022639535, -0.020488268, 0.003630265,
    -0.016544275, 0.00037495128, 0.0130420625, -0.019015674, -0.010673107,
    0.009795953, -0.0053077415, -0.02904212, 0.021371823, 0.027377447,
    -0.015507057, -0.0052309106, 0.0047379117, -0.16318905, 0.027659161,
    0.009437408, -0.030373856, 0.02297247, 0.021794394, 0.00956546,
    -0.004398575, -0.035444703, 0.014072878, 0.013752749, -0.0428717,
    -0.01801687, -0.0045906524, 0.013150906, -0.020910837, -0.0056406762,
    -0.006665089, 0.020462656, 0.024509089, 0.012568272, -0.007843165,
    0.018580297, -0.009405395, 0.02366395, -0.0024025694, -0.02763355,
    0.026327424, -0.012049662, -0.004132868, -0.011902402, -0.006537038,
    -0.0072349194, -0.004949197, 0.009866381, -0.0031708796, 0.020052891,
    0.0012549064, -0.0031532724, 0.023779195, 0.021704758, 0.025584724,
    0.008368176, -0.00899563, -0.018272974, 0.0144314235, 0.023984078,
    0.007817554, 0.0069275955, -0.029375052, 0.008368176, -0.00083313615,
    -0.006748323, -0.0051124627, 0.00862428, 0.01925897, -0.014930825,
    0.017120508, -0.013483841, -0.0062489216, -0.0076126717, -0.022396237,
    0.007766334, -0.009149292, -0.019668736, -0.0037711216, 0.005883974,
    0.005147677, -0.018951647, 0.010839574, 0.0107243275, -0.010813964,
    -0.00200721, -0.024624337, 0.0029900065, 0.0031532724, -0.03664839,
    -0.0045042173, -0.0031308632, -0.0040208222, 0.0028315426, 0.02267795,
    0.002941987, 0.021602316, -0.03836428, 0.0040336275, 0.005608663,
    -0.017978454, 0.010340172, -0.01963032, 0.031859256, -0.018106505,
    -0.00802884, 0.0042865295, 0.007529438, 0.011966429, -0.005099658,
    0.0026698774, 0.003588648, -0.019809593, -0.011614286, 0.0063129473,
    0.0032525123, -0.0020232163, 0.027735991, 0.00018817592, -0.0038543553,
    0.015468641, 0.026160955, -0.0027595134, -0.01534059, 0.015327785,
    0.011620689, 0.02111572, -0.010769146, 0.036571555, 0.0056246696,
    -0.014918019, 0.022908444, -0.013368594, 0.04223144, -0.01878518,
    -0.012651505, 0.00021788792, -0.0057879356, -0.0016326588, -0.08016034,
    -0.019169334, -0.013650308, -0.0035470312, 0.0061048632, 0.007849568,
    0.0025274197, -0.006076052, -0.020385826, 0.0054678065, -0.009776745,
    -0.013855191, -0.012017649, -0.028657963, 0.013330178, -0.013214932,
    0.0017687137, -0.009431005, -0.020462656, 0.0014253751, -0.011383793,
    -0.013240542, 0.0142009305, -0.010205718, -0.02575119, -0.015519862,
    -0.015097292, -0.0011332573, 0.016121706, -0.0027098935, -0.010500236,
    -0.01769674, 0.013996047, -0.005970409, -0.005147677, -0.007939204,
    -0.033216603, 0.0034285835, -0.0020200151, -0.051246278, -0.0013461432,
    0.009002033, 0.032730006, -0.03211536, -0.0051540798, 0.0009972024,
    -0.023113327, 0.0011676712, 0.003937589, -0.0018551486, -0.00016576689,
    -0.00731175, -0.028990898, -0.011531053, 0.019438243, -0.011819169,
    -0.008067255, 0.022908444, -0.019066893, -0.029707987, 0.024048103,
    0.0019559893, -0.025085323, 0.022870028, 0.009840771, 0.0106795095,
    0.019566296, 0.016160121, 0.000770711, -0.0037551152, -0.009437408,
    0.02619937, -0.0322178, -0.016441835, -0.034061745, -0.003050831,
    -0.022959664, -0.014853993, 0.02411213, -0.021320604, -0.021128526,
    0.0026490688, -0.0018199343, -0.01754308, 0.0064025833, 0.009238928,
    -0.0090596555, 0.007350166, 0.0014045667, -0.033447094, -0.013471035,
    0.019297386, -0.0022729172, -0.0018807589, -0.0011724731, -0.010173705,
    -0.030348245, 0.03001531, 0.009507837, -0.014316177, -0.012152104,
    -0.0042929323, -0.06264288, 0.039286252, -0.0114222085, -0.01695404,
    -0.0015406216, 0.00052821316, 0.037852075, -0.013752749, 0.0019223756,
    0.004520224, -0.00032673182, 0.02911895, 0.013253348, -0.009578265,
    -0.010365782, -0.025968878, 0.020027282, 0.0049011777, 0.023996882,
    -0.0038127385, -0.017888818, -0.027403057, -0.0006822753, 0.025687166,
    0.016941236, 0.02069315, -0.028888457, 0.015161318, -0.02386883,
    -0.02037302, -0.017466247, -0.02763355, -0.006373772, 0.03288367,
    -0.009795953, -0.004949197, 0.025853632, 0.051707264, 0.00010574267,
    0.004520224, -0.007542243, -0.036315452, 0.0059159873, -0.01576316,
    -0.011639897, 0.0006466609, -0.019271776, 0.011896, 0.018938841,
    -0.001258908, -0.022806002, 0.013266153, -0.02911895, -0.009226123,
    -0.00087795424, -0.025469476, -0.005829552, -0.019617517, -0.0028427471,
    -0.024752388, 0.041693624, 0.022280991, 0.022613924, 0.007996826,
    0.01799126, 0.0031836845, 0.02297247, -0.013330178, 0.021077305,
    -0.023228573, -0.011928013, 0.013125296, -0.0025226178, -0.005643877,
    0.02381761, 0.00008968619, -0.011114885, 0.0066330764, -0.026967682,
    0.043076582, 0.030066531, 0.007868775, 0.014533864, -0.018900426,
    0.028606743, 0.031910475, 0.014918019, 0.00079392036, -0.03160315,
    0.012017649, -0.029836038, 0.01875957, -0.00042016953, 0.003466999,
    0.002689085, -0.019348606, 0.01576316, 0.021730369, 0.003992011,
    0.008112073, -0.0044722045, 0.010167303, -0.027095733, -0.023804804,
    -0.025085323, -0.00043977745, -0.00015356197, -0.030527517, -0.0100776665,
    0.031347048, -0.003675083, 0.017363807, 0.0138808, -0.0043217437, 0.0027259,
    0.0063353563, 0.00936698, -0.017581495, -0.031961698, 0.022473067,
    -0.009821563, -0.011595079, 0.021179747, 0.005442196, -0.005390975,
    0.031014115, -0.013688724, -0.0065210313, 0.0128563875, 0.008220918,
    0.004363361, -0.016416224, -0.016198536, -0.014239346, -0.008541047,
    0.0045362306, -0.007971216, 0.021461459, -0.0015126104, 0.064640485,
    0.01452106, -0.013522256, 0.0011740738, -0.0015494252, 0.022537094,
    0.03777524, -0.0063609667, -0.016300978, -0.0015670323, 0.015532668,
    0.004913983, 0.004443393, -0.026916461, 0.0065434403, 0.011319768,
    -0.0088739805, -0.0037006931, -0.017389417, 0.030297024, -0.0029627956,
    -0.004785931, -0.0059992205, -0.005397378, -0.013624698, 0.021384628,
    0.009885589, -0.017811988, -0.032397073, -0.039465524, 0.0067227124,
    -0.0022697158, -0.019668736, -0.00061904977, 0.010641093, -0.0032060936,
    -0.014290567, 0.017850403, 0.0049876124, 0.015673524, 0.0076318793,
    0.025123738, -0.0047795284, 0.012779556, -0.013714334, 0.009277344,
    -0.009834368, -0.002580241, -0.02349748,
  ], //1
  [], //2
  [], //3
  [], //4
  [], //5
];

export async function getSrcEmbeddings(id: number) {
  return new Float32Array(embeddings[id - 1]);
}

export async function getTextSrcEmbeddings(id: number) {
  return new Float32Array(textEmbeddings[id - 1]);
}
