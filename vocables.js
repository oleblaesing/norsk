const vocables = (german, norsk) => [
  // Voc. Lection 1
  { [german]: ['arbeiten'], [norsk]: ['arbeide'] },
  { [german]: ['alle'], [norsk]: ['alle'] },
  { [german]: ['alle zusammen'], [norsk]: ['alle sammen'] },
  { [german]: ['ein Au-pair'], [norsk]: ['en au pair'] },
  { [german]: ['nur'], [norsk]: ['bare'] },
  { [german]: ['ein Tag'], [norsk]: ['en dag'] },
  { [german]: ['sie'], [norsk]: ['de', 'hun'] },
  { [german]: ['dort'], [norsk]: ['der'] },
  { [german]: ['ihr'], [norsk]: ['dere'] },
  { [german]: ['das', 'es'], [norsk]: ['det'] },
  { [german]: ['dies'], [norsk]: ['dette'] },
  { [german]: ['du'], [norsk]: ['du'] },
  { [german]: ['ein Elch'], [norsk]: ['en elg'] },
  { [german]: ['englisch'], [norsk]: ['engelsk'] },
  { [german]: ['bin', 'bist', 'ist', 'sind', 'seid'], [norsk]: ['er'] },
  { [german]: ['ein Urlaub'], [norsk]: ['en ferie'] },
  { [german]: ['im Urlaub sein'], [norsk]: ['være på ferie'] },
  { [german]: ['aus', 'von'], [norsk]: ['fra'] },
  { [german]: ['Frankreich'], [norsk]: ['Frankrike'] },
  { [german]: ['französisch'], [norsk]: ['fransk'] },
  { [german]: ['gern'], [norsk]: ['gjerne'] },
  { [german]: ['machen', 'tun'], [norsk]: ['gjøre'] },
  { [german]: ['gut'], [norsk]: ['god'] },
  { [german]: ['haben'], [norsk]: ['ha'] },
  { [german]: ['er'], [norsk]: ['han'] },
  { [german]: ['hallo', 'hey', 'hei'], [norsk]: ['hei'] },
  { [german]: ['hier'], [norsk]: ['her'] },
  { [german]: ['heißen'], [norsk]: ['hete'] },
  { [german]: ['was', 'wie'], [norsk]: ['hva'] },
  { [german]: ['wer'], [norsk]: ['hvem'] },
  { [german]: ['wo'], [norsk]: ['hvor'] },
  { [german]: ['pst!'], [norsk]: ['hysj!'] },
  { [german]: ['in'], [norsk]: ['i'] },
  { [german]: ['Italien'], [norsk]: ['Italia'] },
  { [german]: ['italienisch'], [norsk]: ['italiensk'] },
  { [german]: ['ja'], [norsk]: ['ja'] },
  { [german]: ['ich'], [norsk]: ['jeg'] },
  { [german]: ['kann', 'kannst', 'können', 'könnt'], [norsk]: ['kan'] },
  { [german]: ['kommen'], [norsk]: ['komme'] },
  { [german]: ['können'], [norsk]: ['kunne'] },
  { [german]: ['frei'], [norsk]: ['ledig'] },
  { [german]: ['lernen'], [norsk]: ['lære'] },
  { [german]: ['ein Lehrer', 'eine Lehrerin'], [norsk]: ['en lærer'] },
  { [german]: ['ein bisschen', 'bisschen', 'wenig'], [norsk]: ['litt'] },
  { [german]: ['man'], [norsk]: ['man'] },
  { [german]: ['mehr'], [norsk]: ['mer'] },
  { [german]: ['nein'], [norsk]: ['nei'] },
  { [german]: ['Norwegen'], [norsk]: ['Norge'] },
  { [german]: ['norwegisch'], [norsk]: ['norsk'] },
  { [german]: ['und'], [norsk]: ['og'] },
  { [german]: ['auch'], [norsk]: ['også'] },
  { [german]: ['auf', 'in'], [norsk]: ['på'] },
  { [german]: ['zusammen'], [norsk]: ['sammen'] },
  { [german]: ['sitzen'], [norsk]: ['sitte'] },
  { [german]: ['sprechen'], [norsk]: ['snakke'] },
  { [german]: ['ein Sprachkurs'], [norsk]: ['et språkkurs'] },
  { [german]: ['im Sprachkurs'], [norsk]: ['på språkkurs'] },
  { [german]: ['ein Student', 'eine Studentin'], [norsk]: ['en student'] },
  { [german]: ['studieren'], [norsk]: ['studere'] },
  { [german]: ['die Schweiz', 'Schweiz'], [norsk]: ['Sveits'] },
  { [german]: ['schweizerisch'], [norsk]: ['sveitsisk'] },
  { [german]: ['zu', 'nach', 'in', 'bis'], [norsk]: ['til'] },
  { [german]: ['deutsch'], [norsk]: ['tysk'] },
  { [german]: ['Deutschland'], [norsk]: ['Tyskland'] },
  { [german]: ['willkommen in'], [norsk]: ['velkommen til'] },
  { [german]: ['wir'], [norsk]: ['vi'] },
  { [german]: ['will', 'willst', 'wollen', 'wollt'], [norsk]: ['vil'] },
  { [german]: ['wollen'], [norsk]: ['ville'] },
  { [german]: ['sein'], [norsk]: ['være'] },
  { [german]: ['zu (vor Infinitiv)', 'zu'], [norsk]: ['å'] },
  { [german]: ['entspannen'], [norsk]: ['slappe av', 'avspenne'] },

  // From here sentences to practise (Lection 1)
  { [german]: ['Wie heißt du?', 'Wie heißen Sie?'], [norsk]: ['Hva heter du?'] },
  { [german]: ['Ich heiße Thomas.'], [norsk]: ['Jeg heter Thomas.'] },
  { [german]: ['Ich bin aus Deutschland.', 'Ich komme aus Deutschland.'], [norsk]: ['Jeg er fra Tyskland.', 'Jeg kommer fra Tyskland'] },
  { [german]: ['Woher kommst du?'], [norsk]: ['Hvor kommer du fra?'] },
  { [german]: ['Was machst du in Norwegen?'], [norsk]: ['Hva gjør du i Norge?'] },
  { [german]: ['Ich studiere. Ich bin Student.'], [norsk]: ['Jeg studerer. Jeg er student.'] },
  { [german]: ['Ich arbeite. Ich bin Lehrer.'], [norsk]: ['Jeg arbeider. Jeg er lærer.'] },
  { [german]: ['Ich mache Urlaub hier.'], [norsk]: ['Jeg er på ferie her.'] },
  { [german]: ['Spricht Anna italienisch?'], [norsk]: ['Snakker Anna italiensk?'] },
  { [german]: ['Wer sitzt dort?'], [norsk]: ['Hvem sitter der?'] },
  { [german]: ['Ich möchte gerne in Norwegen studieren.'], [norsk]: ['Jeg vil gjerne studere i Norge.'] },
  { [german]: ['Möchtet ihr auch spanisch lernen?'], [norsk]: ['Vil dere også lære spansk?'] },
  { [german]: ['Wo können wir sitzen?'], [norsk]: ['Hvor kan vi sitte?'] },
  { [german]: ['Wo seid ihr im Urlaub?'], [norsk]: ['Hvor er dere på ferie?'] },
  { [german]: ['Woher kommst du?'], [norsk]: ['Hvor er du fra?'] },
  { [german]: ['Wie geht es dir?'], [norsk]: ['Hvordan har du det?', 'Hvordan går det?'] },
  { [german]: ['Danke, mir geht es gut.'], [norsk]: ['Takk, ganske bra.'] },
  
  // Old vocabulary
  { [german]: ['nie'], [norsk]: ['aldri'] },
  { [german]: ['dass'], [norsk]: ['at'] },
  {
    [german]: ['ein Kinderlied', 'Kinderlied'],
    [norsk]: ['en barnesang', 'barnesang'],
  },
  { [german]: ['Kinderlieder'], [norsk]: ['Barnesanger'] },
  { [german]: ['das Kinderlied'], [norsk]: ['Barnesangen'] },
  { [german]: ['die Kinderlieder'], [norsk]: ['Barnesangene'] },
  { [german]: ['ein Bild'], [norsk]: ['et bilde'] },
  { [german]: ['das Bild'], [norsk]: ['Bildet'] },
  { [german]: ['ein Buch'], [norsk]: ['ei bok'] },
  { [german]: ['das Buch'], [norsk]: ['Boka'] },
  { [german]: ['Bücher'], [norsk]: ['Bøker'] },
  { [german]: ['ein Dichter'], [norsk]: ['en dikter'] },
  { [german]: ['eigentlich'], [norsk]: ['egentlig'] },
  { [german]: ['nach'], [norsk]: ['etter'] },
  { [german]: ['ein Fall'], [norsk]: ['et fall'] },
  { [german]: ['ein Geburtstag'], [norsk]: ['en fødselsdag'] },
  { [german]: ['bevor'], [norsk]: ['før'] },
  { [german]: ['bekommen'], [norsk]: ['få'] },
  { [german]: ['ein Geschenk'], [norsk]: ['ei gave'] },
  { [german]: ['geben'], [norsk]: ['gi'] },
  { [german]: ['gratulieren'], [norsk]: ['gratulere'] },
  { [german]: ['ein Grund'], [norsk]: ['en grunn'] },
  { [german]: ['eine Laune'], [norsk]: ['et humør'] },
  { [german]: ['gemütlich'], [norsk]: ['hyggelig'] },
  { [german]: ['ein Herbst'], [norsk]: ['en høst'] },
  { [german]: ['ein Eis'], [norsk]: ['en is'] },
  { [german]: ['eine Katze'], [norsk]: ['ei katte'] },
  { [german]: ['liegen'], [norsk]: ['ligge'] },
  { [german]: ['klein'], [norsk]: ['liten'] },
  { [german]: ['ein Leben'], [norsk]: ['et liv'] },
  { [german]: ['mitten in'], [norsk]: ['midt i'] },
  { [german]: ['wenn'], [norsk]: ['når'] },
  { [german]: ['wunderschön'], [norsk]: ['nydelig'] },
  { [german]: ['scheinen'], [norsk]: ['skinne'] },
  { [german]: ['sollen'], [norsk]: ['skulen'] },
  { [german]: ['verbergen'], [norsk]: ['skjule'] },
  { [german]: ['süß'], [norsk]: ['søt'] },
  { [german]: ['eine Stunde'], [norsk]: ['en time'] },
  { [german]: ['ganz flach'], [norsk]: ['langflat'] },
  { [german]: ['ein Zeh'], [norsk]: ['ei tå'] },
  { [german]: ['zitieren'], [norsk]: ['sitere'] },
  { [german]: ['ein Text'], [norsk]: ['ei tekst'] },
  { [german]: ['der Text'], [norsk]: ['teksta'] },
  { [german]: ['die Texte'], [norsk]: ['tekstene'] },
  { [german]: ['Texte'], [norsk]: ['tekster'] },
  { [german]: ['entscheiden'], [norsk]: ['bestemme'] },
  { [german]: ['bleiben'], [norsk]: ['bli'] },
  { [german]: ['blau'], [norsk]: ['blå'] },
  { [german]: ['braun'], [norsk]: ['brun'] },
  { [german]: ['eine Hose'], [norsk]: ['ei bukse'] },
  { [german]: ['die Hose'], [norsk]: ['buksa'] },
  { [german]: ['Hosen'], [norsk]: ['bukser'] },
  { [german]: ['die Hosen'], [norsk]: ['bukserene'] },
  { [german]: ['dann'], [norsk]: ['da'] },
  { [german]: ['echt'], [norsk]: ['ekte'] },
  { [german]: ['lieben'], [norsk]: ['elske'] },
  { [german]: ['tatsächlich'], [norsk]: ['faktisk'] },
  { [german]: ['eine Farbe'], [norsk]: ['en farge'] },
  { [german]: ['voll'], [norsk]: ['full'] },
  { [german]: ['ein Pullover'], [norsk]: ['en genser'] },
  { [german]: ['grün'], [norsk]: ['grønn'] },
  { [german]: ['grå'], [norsk]: ['grau'] },
  { [german]: ['gelb'], [norsk]: ['gul'] },
  { [german]: ['anhaben'], [norsk]: ['ha på seg'] },
  { [german]: ['weiß'], [norsk]: ['hvit'] },
  { [german]: ['niemand'], [norsk]: ['ingen'] },
  { [german]: ['kalt'], [norsk]: ['kald'] },
  { [german]: ['vielleicht'], [norsk]: ['kanskje'] },
  { [german]: ['lang'], [norsk]: ['lang'] },
  { [german]: ['dunkel'], [norsk]: ['mørk'] },
  { [german]: ['die Natur'], [norsk]: ['en natur'] },
  { [german]: ['ein Name'], [norsk]: ['et navn'] },
  { [german]: ['neu'], [norsk]: ['ny'] },
  { [german]: ['versuchen'], [norsk]: ['prøve'] },
  { [german]: ['spielen'], [norsk]: ['spille'] },
  { [german]: ['ein Bart'], [norsk]: ['et skjegg'] },
  { [german]: ['ein Stein'], [norsk]: ['en stein'] },
  { [german]: ['schwarz'], [norsk]: ['svart'] },
  { [german]: ['zurück'], [norsk]: ['tilbake'] },
  { [german]: ['eine Sache'], [norsk]: ['en ting'] },
  { [german]: ['dick'], [norsk]: ['tjukk'] },
  { [german]: ['typisch'], [norsk]: ['typisk'] },
  { [german]: ['sehr'], [norsk]: ['veldig'] },
  { [german]: ['wichtig'], [norsk]: ['viktig'] },
]