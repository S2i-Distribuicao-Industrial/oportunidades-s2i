"use strict";
/* ===================== dados do portal (lidos do formulário em 14/10/2026) ===================== */
const FAM_RAW = "ADVIS RENOVÁVEL. SER>AVISO DA RECA|Consultoria|EXECUÇÃO DA RECA|Negócios IMSERV|OTHER SUREN|SFP Outro para ESEEP|Serviços conectados|Serviços de consultoria|Serviços de engenharia|TRANSAÇÕES RECA|Z APOSENTADO\nALIMENTAÇÃO & SERVIÇOS SUST>Managed Services|OTHER SUSUP|RA CLÁSSICO|RECA|SFP Outro para ESSMS|SUCESSO DO CLIENTE|Z APOSENTADO\nAUTOMAÇÃO DE MÁQUINAS, SEGURANÇA & SERVO MOTOR>EUROTHERM|L2HW BRUSHL PM MOTORS|L2HW DEDIT MOTION SYST|L2HW GENE MOT.CTRL SER|L2HW INTEGRATED DRIVES|L2HW INTERFACE/PREWIRI|L2HW MOTION ACCESS|L2HW NANO CONTROLLERS|L2HW OPTIM FLEX MACH|L2HW PERF FLEX.MACH CT|L2HW PIECES & MAT CTRL|L2HW SERVO SYSTEMS|L2HW STEPPER SYSTEMS|L2SW FLEXIB MACH CTRL|L2SYS ROBO MOTION SYST|MACHINE CTRL MEDIUM|MACHINE OLD EDGE CTRL|MACHINE POWER SUPPLY|MACHINE SAFETY|MOTION DAB|MOTION MEDIUM SYS|MOTION OLD GDP|SPF OTHE 4 IDMST\nAlimentação trifásica (CC) & Instalação)>3 PHASE UPS|Outros|Potência trifásica\nCAPACITOR, MULTI MEDIDORES E FILTROS>MEDIDORES & PORTAS DE ENTRADA|OTHER DPLVP|PQ PRODUCT & EQUIPMENT|PWR MGMT HARDWARE|PWR MGMT SYSTEMS|PWR QUALITY CORRECTION\nCLP DE PROCESSO & SWITCHES>CONTROLO PAC MÉDIO|EAE CORE|EAE DISTRIB PLATFORM|I/O|M340 PAC PEQUENO|M580 PAC GRANDE|MICRO PLC|NUCLEAR|OFERTA DE SOFTWARE HMI|PAC PLATFORM LEGACY|PAC Softwares|Projetos HDCS indiretos|REDES INDUSTRIAIS|Redes_Fieldbus|SFP Outro para IDPAC|SISTEMAS IO\nCOMANDO E SINALIZAÇÃO>Advisor Digital Offers|Controle E Monitoramento|Controle IEC|Controle médio|IEC CONT.HAND&HOISTING|LK SIG & CONTROL|MEDIUM ELECTROM RELAYS|MEDIUM ELECTRON RELAYS|MEDIUM SOLID ST. RELAY|Peça E Matéria Da Aaf|Peças De Material Cds|Relés industriais|SFP Outro para IDSIG|Sinalização|Sinalização média\nCONTATOR DJ MOTOR E RELE TeSys>CTR NEMA|Contatores|Ctr Médio|Ctr Optimum IEC|Ctr Optimum Nema|EASY TESYS CONTROL|EASY TESYS POWER|EASY TESYS PROTECT|FLUXO INDUSTRIAL PPCTR|L&T CG|SFP Outro Para Ptctr|TESYS ACTIVE|TESYS CONTROL\nCUBíCULOS PRIMÁRIOS>AIS <= 24 OR 27KV|AIS <=36 OR 40.5KV|AIS-SBB WITHDRAW <=17.5|AIS-WITHDRAW <=40.5KV|AIS-WITHdraw <=24Kv|GIS <= 60 KV|GIS <=24 OR 27KV|GIS <=36 OR 40.5KV|GIS PRIMARY SF6 FREE|GIS RAILWAY|HV DEVICE & EQUIP|PAIS <=17.5KV+MCC|PGIS <=17.5KV|SFP Outro para INMVE\nDATA CENTER PWR SEGURO>ARMAZENAMENTO DE ENERGIA|PROJECT MGMT|SFP OTHER FOR SPSTO\nDATA CENTERS MODULARES>Design & Compilação|Modular pré-fabricado|Outros\nDISJUNTOR CAIXA ABERTA>ACB OPTIMUM|ACB TRANSFERPACT TSE|Comutador de fonte ACB|FLUXO INDUSTRIAL PPACB|Oferta ideal ACB|Oferta média ACB|SFP Outro para PTACB\nDISJUNTOR CAIXA MOLDADA>CCB de mudança de fonte|Disjuntor/Gabinetes|EARTH LEAKAGE PROTECT.|FLUXO INDUSTRIAL PPCCB|Interruptor seccionador|MCCB TRANSFERPACT TSE|MCCB ÓTIMO|Oferta ideal de MCCBs|Oferta média de MCCBs|Outro PTCCB|Proteção de fusível\nDISJUNTORES MÉDIA TENSÃO>Contatores|INSTRUMENT TRANS. OUTD|LICENÇAS MV AIS|LOOSE INDOOR SWITCH|Outro componente interno|SF6 INDOOR CB|SFP Outro para INMCP|SMART MONITORING|SPECIAL CB|VCB <=12 OR 17.5KV|VCB <=24 OR 27KV|VCB <=36 OR 40.5KV\nEFICIÊNCIA & SUST PROG.>DESEMPENHO DIGITAL|EFF. IMPLEMENTAÇÃO|EFICIÊNCIA & DECARB|OTHER SUESP|RA CLÁSSICO|SFP Outro para ESEPC\nEQUIPAMENTOS INDUSTRIAIS DE HVAC>Comp. Eletromecânico|ELIWELL REFRIGER.DISTR|Eliwell - Cr OEM|Eliwell - Cr Systems|Eliwell - HVAC|Eliwell - Horeca|Eliwell - Ref. Transporte|Eliwell - Sensores & CA|Eliwell - Soluções Cr|L2 SOFTWARE OFFERS|L3 ADVISOR OFFERS|SCHNEIDER - HVAC SOLUT|Schneider - HVAC\nEscala de Concessionárias de Energia Solar & Sistemas comerciais de grande porte>Pv Es Serviços De Campo|SFP Outro Para SOLSY\nHSHPP - PRODUTOS DE ENERGIA DOMÉSTICA HSH>Energia residencial|SFP OUTRO PARA SPHPP\nIDSEN - SENSORS>SENSORES\nIHM & PCS INDUSTRIAIS>HMI|IPCS|MEDIUM HMI - L1|Marca De Proface Ipc|Marca Ipc Schneider|Marca Schneid do painel de operação|Marca de projeção do painel de operação|OFERTA DE SOFTWARE HMI|OFERTA DE SOFTWARE IIOT|OUTROS\nINVERSORES DE MÉDIA TENSÃO E APM>ANTIGO PIB IDSDS|C&A PROJECTSUPPLY&SERV|C&Uma SDS|ECOX SYS INTEGRATOR|INTEGRADOR DE SISTEMAS PPLTS|LK SPEED DRIVES|SFP OUTROS PARA IDSDS|SISTEMAS DE TRANSMISSÃO LV|SISTEMAS DE TRANSMISSÃO MV|SOFTSTARTERS ENCLOSED|Sistema modular\nLINHA DE BARRAMENTOS BLINDADOS CANALIS>BUSWAY IEC MV OPTIMUM|Barramento HP Nema Optimum|Barramento IEC Mp Optimum|Barramento NEMA Mp Optimum|Barramento Optim IEC Lp|Barramento Opç Nema Nonseg|Barramento de luz Optim IEC|FLUXO INDUSTRIAL PPLVB|ILUMINAÇÃO DE BUSWAYS|LOW POWER BUSWAYS|MEDIUM IEC HP BUSW|MEDIUM IEC LIGHT BUSW|OLD GDP PPLVB|Peças de reposição para barramento|SFP Outro para PTLVB\nLV EQPT (IEC)&NEMA>ANTIGO PIB PPEQP|Cdn Swbd Opt|Comunicação de marketing.|Ctxf/Lvit Med NEMA|Equipamentos Opcionais IEC|FLEXSET SWITCHBOARDS|FLUXO INDUSTRIAL PPEQP|LV/LV DRY TYPE XFMR|Lv Rti Swbd Opt NEMA|Lvdo Opt NEMA|MOTOR CONTROL CENTER|Opção Eqpt Integrada NEMA|PRINCIPAL SWB 1600A|Pnls Med NEMA|Pwr Assmb Pnl Opt NEMA|Pwr Styl Swbd Opt NEMA|SFP Outro para PTEQP|Syst Opt Painel Bt NEMA|Zona De Minienergia Bt/Bt\nOFERTA DE INSTRUMENTAÇÃO FOXBORO>ADVISOR L3|Accutech Wireless|Nível|PRESSURE|Posicionador da válvula|Processo Analítico|SFP Outro Para Idfld|Temperatura|Vazão\nPRISMA E ACESSORIOS BK7>EASYSET|LINERGY|MEDIUM IEC ENCL.|OLD GDP PPLVS|OPTIMUM IEC ENCL.|Optimum Oth Swpnbd|PARTS/KITS/RTW|PRISMASET ENCL IEC|PRISMASET I|PRODUTOS DIGITAIS - SE SWB|SFP Outro para PTLVS|SOFTWARE DE CANAL\nPRODUTOS DB>Controles de acesso|Edifícios de pequeno a médio porte|HOTEL|Outros|Produtos contra incêndios|SENSORES|Sistemas para Edifícios|Software para sistemas de gestão predial|VALVES AND ACTUATOR\nPTSG2 - PARTNER S2 PRODUCTS (PRODUTOS S2 DO PARCEIRO)>ANTIGO PIB IDVSD|Acionamentos para edifícios|CONEXÕES STECK|CONTROLO STECK & SIG|GUNSAN|Integração de processos|LK DRIVES STARTERS|LK E&A (ÍNDIA) EXPORTAÇÃO|Máquinas|Máquinas com inversor de frequência médio|OFERTA CONECTADA STECK|Ofertas da Steck Consume|Opções de hardware|Opções de software|PEÇA VVD|PROCESSO|PROTEÇÃO BÁSICA STECK|PROTEÇÃO COMPLETA STECK|Peças De Reposição E Lixo|Processo VSD médio|SENSORES DE DESMEMBRAMENTO|SFP OUTROS PARA IDVSD|SISTEMA DE DISTRIBUIÇÃO STECK|SISTEMA DE INSTALAÇÃO STECK|SOLUÇÃO ESPECIAL STECK|STECK INDUSTRIAL P&S|STECK INDUSTRIAL PROT\nPoder Comercial (Rede) & Servidor)>Baterias de Substituição|Outros|Redes corporativas\nPoder pessoal>Estação de energia portátil|Fonte de alimentação ininterrupta (nobreak)|Outros|Proteção contra surtos\nRACK & SISTEMAS DE BORDA>Bastidores e Acessórios|DISTRIBUIÇÃO DE ALIMENTAÇÃO CC EM RACK|Distribuição de energia para racks|Outros\nREDE DIGITAL>DMS|GRID EDGE|Oasys EU / DSCADA|SFP Outro para SISGT|SISTEMAS DE INFORMAÇÃO|SISTEMAS OPERACIONAIS|Serviços de Cybersec\nROBOS E PACDRIVES>L2SW MACHINE EXPERT SW|L2SYS FLEX.MACH.CONTRO|L2SYS OEM PROJET & SUP|L2SYS OLD GDP IDOL2|L2SYS ROBOTICS|L2SYS SFP OTHE 4 IDOL2|L2SYS SOLUTIONS 4 OEMS|L3SW MACHINE ADVISOR\nRefrigeração>Chillers Uniflair|Líquido de refrigeração Uniflair|Outros|Resfriamento InRow Uniflair|Resfriamento da sala\nRÉLES DE PROTEÇÃO/ARCO>ARC FLASH|AUTOMAÇÃO|BASIC PROT RELAY|Controlador de subestação|FEEDER AUTOM SYSTEMS|OTHER DPMVP|RELÉS DE PROTEÇÃO|Suporte FA & Serviços\nSECURE POWER STORAGE>Backup & Residencial|Outros|Produtos Solares|Produtos antigos|Produtos móveis\nSECURE PWR SERV>Consultoria|Força de trabalho de treinamento|Instalação Arranque comercial|Operar Sob Demanda|Operar serviços de garantia estendida|Operar serviços de peças sobressalentes|Operar serviços de substituição de baterias|Operar serviços recorrentes|Outros|Outros serviços de data center|Peças de reposição|Planos de serviço recorrentes|REFURB & OFICINA DE REPARAÇÃO|Renovar serviços de modernização|Serviços de campo|Serviços de garantia estendida|Serviços de instalação|Serviços de manutenção|Serviços de manutenção gerenciada|Serviços de modernização|Serviços de software|Serviços digitais|Serviços sob demanda|Substituição de bateria\nSERVIÇO DE SISTEMAS PW>Consultoria|EXTENSÃO DA GARANTIA|INSTALL-COMM-STARTUP|MAINTENANCE CONTRACT|MODERNIZATION|ON-DEMAND SERVICES|PLANO DE SERVIÇO RECORRENTE|Peças de reposição|REFURB & OFICINA DE REPARAÇÃO|Renove a modernização de BT|TREINAMENTO - EMP DA FORÇA DE TRABALHO\nSERVIÇOS DE BD>Building Automation Software as a Service|EcoConsult para Sistemas de Gestão Predial|EcoFit para Sistemas de Gestão Predial|Edifícios de pequeno a médio porte|Força de trabalho de treinamento|Melhorias nos Sistemas de Gestão Predial EcoCare|Outros|Planos conectados|Planos de serviço anuais|Planos de serviço de automação predial|Planos de serviço de sistemas de gestão predial EcoCare|Serviços de modernização|Serviços sob demanda|Software corporativo|Software recorrente|Transição\nSERVIÇOS E MODERNIZAÇÃO INDUSTRY>Consultoria|DIGITAL SVCES CONTRACT|EXTENSÃO DA GARANTIA|INSTALL-COMM-STARTUP|MIGRAÇÃO (COMP)|MODERNIZATION|ON-DEMAND SERVICES|OUTROS|PLANO DE SERVIÇO RECORRENTE|Peças de reposição|REFURB & OFICINA DE REPARAÇÃO|SFP Outro Para IDIBO|Serviços de Cybersec|TREINAMENTO - EMP DA FORÇA DE TRABALHO\nSERVIÇOS E SOLUÇÕES PROCESS AUTOMATION>ESX FOXBORO DCS|ESX GEO SCADA EXPERT|ESX HYBRID EAE|ESX TRICONEX SAFETY|LK TELCOM|RO ENG SOLUTIONS\nSISTEMAS DB>Outros|Projectos de incêndio|Projetos de Sistemas de Gestão Predial|Projetos de segurança\nSISTEMAS DE MT NÍVEL 2>E-House|ELECTRIC.DISTRIB.PROJ.|Energia Elétrica Inte|Petróleo E Gás Integrados|Projeto Mini Hidráulico|Projetos eólicos|SFP Outro para INSL2|SYST. INTEGRES PETRO|Serviços de Cybersec|Solução de Resposta à Demanda|Syst For Elect Energy|Syst Industry/Infrastru|Syst Para Aparelhos De Gás/Petróleo\nSISTEMAS DP>CAIXAS DE ENCLOSURE PROJETADAS|OTHER DPSYS|POWER AUTO SYSTEM|POWER MANAGEMENT SW|SDCD Automático de Subestação|SFP Outro para INENS|SISTEMA CIBERNÉTICO|Soluções para microrredes\nSM6>AIS SECONDARY SF6 FREE|AIS SECONDARY SWGR|AIS internos|Disjuntor Externo|GIS RMU <24+PADMOUNTED|GIS RMU <36 OR 40.5|GIS SECONDARY SF6 FREE|POLE MOUNTED SWITCH|RMU SI interno|Religador Montado Em Polo|SFP Outro para INMVP|SMART RMU UP TO 24 KV|SSIS SECONDARY SWGR\nSOFTWARE AUTOMAÇÃO AVEVA>APLICAÇÕES ESX EDGE|AVEVA ASSET PERFORMNCE|AVEVA MONTRNG AND CTRL|AVEVA PLNING & SCHDLNG|AVEVA SIMULTN & LRNING|IIOT APP|OPS INFO MGT|PROD. OPTIMIZATION|PU EWCA DISTRICT ENRGY|SFP Outro Para Sftwr|SOLUÇÕES IIOT LEGACY|VAS FOR SOFTWARE\nSUPORTE & ATUALIZAÇÃO DE SOFTWARES SE>CF_CONTRACTS & DIGITAL|Consultoria|Customer Trainings|ESX CONSULTOR INDUSTRIAL|ESX WATER ADVISOR|INSTALAÇÃO&COMISSIONAMENTO|MIGRAÇÃO (COMP)|OUTROS|Peças de reposição|SITE SERV & SUPORTE À PRODUÇÃO|Serviços de Cybersec|Serviços de software|TMC - FS & OP|TROCA & REPARO\nSoftware>Monitoramento e gerenciamento|Outros|Planejamento e modelagem|Renovações De Software Nas Instalações|Sensores Ecostruxure IT|Software baseado em nuvem|Software corporativo|Software de engenharia especificado pelo cliente|Software incorporado|Software recorrente Ecostruxure IT\nTRANSF DE MT & SUBESTAÇÃO>CRT 50 KVA & <3,15 MVA|CRT >3,15 MVA|INDOOR WITHOUT ENCLOS.|MPT 3,15 & <100 MVA|MV/LV DISTRIB SUBST|ODT 25 KVA & <3,15 MVA|SFP Outro para INMVT|Subestação Compacta|VPI TRANSFO <3.15 MVA\nÁRMARIOS E CAIXAS VAZIAS>CLIMASYS GESTÃO TÉRMICA|Cliente referenciado|Common Accessories|Oferta Personalizada (Conf.)|Oferta Personalizada (Spec)|PROJECTS & SERVICES|Peças de reposição & Serviços|SFP Outro para PTUES|Software & Comm|Spacial Indust. Boxes|Spacial Stainsteel|Spacial Steel Floor St|Spacial Steel Wall Mnt|Thalassa Indust. Boxes|Thalassa Polyester";
const FAM = {}; FAM_RAW.split("\n").forEach(l=>{const i=l.indexOf(">"); if(i>0) FAM[l.slice(0,i)] = l.slice(i+1).split("|");});
const PRODUTOS = Object.keys(FAM);
const UFS = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Paraná","Paraíba","Pará","Pernambuco","Piauí","Rio Grande do Norte","Rio Grande do Sul","Rio de Janeiro","Rondônia","Roraima","Santa Catarina","Sergipe","São Paulo","Tocantins"];
const UF_SIG = {AC:"Acre",AL:"Alagoas",AP:"Amapá",AM:"Amazonas",BA:"Bahia",CE:"Ceará",DF:"Distrito Federal",ES:"Espírito Santo",GO:"Goiás",MA:"Maranhão",MT:"Mato Grosso",MS:"Mato Grosso do Sul",MG:"Minas Gerais",PR:"Paraná",PB:"Paraíba",PA:"Pará",PE:"Pernambuco",PI:"Piauí",RN:"Rio Grande do Norte",RS:"Rio Grande do Sul",RJ:"Rio de Janeiro",RO:"Rondônia",RR:"Roraima",SC:"Santa Catarina",SE:"Sergipe",SP:"São Paulo",TO:"Tocantins"};
const MIN_VALOR = 5000;

/* Código Helios (coluna da lista de preços) -> Nome do produto no portal.
   alta = o próprio portal cita o código nas famílias desse produto; media = associação por tipo de produto, confirme. */
const HELIOS = {
  PPCTR:["CONTATOR DJ MOTOR E RELE TeSys","alta"], IDSIG:["COMANDO E SINALIZAÇÃO","alta"], PPACB:["DISJUNTOR CAIXA ABERTA","alta"],
  PPCCB:["DISJUNTOR CAIXA MOLDADA","alta"], "00000":["DISJUNTOR CAIXA MOLDADA","media"], PPATS:["DISJUNTOR CAIXA MOLDADA","media"],
  IDMST:["AUTOMAÇÃO DE MÁQUINAS, SEGURANÇA & SERVO MOTOR","alta"], PPLVS:["PRISMA E ACESSORIOS BK7","alta"], PPUES:["ÁRMARIOS E CAIXAS VAZIAS","alta"],
  IDPAC:["CLP DE PROCESSO & SWITCHES","alta"], IDVSD:["PTSG2 - PARTNER S2 PRODUCTS (PRODUTOS S2 DO PARCEIRO)","alta"], IDOL2:["ROBOS E PACDRIVES","alta"],
  DPMVP:["RÉLES DE PROTEÇÃO/ARCO","alta"], DPLVP:["CAPACITOR, MULTI MEDIDORES E FILTROS","alta"], DPSYS:["SISTEMAS DP","alta"],
  PPLVB:["LINHA DE BARRAMENTOS BLINDADOS CANALIS","alta"], IDSDS:["INVERSORES DE MÉDIA TENSÃO E APM","alta"], SUESP:["EFICIÊNCIA & SUST PROG.","alta"],
  SUSUP:["ALIMENTAÇÃO & SERVIÇOS SUST","alta"], IDSEN:["IDSEN - SENSORS","alta"], PSSL2:["SISTEMAS DE MT NÍVEL 2","media"],
  PPMCP:["DISJUNTORES MÉDIA TENSÃO","media"], PSMVP:["SM6","media"], PSMVE:["CUBíCULOS PRIMÁRIOS","media"], PSLVE:["LV EQPT (IEC)&NEMA","media"],
  IDSFT:["SOFTWARE AUTOMAÇÃO AVEVA","media"], IDPLT:["SOFTWARE AUTOMAÇÃO AVEVA","media"], IDPAS:["SOFTWARE AUTOMAÇÃO AVEVA","media"],
  IDHMI:["IHM & PCS INDUSTRIAIS","media"], IDCOM:["EQUIPAMENTOS INDUSTRIAIS DE HVAC","media"], IDROP:["SERVIÇOS E SOLUÇÕES PROCESS AUTOMATION","media"],
  DBPRD:["PRODUTOS DB","media"], HDCOS:["PRODUTOS DB","media"], DBIBS:["SERVIÇOS DE BD","media"],
  SP3PH:["Alimentação trifásica (CC) & Instalação)","media"], SPBPP:["Poder Comercial (Rede) & Servidor)","media"], SPPPP:["Poder pessoal","media"],
  SPRSY:["RACK & SISTEMAS DE BORDA","media"], SPSFT:["Software","media"], SPCLG:["Refrigeração","media"], PRSTG:["SECURE POWER STORAGE","media"],
  SPIBS:["SECURE PWR SERV","media"], PSIBS:["SERVIÇO DE SISTEMAS PW","media"], PPIBS:["SERVIÇO DE SISTEMAS PW","media"], DPIBS:["SERVIÇO DE SISTEMAS PW","media"],
  HDCFD:["HSHPP - PRODUTOS DE ENERGIA DOMÉSTICA HSH","media"], PREVC:["HSHPP - PRODUTOS DE ENERGIA DOMÉSTICA HSH","media"], HDCWD:["HSHPP - PRODUTOS DE ENERGIA DOMÉSTICA HSH","media"]
};
/* Ajustes por Lcos (código de linha comercial) quando ele aponta melhor o produto/família */
const LCOS = {
  "04PINSPA":["CLP DE PROCESSO & SWITCHES","PAC PLATFORM LEGACY"], "04CINSPA":["SERVIÇOS E MODERNIZAÇÃO INDUSTRY","Peças de reposição"],
  "04PINMSS":["AUTOMAÇÃO DE MÁQUINAS, SEGURANÇA & SERVO MOTOR","L2HW SERVO SYSTEMS"], "04CINMVS":["INVERSORES DE MÉDIA TENSÃO E APM","SISTEMAS DE TRANSMISSÃO MV"],
  "04PINMOT":[null,"L2HW SERVO SYSTEMS"], "04CINSEG":[null,"MACHINE SAFETY"], "04GINIRL":[null,"Relés industriais"], "04GINOCT":[null,"Sinalização"],
  "04GINHST":[null,"IEC CONT.HAND&HOISTING"], "04GINCTO":[null,"Contatores"], "04GSBCTM":[null,"Contatores"],
  "04CLBAPQ":[null,"PWR QUALITY CORRECTION"], "04GSBBMC":[null,"MEDIDORES & PORTAS DE ENTRADA"], "04CEIREL":[null,"RELÉS DE PROTEÇÃO"],
  "04RSYRAC":[null,"Bastidores e Acessórios"], "04RSYPDU":[null,"Distribuição de energia para racks"], "04PCBPMS":[null,"POWER MANAGEMENT SW"],
  "040SWHMI":["IHM & PCS INDUSTRIAIS","OFERTA DE SOFTWARE HMI"], "04PINHMA":[null,"HMI"], "043PHSYM":[null,"3 PHASE UPS"], "043PHGVS":[null,"3 PHASE UPS"],
  "043PHE3S":[null,"3 PHASE UPS"], "043PHE3M":[null,"3 PHASE UPS"], "04HMPBUP":[null,"Fonte de alimentação ininterrupta (nobreak)"],
  "04GINBTC":[null,"CLIMASYS GESTÃO TÉRMICA"], "04CLBATS":["DISJUNTOR CAIXA MOLDADA","CCB de mudança de fonte"], "04CLBOTS":["DISJUNTOR CAIXA MOLDADA","CCB de mudança de fonte"],
  "040RENSC":[null,"Produtos Solares"], "040RENSI":[null,"Produtos Solares"], "04GSBFDE":[null,null]
};
const SPARE_FAM = {"SECURE PWR SERV":"Peças de reposição","SERVIÇO DE SISTEMAS PW":"Peças de reposição"};


/* ===================== util ===================== */
const $ = (s,r=document)=>r.querySelector(s);
const esc = s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const BRL = n=>Number(n||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const norm = s=>String(s??"").normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase();
const uid = ()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
function toast(t){const e=$("#toast");e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,2600);}
function lsGet(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
async function copyText(t){try{await navigator.clipboard.writeText(t);return true}catch(e){return false}}
function digits(s){return String(s||"").replace(/\D/g,"")}
function fmtCNPJ(s){const d=digits(s).slice(0,14);return d.replace(/^(\d{2})(\d)/,"$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3").replace(/\.(\d{3})(\d)/,".$1/$2").replace(/(\d{4})(\d)/,"$1-$2");}
function validCNPJ(s){const c=digits(s);if(c.length!==14||/^(\d)\1+$/.test(c))return false;const calc=n=>{let sum=0,p=n-7;for(let i=0;i<n;i++){sum+=+c[i]*p--;if(p<2)p=9}const r=sum%11;return r<2?0:11-r};return calc(12)==+c[12]&&calc(13)==+c[13];}
function fmtCEP(s){const d=digits(s).slice(0,8);return d.length>5?d.slice(0,5)+"-"+d.slice(5):d}
function fmtTel(s){const d=digits(s).slice(0,11);if(d.length<=10)return d.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,"($1) $2-$3").replace(/-$/,"");return d.replace(/^(\d{2})(\d{5})(\d{0,4}).*/,"($1) $2-$3");}
const validEmail = s=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s||"").trim());


const STATUS_CURTO={rascunho:"Rascunho",pendente:"Pendente",devolvida:"Devolvida",concluida:"Concluída",cancelada:"Cancelada"};
const STATUS_LABEL={rascunho:"Rascunho",pendente:"Aguardando lançamento",devolvida:"Devolvida p/ correção",concluida:"Concluída",cancelada:"Cancelada"};
const fmtData=t=>t?new Date(t).toLocaleDateString("pt-BR"):"—";
const fmtDH=t=>t?new Date(t).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—";

/* ===================== estado ===================== */
let BOOT_LOGIN=false, ME=null, PERM_NOMES={}, PAPEIS={}, FABS=[], USERS=[];
let CAD={clientes:{},parceiros:{},contatosSE:{}};
let caixa="minhas", ops=[], cur=null, curMeta=null, step=0, view="ops";
const can=p=>!!(ME&&ME.perms.includes(p));
const fabDe=id=>FABS.find(f=>f.id==id)||null;
const fabNome=id=>(fabDe(id)||{}).nome||"—";
const isSE=o=>{const f=fabDe(o&&o.fabricanteId);return !!(f&&f.portal==="schneider");};

/* ===================== servidor ===================== */
/* A "API" é o Apps Script publicado na Planilha Google (endereço em config.js).
   Pedidos vão como text/plain para o navegador não exigir permissão extra (CORS). */
const API_URL=((window.S2I_CONFIG||{}).api||"").trim();
let TOKEN=null; try{TOKEN=localStorage.getItem("s2i_token");}catch(e){}
function guardarToken(t){TOKEN=t;try{t?localStorage.setItem("s2i_token",t):localStorage.removeItem("s2i_token");}catch(e){}}
async function api(method,path,body){
  if(!API_URL||/COLE_AQUI/.test(API_URL)){const x=new Error("O site ainda não foi ligado à planilha: falta colar o endereço do Apps Script em config.js.");x.status=0;throw x;}
  const i=path.indexOf("?"), p=i<0?path:path.slice(0,i), q=i<0?"":path.slice(i+1);
  let r, j=null;
  for(let tent=0;tent<3;tent++){
    try{
      r=await fetch(API_URL,{method:"POST",redirect:"follow",headers:{"Content-Type":"text/plain;charset=utf-8"},
        body:JSON.stringify({m:method,p,q,b:body===undefined?null:body,t:TOKEN})});
      j=await r.json();
      if(j&&j.s===503&&tent<2){await new Promise(res=>setTimeout(res,1500*(tent+1)));continue;}
      break;
    }catch(e){
      if(tent<2){await new Promise(res=>setTimeout(res,1200*(tent+1)));continue;}
      const x=new Error("Sem conexão com a planilha. Verifique a internet e tente de novo.");x.status=0;throw x;
    }
  }
  if(!j||typeof j.s!=="number"){const x=new Error("Resposta inesperada da planilha. Confira o endereço em config.js e se a implantação está como \"Qualquer pessoa\".");x.status=0;throw x;}
  if(j.token) guardarToken(j.token);
  if(j.s===401&&p!=="login"){guardarToken(null);showLogin(j.e||"Sessão expirada. Entre de novo.");const x=new Error(j.e||"Sessão expirada");x.status=401;throw x;}
  if(j.s>=400){const x=new Error(j.e||("Erro "+j.s));x.status=j.s;throw x;}
  return j.d;
}
function falha(e){ if(e&&e.status===401) return; toast(e&&e.message?e.message:"Algo deu errado."); }

/* ===================== login ===================== */
function showLogin(msg){
  ME=null; $("#app").hidden=true; $("#login").hidden=false;
  $("#lgErr").textContent=msg||""; $("#lgErr").hidden=!msg;
  setTimeout(()=>($("#lgUser").value?$("#lgPass"):$("#lgUser")).focus(),50);
}
$("#lgForm").addEventListener("submit",async e=>{
  e.preventDefault(); const b=$("#lgBtn"); b.disabled=true; $("#lgErr").hidden=true;
  try{ await api("POST","login",{login:$("#lgUser").value.trim(),senha:$("#lgPass").value}); $("#lgPass").value=""; await boot(true); }
  catch(err){ $("#lgErr").textContent=err.message; $("#lgErr").hidden=false; }
  finally{ b.disabled=false; }
});
async function sair(){ try{await flush()}catch(e){} guardarToken(null); cur=null;curMeta=null;showLogin(""); }

function trocarSenha(obrigatorio){
  const m=$("#modal");
  m.innerHTML=`<form class="card dlg" id="pwForm"><h2>${obrigatorio?"Crie sua senha":"Trocar senha"}</h2>
    ${obrigatorio?'<p class="muted" style="margin:0">É o seu primeiro acesso (ou a senha foi redefinida). Escolha uma senha nova para continuar.</p>':""}
    <div class="f"><label for="pwA">Senha atual</label><input type="password" id="pwA" autocomplete="current-password" required></div>
    <div class="f"><label for="pwN">Nova senha</label><input type="password" id="pwN" minlength="6" autocomplete="new-password" required><span class="hint">Pelo menos 6 caracteres.</span></div>
    <div class="f"><label for="pwC">Repita a nova senha</label><input type="password" id="pwC" minlength="6" autocomplete="new-password" required></div>
    <p class="err" id="pwErr" hidden></p>
    <div class="row" style="justify-content:flex-end">${obrigatorio?"":'<button type="button" class="btn ghost" id="pwX">Cancelar</button>'}<button class="btn pri">Salvar senha</button></div></form>`;
  m.hidden=false; $("#pwA").focus();
  const x=$("#pwX"); if(x) x.onclick=()=>{m.hidden=true;m.innerHTML="";};
  $("#pwForm").onsubmit=async e=>{e.preventDefault();const er=$("#pwErr");
    if($("#pwN").value!==$("#pwC").value){er.textContent="As duas senhas novas não são iguais.";er.hidden=false;return;}
    try{await api("POST","eu/senha",{atual:$("#pwA").value,nova:$("#pwN").value});m.hidden=true;m.innerHTML="";ME.trocarSenha=false;toast("Senha alterada");if(obrigatorio)startApp();}
    catch(err){er.textContent=err.message;er.hidden=false;}};
}

/* ===================== início ===================== */
async function boot(doLogin){ BOOT_LOGIN=!!doLogin;
  let eu;
  if(!TOKEN){ showLogin(API_URL&&!/COLE_AQUI/.test(API_URL)?"":"O site ainda não foi ligado à planilha: falta colar o endereço do Apps Script em config.js."); return; }
  try{ eu=await api("GET","eu"); }catch(e){ if(e.status!==401) showLogin(e.message); return; }
  ME=eu.usuario; PERM_NOMES=eu.permissoes; PAPEIS=eu.papeis;
  $("#login").hidden=true; $("#app").hidden=false;
  $("#meNome").textContent=ME.nome; $("#mePapel").textContent=ME.papel==="admin"?"Administrador":"Vendedor";
  if(ME.trocarSenha){ trocarSenha(true); return; }
  startApp();
}
async function startApp(){
  try{
    const [f,c,u]=await Promise.all([api("GET","fabricantes"),api("GET","cadastros"),api("GET","usuarios")]);
    FABS=f; CAD=Object.assign({clientes:{},parceiros:{},contatosSE:{}},c); USERS=u;
  }catch(e){ falha(e); return; }
  if(!ME) return;
  document.querySelectorAll("[data-perm]").forEach(el=>{el.hidden=!el.dataset.perm.split("|").some(can);});
  const cx=[["minhas","Minhas"]];
  if(can("lancar")) cx.push(["pendentes","Pendentes"]);
  if(can("lancar")||can("ver_todas")) cx.push(["concluidas","Concluídas"],["todas","Todas"]);
  $("#caixas").innerHTML=cx.map(([k,l])=>`<button data-cx="${k}" aria-pressed="false">${l}<span class="badge" data-badge="${k}" hidden></span></button>`).join("");
  $("#caixas").hidden=cx.length<2;
  await contagem();
  const cxSalva=lsGet("caixa_"+ME.id);
  caixa=cx.some(x=>x[0]===cxSalva)?cxSalva:(can("lancar")&&COUNTS.pendentes>0?"pendentes":"minhas");
  irView(BOOT_LOGIN?"ops":(lsGet("view_"+ME.id)||"ops"), true);
  await loadList(true);
  if(ME) verAntigos();
}
let contT=null, COUNTS={pendentes:0,devolvidas:0};
async function contagem(){
  clearTimeout(contT);
  try{
    const c=await api("GET","contagem"); COUNTS=c;
    const bp=$('[data-badge="pendentes"]'); if(bp){bp.dataset.n=c.pendentes;bp.textContent=c.pendentes;bp.hidden=!c.pendentes;}
    const bm=$('[data-badge="minhas"]'); if(bm){bm.dataset.n=c.devolvidas;bm.textContent=c.devolvidas;bm.hidden=!c.devolvidas;bm.title="Devolvidas para corrigir";}
    const tb=$("#tabBadge"); const n=(can("lancar")?c.pendentes:0)+c.devolvidas; tb.textContent=n; tb.hidden=!n;
  }catch(e){}
  contT=setTimeout(contagem,60000);
}

/* ===================== navegação ===================== */
function irView(v, inicial){
  const b=document.querySelector(`#tabs button[data-view="${v}"]`);
  if(!b||b.hidden) v="ops";
  view=v;
  document.querySelectorAll("#tabs button[data-view]").forEach(x=>x.setAttribute("aria-selected",x.dataset.view===v?"true":"false"));
  document.querySelectorAll("[data-pane]").forEach(s=>s.hidden=s.dataset.pane!==v);
  if(ME) lsSet("view_"+ME.id,v);
  if(v==="cad") renderCad();
  if(v==="pop"&&!$("#view-pop").innerHTML) renderPOP();
  if(v==="bm") renderBM();
  if(v==="usr") renderUsuarios();
  if(v==="fab") renderFabricantes();
  if(v==="rel") renderRelatorios();
  if(v==="ops"&&!inicial) loadList();
}
$("#tabs").addEventListener("click",e=>{const b=e.target.closest("button[data-view]");if(b){flush();irView(b.dataset.view);}});
$("#btnSair").onclick=()=>{$("#meMenu").open=false;sair();};
$("#btnSenha").onclick=()=>{$("#meMenu").open=false;trocarSenha(false);};
document.addEventListener("click",e=>{const m=$("#meMenu");if(m&&m.open&&!m.contains(e.target))m.open=false;});
$("#caixas").addEventListener("click",async e=>{const b=e.target.closest("[data-cx]");if(!b)return;await flush();caixa=b.dataset.cx;lsSet("caixa_"+ME.id,caixa);cur=null;curMeta=null;await loadList(true);});

/* ===================== extensão (ponte com o portal) ===================== */
let EXT=null; const pend={};
function setExt(v){EXT=v;const c=$("#extChip");if(c){c.textContent=v?"conectada":"não instalada";c.className="pill "+(v?"concluida":"pendente");}
  if(cur&&typeof STEPS!=="undefined"&&step===STEPS.length-1&&view==="ops") renderEditor();}
window.addEventListener("message",e=>{if(e.source!==window||!e.data||e.data.src!=="s2i-ext")return;
  if(e.data.type==="pronto"){if(!EXT)setExt(e.data.versao);return;}
  const p=pend[e.data.id]; if(p){delete pend[e.data.id];p(e.data.resp||{erro:"Sem resposta da extensão."});}});
function extCall(msg,ms=120000){return new Promise(res=>{const id=uid();pend[id]=res;window.postMessage({src:"s2i-site",id,msg},"*");
  setTimeout(()=>{if(pend[id]){delete pend[id];res({erro:"A extensão não respondeu. Recarregue esta página (F5)."});}},ms);});}
setTimeout(()=>{const v=document.documentElement.getAttribute("data-s2i-extensao");setExt(v||EXT||null);},700);

/* ===================== modelo ===================== */
function blankParty(){return {nome:"",cnpj:"",endereco:"",cidade:"",uf:"",cep:"",contatoNome:"",contatoSobrenome:"",email:"",telefone:""};}
function fabPadrao(){const s=FABS.find(f=>f.portal==="schneider"&&f.ativo)||FABS.find(f=>f.ativo);return s?s.id:null;}
function blankOp(){
  return { id:uid(), criado:Date.now(), atualizado:Date.now(), fabricanteId:fabPadrao(),
    cenario:"direto", contaEhUsuarioFinal:true, temParceiro:false, tipoParceiro:"Integrador / painelista",
    conta:{cnpj:"",nome:"",endereco:"",cidade:"",uf:"Goiás",cep:""},
    contato:{nome:"",sobrenome:"",email:"",telefone:"",endereco:"",cargo:""},
    projeto:{mesmo:true,endereco:"",cidade:"",uf:"Goiás",cep:""},
    usuarioFinal:blankParty(), parceiro:blankParty(),
    oportunidade:{nomeProjeto:"",palavraChave:"",dataCotacao:"",dataPedido:"",contatoSE:"",descricao:"",
      escopo:"",aplicacao:"",concorrentes:"",decisor:"",fase:"",construtora:"",especificador:"",prazoObra:"",obsVendedor:""},
    itens:[], linhas:[] };
}
function normOp(o){ // completa campos que versões antigas não tinham
  const b=blankOp();
  for(const k of Object.keys(b)){
    if(o[k]===undefined||o[k]===null) o[k]=b[k];
    else if(b[k]&&typeof b[k]==="object"&&!Array.isArray(b[k])) o[k]=Object.assign({},b[k],o[k]);
  }
  if(!o.fabricanteId) o.fabricanteId=fabPadrao();
  return o;
}

/* ===================== cadastros salvos (clientes, parceiros, contatos do fabricante) ===================== */
const keyOf=(cnpj,nome)=>digits(cnpj).length===14?"c"+digits(cnpj):"n"+norm(nome).replace(/[^A-Z0-9]/g,"").slice(0,70);
const clone=o=>JSON.parse(JSON.stringify(o));
let cadPend={clientes:{},parceiros:{},contatosSE:{},remover:[]}, cadT=null;
function learn(o){
  const put=(tipo,campo,k,val)=>{
    const old=o[campo];
    if(old&&old!==k&&CAD[tipo][old]&&CAD[tipo][old].origem===o.id){ delete CAD[tipo][old]; delete cadPend[tipo][old]; cadPend.remover.push([tipo,old]); }
    const prev=CAD[tipo][k]; const v=Object.assign(val,{usado:Date.now(),origem:prev?prev.origem:o.id});
    CAD[tipo][k]=v; cadPend[tipo][k]=v; o[campo]=k;
  };
  if(o.conta.nome&&o.conta.nome.trim().length>2){
    put("clientes","_cliKey",keyOf(o.conta.cnpj,o.conta.nome),{conta:clone(o.conta),contato:clone(o.contato),projeto:clone(o.projeto),contaEhUsuarioFinal:o.contaEhUsuarioFinal,
      usuarioFinal:o.contaEhUsuarioFinal?null:clone(o.usuarioFinal),cenario:o.cenario,temParceiro:o.temParceiro,fabricanteId:o.fabricanteId,
      parceiroKey:o.temParceiro&&o.parceiro.nome?keyOf(o.parceiro.cnpj,o.parceiro.nome):"",contatoSE:o.oportunidade.contatoSE||""});
  }
  if(o.temParceiro&&o.parceiro.nome&&o.parceiro.nome.trim().length>2)
    put("parceiros","_parKey",keyOf(o.parceiro.cnpj,o.parceiro.nome),{...clone(o.parceiro),tipo:o.tipoParceiro});
  const se=(o.oportunidade.contatoSE||"").trim();
  if(se.length>2) put("contatosSE","_seKey",norm(se).replace(/[^A-Z0-9]/g,"").slice(0,70),{nome:se});
  clearTimeout(cadT); cadT=setTimeout(enviarCad,1500);
}
async function enviarCad(){
  const b=cadPend; cadPend={clientes:{},parceiros:{},contatosSE:{},remover:[]};
  if(!Object.keys(b.clientes).length&&!Object.keys(b.parceiros).length&&!Object.keys(b.contatosSE).length&&!b.remover.length) return;
  try{ await api("POST","cadastros",b); }catch(e){ /* tenta de novo no próximo salvamento */ for(const t of ["clientes","parceiros","contatosSE"]) Object.assign(cadPend[t],b[t]); cadPend.remover.push(...b.remover); }
}
const byUse=obj=>Object.entries(obj).sort((a,b)=>(b[1].usado||0)-(a[1].usado||0));
function clienteLabel(c){return c.conta.nome+(c.conta.cnpj?" · "+c.conta.cnpj:"")+(c.conta.cidade?" · "+c.conta.cidade:"");}
function applyCliente(o,k){const c=CAD.clientes[k];if(!c)return;
  o.conta=clone(c.conta);o.contato=Object.assign({nome:"",sobrenome:"",email:"",telefone:"",endereco:"",cargo:""},clone(c.contato));
  o.projeto=clone(c.projeto||{mesmo:true,endereco:"",cidade:"",uf:"",cep:""});
  o.contaEhUsuarioFinal=c.contaEhUsuarioFinal!==false; if(c.usuarioFinal)o.usuarioFinal=clone(c.usuarioFinal);
  if(c.cenario)o.cenario=c.cenario;
  if(c.fabricanteId&&fabDe(c.fabricanteId))o.fabricanteId=c.fabricanteId;
  if(!o.oportunidade.contatoSE&&c.contatoSE)o.oportunidade.contatoSE=c.contatoSE;}
function applyParceiro(o,k){const p=CAD.parceiros[k];if(!p)return;o.temParceiro=true;const {tipo,usado,origem,...rest}=p;o.parceiro=Object.assign(blankParty(),clone(rest));if(tipo)o.tipoParceiro=tipo;}
function seList(){return `<datalist id="dlSE">${byUse(CAD.contatosSE).map(([k,v])=>`<option value="${esc(v.nome)}">`).join("")}</datalist>`;}
function fabOptions(sel,soAtivos=true){return FABS.filter(f=>f.ativo||!soAtivos||f.id==sel).map(f=>`<option value="${f.id}" ${f.id==sel?"selected":""}>${esc(f.nome)}</option>`).join("");}

/* ---------- nova oportunidade: escolher modelo ---------- */
async function renderNova(){
  await flush();
  if(view!=="ops") irView("ops");
  cur=null;curMeta=null;renderList();
  const ed=$("#editor"); const cl=byUse(CAD.clientes), pa=byUse(CAD.parceiros);
  const prev=ops.filter(o=>o.donoId===ME.id).slice(0,40);
  ed.innerHTML=`<div class="pane"><header><span class="eyebrow">Nova oportunidade</span><h2>Começar a partir de quê?</h2>
    <p class="muted">Escolha o que já está salvo. Depois você só preenche o projeto e as linhas de produto.</p></header>
   <div class="pick">
    <div class="f"><label for="nvFab">Fabricante</label><select id="nvFab">${fabOptions(fabPadrao())}</select></div>
    <div class="f"><label for="nvCli">Cliente</label><select id="nvCli"><option value="">Cliente novo (em branco)</option>
      ${cl.map(([k,c])=>`<option value="${k}">${esc(clienteLabel(c))}</option>`).join("")}</select>
      <span class="hint">${cl.length?`${cl.length} cliente(s) salvos pela equipe.`:"Os clientes são salvos sozinhos conforme as oportunidades são preenchidas."}</span></div>
    <div class="f"><label for="nvPar">Parceiro / integrador</label><select id="nvPar"><option value="">Sem parceiro</option>
      ${pa.map(([k,p])=>`<option value="${k}">${esc(p.nome)}${p.cidade?" · "+esc(p.cidade):""}</option>`).join("")}</select></div>
    <div class="f"><label for="nvSE">Contato no fabricante</label><input id="nvSE" type="text" list="dlSE" placeholder="Ex.: vendedor Schneider da conta">${seList()}</div>
    <div class="f full"><label for="nvCopy">Ou copiar de uma oportunidade sua</label><select id="nvCopy"><option value="">Não copiar</option>
      ${prev.map(o=>`<option value="${o.id}">${esc(o.nome||o.cliente||"Sem nome")} · ${fmtData(o.atualizado)}</option>`).join("")}</select>
      <label class="check" style="margin-top:4px"><input type="checkbox" id="nvLin"> Copiar também as linhas de produto e os itens</label>
      <span class="hint">Copia cliente, contato, parceiro, usuário final, cenário e contato. O projeto (nome, datas, descrição) começa em branco.</span></div>
   </div>
   <div class="nav"><button class="btn ghost" id="nvCancel">Cancelar</button><button class="btn pri" id="nvGo">Criar oportunidade</button></div></div>`;
  const cli=$("#nvCli"),par=$("#nvPar"),se=$("#nvSE");
  let fabTocado=false; $("#nvFab").onchange=()=>{fabTocado=true;};
  cli.onchange=()=>{const c=CAD.clientes[cli.value];if(!c)return;if(c.parceiroKey&&CAD.parceiros[c.parceiroKey])par.value=c.parceiroKey;if(c.contatoSE&&!se.value)se.value=c.contatoSE;
    if(!fabTocado&&c.fabricanteId&&fabDe(c.fabricanteId))$("#nvFab").value=c.fabricanteId;};
  $("#nvCopy").onchange=e=>{if(e.target.value){cli.value="";}};
  $("#nvCancel").onclick=()=>{renderEditor();};
  $("#nvGo").onclick=async()=>{
    const go=$("#nvGo"); go.disabled=true;
    const o=blankOp();
    if($("#nvCopy").value){
      try{ const r=await api("GET","ops/"+$("#nvCopy").value); const c=normOp(r.dados);
        ["cenario","contaEhUsuarioFinal","temParceiro","tipoParceiro","conta","contato","projeto","usuarioFinal","parceiro","fabricanteId"].forEach(k=>o[k]=clone(c[k]));
        o.oportunidade.contatoSE=c.oportunidade.contatoSE||"";o.oportunidade.aplicacao=c.oportunidade.aplicacao||"";
        if($("#nvLin").checked){o.itens=clone(c.itens||[]);o.linhas=clone(c.linhas||[]);}
      }catch(e){falha(e);go.disabled=false;return;}
    }
    if(cli.value)applyCliente(o,cli.value);
    o.fabricanteId=+$("#nvFab").value||o.fabricanteId;
    if(par.value)applyParceiro(o,par.value);
    if(par.value&&o.cenario==="direto")o.cenario="integrador";
    if(se.value.trim())o.oportunidade.contatoSE=se.value.trim();
    cur=o; curMeta={id:o.id,status:"rascunho",versao:0,donoId:ME.id,dono:ME.nome,novo:true};
    step=(cli.value||$("#nvCopy").value)?4:0;
    dirty=true; await flush();
    if(caixa!=="minhas"){caixa="minhas";lsSet("caixa_"+ME.id,caixa);}
    await loadList(false); renderEditor();
    toast(step===4?"Dados do cliente carregados. Preencha o projeto.":"Oportunidade criada");
  };
}

/* ---------- aba Cadastros ---------- */
function renderCad(){
  const v=$("#view-cad"); const cl=byUse(CAD.clientes),pa=byUse(CAD.parceiros),se=byUse(CAD.contatosSE);
  const pode=can("cadastros");
  const sec=(tit,desc,rows,tipo)=>`<section class="card" style="padding:20px;display:flex;flex-direction:column;gap:8px"><h2>${tit} <span class="muted" style="font-size:15px">(${rows.length})</span></h2><p class="muted" style="margin:0">${desc}</p>
    <input type="search" class="cadq" data-t="${tipo}" placeholder="Filtrar">
    <div class="cadlist" data-list="${tipo}">${rows.map(r=>`<div class="cadrow" data-txt="${esc(norm(r.txt))}"><div>${r.html}</div><div class="row">${r.novo?`<button class="btn small" data-nova="${r.k}">Nova oportunidade</button>`:""}${pode?`<button class="btn small ghost danger" data-del="${tipo}" data-k="${r.k}">Remover</button>`:""}</div></div>`).join("")||'<p class="muted">Nada salvo ainda.</p>'}</div></section>`;
  v.innerHTML=`<div class="popbody" style="margin-top:20px">
   <p class="note">Tudo aqui é salvo sozinho quando alguém da equipe preenche uma oportunidade: o cliente fica guardado pelo CNPJ (ou pelo nome), com contato, endereço da obra, usuário final, parceiro e contato do fabricante usados por último. Para corrigir um cadastro, abra uma oportunidade desse cliente e ajuste.</p>
   ${sec("Clientes","Use em + Nova para começar já com conta e contato preenchidos.",cl.map(([k,c])=>({k,novo:true,txt:c.conta.nome+" "+c.conta.cnpj+" "+c.conta.cidade,html:`<b>${esc(c.conta.nome)}</b><small>${esc([c.conta.cnpj,c.conta.cidade&&c.conta.cidade+"/"+(c.conta.uf||""),[c.contato.nome,c.contato.sobrenome].join(" ").trim(),c.contato.email].filter(Boolean).join(" · "))}</small>`})),"clientes")}
   ${sec("Parceiros e integradores","Aparecem em + Nova e na etapa Parceiro.",pa.map(([k,p])=>({k,txt:p.nome+" "+p.cidade,html:`<b>${esc(p.nome)}</b><small>${esc([p.tipo,p.cidade,[p.contatoNome,p.contatoSobrenome].join(" ").trim(),p.email].filter(Boolean).join(" · "))}</small>`})),"parceiros")}
   ${sec("Contatos no fabricante","Sugeridos ao digitar o campo Contato.",se.map(([k,s])=>({k,txt:s.nome,html:`<b>${esc(s.nome)}</b>`})),"contatosSE")}
  </div>`;
  v.oninput=e=>{if(!e.target.classList.contains("cadq"))return;const q=norm(e.target.value);v.querySelectorAll(`[data-list="${e.target.dataset.t}"] .cadrow`).forEach(r=>r.hidden=!!q&&!r.dataset.txt.includes(q));};
  v.onclick=async e=>{const d=e.target.closest("[data-del]");if(d){try{await api("DELETE","cadastros/"+d.dataset.del+"/"+d.dataset.k);delete CAD[d.dataset.del][d.dataset.k];renderCad();toast("Removido dos cadastros");}catch(err){falha(err);}return;}
    const n=e.target.closest("[data-nova]");if(n){await renderNova();$("#nvCli").value=n.dataset.nova;$("#nvCli").onchange();}};
}

/* ===================== lista ===================== */
async function loadList(abrirPrimeira){
  const el=$("#opList"); if(!ops.length) el.innerHTML='<p class="muted" style="font-size:13px;margin:4px">Carregando…</p>';
  document.querySelectorAll("#caixas [data-cx]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.cx===caixa?"true":"false"));
  try{ ops=await api("GET","ops?caixa="+caixa); }catch(e){ falha(e); return; }
  if(!ME) return;
  renderList();
  if(abrirPrimeira){
    const last=lsGet("op_aberta_"+ME.id);
    const alvo=ops.find(o=>o.id===last)||ops[0];
    if(alvo) await openOp(alvo.id); else {cur=null;curMeta=null;renderEditor();}
  }
}
function renderList(){
  const q=norm($("#opSearch").value);
  const el=$("#opList");
  const items=ops.filter(o=>!q||norm(o.nome+" "+o.cliente+" "+o.dono+" "+o.registro).includes(q));
  const vazio={minhas:'Nenhuma oportunidade sua ainda. Clique em <b>+ Nova</b> para começar.',pendentes:'Nenhuma oportunidade aguardando lançamento.',concluidas:'Nenhuma oportunidade concluída ainda.',todas:'Nenhuma oportunidade.'}[caixa];
  if(!items.length){el.innerHTML=`<p class="muted" style="font-size:13px;margin:4px">${q?"Nada encontrado.":vazio}</p>`;return;}
  el.innerHTML=items.map(o=>`<button class="opitem ${cur&&o.id===cur.id?"on":""}" data-id="${o.id}">
     <b>${esc(o.nome||o.cliente||"Sem nome")}</b><em class="pill ${o.status}">${STATUS_CURTO[o.status]}</em>
     <span>${esc(o.cliente||"Cliente não informado")} · ${BRL(o.valor)}</span>
     <span>${caixa!=="minhas"?esc(o.dono)+" · ":""}${esc(fabNome(o.fabricanteId))} · ${caixa==="pendentes"?"enviada "+fmtData(o.enviadoEm):caixa==="concluidas"?"lançada "+fmtData(o.lancadoEm)+(o.registro?" · Reg. "+esc(o.registro):""):fmtData(o.atualizado)}</span></button>`).join("");
}
$("#opList").addEventListener("click",e=>{const b=e.target.closest(".opitem");if(!b)return;openOp(b.dataset.id);});
$("#opSearch").addEventListener("input",renderList);
$("#btnNew").addEventListener("click",()=>renderNova());

async function openOp(id){
  await flush();
  try{
    const r=await api("GET","ops/"+id);
    if(!ME) return;
    const {dados,...meta}=r; cur=normOp(dados); cur.id=r.id; curMeta=meta;
    lsSet("op_aberta_"+ME.id,id);
    step=0; if(meta.status==="pendente"&&can("lancar")) step=STEPS.length-1; if(meta.status==="concluida") step=STEPS.length-1;
    renderList(); renderEditor(); window.scrollTo({top:0});
  }catch(e){falha(e);}
}
function patchListItem(meta){
  const i=ops.findIndex(o=>o.id===meta.id);
  if(i>=0) ops[i]=Object.assign(ops[i],meta); else ops.unshift(meta);
  renderListSoon();
}

/* ===================== salvar ===================== */
let saveTimer=null, saveChain=Promise.resolve(), dirty=false, listT=null;
function renderListSoon(){clearTimeout(listT);listT=setTimeout(renderList,300);}
function setSave(t,err){const b=$("#saveBar");b.textContent=t;b.classList.toggle("err",!!err);}
function editable(){
  if(!cur||!curMeta) return false;
  const st=curMeta.status;
  if(can("lancar")&&["rascunho","devolvida","pendente"].includes(st)) return true;
  return curMeta.donoId===ME.id&&["rascunho","devolvida"].includes(st);
}
function touch(){
  if(!cur||!editable()) return;
  cur.atualizado=Date.now(); dirty=true;
  setSave("Alterações pendentes…");
  clearTimeout(saveTimer); saveTimer=setTimeout(flush,2000);
}
function flush(){
  clearTimeout(saveTimer);
  if(!dirty||!cur||!curMeta) return saveChain;
  dirty=false;
  const o=cur, meta=curMeta;
  saveChain=saveChain.then(async()=>{
    setSave("Salvando…");
    try{
      const r=await api("PUT","ops/"+o.id,{dados:o,versao:meta.versao||0});
      meta.versao=r.versao; meta.status=r.status; delete meta.novo;
      setSave("Salvo na planilha às "+new Date().toLocaleTimeString("pt-BR").slice(0,5)+".");
      learn(o);
      const tot=totalLinhas(o);
      patchListItem({id:o.id,nome:o.oportunidade.nomeProjeto,cliente:o.conta.nome,valor:tot,atualizado:Date.now(),fabricanteId:o.fabricanteId,
        status:meta.status,donoId:meta.donoId,dono:meta.dono||ME.nome,versao:meta.versao});
    }catch(e){
      if(o===cur) dirty=true;
      if(e.status===409){ setSave(e.message,true); conflito(e.message); }
      else setSave((e.message||"Não salvou.")+" Tentando de novo…",true);
      if(e.status!==409&&e.status!==401&&e.status!==403) {clearTimeout(saveTimer);saveTimer=setTimeout(flush,5000);}
    }
  });
  return saveChain;
}
function conflito(msg){
  const ed=$("#editor"); if(!ed||ed.querySelector(".conflito")) return;
  ed.insertAdjacentHTML("afterbegin",`<div class="note bad conflito" style="margin:12px">${esc(msg)} <button class="btn small" id="cfReload">Recarregar esta oportunidade</button></div>`);
  $("#cfReload").onclick=()=>{dirty=false;openOp(cur.id);};
}
window.addEventListener("beforeunload",e=>{ if(dirty){ flush(); e.preventDefault(); e.returnValue=""; } });

/* ===================== etapas ===================== */
const STEPS=[
  {t:"Cenário",f:paneCenario},{t:"Cliente final",f:paneConta},{t:"Contato e local",f:paneContato},
  {t:"Parceiro / usuário final",f:paneParceiro,skip:o=>!o.temParceiro&&o.contaEhUsuarioFinal},
  {t:"Projeto",f:paneProjeto},{t:"Linhas de produto",f:paneLinhas},{t:"Revisão e envio",f:paneRevisao}];

function bannerStatus(){
  const m=curMeta; if(!m) return "";
  const meu=m.donoId===ME.id;
  if(m.novo) return "";
  if(m.status==="devolvida") return `<div class="note bad banner"><b>Devolvida para correção.</b> ${esc(m.obs||"")} ${meu?"<br>Corrija e envie de novo na etapa Revisão e envio.":""}</div>`;
  if(m.status==="pendente") return can("lancar")
    ? `<div class="note warn banner"><b>Aguardando lançamento</b> · enviada por ${esc(m.dono)} em ${fmtDH(m.enviadoEm)}${m.responsavel?` · com ${esc(m.responsavel)}`:""}. Complete o que faltar, lance no portal e marque como lançada na última etapa.</div>`
    : `<div class="note warn banner"><b>Enviada em ${fmtDH(m.enviadoEm)}.</b> Aguardando o administrador lançar no portal. Para alterar algo, puxe de volta na etapa Revisão e envio.</div>`;
  if(m.status==="concluida") return `<div class="note banner"><b>Concluída.</b> Lançada em ${fmtDH(m.lancadoEm)}${m.lancadoPor?" por "+esc(m.lancadoPor):""} · Registro <b>${esc(m.registro)}</b>.</div>`;
  if(m.status==="cancelada") return `<div class="note banner">Oportunidade cancelada.</div>`;
  if(!meu) return `<div class="note banner">Rascunho de ${esc(m.dono)} (ainda não enviado).</div>`;
  return "";
}
function renderEditor(){
  const ed=$("#editor");
  if(!cur){ed.innerHTML=`<div class="empty"><h2>${caixa==="pendentes"?"Nada pendente":"Comece uma oportunidade"}</h2><p class="muted" style="max-width:52ch">${caixa==="pendentes"?"Quando um vendedor enviar uma oportunidade, ela aparece aqui para ser lançada no portal.":"O questionário guarda cada resposta automaticamente no servidor. Quando terminar, envie para o administrador lançar no portal."}</p><button class="btn pri" onclick="document.getElementById('btnNew').click()">+ Nova oportunidade</button></div>`;return;}
  const issues=validate(cur), ro=!editable();
  ed.innerHTML=`${bannerStatus()}<nav class="steps">${STEPS.map((s,i)=>{const sk=s.skip&&s.skip(cur);const has=issues.some(x=>x.step===i);
      return `<button data-step="${i}" ${i===step?'aria-current="step"':""} class="${sk?"":(has?"warn":(i<STEPS.length-1?"done":""))}" ${sk?'style="opacity:.45"':""}><span class="n">${i+1}</span>${s.t}</button>`}).join("")}</nav>
    <div class="pane" id="pane"></div>`;
  ed.querySelector(".steps").addEventListener("click",e=>{const b=e.target.closest("button");if(b){step=+b.dataset.step;renderEditor();}});
  const pane=$("#pane");
  STEPS[step].f(pane);
  if(ro){ pane.querySelectorAll("input,select,textarea,button").forEach(el=>{ if(!el.closest("[data-keep]")) el.disabled=true; }); pane.classList.add("ro"); }
  pane.insertAdjacentHTML("beforeend",`<div class="nav"><button class="btn ghost" id="prev" ${step===0?"disabled":""}>← Voltar</button>
     ${step<STEPS.length-1?'<button class="btn pri" id="next">Próxima etapa →</button>':""}</div>`);
  $("#prev").onclick=()=>{do{step--}while(step>0&&STEPS[step].skip&&STEPS[step].skip(cur));renderEditor();};
  const nx=$("#next"); if(nx) nx.onclick=()=>{do{step++}while(step<STEPS.length-1&&STEPS[step].skip&&STEPS[step].skip(cur));renderEditor();window.scrollTo({top:0});};
}

function ebr(n,s){return "Etapa "+n+(isSE(cur)?(s?" · Portal seção "+s:" · Portal: parceiro / usuário final"):"");}
function get(o,p){return p.split(".").reduce((a,k)=>a==null?a:a[k],o)}
function set(o,p,v){const ks=p.split(".");let a=o;ks.slice(0,-1).forEach(k=>a=a[k]);a[ks.at(-1)]=v;}
function field(path,label,opt={}){
  const v=get(cur,path)??""; const id="f_"+path.replace(/\./g,"_");
  let ctl;
  if(opt.type==="uf") ctl=`<select id="${id}" data-b="${path}"><option value="">Selecionar</option>${UFS.map(u=>`<option ${u===v?"selected":""}>${u}</option>`).join("")}</select>`;
  else if(opt.type==="select") ctl=`<select id="${id}" data-b="${path}">${opt.options.map(u=>`<option ${u===v?"selected":""}>${esc(u)}</option>`).join("")}</select>`;
  else if(opt.type==="textarea") ctl=`<textarea id="${id}" data-b="${path}" placeholder="${esc(opt.ph||"")}" maxlength="${opt.max||4000}">${esc(v)}</textarea>`;
  else ctl=`<input id="${id}" type="${opt.type||"text"}" data-b="${path}" data-fmt="${opt.fmt||""}" value="${esc(v)}" placeholder="${esc(opt.ph||"")}" ${opt.max?`maxlength="${opt.max}"`:""} ${opt.list?`list="${opt.list}"`:""} autocomplete="off">`;
  return `<div class="f ${opt.full?"full":""}"><label for="${id}">${label}${opt.req?'<span class="req">*</span>':""}</label>${ctl}${opt.hint?`<span class="hint">${opt.hint}</span>`:""}<span class="err" data-err="${path}"></span></div>`;
}
function bind(root,after){
  root.querySelectorAll("[data-b]").forEach(el=>{
    const ev=el.tagName==="SELECT"||el.type==="checkbox"||el.type==="radio"?"change":"input";
    el.addEventListener(ev,()=>{
      let v=el.type==="checkbox"?el.checked:el.value;
      const fm=el.dataset.fmt;
      if(fm==="cnpj"){v=fmtCNPJ(v);el.value=v}
      if(fm==="cep"){v=fmtCEP(v);el.value=v}
      if(fm==="tel"){v=fmtTel(v);el.value=v}
      if(el.type==="radio"){ if(!el.checked) return; v=el.value==="true"?true:el.value==="false"?false:el.value; }
      set(cur,el.dataset.b,v); touch(); showErrs(root); after&&after(el);
    });
    if(el.dataset.fmt==="uf-paste") {}
  });
  showErrs(root);
}
function showErrs(root){
  const iss=validate(cur);
  root.querySelectorAll("[data-err]").forEach(s=>{const x=iss.find(i=>i.path===s.dataset.err&&i.hard);s.textContent=x&&get(cur,s.dataset.err)?x.msg:"";
    const inp=root.querySelector(`[data-b="${s.dataset.err}"]`); if(inp) inp.classList.toggle("bad",!!(x&&get(cur,s.dataset.err)));});
}

/* ---------- 1 cenário ---------- */
function paneCenario(p){
  p.innerHTML=`<header><span class="eyebrow">Etapa 1</span><h2>Que tipo de oportunidade é essa?</h2><p class="muted">Escolha o fabricante e o tipo de venda. Isso define o catálogo e quais blocos você precisa preencher.</p></header>
  <div class="grid"><div class="f"><label for="f_fab">Fabricante</label><select id="f_fab" data-b="fabricanteId">${fabOptions(cur.fabricanteId)}</select>
    <span class="hint">O catálogo de produtos e o portal dependem do fabricante.</span></div></div>
  <div class="choice">
    <label><input type="radio" name="cen" data-b="cenario" value="direto" ${cur.cenario==="direto"?"checked":""}><span><b>Venda direta ao cliente final</b><small>Indústria, comércio ou obra comprando da S2I sem intermediário técnico.</small></span></label>
    <label><input type="radio" name="cen" data-b="cenario" value="integrador" ${cur.cenario==="integrador"?"checked":""}><span><b>Com integrador / painelista</b><small>Um parceiro monta o painel ou o sistema e o equipamento vai para o cliente dele.</small></span></label>
    <label><input type="radio" name="cen" data-b="cenario" value="projeto" ${cur.cenario==="projeto"?"checked":""}><span><b>Projeto grande / obra</b><small>Construtora, EPC, especificador ou concorrência com várias etapas.</small></span></label>
  </div>
  <div class="grid">
    <div class="f full"><label>A conta que você vai informar é quem vai usar os produtos?</label>
      <div class="row"><label class="check"><input type="radio" name="uf" data-b="contaEhUsuarioFinal" value="true" ${cur.contaEhUsuarioFinal?"checked":""}> Sim, é o usuário final</label>
      <label class="check"><input type="radio" name="uf" data-b="contaEhUsuarioFinal" value="false" ${!cur.contaEhUsuarioFinal?"checked":""}> Não (ex.: a conta é a construtora e o usuário é a fábrica)</label></div>
      <span class="hint">No portal: “A conta informada é o utilizador final da oportunidade”. Se for Não, o portal pede os dados do usuário final.</span></div>
    <div class="f full"><label class="check"><input type="checkbox" data-b="temParceiro" ${cur.temParceiro?"checked":""}> Há um parceiro na cadeia de valor (integrador, painelista, instalador, revenda)</label></div>
    ${field("oportunidade.contatoSE",isSE(cur)?"Contato Schneider":"Contato no fabricante",{list:"dlSE",hint:"Nome do vendedor/gestor do fabricante que acompanha a conta. Os já usados aparecem ao digitar."})}${seList()}
  </div>`;
  bind(p,el=>{ if(el.dataset.b==="fabricanteId"){cur.fabricanteId=+el.value;touch();renderEditor();toast("Fabricante: "+fabNome(cur.fabricanteId));return;}
               if(el.dataset.b==="cenario"){ if(cur.cenario==="integrador"&&!cur.temParceiro){cur.temParceiro=true;touch();} renderEditor(); }
               if(el.dataset.b==="temParceiro"||el.dataset.b==="contaEhUsuarioFinal") renderEditor(); });
}
/* ---------- 2 conta ---------- */
function paneConta(p){
  p.innerHTML=`<header><span class="eyebrow">${ebr(2,1)}</span><h2>Cliente final (conta)</h2><p class="muted">No portal, procure primeiro o nome em “Pesquisar Nome da conta”. Se a conta já existir, o portal preenche sozinho; senão use os dados abaixo.</p></header>
  ${Object.keys(CAD.clientes).length?`<div class="quick"><label for="qCli"><b>Cliente salvo:</b></label><select id="qCli"><option value="">Escolher para preencher tudo…</option>${byUse(CAD.clientes).map(([k,c])=>`<option value="${k}">${esc(clienteLabel(c))}</option>`).join("")}</select></div>`:""}
  <div class="grid">
    ${field("conta.cnpj","CNPJ do cliente final",{req:1,fmt:"cnpj",ph:"00.000.000/0000-00",hint:"Pedido no final do formulário (“Informe o CNPJ do Cliente Final”)."})}
    ${field("conta.nome","Nome da conta",{req:1,max:80,hint:"Razão social ou nome fantasia, como aparece no CNPJ."})}
    ${field("conta.endereco","Endereço",{req:1,max:80,full:1,ph:"Rua, número, bairro"})}
    ${field("conta.cidade","Cidade",{req:1,max:80})}
    ${field("conta.uf","Estado",{req:1,type:"uf"})}
    ${field("conta.cep","CEP",{req:1,fmt:"cep",ph:"00000-000"})}
    <div class="f"><label>País</label><input value="Brasil" disabled></div>
  </div>`;
  bind(p,el=>{ if(el.dataset.b==="conta.cnpj"&&digits(cur.conta.cnpj).length===14){const k="c"+digits(cur.conta.cnpj);
      if(CAD.clientes[k]&&!cur.conta.nome){applyCliente(cur,k);touch();renderEditor();toast("Cliente encontrado nos cadastros");}}});
  const q=$("#qCli"); if(q) q.onchange=()=>{if(!q.value)return;applyCliente(cur,q.value);const c=CAD.clientes[q.value];
    if(c.parceiroKey&&CAD.parceiros[c.parceiroKey]&&!cur.parceiro.nome)applyParceiro(cur,c.parceiroKey);touch();renderEditor();toast("Dados do cliente carregados");};
}
/* ---------- 3 contato ---------- */
function paneContato(p){
  p.innerHTML=`<header><span class="eyebrow">${ebr(3,2)}</span><h2>Contato do cliente e local do projeto</h2></header>
  <div class="grid">
    ${field("contato.nome","Nome do contato principal",{req:1,max:80})}
    ${field("contato.sobrenome","Sobrenome",{req:1,max:80})}
    ${field("contato.email","E-mail",{req:1,type:"email"})}
    ${field("contato.telefone","Telefone",{req:1,type:"tel",fmt:"tel",ph:"(62) 99999-9999"})}
    ${field("contato.cargo","Cargo / função",{hint:"Não vai para o portal; entra na descrição (quem decide)."})}
    ${field("contato.endereco","Endereço do contato",{req:1,max:255,hint:"Normalmente o mesmo da conta.",full:1})}
    <div class="f full"><label class="check"><input type="checkbox" data-b="projeto.mesmo" ${cur.projeto.mesmo?"checked":""}> O projeto/obra fica no mesmo endereço da conta</label></div>
  </div>
  <div class="grid" id="pj" ${cur.projeto.mesmo?"hidden":""}>
    ${field("projeto.endereco","Endereço do projeto final",{req:1,max:80,full:1})}
    ${field("projeto.cidade","Cidade do projeto",{req:1,max:80})}
    ${field("projeto.uf","Estado do projeto",{req:1,type:"uf"})}
    ${field("projeto.cep","CEP do projeto",{req:1,fmt:"cep"})}
  </div>
  <div class="row"><button class="btn small ghost" id="cpEnd">Copiar endereço da conta para o contato</button></div>`;
  bind(p,el=>{if(el.dataset.b==="projeto.mesmo")$("#pj").hidden=cur.projeto.mesmo;});
  $("#cpEnd").onclick=()=>{const c=cur.conta;cur.contato.endereco=[c.endereco,c.cidade,c.uf&&("- "+c.uf),c.cep].filter(Boolean).join(", ");touch();renderEditor();};
}
/* ---------- 4 parceiro / usuário final ---------- */
function partyFields(base,titulo,extra){
  return `<h3>${titulo}</h3><div class="grid">
    ${field(base+".nome","Nome da conta",{req:1,max:80})}${field(base+".cnpj","CNPJ",{fmt:"cnpj",hint:"Para sua conferência."})}
    ${field(base+".endereco","Endereço",{req:1,max:80,full:1})}
    ${field(base+".cidade","Cidade",{req:1,max:80})}${field(base+".uf","Estado",{type:"uf",req:1})}
    ${field(base+".cep","CEP",{req:1,fmt:"cep"})}<span></span>
    ${field(base+".contatoNome","Nome do contato",{req:1,max:80})}${field(base+".contatoSobrenome","Sobrenome",{req:1,max:80})}
    ${field(base+".email","E-mail",{req:1,type:"email"})}${field(base+".telefone","Telefone",{req:1,fmt:"tel"})}
    ${extra||""}</div>`;
}
function paneParceiro(p){
  let h=`<header><span class="eyebrow">${ebr(4,0)}</span><h2>Quem mais participa</h2></header>`;
  if(cur.temParceiro&&Object.keys(CAD.parceiros).length) h+=`<div class="quick"><label for="qPar"><b>Parceiro salvo:</b></label><select id="qPar"><option value="">Escolher para preencher…</option>${byUse(CAD.parceiros).map(([k,p])=>`<option value="${k}">${esc(p.nome)}${p.cidade?" · "+esc(p.cidade):""}</option>`).join("")}</select></div>`;
  if(cur.temParceiro) h+=partyFields("parceiro","Parceiro (integrador, painelista, instalador)",field("tipoParceiro","Papel do parceiro",{type:"select",options:["Integrador / painelista","Instalador","Construtora / EPC","Revenda","Especificador / projetista","OEM / fabricante de máquinas"]}));
  if(!cur.contaEhUsuarioFinal) h+=partyFields("usuarioFinal","Usuário final (quem vai operar os equipamentos)");
  if(cur.temParceiro) h+=`<p class="note">No portal, clique em <b>Adicionar parceiro da cadeia de valor</b> antes de rodar o preenchedor (ou rode de novo depois de clicar).</p>`;
  if(!h.includes("<h3>")) h+=`<p class="muted">Nada a preencher aqui: sem parceiro e a conta é o usuário final.</p>`;
  p.innerHTML=h; bind(p);
  const q=$("#qPar"); if(q) q.onchange=()=>{if(!q.value)return;applyParceiro(cur,q.value);touch();renderEditor();toast("Parceiro carregado");};
}
/* ---------- 5 projeto ---------- */
function paneProjeto(p){
  const o=cur.oportunidade, big=cur.cenario==="projeto";
  p.innerHTML=`<header><span class="eyebrow">${ebr(5,3)}</span><h2>Informações da oportunidade</h2></header>
  <div class="grid">
    ${field("oportunidade.nomeProjeto","Nome do projeto",{req:1,max:100,full:1,hint:"Padrão sugerido: CLIENTE – OBRA/APLICAÇÃO – ESCOPO – CIDADE. Ex.: DURLI COUROS – CURTUME LINHA 3 – INVERSORES ATV320 – GOIÂNIA"})}
    <div class="full row"><button class="btn small ghost" id="sugNome">Sugerir nome a partir das respostas</button></div>
    ${field("oportunidade.escopo","Escopo / o que vai ser fornecido",{ph:"Ex.: 12 inversores ATV320 + CLP M221 para linha de curtimento"})}
    ${field("oportunidade.aplicacao","Aplicação / segmento",{ph:"Ex.: Couro, alimentos, saneamento, data center…"})}
    ${field("oportunidade.dataCotacao","Data prevista para a cotação",{type:"date",hint:"Quando você vai pedir preço ao fabricante."})}
    ${field("oportunidade.dataPedido","Data esperada do pedido",{type:"date",req:1,hint:"Quando o cliente deve fechar."})}
    ${cur.temParceiro?field("oportunidade.palavraChave","Palavra-chave do parceiro",{hint:"Com integrador: informe a palavra-chave a usar."})
      :`<div class="f"><label>Palavra-chave do parceiro</label><input type="text" value="${esc(cur.conta.nome)}" disabled><span class="hint">Sem integrador, é o nome da conta (preenchido sozinho).</span></div>`}
    ${field("oportunidade.concorrentes","Concorrentes na disputa",{ph:"Ex.: WEG, Siemens, ABB"})}
    ${field("oportunidade.decisor","Quem decide a compra",{ph:"Ex.: Engenharia de manutenção (Sr. Fulano)"})}
    ${big?field("oportunidade.fase","Fase da obra",{type:"select",options:["","Especificação / projeto","Concorrência aberta","Negociação final","Obra em andamento"]}):""}
    ${big?field("oportunidade.construtora","Construtora / EPC"):""}
    ${big?field("oportunidade.especificador","Especificador / projetista"):""}
    ${big?field("oportunidade.prazoObra","Prazo da obra / entregas",{ph:"Ex.: 3 entregas entre mar e jun/2027"}):""}
    ${field("oportunidade.descricao","Descrição",{type:"textarea",full:1,max:4000,hint:"Use o botão para montar a descrição com as respostas acima e ajuste se quiser."})}
    <div class="full row"><button class="btn small ghost" id="gerDesc">Montar descrição com as respostas</button></div>
  </div>`;
  bind(p);
  $("#sugNome").onclick=()=>{const c=cur.conta,pj=cur.projeto.mesmo?c:cur.projeto;
    o.nomeProjeto=[c.nome,o.aplicacao,o.escopo,pj.cidade].filter(Boolean).join(" – ").toUpperCase().slice(0,100);touch();renderEditor();};
  $("#gerDesc").onclick=()=>{o.descricao=buildDesc(cur);touch();renderEditor();};
}
function palavraChave(o){ // sem integrador: palavra-chave = nome da conta
  return o.temParceiro?(o.oportunidade.palavraChave||""):(o.conta.nome||"");
}
function buildDesc(op){
  const o=op.oportunidade,ln=[];
  const cen={direto:"Venda direta ao cliente final",integrador:"Venda com integrador/painelista",projeto:"Projeto/obra"}[op.cenario];
  ln.push(cen+".");
  if(o.escopo) ln.push("Escopo: "+o.escopo+".");
  if(o.aplicacao) ln.push("Aplicação: "+o.aplicacao+".");
  if(op.temParceiro&&op.parceiro.nome) ln.push(op.tipoParceiro+": "+op.parceiro.nome+(op.parceiro.cidade?" ("+op.parceiro.cidade+")":"")+".");
  if(!op.contaEhUsuarioFinal&&op.usuarioFinal.nome) ln.push("Usuário final: "+op.usuarioFinal.nome+".");
  if(o.decisor) ln.push("Decisor: "+o.decisor+".");
  else if(op.contato.cargo) ln.push("Contato: "+[op.contato.nome,op.contato.sobrenome].join(" ")+" ("+op.contato.cargo+").");
  if(o.fase) ln.push("Fase: "+o.fase+".");
  if(o.construtora) ln.push("Construtora/EPC: "+o.construtora+".");
  if(o.especificador) ln.push("Especificador: "+o.especificador+".");
  if(o.prazoObra) ln.push("Prazo: "+o.prazoObra+".");
  if(o.concorrentes) ln.push("Concorrência: "+o.concorrentes+".");
  const L=op.linhas.filter(l=>l.produto);
  if(L.length) ln.push("Linhas: "+L.map(l=>l.produto+(l.familia?" / "+l.familia:"")+" "+BRL(l.valor)).join("; ")+".");
  const its=op.itens.filter(i=>i.code&&i.found);
  if(its.length) ln.push("Principais códigos: "+its.slice(0,12).map(i=>i.qtd+"x "+i.code).join(", ")+(its.length>12?" e outros":"")+".");
  return ln.join(" ").slice(0,4000);
}



/* ---------- 6 linhas (catálogo do fabricante no servidor) ---------- */
/* catálogo: baixado da planilha uma vez por versão e guardado no navegador (IndexedDB); busca feita aqui */
const CATS={}, LINHAS_CACHE={};
function idb(){return new Promise((ok,no)=>{try{const r=indexedDB.open("s2i_catalogos",1);r.onupgradeneeded=()=>r.result.createObjectStore("cat");r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error);}catch(e){no(e);}});}
async function idbGet(k){try{const d=await idb();return await new Promise(ok=>{const q=d.transaction("cat").objectStore("cat").get(k);q.onsuccess=()=>ok(q.result);q.onerror=()=>ok(null);});}catch(e){return null;}}
async function idbPut(k,v){try{const d=await idb();await new Promise(ok=>{const t=d.transaction("cat","readwrite");t.objectStore("cat").put(v,k);t.oncomplete=ok;t.onerror=ok;});}catch(e){}}
function verCat(fid){const f=fabDe(fid);return f?String(f.catalogoEm||0)+"/"+(f.itens||0):"0";}
async function getCat(fid){
  if(!fid) return {rows:[],idx:new Map()};
  const ver=verCat(fid);
  if(CATS[fid]&&CATS[fid].ver===ver) return CATS[fid];
  let rows=null; const salvo=await idbGet("fab_"+fid);
  if(salvo&&salvo.ver===ver) rows=salvo.rows;
  if(!rows){ rows=(fabDe(fid)||{}).itens?await api("GET","catalogo/"+fid+"/todos"):[]; idbPut("fab_"+fid,{ver,rows}); }
  const c={ver,rows,idx:new Map(rows.map((r,i)=>[r[0],i]))}; CATS[fid]=c; delete LINHAS_CACHE[fid]; return c;
}
async function linhasFab(fid){ if(!fid) return {}; if(!LINHAS_CACHE[fid]){ const c=await getCat(fid), L={};
    c.rows.forEach(r=>{ if(!r[2]) return; L[r[2]]=L[r[2]]||[]; if(r[3]&&!L[r[2]].includes(r[3])) L[r[2]].push(r[3]); });
    Object.values(L).forEach(a=>a.sort()); LINHAS_CACHE[fid]=L; } return LINHAS_CACHE[fid]; }
function similarCat(c,code){ const r=[]; for(let n=code.length;n>=Math.max(4,code.length-3)&&r.length<5;n--){const p=code.slice(0,n);for(const x of c.rows){if(x[0].startsWith(p)&&!r.includes(x[0])){r.push(x[0]);if(r.length>=5)break;}}} return r; }
function buscarCat(c,q,limit=15){
  q=norm(q).trim(); if(!q) return [];
  const words=q.split(/\s+/), res=[];
  for(const r of c.rows){ const hay=r[0]+" "+norm(r[1]); if(r[0].startsWith(words[0])||words.every(w=>hay.includes(w))){res.push(r); if(res.length>=limit*4) break;} }
  res.sort((a,b)=>(b[0].startsWith(q)?1:0)-(a[0].startsWith(q)?1:0)||a[0].length-b[0].length);
  return res.slice(0,limit);
}
function itemDoCatalogo(r,qtd,preco,se){
  const ex=r[4]||{}; let produto=r[2]||"", familia=r[3]||"";
  if(se){ if(!FAM[produto]) produto=""; if(familia&&!(FAM[produto]||[]).includes(familia)) familia=""; }
  return {code:r[0],qtd,found:true,desc:r[1],preco:preco||0,helios:ex.helios||"",lcos:ex.lcos||"",produto,familia,conf:produto?(ex.conf||"catalogo"):""};
}
function mapItem(r){ // r=[code,desc,helios,lcos]
  const h=HELIOS[r[2]]; const lc=LCOS[r[3]];
  let produto=h?h[0]:"", conf=h?h[1]:"", familia="";
  if(lc){ if(lc[0]){ if(lc[0]!==produto) conf="media"; produto=lc[0]; } if(lc[1]) familia=lc[1]; }
  if(!familia&&SPARE_FAM[produto]) familia=SPARE_FAM[produto];
  if(!familia&&r[2]==="IDVSD"){ if(/^ATV(12|3)/.test(r[0])) familia="Máquinas"; else if(/^ATV(6|9)/.test(r[0])) familia="PROCESSO"; }
  if(familia&&!(FAM[produto]||[]).includes(familia)) familia="";
  return {produto,familia,conf};
}

function num(x){ // aceita 1.234,56 · 1234,56 · 1234.56 · 10x
  let s=String(x).replace(/^R\$/i,"").replace(/x$/i,"");
  if(s.includes(",")) s=s.replace(/\./g,"").replace(",",".");
  return parseFloat(s);
}

const pareceCodigo=x=>!/^(R\$)?\d{1,3}(\.\d{3})*(,\d+)?$|^(R\$)?\d+([.,]\d+)?x?$/i.test(x)||/^\d{5,}$/.test(x);
function parseCodes(txt,achados){
  const out=[], isNum=x=>/^(R\$)?\d{1,3}(\.\d{3})*(,\d+)?$|^(R\$)?\d+([.,]\d+)?x?$/i.test(x);
  txt.split(/\r?\n/).forEach(line=>{
    const parts=line.trim().split(/[\t ;]+/).filter(x=>x&&x.toUpperCase()!=="R$"); if(!parts.length) return;
    let ci=parts.findIndex(x=>achados&&achados[x.toUpperCase()]);
    if(ci<0) ci=parts.findIndex(x=>!isNum(x));
    if(ci<0) ci=0;
    const code=parts[ci].toUpperCase();
    const ns=parts.filter((x,i)=>i!==ci&&isNum(x)).map(num).filter(n=>!isNaN(n));
    out.push({code,qtd:ns[0]||1,preco:ns[1]||0});
  });
  return out;
}
async function consultarCodigos(lista){
  const cods=[...new Set(lista.map(x=>String(x).toUpperCase()))].slice(0,2000);
  if(!cods.length||!cur.fabricanteId) return {itens:{},sugestoes:{}};
  const c=await getCat(cur.fabricanteId), itens={}, sugestoes={};
  cods.forEach(k=>{const i=c.idx.get(k); if(i!=null) itens[k]=c.rows[i];});
  cods.filter(k=>!itens[k]).slice(0,50).forEach(k=>{const s=similarCat(c,k); if(s.length) sugestoes[k]=s;});
  return {itens,sugestoes};
}
async function addItems(list,res){
  const se=isSE(cur);
  res=res||await consultarCodigos(list.map(x=>x.code));
  list.forEach(({code,qtd,preco})=>{
    code=code.toUpperCase();
    const ex=cur.itens.find(x=>x.code===code);
    if(ex){ex.qtd+=qtd;if(preco)ex.preco=preco;return;}
    const r=res.itens[code];
    if(!r){cur.itens.push({code,qtd,found:false,desc:"Código não está no catálogo",sug:res.sugestoes[code]||[],preco:preco||0,produto:"",familia:"",conf:""});return;}
    cur.itens.push(itemDoCatalogo(r,qtd,preco,se));
  });
  touch();
}
function totalItens(o){return o.itens.reduce((s,i)=>s+(+i.preco||0)*(+i.qtd||0),0);}
function totalLinhas(o){return (o.linhas||[]).reduce((s,l)=>s+(+l.valor||0),0);}
function gerarLinhas(){
  const g=new Map();
  cur.itens.filter(i=>i.produto).forEach(i=>{const k=i.produto+"||"+(i.familia||"");const v=(+i.preco||0)*(+i.qtd||0);
    g.set(k,(g.get(k)||0)+v);});
  cur.linhas=[...g].map(([k,v])=>{const [produto,familia]=k.split("||");return {produto,familia,valor:Math.round(v*100)/100};}).sort((a,b)=>b.valor-a.valor);
  touch(); renderEditor(); const sp=cur.itens.filter(i=>i.produto&&!(+i.preco>0)).length; toast(cur.linhas.length+" linha(s) geradas"+(sp?" · "+sp+" item(ns) sem preço ficaram com R$ 0":""));
}
let LIN={};
function famOptions(produto,sel){const fams=isSE(cur)?(FAM[produto]||[]):(LIN[produto]||[]);
  return `<option value="">${produto?"Selecionar família":"Escolha o produto"}</option>`+fams.map(f=>`<option ${f===sel?"selected":""}>${esc(f)}</option>`).join("")+(sel&&!fams.includes(sel)?`<option selected>${esc(sel)}</option>`:"");}
function prodCtl(attr,sel){
  if(isSE(cur)) return `<select ${attr}><option value="">Selecionar</option>${PRODUTOS.map(p=>`<option ${p===sel?"selected":""}>${esc(p)}</option>`).join("")}</select>`;
  return `<input type="text" ${attr} list="dlLin" value="${esc(sel||"")}" placeholder="Linha de produto">`;
}
function famCtl(attr,produto,sel){
  if(isSE(cur)) return `<select ${attr}>${famOptions(produto,sel)}</select>`;
  return `<input type="text" ${attr} list="dlFam_${esc(norm(produto).replace(/[^A-Z0-9]/g,""))}" value="${esc(sel||"")}" placeholder="Família">`;
}
function paneLinhas(p){
  const fab=fabDe(cur.fabricanteId), se=isSE(cur);
  if(!fab){p.innerHTML=`<header><span class="eyebrow">Etapa 6</span><h2>Linhas de produto</h2></header><p class="note warn">Escolha o fabricante na etapa 1 (Cenário).</p>`;return;}
  const nf=cur.itens.filter(i=>!i.found).length, semProd=cur.itens.filter(i=>i.found&&!i.produto).length, semPreco=cur.itens.filter(i=>!(+i.preco>0)).length;
  const confTxt={alta:"mapeamento confirmado",media:"sugestão — confira",catalogo:"do catálogo"};
  p.innerHTML=`<header><span class="eyebrow">Etapa 6${se?" · Portal seção 4":""}</span><h2>Linhas de produto · ${esc(fab.nome)}</h2>
    <p class="muted">Cole os códigos da cotação (um por linha, com a quantidade). O sistema acha cada código no catálogo ${esc(fab.nome)} e diz em qual <b>${se?"Nome do produto":"linha"}</b> e <b>família</b> ele entra. Digite o <b>preço unitário do projeto</b> de cada item e ele soma o valor por linha.</p></header>
  <div class="grid">
    <div class="f full"><label for="codes">Códigos, quantidades e preços do projeto</label>
      <textarea id="codes" class="mono" placeholder="ATV320U22N4B 2 3150,00&#10;LC1D18M7 10 210,50&#10;GV2ME10 5&#10;EZC250H3200;1;1980" style="min-height:96px"></textarea>
      <span class="hint">Formato: <b>código quantidade preço-unitário</b> (o preço é opcional aqui; dá para digitar na tabela). Aceita colunas coladas do Excel e ponto e vírgula. Sem quantidade, conta 1.</span></div>
    <div class="full row"><button class="btn pri" id="addCodes">Adicionar códigos</button>
      <span class="muted" style="font-size:13px">Catálogo: ${fab.itens.toLocaleString("pt-BR")} códigos${fab.catalogoEm?" · atualizado em "+fmtData(fab.catalogoEm):""}</span></div>
    <div class="f full"><label for="find">Buscar no catálogo</label><input type="search" id="find" placeholder="Digite parte do código ou da descrição (ex.: ATV320, contator 18A, NSX250)"><div id="findRes"></div></div>
  </div>
  ${cur.itens.length?`<div class="row" style="justify-content:space-between"><h3>Itens (${cur.itens.length})</h3>
     <div class="row"><button class="btn small ghost" id="clearIt">Limpar itens</button></div></div>
  ${nf||semProd||semPreco?`<p class="note warn">${semPreco?semPreco+" item(ns) sem preço: digite o preço unitário do projeto. ":""}${nf?nf+" código(s) não estão no catálogo — confira a digitação ou escolha a linha manualmente. ":""}${semProd?semProd+" item(ns) sem linha definida.":""}</p>`:""}
  <div class="tablewrap"><table><thead><tr><th>Código</th><th>Descrição</th><th class="num">Qtd</th><th class="num">Preço unit. no projeto (R$)</th><th>${se?"Produto no portal":"Linha"}</th><th>Família</th><th class="num">Total</th><th></th></tr></thead><tbody id="itBody">
  ${cur.itens.map((i,k)=>`<tr data-k="${k}"><td class="mono">${esc(i.code)}</td><td style="min-width:200px">${esc(i.desc)}${!i.found&&i.sug&&i.sug.length?`<div class="row" style="margin-top:4px;gap:4px"><span class="muted" style="font-size:12px">Quis dizer:</span>${i.sug.map(s=>`<button class="btn small ghost mono" data-it="swap" data-code="${esc(s)}">${esc(s)}</button>`).join("")}</div>`:""}${i.helios?`<div class="muted mono" style="font-size:11px">${esc(i.helios)} · ${esc(i.lcos)}</div>`:""}</td>
     <td class="num"><input type="number" min="0" step="1" value="${i.qtd}" data-it="qtd" style="width:70px"></td>
     <td class="num"><input type="number" min="0" step="0.01" value="${i.preco||""}" data-it="preco" style="width:120px" placeholder="0,00" class="${i.preco>0?"":"bad"}"></td>
     <td style="min-width:200px">${prodCtl('data-it="produto"',i.produto)}${confTxt[i.conf]?`<div style="margin-top:4px"><span class="conf ${i.conf==="alta"||i.conf==="catalogo"?"alta":"media"}">${confTxt[i.conf]}</span></div>`:""}</td>
     <td style="min-width:170px">${famCtl('data-it="familia"',i.produto,i.familia)}</td>
     <td class="num rowtot">${BRL((+i.preco||0)*(+i.qtd||0))}</td>
     <td><button class="btn small ghost" data-it="del" aria-label="Remover ${esc(i.code)}">×</button></td></tr>`).join("")}
  </tbody></table></div>
  <div class="tot"><span>Total dos itens (preços do projeto)</span><b id="itTot">${BRL(totalItens(cur))}</b></div>
  <div class="row"><button class="btn pri" id="gerar">Gerar linhas a partir dos itens</button><span class="muted" style="font-size:13px">Agrupa por linha + família e soma quantidade × preço do projeto. Substitui as linhas abaixo.</span></div>`:""}
  <h3>Linhas da oportunidade${se?" (vão para o portal)":""}</h3>
  <div class="tablewrap"><table><thead><tr><th>#</th><th>${se?"Nome do produto":"Linha de produto"}</th><th>Família</th><th class="num">Valor estimado (R$)</th><th></th></tr></thead><tbody id="lnBody">
  ${cur.linhas.map((l,k)=>`<tr data-l="${k}"><td>${k+1}</td><td style="min-width:220px">${prodCtl('data-ln="produto"',l.produto)}</td><td style="min-width:180px">${famCtl('data-ln="familia"',l.produto,l.familia)}</td>
     <td class="num"><input type="number" min="0" step="0.01" value="${l.valor||""}" data-ln="valor" style="width:130px"></td><td><button class="btn small ghost" data-ln="del" aria-label="Remover linha ${k+1}">×</button></td></tr>`).join("")||`<tr><td colspan="5" class="muted">Nenhuma linha ainda. Gere a partir dos códigos ou adicione manualmente.</td></tr>`}
  </tbody></table></div>
  <div class="row" style="justify-content:space-between"><button class="btn small ghost" id="addLn">+ Linha manual</button>
    <div class="tot"><span>Valor total da oportunidade</span><b>${BRL(totalLinhas(cur))}</b></div></div>
  ${se&&cur.linhas.some(l=>l.produto&&(+l.valor||0)<MIN_VALOR)?`<p class="note warn">Há linha abaixo de ${BRL(MIN_VALOR)}. O portal avisa que o valor mínimo para prestar contas no programa é de 5 mil reais; abaixo disso, fale com o gestor de conta SE antes de enviar.</p>`:""}
  <div id="dls"></div>`;
  if(!se) linhasFab(cur.fabricanteId).then(L=>{LIN=L;const d=$("#dls");if(!d)return;
    d.innerHTML=`<datalist id="dlLin">${Object.keys(L).map(x=>`<option value="${esc(x)}">`).join("")}</datalist>`+Object.entries(L).map(([k,fs])=>`<datalist id="dlFam_${esc(norm(k).replace(/[^A-Z0-9]/g,""))}">${fs.map(f=>`<option value="${esc(f)}">`).join("")}</datalist>`).join("");});
  $("#addCodes").onclick=async()=>{const t=$("#codes").value;
    const toks=t.split(/[\r\n\t ;]+/).filter(x=>x&&pareceCodigo(x));
    if(!toks.length){toast("Cole ao menos um código");return;}
    const b=$("#addCodes"); b.disabled=true; b.textContent=CATS[cur.fabricanteId]?"Consultando catálogo…":"Baixando o catálogo (só na primeira vez)…";
    try{ const res=await consultarCodigos(toks); const l=parseCodes(t,res.itens); await addItems(l,res); renderEditor(); toast(l.length+" código(s) adicionados"); }
    catch(e){falha(e); b.disabled=false; b.textContent="Adicionar códigos";}};
  const f=$("#find"); let fT=null;
  f.oninput=()=>{clearTimeout(fT);fT=setTimeout(async()=>{const q=f.value.trim();if(!q){$("#findRes").innerHTML="";return;}
    let r=[]; try{r=buscarCat(await getCat(cur.fabricanteId),q);}catch(e){falha(e);return;}
    if(f.value.trim()!==q) return;
    $("#findRes").innerHTML=r.length?`<div class="tablewrap" style="margin-top:6px"><table><tbody>${r.map(x=>`<tr><td class="mono">${esc(x[0])}</td><td>${esc(x[1])}</td><td style="font-size:12px">${esc(x[2]||"—")}${x[3]?" / "+esc(x[3]):""}</td><td><button class="btn small" data-add="${esc(x[0])}">Adicionar</button></td></tr>`).join("")}</tbody></table></div>`:'<p class="muted" style="font-size:13px">Nada encontrado.</p>';},250);};
  $("#findRes").onclick=async e=>{const b=e.target.closest("[data-add]");if(!b||!editable())return;await addItems([{code:b.dataset.add,qtd:1}]);renderEditor();toast(b.dataset.add+" adicionado");};
  const tb=$("#itBody");
  if(tb){ tb.addEventListener("change",e=>{const tr=e.target.closest("tr");const i=cur.itens[+tr.dataset.k];const k=e.target.dataset.it;
      if(k==="qtd"||k==="preco"){ i[k]=+e.target.value||0; if(k==="preco")e.target.classList.toggle("bad",!(i.preco>0));
        tr.querySelector("td.rowtot").textContent=BRL((+i.preco||0)*(+i.qtd||0)); $("#itTot").textContent=BRL(totalItens(cur)); touch(); return; }
      if(k==="produto"){i.produto=e.target.value.trim();i.familia="";i.conf="manual";} if(k==="familia")i.familia=e.target.value.trim();
      touch();renderEditor();});
    tb.addEventListener("click",async e=>{const it=e.target.dataset.it;if(it!=="del"&&it!=="swap")return;const k=+e.target.closest("tr").dataset.k;
      const old=cur.itens.splice(k,1)[0];
      if(it==="swap"){const c=e.target.dataset.code,had=cur.itens.some(x=>x.code===c);await addItems([{code:c,qtd:old.qtd,preco:old.preco}]);if(!had){const n=cur.itens.pop();cur.itens.splice(k,0,n);}}
      touch();renderEditor();}); }
  const cl=$("#clearIt"); if(cl) cl.onclick=()=>{cur.itens=[];touch();renderEditor();};
  const gr=$("#gerar"); if(gr) gr.onclick=gerarLinhas;
  const lb=$("#lnBody");
  lb.addEventListener("change",e=>{const tr=e.target.closest("tr[data-l]");if(!tr)return;const l=cur.linhas[+tr.dataset.l];const k=e.target.dataset.ln;
    if(k==="produto"){l.produto=e.target.value.trim();l.familia="";} if(k==="familia")l.familia=e.target.value.trim(); if(k==="valor")l.valor=+e.target.value||0;
    touch(); if(k!=="valor")renderEditor();});
  lb.addEventListener("click",e=>{if(e.target.dataset.ln!=="del")return;cur.linhas.splice(+e.target.closest("tr").dataset.l,1);touch();renderEditor();});
  $("#addLn").onclick=()=>{cur.linhas.push({produto:"",familia:"",valor:0});touch();renderEditor();};
}

/* ---------- validação ---------- */
function validate(o){
  const I=[]; const need=(st,path,msg)=>{if(!String(get(o,path)??"").trim())I.push({step:st,path,msg,hard:false});};
  need(1,"conta.nome","Nome da conta"); need(1,"conta.endereco","Endereço da conta"); need(1,"conta.cidade","Cidade da conta"); need(1,"conta.uf","Estado da conta"); need(1,"conta.cep","CEP da conta"); need(1,"conta.cnpj","CNPJ do cliente final");
  if(o.conta.cnpj&&!validCNPJ(o.conta.cnpj))I.push({step:1,path:"conta.cnpj",msg:"CNPJ inválido (dígitos verificadores não conferem).",hard:true});
  if(o.conta.cep&&digits(o.conta.cep).length!==8)I.push({step:1,path:"conta.cep",msg:"CEP deve ter 8 dígitos.",hard:true});
  ["nome","sobrenome","email","telefone","endereco"].forEach(k=>need(2,"contato."+k,{nome:"Nome do contato",sobrenome:"Sobrenome do contato",email:"E-mail do contato",telefone:"Telefone do contato",endereco:"Endereço do contato"}[k]));
  if(o.contato.email&&!validEmail(o.contato.email))I.push({step:2,path:"contato.email",msg:"E-mail com formato inválido.",hard:true});
  if(o.contato.telefone&&digits(o.contato.telefone).length<10)I.push({step:2,path:"contato.telefone",msg:"Inclua o DDD (10 ou 11 dígitos).",hard:true});
  if(!o.projeto.mesmo){need(2,"projeto.endereco","Endereço do projeto");need(2,"projeto.cidade","Cidade do projeto");need(2,"projeto.uf","Estado do projeto");need(2,"projeto.cep","CEP do projeto");}
  const party=(b,lab)=>{["nome","endereco","cidade","uf","cep","contatoNome","contatoSobrenome","email","telefone"].forEach(k=>need(3,b+"."+k,lab+": "+{nome:"nome",endereco:"endereço",cidade:"cidade",uf:"estado",cep:"CEP",contatoNome:"nome do contato",contatoSobrenome:"sobrenome do contato",email:"e-mail",telefone:"telefone"}[k]));
    if(get(o,b+".email")&&!validEmail(get(o,b+".email")))I.push({step:3,path:b+".email",msg:"E-mail com formato inválido.",hard:true});
    if(get(o,b+".cnpj")&&!validCNPJ(get(o,b+".cnpj")))I.push({step:3,path:b+".cnpj",msg:"CNPJ inválido.",hard:true});};
  if(o.temParceiro)party("parceiro","Parceiro");
  if(!o.contaEhUsuarioFinal)party("usuarioFinal","Usuário final");
  need(4,"oportunidade.nomeProjeto","Nome do projeto"); need(4,"oportunidade.dataPedido","Data esperada do pedido");
  const hoje=new Date().toISOString().slice(0,10);
  if(o.oportunidade.dataPedido&&o.oportunidade.dataPedido<hoje)I.push({step:4,path:"oportunidade.dataPedido",msg:"Data do pedido já passou; o portal recusa data inválida.",hard:true});
  if(o.oportunidade.dataCotacao&&o.oportunidade.dataPedido&&o.oportunidade.dataCotacao>o.oportunidade.dataPedido)I.push({step:4,path:"oportunidade.dataCotacao",msg:"A cotação vem depois do pedido? Confira as datas.",hard:true});
  const L=o.linhas.filter(l=>l.produto);
  if(!L.length)I.push({step:5,path:"linhas",msg:"Pelo menos uma linha de produto com valor."});
  o.linhas.forEach((l,k)=>{if(!l.produto)I.push({step:5,path:"linhas",msg:`Linha ${k+1}: escolha o produto.`});else if(!(+l.valor>0))I.push({step:5,path:"linhas",msg:`Linha ${k+1}: informe o valor estimado.`});});
  return I;
}

/* ---------- 7 revisão ---------- */
function buildPack(o){
  const pj=o.projeto.mesmo?{endereco:o.conta.endereco,cidade:o.conta.cidade,uf:o.conta.uf,cep:o.conta.cep}:o.projeto;
  const party=x=>({nome:x.nome,endereco:x.endereco,pais:"Brasil",uf:x.uf,cidade:x.cidade,cep:x.cep,contatoNome:x.contatoNome,contatoSobrenome:x.contatoSobrenome,email:x.email,telefone:x.telefone});
  return {tipo:"oportunidade-schneider",v:1,
    conta:{nome:o.conta.nome,endereco:o.conta.endereco,pais:"Brasil",uf:o.conta.uf,cidade:o.conta.cidade,cep:o.conta.cep},
    contato:{nome:o.contato.nome,sobrenome:o.contato.sobrenome,email:o.contato.email,telefone:o.contato.telefone,endereco:o.contato.endereco||[o.conta.endereco,o.conta.cidade].filter(Boolean).join(", ")},
    projeto:{endereco:pj.endereco,cidade:pj.cidade,pais:"Brasil",uf:pj.uf,cep:pj.cep},
    contaEhUsuarioFinal:o.contaEhUsuarioFinal,
    usuarioFinal:o.contaEhUsuarioFinal?null:party(o.usuarioFinal),
    parceiro:o.temParceiro?party(o.parceiro):null,
    oportunidade:{nomeProjeto:o.oportunidade.nomeProjeto,moeda:"Real Brasileiro",palavraChave:palavraChave(o),dataCotacao:o.oportunidade.dataCotacao,dataPedido:o.oportunidade.dataPedido,contatoSE:o.oportunidade.contatoSE,descricao:o.oportunidade.descricao||buildDesc(o)},
    linhas:o.linhas.filter(l=>l.produto).map(l=>({produto:l.produto,familia:l.familia,valor:Math.round((+l.valor||0)*100)/100})),
    cnpj:o.conta.cnpj};
}


/* o mínimo que o vendedor precisa informar para enviar */
function faltasVendedor(o){
  const F=[];
  if(!o.fabricanteId) F.push([0,"Fabricante"]);
  if(!o.conta.nome.trim()) F.push([1,"Nome do cliente"]);
  if(!o.contato.nome.trim()) F.push([2,"Nome do contato"]);
  if(!o.contato.email.trim()&&!o.contato.telefone.trim()) F.push([2,"E-mail ou telefone do contato"]);
  if(o.temParceiro&&!o.parceiro.nome.trim()) F.push([3,"Nome do parceiro"]);
  if(!o.oportunidade.nomeProjeto.trim()) F.push([4,"Nome do projeto"]);
  if(!o.oportunidade.dataPedido) F.push([4,"Data esperada do pedido"]);
  if(!o.linhas.some(l=>l.produto&&+l.valor>0)&&!o.itens.length) F.push([5,"Pelo menos um item ou uma linha de produto"]);
  return F;
}

/* ---------- 7 revisão e fluxo ---------- */
async function acao(nome,extra){
  await flush();
  try{
    const r=await api("POST","ops/"+cur.id+"/acao",Object.assign({acao:nome},extra||{}));
    curMeta=Object.assign(curMeta,r); delete curMeta.novo;
    patchListItem(r); contagem();
    return r;
  }catch(e){falha(e);return null;}
}
function paneRevisao(p){
  const iss=validate(cur), m=curMeta, fab=fabDe(cur.fabricanteId), se=isSE(cur);
  const pack=buildPack(cur), txt=JSON.stringify(pack);
  const meu=m.donoId===ME.id, lanca=can("lancar"), st=m.status;
  const falta=faltasVendedor(cur);
  let fluxo="";
  if((st==="rascunho"||st==="devolvida")&&(meu||lanca)){
    fluxo=`<div class="card fluxo" data-keep><h3>Enviar para lançamento</h3>
      <p class="muted" style="margin:0;font-size:13px">A oportunidade vai para a caixa de pendentes do administrador, que confere, completa e lança no portal ${esc(fab?fab.nome:"")}. Depois de enviada você só acompanha.</p>
      ${falta.length?`<div class="note warn"><b>Para enviar, falta:</b> ${falta.map(([s,t])=>`<a href="#" data-go="${s}">${esc(t)}</a>`).join(", ")}.</div>`:""}
      <div class="f"><label for="obsV">Recado para o administrador (opcional)</label><textarea id="obsV" style="min-height:60px" placeholder="Ex.: cliente pediu urgência; o CNPJ eu confirmo amanhã."></textarea></div>
      <div class="row"><button class="btn pri" id="btnEnviar" ${falta.length?"disabled":""}>Enviar para lançamento</button>
      ${meu?`<button class="btn ghost danger" id="btnCancelar">Cancelar oportunidade</button><button class="btn ghost danger" id="btnExcluir">Excluir</button>`:""}</div></div>`;
  } else if(st==="pendente"&&meu&&!lanca){
    fluxo=`<div class="card fluxo" data-keep><h3>Aguardando lançamento</h3><p class="muted" style="margin:0">Enviada em ${fmtDH(m.enviadoEm)}. Se precisar mudar algo, puxe de volta: ela sai da caixa do administrador e volta a ser rascunho.</p>
      <div class="row"><button class="btn" id="btnPuxar">Puxar de volta para editar</button></div></div>`;
  } else if(st==="pendente"&&lanca){
    fluxo=`<div class="card fluxo" data-keep><h3>Lançar no portal</h3>
      <p class="muted" style="margin:0;font-size:13px">Enviada por <b>${esc(m.dono)}</b> em ${fmtDH(m.enviadoEm)}.${m.responsavel?` Responsável: <b>${esc(m.responsavel)}</b>.`:""} Complete os campos que faltarem nas etapas acima (tudo aqui é editável).</p>
      ${m.responsavelId!==ME.id?`<div class="row"><button class="btn small ghost" id="btnAssumir">Assumir esta oportunidade</button><span class="muted" style="font-size:12px">Avisa a equipe que você está cuidando dela.</span></div>`:""}
      ${se?(EXT?`<p class="muted" style="margin:0;font-size:13px">1. Deixe aberta no Chrome a aba do mySchneider em <b>Oportunidades › Novo Registro › Registro Único</b>${cur.temParceiro?" e clique lá em <b>Adicionar parceiro da cadeia de valor</b>":""}.</p>
          <div class="row"><button class="btn pri" id="btnFill">2. Preencher no portal</button><label class="check"><input type="checkbox" id="ovr"> Substituir o que já estiver preenchido lá</label></div>`
        :`<p class="note warn" style="margin:0">A extensão do Chrome não está instalada neste navegador. Veja a aba <b>Extensão</b>.</p>`):`<p class="muted" style="margin:0;font-size:13px">Lance no portal do fabricante ${esc(fab?fab.nome:"")} com os dados desta oportunidade.</p>`}
      <div class="note" id="fillRes" hidden></div>
      <div class="grid2"><div class="f"><label for="regNum">${se?"3. ":""}Nº do registro no portal</label><input type="text" id="regNum" placeholder="Ex.: OPP-0012345"></div>
        <div class="f"><label for="regObs">Observação (opcional)</label><input type="text" id="regObs"></div></div>
      <div class="row"><button class="btn pri" id="btnConcluir">Marcar como lançada</button></div>
      <details><summary>Devolver ao vendedor para correção</summary>
        <div class="f" style="margin-top:8px"><label for="devTxt">O que ele precisa corrigir</label><textarea id="devTxt" style="min-height:60px" placeholder="Ex.: falta o CNPJ e o telefone do contato."></textarea></div>
        <div class="row" style="margin-top:6px"><button class="btn danger" id="btnDevolver">Devolver ao vendedor</button></div></details>
      ${se?`<details><summary>Pacote em texto (alternativa)</summary><pre class="pack" id="packTxt">${esc(txt)}</pre><button class="btn small ghost" id="copyPack" style="margin-top:6px">Copiar pacote</button></details>`:""}</div>`;
  } else if(st==="concluida"){
    fluxo=`<div class="card fluxo" data-keep><h3>Concluída</h3><p style="margin:0">Registro <b>${esc(m.registro)}</b> · lançada em ${fmtDH(m.lancadoEm)}${m.lancadoPor?" por "+esc(m.lancadoPor):""}.</p>
      ${lanca?`<div class="row"><button class="btn small ghost" id="btnReabrir">Reabrir (voltar para pendentes)</button></div>`:""}</div>`;
  } else if(st==="cancelada"){
    fluxo=`<div class="card fluxo" data-keep><h3>Cancelada</h3>${lanca?`<div class="row"><button class="btn small ghost" id="btnReabrir">Reabrir (voltar para pendentes)</button></div>`:""}${meu||lanca?`<div class="row"><button class="btn small ghost danger" id="btnExcluir">Excluir de vez</button></div>`:""}</div>`;
  }
  p.innerHTML=`<header><span class="eyebrow">Etapa 7</span><h2>Revisão e envio</h2></header>
  ${iss.length?`<div class="note ${lanca?"bad":"warn"}"><b>${iss.length} campo(s) do portal ainda sem preencher</b>${lanca?"":" (o administrador pode completar)"}:<div class="chk" style="margin-top:6px">${iss.map(i=>`<div><span class="x">●</span><a href="#" data-go="${i.step}">${esc(STEPS[i.step].t)}</a>: ${esc(i.msg)}</div>`).join("")}</div></div>`
   :`<div class="note"><b>Tudo pronto.</b> Todos os campos obrigatórios do portal estão preenchidos.</div>`}
  <dl class="kv">
    <dt>Fabricante</dt><dd>${esc(fab?fab.nome:"—")}</dd>
    <dt>Vendedor</dt><dd>${esc(m.dono||ME.nome)}</dd>
    <dt>Cliente</dt><dd>${esc(cur.conta.nome||"—")} · ${esc(cur.conta.cnpj||"sem CNPJ")}</dd>
    <dt>Projeto</dt><dd>${esc(cur.oportunidade.nomeProjeto||"—")}</dd>
    <dt>Parceiro</dt><dd>${cur.temParceiro?esc(cur.parceiro.nome||"(a preencher)"):"Nenhum"}</dd>
    <dt>Pedido previsto</dt><dd>${cur.oportunidade.dataPedido?new Date(cur.oportunidade.dataPedido+"T12:00").toLocaleDateString("pt-BR"):"—"}</dd>
    <dt>Linhas</dt><dd>${pack.linhas.length} · ${BRL(totalLinhas(cur))}</dd>
  </dl>
  ${fluxo}
  <div class="card fluxo" data-keep><h3>Histórico</h3><div id="hist" class="hist"><span class="muted">Carregando…</span></div>
    ${m.novo?"":`<div class="row"><input type="text" id="cmt" placeholder="Escrever um comentário para a equipe" style="flex:1;min-width:200px"><button class="btn small" id="btnCmt">Comentar</button></div>`}</div>`;
  p.querySelectorAll("[data-go]").forEach(a=>a.onclick=e=>{e.preventDefault();step=+a.dataset.go;renderEditor();});
  const on=(id,fn)=>{const b=$("#"+id); if(b) b.onclick=fn;};
  on("btnEnviar",async()=>{const r=await acao("enviar",{texto:$("#obsV").value});if(r){toast("Enviada para lançamento");renderEditor();}});
  on("btnPuxar",async()=>{const r=await acao("cancelar_envio");if(r){toast("Voltou para rascunho");step=0;renderEditor();}});
  on("btnAssumir",async()=>{const r=await acao("assumir");if(r){toast("Você assumiu esta oportunidade");renderEditor();}});
  on("btnConcluir",async()=>{const reg=$("#regNum").value.trim();if(!reg){toast("Informe o número do registro");$("#regNum").focus();return;}
    const r=await acao("concluir",{registro:reg,texto:$("#regObs").value});if(r){toast("Lançada · foi para Concluídas");if(caixa==="pendentes"){ops=ops.filter(o=>o.id!==cur.id);renderList();}renderEditor();}});
  on("btnDevolver",async()=>{const t=$("#devTxt").value.trim();if(!t){toast("Explique o que precisa corrigir");$("#devTxt").focus();return;}
    const r=await acao("devolver",{texto:t});if(r){toast("Devolvida ao vendedor");if(caixa==="pendentes"){ops=ops.filter(o=>o.id!==cur.id);renderList();}renderEditor();}});
  on("btnReabrir",async()=>{const r=await acao("reabrir");if(r){toast("Reaberta: está em Pendentes");renderEditor();}});
  on("btnCancelar",async()=>{const r=await acao("cancelar");if(r){toast("Oportunidade cancelada");renderEditor();}});
  on("btnExcluir",()=>{const b=$("#btnExcluir");if(b.dataset.ok){excluirOp();return;}b.dataset.ok=1;b.textContent="Clique de novo para excluir de vez";});
  on("btnFill",async()=>{const bf=$("#btnFill"); await flush();
    bf.disabled=true; bf.textContent="Preenchendo… acompanhe na aba do portal"; const box=$("#fillRes"); box.hidden=true;
    const r=await extCall({type:"preencher",pack:buildPack(cur),sobrescrever:$("#ovr").checked});
    bf.disabled=false; bf.textContent="2. Preencher no portal";
    box.hidden=false; box.className="note"+(r.erro?" bad":""); box.textContent=r.erro||r.texto||"Concluído.";
    if(!r.erro) api("POST","ops/"+cur.id+"/acao",{acao:"comentar",texto:"Preenchido no portal pela extensão."}).then(carregarHist).catch(()=>{});});
  on("copyPack",async()=>{const ok=await copyText(txt);
    if(ok){toast("Pacote copiado");}
    else{$("#packTxt").closest("details").open=true;const r=document.createRange();r.selectNodeContents($("#packTxt"));const sel=getSelection();sel.removeAllRanges();sel.addRange(r);toast("Texto selecionado: use Ctrl+C");}});
  on("btnCmt",async()=>{const t=$("#cmt").value.trim();if(!t)return;try{await api("POST","ops/"+cur.id+"/acao",{acao:"comentar",texto:t});$("#cmt").value="";carregarHist();}catch(e){falha(e);}});
  carregarHist();
}
async function carregarHist(){
  const h=$("#hist"); if(!h||!cur) return;
  if(curMeta.novo){h.innerHTML='<span class="muted">Ainda não salva.</span>';return;}
  try{ const l=await api("GET","ops/"+cur.id+"/historico");
    h.innerHTML=l.map(x=>`<div><span class="muted mono">${fmtDH(x.quando)}</span> <b>${esc(x.usuario)}</b> · ${esc(x.acao)}${x.texto?`<div class="htxt">${esc(x.texto)}</div>`:""}</div>`).join("")||'<span class="muted">Sem registros.</span>';
  }catch(e){h.innerHTML='<span class="muted">Não foi possível carregar.</span>';}
}
async function excluirOp(){
  const id=cur.id; dirty=false;
  try{ await api("DELETE","ops/"+id); ops=ops.filter(o=>o.id!==id); cur=null; curMeta=null; renderList(); renderEditor(); toast("Oportunidade excluída"); }catch(e){falha(e);}
}

/* ---------- trazer dados da versão anterior (salvos no navegador) ---------- */
function verAntigos(){
  const box=$("#antigos"); if(!box) return;
  let n=0; try{ n=(JSON.parse(localStorage.getItem("oportunidades_s2i_v1"))||[]).length; }catch(e){}
  box.innerHTML=`${n?`<button class="btn small ghost" id="btnAnt">Trazer ${n} oportunidade(s) deste navegador</button>`:""}<label class="btn small ghost" for="impFile">Importar backup antigo</label><input type="file" id="impFile" accept=".json" hidden>`;
  const send=async(list,cads)=>{try{const r=await api("POST","importar_backup",{ops:list,cadastros:cads});toast(r.oportunidades+" oportunidade(s) importadas");
    const c=await api("GET","cadastros");CAD=Object.assign({clientes:{},parceiros:{},contatosSE:{}},c);await loadList(false);}catch(e){falha(e);}};
  const a=$("#btnAnt"); if(a) a.onclick=async()=>{let o=[],c={};try{o=JSON.parse(localStorage.getItem("oportunidades_s2i_v1"))||[];c=JSON.parse(localStorage.getItem("cadastros_s2i_v1"))||{};}catch(e){}
    await send(o,c); try{localStorage.setItem("oportunidades_s2i_v1_migrado",localStorage.getItem("oportunidades_s2i_v1"));localStorage.removeItem("oportunidades_s2i_v1");}catch(e){} verAntigos();};
  $("#impFile").onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const j=JSON.parse(await f.text());await send(Array.isArray(j)?j:j.ops||[],j.cadastros||{});}catch(err){toast("Arquivo de backup inválido");}e.target.value="";};
}

/* ===================== arquivos (Excel / PDF) ===================== */
function baixar(blob,nome){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=nome;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},800);}
function xlsxBaixar(abas,nome){ // abas: [[nome, linhas(array de objetos ou arrays), larguras?]]
  const wb=XLSX.utils.book_new();
  for(const [n,rows,larg] of abas){
    const ws=Array.isArray(rows[0])||!rows.length?XLSX.utils.aoa_to_sheet(rows.length?rows:[["(vazio)"]]):XLSX.utils.json_to_sheet(rows);
    const cols=larg||Object.keys(rows[0]||{}).map(k=>({wch:Math.min(50,Math.max(10,String(k).length+2,...rows.slice(0,200).map(r=>String(r[k]??"").length+1)))}));
    ws["!cols"]=cols; XLSX.utils.book_append_sheet(wb,ws,n.slice(0,31));
  }
  XLSX.writeFile(wb,nome);
}
async function lerPlanilha(file){
  const buf=await file.arrayBuffer();
  const wb=XLSX.read(buf,{type:"array",dense:true,cellDates:true});
  return wb;
}
function celTxt(v){ // número inteiro sem notação científica (ex.: código 9052007075018), data em dd/mm/aaaa
  if(v==null) return "";
  if(typeof v==="number") return Number.isInteger(v)?v.toFixed(0):String(v);
  if(v instanceof Date) return v.toLocaleDateString("pt-BR");
  return String(v);
}
function linhasDaAba(wb,nome){ return XLSX.utils.sheet_to_json(wb.Sheets[nome],{header:1,defval:"",raw:true,blankrows:false}).map(r=>r.map(celTxt)); }
const nh=s=>norm(s).replace(/[^A-Z0-9]/g,"");
function acharCabecalho(rows,chaves){ // primeira linha (até 20) que tem ao menos 2 das chaves
  for(let i=0;i<Math.min(20,rows.length);i++){ const r=rows[i].map(nh); let n=0; for(const ks of Object.values(chaves)) if(r.some(c=>ks.some(k=>c.startsWith(k)))) n++; if(n>=2) return i; }
  return 0;
}
function mapearColunas(cab,chaves){
  const h=cab.map(nh), m={};
  for(const [campo,ks] of Object.entries(chaves)){ const i=h.findIndex((c,j)=>!Object.values(m).includes(j)&&ks.some(k=>c.startsWith(k))); m[campo]=i; }
  return m;
}

/* ===================== Usuários ===================== */
async function renderUsuarios(){
  const v=$("#view-usr");
  try{ USERS=await api("GET","usuarios"); }catch(e){ falha(e); return; }
  const chips=u=>u.perms.map(p=>`<span class="chip">${esc((PERM_NOMES[p]||p).split(/[:(]/)[0])}</span>`).join("");
  v.innerHTML=`<div class="popbody" style="margin-top:20px">
   <section class="card sec"><div class="row" style="justify-content:space-between"><h2>Usuários <span class="muted" style="font-size:15px">(${USERS.length})</span></h2><button class="btn pri" id="uNovo">+ Novo usuário</button></div>
    <p class="muted" style="margin:0"><b>Vendedor</b> preenche e envia as próprias oportunidades. <b>Administrador</b> vê as pendentes, lança no portal e cuida do sistema. Ajuste as permissões de cada um se precisar.</p>
    <div id="uForm"></div>
    <div class="tablewrap"><table><thead><tr><th>Nome</th><th>Login</th><th>Papel</th><th>Permissões</th><th>Situação</th><th>Último acesso</th><th></th></tr></thead><tbody>
    ${USERS.map(u=>`<tr><td><b>${esc(u.nome)}</b>${u.email?`<div class="muted" style="font-size:12px">${esc(u.email)}</div>`:""}</td><td class="mono">${esc(u.login)}</td><td>${u.papel==="admin"?"Administrador":"Vendedor"}</td><td><div class="chips">${chips(u)}</div></td>
      <td><span class="pill ${u.ativo?"concluida":"cancelada"}">${u.ativo?"Ativo":"Inativo"}</span>${u.trocarSenha?'<div class="muted" style="font-size:11px">troca senha no próximo acesso</div>':""}</td><td>${fmtDH(u.ultimoAcesso)}</td>
      <td><button class="btn small ghost" data-ued="${u.id}">Editar</button></td></tr>`).join("")}</tbody></table></div></section></div>`;
  $("#uNovo").onclick=()=>formUsuario(null);
  v.querySelectorAll("[data-ued]").forEach(b=>b.onclick=()=>formUsuario(USERS.find(u=>u.id==b.dataset.ued)));
}
function formUsuario(u){
  const box=$("#uForm"), novo=!u; u=u||{nome:"",login:"",email:"",papel:"vendedor",perms:PAPEIS.vendedor,ativo:true};
  box.innerHTML=`<form class="card sub" id="uF"><h3>${novo?"Novo usuário":"Editar "+esc(u.nome)}</h3>
    <div class="grid">
      <div class="f"><label for="uNome">Nome</label><input type="text" id="uNome" value="${esc(u.nome)}" required></div>
      <div class="f"><label for="uLogin">Login</label><input type="text" id="uLogin" value="${esc(u.login)}" ${novo?"":"disabled"} required pattern="[A-Za-z0-9._\\-]{3,40}" placeholder="ex.: joao.silva"><span class="hint">Usado para entrar. Sem espaços.</span></div>
      <div class="f"><label for="uEmail">E-mail</label><input type="email" id="uEmail" value="${esc(u.email)}"></div>
      <div class="f"><label for="uPapel">Papel</label><select id="uPapel"><option value="vendedor" ${u.papel==="vendedor"?"selected":""}>Vendedor</option><option value="admin" ${u.papel==="admin"?"selected":""}>Administrador</option></select><span class="hint">Mudar o papel marca as permissões padrão.</span></div>
      <div class="f full"><label>Permissões</label><div class="perms">${Object.entries(PERM_NOMES).map(([k,t])=>`<label class="check"><input type="checkbox" data-pm="${k}" ${u.perms.includes(k)?"checked":""}> ${esc(t)}</label>`).join("")}</div>
        <span class="hint">Todos podem criar e enviar as próprias oportunidades.</span></div>
      ${novo?`<div class="f"><label for="uSenha">Senha inicial</label><input type="text" id="uSenha" placeholder="Deixe vazio para gerar uma"><span class="hint">O usuário troca no primeiro acesso.</span></div>`
        :`<div class="f"><label class="check"><input type="checkbox" id="uAtivo" ${u.ativo?"checked":""}> Usuário ativo (pode entrar)</label></div>`}
    </div>
    <p class="note" id="uMsg" hidden></p>
    <div class="row" style="justify-content:space-between"><div class="row">${novo?"":`<button type="button" class="btn ghost" id="uReset">Redefinir senha</button>`}</div>
      <div class="row"><button type="button" class="btn ghost" id="uX">Fechar</button><button class="btn pri">${novo?"Criar usuário":"Salvar"}</button></div></div></form>`;
  box.scrollIntoView({behavior:"smooth",block:"start"});
  $("#uPapel").onchange=()=>{const ps=PAPEIS[$("#uPapel").value]||[];box.querySelectorAll("[data-pm]").forEach(c=>c.checked=ps.includes(c.dataset.pm));};
  $("#uX").onclick=()=>box.innerHTML="";
  const msg=t=>{const m=$("#uMsg");m.innerHTML=t;m.hidden=false;};
  const r=$("#uReset"); if(r) r.onclick=async()=>{ if(!r.dataset.ok){r.dataset.ok=1;r.textContent="Confirmar: gerar senha nova";return;}
    try{const x=await api("POST","usuarios/"+u.id+"/senha",{});msg(`Senha nova de <b>${esc(u.login)}</b>: <span class="mono big">${esc(x.senha)}</span><br>Passe para o usuário. Ele troca no próximo acesso.`);}catch(e){falha(e);} };
  $("#uF").onsubmit=async e=>{e.preventDefault();
    const perms=[...box.querySelectorAll("[data-pm]:checked")].map(c=>c.dataset.pm);
    const b={nome:$("#uNome").value.trim(),email:$("#uEmail").value.trim(),papel:$("#uPapel").value,perms};
    try{
      if(novo){ b.login=$("#uLogin").value.trim(); b.senha=$("#uSenha").value; const x=await api("POST","usuarios",b);
        await renderUsuarios(); formUsuario(null); $("#uF").hidden=true;
        $("#uForm").insertAdjacentHTML("beforeend",`<p class="note">Usuário criado. Passe para ${esc(b.nome)}:<br>Endereço: <span class="mono">${esc(location.origin+location.pathname)}</span><br>Login: <span class="mono big">${esc(b.login.toLowerCase())}</span> · Senha: <span class="mono big">${esc(x.senha)}</span><br>No primeiro acesso o sistema pede para trocar a senha.</p>`); }
      else { b.ativo=$("#uAtivo").checked; await api("PUT","usuarios/"+u.id,b); toast("Usuário salvo"); await renderUsuarios(); }
    }catch(err){ msg(esc(err.message)); }
  };
}

/* ===================== Fabricantes ===================== */
const CH_FAB={nome:["NOME","FABRICANTE","MARCA","RAZAO"],codigo:["CODIGO","COD","SIGLA"],contato:["CONTATO","RESPONSAVEL","GERENTE"],email:["EMAIL"],telefone:["TELEFONE","FONE","CELULAR"],obs:["OBS","OBSERV"]};
const CH_CAT={codigo:["CODIGO","COD","REFERENCIA","REF","SKU","PARTNUMBER","ITEM"],descricao:["DESCRI"],linha:["LINHA","PRODUTO","CATEGORIA","GRUPO"],familia:["FAMILIA","SUBGRUPO","SUBCATEGORIA"],helios:["HELIOS"],lcos:["LCOS"]};
async function renderFabricantes(){
  const v=$("#view-fab");
  try{ FABS=await api("GET","fabricantes"); }catch(e){ falha(e); return; }
  v.innerHTML=`<div class="popbody" style="margin-top:20px">
   <section class="card sec"><div class="row" style="justify-content:space-between"><h2>Fabricantes <span class="muted" style="font-size:15px">(${FABS.length})</span></h2>
     <div class="row"><button class="btn ghost" id="fModelo">Baixar modelo (Excel)</button><label class="btn ghost" for="fImp">Importar fabricantes (Excel)</label><input type="file" id="fImp" accept=".xlsx,.xls,.csv" hidden><button class="btn pri" id="fNovo">+ Novo fabricante</button></div></div>
    <p class="muted" style="margin:0">Cada oportunidade é de um fabricante. O catálogo de produtos de cada fabricante é o que o vendedor usa para achar a linha e a família pelo código. Importe pelo Excel (substitui ou acrescenta).</p>
    ${FABS.some(f=>f.portal==="schneider"&&!f.itens)?`<p class="note warn">O catálogo da <b>Schneider Electric</b> ainda está vazio. Clique em <b>Importar catálogo</b> na linha da Schneider e escolha a <b>Lista Simulada</b> (.xlsx): o Nome do produto e a Família do portal são calculados sozinhos. Leva cerca de 1 minuto.</p>`:""}
    <div id="fForm"></div>
    <div class="tablewrap"><table><thead><tr><th>Fabricante</th><th>Contato</th><th class="num">Itens no catálogo</th><th>Catálogo atualizado</th><th>Situação</th><th></th></tr></thead><tbody>
    ${FABS.map(f=>`<tr><td><b>${esc(f.nome)}</b>${f.codigo?` <span class="muted mono">${esc(f.codigo)}</span>`:""}${f.portal==="schneider"?'<div><span class="chip">preenche o portal mySchneider</span></div>':""}</td>
      <td>${esc([f.contato,f.email,f.telefone].filter(Boolean).join(" · ")||"—")}</td><td class="num">${f.itens.toLocaleString("pt-BR")}</td><td>${f.catalogoEm?fmtData(f.catalogoEm):"—"}${f.catalogoOrigem?`<div class="muted" style="font-size:11px">${esc(f.catalogoOrigem)}</div>`:""}</td>
      <td><span class="pill ${f.ativo?"concluida":"cancelada"}">${f.ativo?"Ativo":"Inativo"}</span></td>
      <td><div class="row" style="flex-wrap:nowrap"><button class="btn small" data-fcat="${f.id}">Importar catálogo</button><button class="btn small ghost" data-fexp="${f.id}" ${f.itens?"":"disabled"}>Exportar catálogo</button><button class="btn small ghost" data-fed="${f.id}">Editar</button></div></td></tr>`).join("")}</tbody></table></div></section>
   <section class="card sec"><h3>Modelos de planilha</h3>
    <p class="muted" style="margin:0">Fabricantes: colunas <b>Nome</b>, Código, Contato, E-mail, Telefone, Observações. Catálogo: colunas <b>Código</b>, <b>Descrição</b>, <b>Linha de produto</b>, <b>Família</b>. Os nomes das colunas não precisam ser exatos: o sistema reconhece e deixa você ajustar antes de importar. Para a Schneider, a Lista Simulada com as colunas Helios Code e Lcos também serve: a linha e a família do portal são calculadas sozinhas.</p>
    <div class="row"><button class="btn small ghost" id="cModelo">Baixar modelo de catálogo</button></div></section></div>`;
  $("#fModelo").onclick=()=>xlsxBaixar([["Fabricantes",[["Nome","Código","Contato","E-mail","Telefone","Observações"],["WEG","WEG","Fulano de Tal","fulano@weg.net","(47) 3276-0000","Exemplo: apague esta linha"]]]],"modelo_fabricantes.xlsx");
  $("#cModelo").onclick=()=>xlsxBaixar([["Catálogo",[["Código","Descrição","Linha de produto","Família"],["ABC123","DESCRIÇÃO DO PRODUTO (exemplo)","MOTORES","W22"]]]],"modelo_catalogo.xlsx");
  $("#fNovo").onclick=()=>formFab(null);
  v.querySelectorAll("[data-fed]").forEach(b=>b.onclick=()=>formFab(fabDe(b.dataset.fed)));
  v.querySelectorAll("[data-fcat]").forEach(b=>b.onclick=()=>importarCatalogo(fabDe(b.dataset.fcat)));
  v.querySelectorAll("[data-fexp]").forEach(b=>b.onclick=async()=>{const f=fabDe(b.dataset.fexp);b.disabled=true;
    try{const rows=(await getCat(f.id)).rows;xlsxBaixar([["Catálogo",[["Código","Descrição","Linha de produto","Família"],...rows.map(r=>[r[0],r[1],r[2],r[3]])],[{wch:20},{wch:60},{wch:40},{wch:30}]]],"catalogo_"+nh(f.nome).toLowerCase()+".xlsx");}catch(e){falha(e);} b.disabled=false;});
  $("#fImp").onchange=async e=>{const file=e.target.files[0];e.target.value="";if(!file)return;
    try{const wb=await lerPlanilha(file);const rows=linhasDaAba(wb,wb.SheetNames[0]);const hi=acharCabecalho(rows,CH_FAB);const m=mapearColunas(rows[hi]||[],CH_FAB);
      if(m.nome<0){toast("Não achei a coluna Nome na planilha");return;}
      const lista=rows.slice(hi+1).map(r=>{const o={};for(const k of Object.keys(CH_FAB))o[k]=m[k]>=0?String(r[m[k]]||"").trim():"";return o;}).filter(o=>o.nome&&!/apague esta linha/i.test(o.obs));
      if(!lista.length){toast("Nenhum fabricante na planilha");return;}
      const x=await api("POST","fabricantes",{lista});toast(`${x.novos} fabricante(s) novos · ${x.atualizados} atualizados`);renderFabricantes();
    }catch(err){falha(err);}};
}
function formFab(f){
  const box=$("#fForm"), novo=!f; f=f||{nome:"",codigo:"",contato:"",email:"",telefone:"",obs:"",ativo:true};
  box.innerHTML=`<form class="card sub" id="fF"><h3>${novo?"Novo fabricante":"Editar "+esc(f.nome)}</h3><div class="grid">
    <div class="f"><label for="fNome">Nome</label><input type="text" id="fNome" value="${esc(f.nome)}" required></div>
    <div class="f"><label for="fCod">Código / sigla</label><input type="text" id="fCod" value="${esc(f.codigo)}"></div>
    <div class="f"><label for="fCont">Contato no fabricante</label><input type="text" id="fCont" value="${esc(f.contato)}"></div>
    <div class="f"><label for="fMail">E-mail</label><input type="email" id="fMail" value="${esc(f.email)}"></div>
    <div class="f"><label for="fTel">Telefone</label><input type="text" id="fTel" value="${esc(f.telefone)}"></div>
    <div class="f"><label class="check"><input type="checkbox" id="fAtivo" ${f.ativo?"checked":""}> Ativo (aparece para os vendedores)</label></div>
    <div class="f full"><label for="fObs">Observações</label><textarea id="fObs" style="min-height:60px">${esc(f.obs)}</textarea></div></div>
    <div class="row" style="justify-content:space-between"><div>${novo?"":`<button type="button" class="btn ghost danger" id="fDel">Excluir</button>`}</div>
      <div class="row"><button type="button" class="btn ghost" id="fX">Fechar</button><button class="btn pri">Salvar</button></div></div></form>`;
  box.scrollIntoView({behavior:"smooth",block:"start"});
  $("#fX").onclick=()=>box.innerHTML="";
  const d=$("#fDel"); if(d) d.onclick=async()=>{if(!d.dataset.ok){d.dataset.ok=1;d.textContent="Confirmar exclusão";return;}
    try{await api("DELETE","fabricantes/"+f.id);toast("Fabricante excluído");renderFabricantes();}catch(e){falha(e);}};
  $("#fF").onsubmit=async e=>{e.preventDefault();const b={nome:$("#fNome").value.trim(),codigo:$("#fCod").value.trim(),contato:$("#fCont").value.trim(),email:$("#fMail").value.trim(),telefone:$("#fTel").value.trim(),obs:$("#fObs").value.trim(),ativo:$("#fAtivo").checked};
    try{ if(novo) await api("POST","fabricantes",b); else await api("PUT","fabricantes/"+f.id,b); toast("Fabricante salvo"); renderFabricantes(); }catch(err){falha(err);}};
}
function importarCatalogo(f){
  const box=$("#fForm");
  box.innerHTML=`<div class="card sub"><h3>Importar catálogo · ${esc(f.nome)}</h3>
    <p class="muted" style="margin:0">Escolha a planilha (.xlsx, .xls ou .csv). Hoje o catálogo tem ${f.itens.toLocaleString("pt-BR")} itens.</p>
    <div class="row"><input type="file" id="cFile" accept=".xlsx,.xls,.csv"><span class="muted" id="cSt" style="font-size:13px"></span></div>
    <div id="cMap"></div>
    <div class="row" style="justify-content:flex-end"><button type="button" class="btn ghost" id="cX">Fechar</button></div></div>`;
  box.scrollIntoView({behavior:"smooth",block:"start"});
  $("#cX").onclick=()=>box.innerHTML="";
  let wb=null;
  $("#cFile").onchange=async e=>{const file=e.target.files[0];if(!file)return;$("#cSt").textContent="Lendo planilha…";
    try{ wb=await lerPlanilha(file); $("#cSt").textContent=""; montar(file.name, wb.SheetNames.includes("Sheet1")?"Sheet1":wb.SheetNames[0]); }catch(err){$("#cSt").textContent="Não consegui ler esse arquivo.";}};
  function montar(nomeArq,aba){
    const rows=linhasDaAba(wb,aba); const hi=acharCabecalho(rows,CH_CAT); const cab=rows[hi]||[]; const m=mapearColunas(cab,CH_CAT);
    const opts=sel=>`<option value="-1">— não usar —</option>`+cab.map((c,i)=>`<option value="${i}" ${i===sel?"selected":""}>${esc(c||"Coluna "+(i+1))}</option>`).join("");
    const camposTxt={codigo:"Código *",descricao:"Descrição",linha:"Linha de produto",familia:"Família",helios:"Helios Code (Schneider)",lcos:"Lcos (Schneider)"};
    $("#cMap").innerHTML=`<div class="grid">
      <div class="f"><label for="cAba">Aba</label><select id="cAba">${wb.SheetNames.map(s=>`<option ${s===aba?"selected":""}>${esc(s)}</option>`).join("")}</select></div>
      <div class="f"><label>Linhas encontradas</label><input type="text" value="${(rows.length-hi-1).toLocaleString("pt-BR")} (cabeçalho na linha ${hi+1})" disabled></div>
      ${Object.entries(camposTxt).filter(([k])=>f.portal==="schneider"||!["helios","lcos"].includes(k)).map(([k,t])=>`<div class="f"><label for="cm_${k}">${t}</label><select id="cm_${k}" data-cm="${k}">${opts(m[k])}</select></div>`).join("")}
      <div class="f full"><label>Modo</label><div class="row"><label class="check"><input type="radio" name="cModo" value="substituir" checked> Substituir o catálogo inteiro</label><label class="check"><input type="radio" name="cModo" value="acrescentar"> Acrescentar / atualizar só os códigos da planilha</label></div></div></div>
      <h3>Prévia</h3><div class="tablewrap" id="cPrev"></div>
      ${f.portal==="schneider"?'<p class="muted" style="font-size:12px;margin:0">Schneider: quando a planilha tem Helios Code e Lcos e não tem Linha/Família, o sistema calcula o Nome do produto e a Família do portal sozinho.</p>':""}
      <div class="row"><button class="btn pri" id="cGo">Importar</button><span class="muted" id="cProg" style="font-size:13px"></span></div>`;
    $("#cAba").onchange=e=>montar(nomeArq,e.target.value);
    const lerMap=()=>{const x={};$("#cMap").querySelectorAll("[data-cm]").forEach(s=>x[s.dataset.cm]=+s.value);for(const k of Object.keys(camposTxt))if(x[k]===undefined)x[k]=-1;return x;};
    const montarItens=(lim)=>{const mm=lerMap(), out=[];
      for(let i=hi+1;i<rows.length&&(!lim||out.length<lim);i++){const r=rows[i];const cod=String(mm.codigo>=0?r[mm.codigo]:"").trim().toUpperCase();if(!cod)continue;
        const desc=mm.descricao>=0?String(r[mm.descricao]).trim():"";let linha=mm.linha>=0?String(r[mm.linha]).trim():"",familia=mm.familia>=0?String(r[mm.familia]).trim():"";
        const extra={}; let conf="";
        if(f.portal==="schneider"&&(mm.helios>=0||mm.lcos>=0)){const hel=mm.helios>=0?String(r[mm.helios]).trim():"",lc=mm.lcos>=0?String(r[mm.lcos]).trim():"";extra.helios=hel;extra.lcos=lc;
          if(!linha){const mp=mapItem([cod,desc,hel,lc]);linha=mp.produto;familia=familia||mp.familia;conf=mp.conf;}}
        if(conf) extra.conf=conf;
        out.push({codigo:cod,descricao:desc,linha,familia,extra});}
      return out;};
    const prev=()=>{const it=montarItens(8);$("#cPrev").innerHTML=`<table><thead><tr><th>Código</th><th>Descrição</th><th>Linha</th><th>Família</th></tr></thead><tbody>${it.map(x=>`<tr><td class="mono">${esc(x.codigo)}</td><td>${esc(x.descricao)}</td><td>${esc(x.linha)}</td><td>${esc(x.familia)}</td></tr>`).join("")||'<tr><td colspan="4" class="muted">Escolha a coluna de código.</td></tr>'}</tbody></table>`;};
    $("#cMap").querySelectorAll("[data-cm]").forEach(s=>s.onchange=prev); prev();
    $("#cGo").onclick=async()=>{const go=$("#cGo");const itens=montarItens(0);if(!itens.length){toast("Nenhum código para importar");return;}
      const modo=document.querySelector('input[name="cModo"]:checked').value; go.disabled=true;
      try{ const T=3000; for(let i=0;i<itens.length;i+=T){ $("#cProg").textContent=`Enviando ${Math.min(i+T,itens.length).toLocaleString("pt-BR")} de ${itens.length.toLocaleString("pt-BR")}…`;
          await api("POST","fabricantes/"+f.id+"/catalogo",{itens:itens.slice(i,i+T),modo:i===0?modo:"acrescentar",origem:nomeArq+" (importado em "+new Date().toLocaleDateString("pt-BR")+")"}); }
        delete LINHAS_CACHE[f.id]; delete CATS[f.id]; toast(itens.length.toLocaleString("pt-BR")+" itens importados"); renderFabricantes();
      }catch(err){ falha(err); go.disabled=false; $("#cProg").textContent=""; }};
  }
}

/* ===================== Relatórios ===================== */
let REL=[];
function renderRelatorios(){
  const v=$("#view-rel"), todas=can("ver_todas")||can("lancar");
  const hoje=new Date(), ini=new Date(hoje.getFullYear(),hoje.getMonth(),1);
  const iso=d=>new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
  const salvo=lsGet("rel_"+ME.id)||{};
  v.innerHTML=`<div class="popbody" style="margin-top:20px"><section class="card sec"><h2>Relatórios</h2>
   <p class="muted" style="margin:0">${todas?"Oportunidades de toda a equipe.":"Suas oportunidades."} Filtre e exporte em Excel ou PDF.</p>
   <div class="grid filt">
    <div class="f"><label for="rDe">De</label><input type="date" id="rDe" value="${salvo.de||iso(ini)}"></div>
    <div class="f"><label for="rAte">Até</label><input type="date" id="rAte" value="${salvo.ate||iso(hoje)}"></div>
    <div class="f"><label for="rCampo">Data considerada</label><select id="rCampo">${[["criado","Criação"],["enviado","Envio para lançamento"],["lancado","Lançamento no portal"],["atualizado","Última alteração"]].map(([k,t])=>`<option value="${k}" ${salvo.campo===k?"selected":""}>${t}</option>`).join("")}</select></div>
    ${todas?`<div class="f"><label for="rVend">Vendedor</label><select id="rVend"><option value="">Todos</option>${USERS.map(u=>`<option value="${u.id}" ${salvo.vend==u.id?"selected":""}>${esc(u.nome)}</option>`).join("")}</select></div>`:""}
    <div class="f full"><label>Fabricante</label><div class="row" id="rFab">${FABS.map(f=>`<label class="check"><input type="checkbox" value="${f.id}" ${!salvo.fab||salvo.fab.includes(f.id)?"checked":""}> ${esc(f.nome)}</label>`).join("")}</div></div>
    <div class="f full"><label>Situação</label><div class="row" id="rSt">${Object.entries(STATUS_LABEL).map(([k,t])=>`<label class="check"><input type="checkbox" value="${k}" ${!salvo.st||salvo.st.includes(k)?"checked":""}> ${t}</label>`).join("")}</div></div>
   </div>
   <div class="row"><button class="btn pri" id="rGo">Aplicar filtros</button><button class="btn" id="rXls" disabled>Exportar Excel</button><button class="btn" id="rPdf" disabled>Exportar PDF</button><span class="muted" id="rSt2" style="font-size:13px"></span></div></section>
   <section class="card sec" id="rRes"><p class="muted" style="margin:0">Clique em Aplicar filtros.</p></section></div>`;
  $("#rGo").onclick=carregarRel; $("#rXls").onclick=excelRel; $("#rPdf").onclick=pdfRel;
  carregarRel();
}
function filtrosRel(){
  const de=$("#rDe").value, ate=$("#rAte").value;
  const f={de, ate, campo:$("#rCampo").value, vend:$("#rVend")?$("#rVend").value:"",
    fab:[...document.querySelectorAll("#rFab input:checked")].map(x=>+x.value), st:[...document.querySelectorAll("#rSt input:checked")].map(x=>x.value)};
  lsSet("rel_"+ME.id,f); return f;
}
async function carregarRel(){
  const f=filtrosRel(); const q=new URLSearchParams({caixa:"todas",full:"1",campo:f.campo});
  if(f.de) q.set("de",new Date(f.de+"T00:00:00").getTime());
  if(f.ate) q.set("ate",new Date(f.ate+"T23:59:59").getTime());
  if(f.vend) q.set("vendedor",f.vend);
  if(f.fab.length&&f.fab.length<FABS.length) q.set("fab",f.fab.join(","));
  if(!f.fab.length){REL=[];mostrarRel(f);return;}
  if(f.st.length&&f.st.length<Object.keys(STATUS_LABEL).length) q.set("status",f.st.join(","));
  if(!f.st.length){REL=[];mostrarRel(f);return;}
  $("#rSt2").textContent="Carregando…";
  try{ REL=await api("GET","ops?"+q.toString()); }catch(e){ falha(e); return; }
  $("#rSt2").textContent=""; mostrarRel(f);
}
function dataRel(o,campo){return {criado:o.criado,enviado:o.enviadoEm,lancado:o.lancadoEm,atualizado:o.atualizado}[campo];}
function resumoRel(){ const porFab={},porSt={}; let tot=0;
  REL.forEach(o=>{const fn=fabNome(o.fabricanteId);porFab[fn]=porFab[fn]||{n:0,v:0};porFab[fn].n++;porFab[fn].v+=o.valor||0;porSt[o.status]=(porSt[o.status]||0)+1;tot+=o.valor||0;});
  return {porFab,porSt,tot}; }
function mostrarRel(f){
  const {porFab,porSt,tot}=resumoRel();
  $("#rXls").disabled=$("#rPdf").disabled=!REL.length;
  $("#rRes").innerHTML=`<div class="tiles"><div><span>Oportunidades</span><b>${REL.length}</b></div><div><span>Valor total</span><b>${BRL(tot)}</b></div>
     ${Object.entries(porSt).map(([k,n])=>`<div><span>${STATUS_LABEL[k]}</span><b>${n}</b></div>`).join("")}</div>
   ${Object.keys(porFab).length>1?`<div class="tablewrap"><table><thead><tr><th>Fabricante</th><th class="num">Oportunidades</th><th class="num">Valor</th></tr></thead><tbody>${Object.entries(porFab).sort((a,b)=>b[1].v-a[1].v).map(([k,x])=>`<tr><td>${esc(k)}</td><td class="num">${x.n}</td><td class="num">${BRL(x.v)}</td></tr>`).join("")}</tbody></table></div>`:""}
   <div class="tablewrap"><table><thead><tr><th>Data</th><th>Vendedor</th><th>Cliente</th><th>Projeto</th><th>Fabricante</th><th>Situação</th><th class="num">Valor</th><th>Registro</th></tr></thead><tbody>
   ${REL.map(o=>`<tr><td>${fmtData(dataRel(o,f.campo))}</td><td>${esc(o.dono)}</td><td>${esc(o.cliente)}</td><td>${esc(o.nome)}</td><td>${esc(fabNome(o.fabricanteId))}</td><td><span class="pill ${o.status}">${STATUS_LABEL[o.status]}</span></td><td class="num">${BRL(o.valor)}</td><td class="mono">${esc(o.registro)}</td></tr>`).join("")||'<tr><td colspan="8" class="muted">Nenhuma oportunidade com esses filtros.</td></tr>'}</tbody></table></div>`;
}
function textoFiltros(f){
  const d=x=>x?new Date(x+"T12:00").toLocaleDateString("pt-BR"):"…";
  const campo={criado:"criação",enviado:"envio",lancado:"lançamento",atualizado:"última alteração"}[f.campo];
  const fabs=f.fab.length===FABS.length?"todos os fabricantes":f.fab.map(fabNome).join(", ");
  const sts=f.st.length===Object.keys(STATUS_LABEL).length?"todas as situações":f.st.map(s=>STATUS_LABEL[s]).join(", ");
  const vend=f.vend?(USERS.find(u=>u.id==f.vend)||{}).nome:"";
  return `Período (${campo}): ${d(f.de)} a ${d(f.ate)} · ${fabs} · ${sts}${vend?" · vendedor: "+vend:""}`;
}
function excelRel(){
  const f=filtrosRel(); const dd=t=>t?new Date(t):"";
  const linhaOp=o=>{const d=o.dados||{},c=d.conta||{},ct=d.contato||{},op=d.oportunidade||{},pa=d.parceiro||{};return {
    "Situação":STATUS_LABEL[o.status],"Fabricante":fabNome(o.fabricanteId),"Vendedor":o.dono,"Cliente":c.nome||"","CNPJ":c.cnpj||"","Cidade":c.cidade||"","UF":c.uf||"",
    "Contato":[ct.nome,ct.sobrenome].filter(Boolean).join(" "),"E-mail":ct.email||"","Telefone":ct.telefone||"","Parceiro / integrador":d.temParceiro?pa.nome||"":"",
    "Projeto":op.nomeProjeto||"","Aplicação":op.aplicacao||"","Valor (R$)":Math.round((o.valor||0)*100)/100,"Data prevista do pedido":op.dataPedido?new Date(op.dataPedido+"T12:00"):"",
    "Criada em":dd(o.criado),"Enviada em":dd(o.enviadoEm),"Lançada em":dd(o.lancadoEm),"Lançada por":o.lancadoPor||"","Registro no portal":o.registro||"","Contato no fabricante":op.contatoSE||"","Descrição":op.descricao||""};};
  const ops1=REL.map(linhaOp);
  const lin=[],it=[];
  REL.forEach(o=>{const d=o.dados||{};(d.linhas||[]).forEach(l=>lin.push({"Cliente":o.cliente,"Projeto":o.nome,"Fabricante":fabNome(o.fabricanteId),"Situação":STATUS_LABEL[o.status],"Linha / produto":l.produto,"Família":l.familia||"","Valor (R$)":+l.valor||0}));
    (d.itens||[]).forEach(i=>it.push({"Cliente":o.cliente,"Projeto":o.nome,"Fabricante":fabNome(o.fabricanteId),"Código":i.code,"Descrição":i.desc,"Qtd":+i.qtd||0,"Preço unit. (R$)":+i.preco||0,"Total (R$)":(+i.qtd||0)*(+i.preco||0),"Linha / produto":i.produto||"","Família":i.familia||""}));});
  const {porFab,porSt,tot}=resumoRel();
  const res=[["Relatório de oportunidades"],[textoFiltros(f)],["Gerado em "+new Date().toLocaleString("pt-BR")+" por "+ME.nome],[],["Fabricante","Oportunidades","Valor (R$)"],
    ...Object.entries(porFab).map(([k,x])=>[k,x.n,Math.round(x.v*100)/100]),["Total",REL.length,Math.round(tot*100)/100],[],["Situação","Oportunidades"],...Object.entries(porSt).map(([k,n])=>[STATUS_LABEL[k],n])];
  xlsxBaixar([["Resumo",res,[{wch:40},{wch:16},{wch:18}]],["Oportunidades",ops1],["Linhas",lin.length?lin:[["Sem linhas"]]],["Itens",it.length?it:[["Sem itens"]]]],
    "oportunidades_"+(f.de||"")+"_"+(f.ate||"")+".xlsx");
}
function pdfRel(){
  const f=filtrosRel(); const {jsPDF}=window.jspdf; const doc=new jsPDF({orientation:"landscape",unit:"mm",format:"a4"});
  const W=doc.internal.pageSize.getWidth();
  doc.setFont("helvetica","bold"); doc.setFontSize(15); doc.text("Relatório de oportunidades",14,16);
  doc.setFont("helvetica","normal"); doc.setFontSize(9); doc.setTextColor(90);
  doc.text(doc.splitTextToSize(textoFiltros(f),W-28),14,22);
  doc.text("Gerado em "+new Date().toLocaleString("pt-BR")+" por "+ME.nome,14,30);
  const {porFab,porSt,tot}=resumoRel();
  doc.setTextColor(20); doc.setFontSize(10);
  doc.text(`${REL.length} oportunidade(s) · valor total ${BRL(tot)} · `+Object.entries(porSt).map(([k,n])=>STATUS_LABEL[k]+": "+n).join(" · "),14,37);
  doc.autoTable({startY:41,head:[["Data","Vendedor","Cliente","Projeto","Fabricante","Situação","Valor","Registro"]],
    body:REL.map(o=>[fmtData(dataRel(o,f.campo)),o.dono,o.cliente,o.nome,fabNome(o.fabricanteId),STATUS_LABEL[o.status],BRL(o.valor),o.registro||""]),
    styles:{fontSize:8,cellPadding:1.6},headStyles:{fillColor:[22,122,60]},columnStyles:{6:{halign:"right"},3:{cellWidth:70}},
    didDrawPage:d=>{doc.setFontSize(8);doc.setTextColor(120);doc.text("Página "+doc.internal.getNumberOfPages(),W-14,doc.internal.pageSize.getHeight()-6,{align:"right"});}});
  if(Object.keys(porFab).length){
    doc.autoTable({startY:doc.lastAutoTable.finalY+6,head:[["Fabricante","Oportunidades","Valor"]],
      body:[...Object.entries(porFab).sort((a,b)=>b[1].v-a[1].v).map(([k,x])=>[k,x.n,BRL(x.v)]),["Total",REL.length,BRL(tot)]],
      styles:{fontSize:9},headStyles:{fillColor:[22,122,60]},columnStyles:{1:{halign:"right"},2:{halign:"right"}},tableWidth:140});
  }
  doc.save("oportunidades_"+(f.de||"")+"_"+(f.ate||"")+".pdf");
}

/* ===================== POP ===================== */
const POPCHK="pop_checks_v1";
function renderPOP(){
  const v=$("#view-pop");
  v.innerHTML=`<div class="pop"><nav class="toc">
   <a href="#p-obj">1. Objetivo e quando usar</a><a href="#p-fluxo">Fluxo da equipe</a><a href="#p-antes">2. Antes de começar</a><a href="#p-acesso">3. Acessar o formulário</a>
   <a href="#p-s1">4. Seção 1 · Conta</a><a href="#p-s2">5. Seção 2 · Contato e local</a><a href="#p-parc">6. Parceiro e usuário final</a>
   <a href="#p-s3">7. Seção 3 · Oportunidade</a><a href="#p-s4">8. Seção 4 · Linhas de produto</a><a href="#p-envio">9. Salvar, avançar e enviar</a>
   <a href="#p-cen">10. Cenários</a><a href="#p-status">11. Depois de enviar</a><a href="#p-erros">12. Problemas comuns</a>
   <div style="padding:10px 8px 0"><div class="progress"><i id="popBar"></i></div><span class="muted" style="font-size:12px" id="popTxt"></span></div></nav>
  <div class="popbody">
  <section class="card" id="p-obj"><span class="eyebrow">POP-COM-001 · Registro de oportunidade no mySchneider</span><h2>1. Objetivo e quando usar</h2>
   <p>Padronizar o registro de oportunidades de clientes no programa <b>IAD Opportunities – Brazil</b> do mySchneider, com ou sem integrador, para garantir aprovação rápida e proteção da oportunidade em nome da S2I.</p>
   <ul><li>Registre assim que houver um projeto identificado com cliente, escopo e prazo de compra, de preferência antes de pedir preço especial à Schneider.</li>
   <li>Uma oportunidade por projeto/obra. Fornecimentos diferentes para o mesmo cliente em datas distintas viram registros separados.</li>
   <li>Responsáveis: o vendedor da conta preenche e envia; o administrador lança no portal em até 2 dias úteis após o envio.</li></ul></section>

  <section class="card" id="p-fluxo"><span class="eyebrow">Quem faz o quê</span><h2>Fluxo da equipe</h2>
   <ol><li><b>Vendedor</b> (interno ou externo): em <b>Oportunidades › + Nova</b>, escolhe o fabricante e o cliente (ou cria um novo), preenche o contato, o projeto e os itens com os preços do projeto. Na etapa <b>Revisão e envio</b>, clica em <b>Enviar para lançamento</b>.</li>
   <li>A oportunidade aparece na caixa <b>Pendentes</b> do administrador (o número em vermelho na aba mostra quantas há).</li>
   <li><b>Administrador</b>: abre a pendente, completa o que faltar, clica em <b>Preencher no portal</b> (Schneider), confere e envia no portal. Depois informa o <b>número do registro</b> e clica em <b>Marcar como lançada</b>. Ela sai de Pendentes e vai para <b>Concluídas</b>.</li>
   <li>Se faltar informação, o administrador clica em <b>Devolver ao vendedor</b> com o que precisa corrigir. O vendedor vê a oportunidade como <b>Devolvida</b>, corrige e envia de novo.</li>
   <li>Enquanto está pendente, o vendedor só acompanha. Se precisar mudar algo, usa <b>Puxar de volta para editar</b>.</li></ol></section>

  <section class="card" id="p-antes"><h2>2. Antes de começar</h2><p>Junte estes dados (o questionário desta página organiza tudo e salva sozinho):</p>
   <div class="chk">${["CNPJ, razão social e endereço completo com CEP do cliente final","Nome, sobrenome, e-mail e telefone com DDD do contato no cliente","Endereço da obra/projeto, se for diferente do cliente","Dados do integrador/painelista (se houver): razão social, endereço, contato","Dados do usuário final, se a conta informada não for quem vai usar os produtos","Escopo e códigos dos produtos com quantidades (da cotação S2I)","Data prevista para pedir preço à SE e data esperada do pedido do cliente","Nome do contato Schneider da conta (se tiver)"].map((t,i)=>`<label class="check"><input type="checkbox" data-pc="a${i}"> ${t}</label>`).join("")}</div>
   <p class="note">Dica: preencha primeiro o <b>Questionário</b> desta página. O portal recarrega de tempos em tempos e perde o que foi digitado; aqui cada resposta fica salva na hora.</p></section>

  <section class="card" id="p-acesso"><h2>3. Acessar o formulário</h2><ol>
   <li>Entre em <span class="path">se.com/myschneider</span> com seu usuário.</li>
   <li>Clique em <b>Oportunidades</b> (barra verde) ou <span class="path">Meus negócios › Oportunidades</span>.</li>
   <li>Clique em <b>Novo Registro › Registro Único</b>. (Registro Massivo serve para subir várias oportunidades por planilha.)</li>
   <li>Confira que o programa mostrado é <b>IAD Opportunities – Brazil</b> e que o ID da conta no topo é o da S2I correta.</li>
   <li>Com a extensão instalada, volte ao site e clique em <b>Revisão e envio › Preencher no portal</b>. Depois só revise as seções abaixo.</li></ol>
   <div class="chk"><label class="check"><input type="checkbox" data-pc="b0"> Formulário aberto no programa certo</label></div></section>

  <section class="card" id="p-s1"><h2>4. Seção 1 · Informações da conta do cliente final</h2>
   <ol><li>Digite o nome em <b>Pesquisar Nome da conta</b>. Se a conta aparecer, selecione: o portal preenche os dados. Use <b>Pesquisa Avançada</b> para buscar por cidade/CEP.</li>
   <li>Se não existir, preencha à mão: <b>Nome da conta*</b> (até 80 caracteres), <b>Endereço*</b>, <b>País*</b> = Brazil, <b>Estado/Província*</b> (só carrega depois do país), <b>Cidade*</b>, <b>CEP*</b>.</li></ol>
   <p class="muted">* = obrigatório no portal.</p>
   <div class="chk"><label class="check"><input type="checkbox" data-pc="c0"> Seção 1 conferida</label></div></section>

  <section class="card" id="p-s2"><h2>5. Seção 2 · Informações de contato do cliente final</h2>
   <ol><li><b>Nome* / Sobrenome*</b> do contato principal, <b>Email*</b>, <b>Número de telefone*</b> com DDD.</li>
   <li><b>Endereço do contato final do projeto*</b> (até 255 caracteres).</li>
   <li>Marque <b>“O endereço é o mesmo que o fornecido nas informações da Conta de cliente?”</b> se a obra for no endereço do cliente; senão preencha <b>Endereço do projeto final*, Cidade*, País*, Estado*, CEP*</b>.</li></ol>
   <div class="chk"><label class="check"><input type="checkbox" data-pc="d0"> Seção 2 conferida</label></div></section>

  <section class="card" id="p-parc"><h2>6. Parceiro da cadeia de valor e usuário final</h2>
   <ol><li><b>A conta informada é o utilizador final da oportunidade?</b> Sim quando o cliente da seção 1 é quem vai usar os produtos. Não quando a conta é, por exemplo, a construtora, e o produto vai para outra empresa: aí aparece o bloco <b>Informações do utilizador final</b> (nome, endereço, país, estado, cidade, CEP, contato, e-mail, telefone).</li>
   <li>Com integrador, painelista, instalador ou revenda: clique em <b>Adicionar parceiro da cadeia de valor</b> e preencha <b>Informação do Parceiro</b> (busque pelo nome primeiro; o portal pode já ter o cadastro).</li></ol>
   <div class="chk"><label class="check"><input type="checkbox" data-pc="e0"> Parceiro / usuário final conferidos (ou não se aplicam)</label></div></section>

  <section class="card" id="p-s3"><h2>7. Seção 3 · Informações sobre a oportunidade</h2>
   <ul><li><b>Nome do Projeto*</b> (até 100 caracteres), o mais descritivo possível. Padrão S2I: <span class="path">CLIENTE – OBRA/APLICAÇÃO – ESCOPO – CIDADE</span>.</li>
   <li><b>Estado</b> fica em Rascunho, automático. <b>Moeda</b> = Real Brasileiro. <b>Valor</b> é calculado pelas linhas de produto (não é digitado).</li>
   <li><b>Palavra-chave do parceiro</b>: sem integrador, repita o <b>nome da conta</b> (o site faz isso sozinho); com integrador, informe a palavra-chave combinada.</li>
   <li><b>Data prevista para a cotação</b>: quando você vai pedir orçamento à SE. <b>Data esperada do pedido*</b>: quando o cliente deve fechar. Datas no passado são recusadas.</li>
   <li><b>Contato Schneider</b>: vendedor SE que acompanha a conta. <b>Descrição</b>: escopo, aplicação, quem decide, concorrência e prazo. O questionário monta esse texto.</li></ul>
   <div class="chk"><label class="check"><input type="checkbox" data-pc="f0"> Seção 3 conferida</label></div></section>

  <section class="card" id="p-s4"><h2>8. Seção 4 · Linha de produtos</h2>
   <ol><li>Deixe marcado <b>Produto do programa</b>.</li>
   <li>Em <b>Pesquisar*</b>, digite a família (ex.: “TeSys”, “MCCB”, “ATV”). O portal sugere pares <span class="path">PRODUTO || FAMÍLIA</span>; clique no certo e ele preenche <b>Nome do produto*</b> e <b>Família de produtos</b>.</li>
   <li>Digite o <b>Valor Estimado*</b> da linha em reais.</li>
   <li>Para outro tipo de produto, clique em <b>Adicionar linha de oportunidade</b>. Uma linha por combinação produto + família.</li>
   <li>Não sabe em qual produto o código entra? Use a etapa <b>Linhas de produto</b> do questionário: cole os códigos, digite os preços do projeto e ele mostra o produto, a família e soma os valores por linha.</li></ol>
   <p class="note warn">O portal avisa: o valor mínimo para prestar contas no programa é de <b>R$ 5 mil</b>. Abaixo disso, fale com o gestor de conta SE antes de enviar.</p>
   <div class="chk"><label class="check"><input type="checkbox" data-pc="g0"> Linhas e valores conferidos</label></div></section>

  <section class="card" id="p-envio"><h2>9. Salvar, avançar e enviar</h2>
   <ol><li>Clique em <b>Salvar como rascunho</b> sempre que terminar uma seção. Isso protege contra a recarga da página.</li>
   <li>Clique em <b>Próximo</b>. Na tela seguinte informe o <b>CNPJ do Cliente Final*</b> (com a extensão ele é preenchido sozinho).</li>
   <li>Revise e clique em <b>Enviar para aprovação</b>.</li>
   <li>No sistema, informe o nº do registro e clique em <b>Marcar como lançada</b>.</li></ol>
   <div class="chk"><label class="check"><input type="checkbox" data-pc="h0"> Enviado para aprovação e anotado</label></div></section>

  <section class="card" id="p-cen"><h2>10. Cenários</h2>
   <details open><summary>Venda direta, sem integrador</summary><p>Conta = cliente final. “A conta informada é o utilizador final” = Sim. Não adicione parceiro. Preencha seções 1 a 4 e o CNPJ.</p></details>
   <details><summary>Com integrador / painelista</summary><p>Conta = cliente final (dono da planta). Adicione o integrador em <b>Adicionar parceiro da cadeia de valor</b>. Na descrição, diga o que o integrador monta (ex.: painéis CCM) e quem especificou a marca.</p></details>
   <details><summary>Projeto grande / obra (construtora, EPC)</summary><p>Se a conta for a construtora, responda <b>Não</b> em “utilizador final” e informe quem vai operar a instalação. Registre a fase (especificação, concorrência, negociação), o especificador e as entregas na descrição. Separe em linhas por produto, e se houver entregas em datas muito diferentes, avalie registros separados por etapa.</p></details>
   <details><summary>Muitas oportunidades de uma vez</summary><p>Use <b>Novo Registro › Registro Massivo</b> (por planilha) quando houver várias oportunidades simples para registrar juntas.</p></details></section>

  <section class="card" id="p-status"><h2>11. Depois de enviar: situações possíveis</h2>
   <div class="tablewrap"><table><thead><tr><th>Estado no portal</th><th>O que fazer</th></tr></thead><tbody>
    <tr><td>Rascunho</td><td>Ainda não enviada. Termine e envie.</td></tr>
    <tr><td>Pendente / Em Andamento</td><td>Em análise pela Schneider. Acompanhe em Oportunidades › Registros.</td></tr>
    <tr><td>Informações adicionais necessárias</td><td>Abra o registro, complete o que foi pedido e reenvie. Fica como “Informações adicionais fornecidas”.</td></tr>
    <tr><td>Aprovado</td><td>Oportunidade protegida. Peça preço especial citando o registro.</td></tr>
    <tr><td>Rejeitado</td><td>Leia o motivo; corrija e registre de novo se fizer sentido.</td></tr>
    <tr><td>Ganho / Fechado Perdido</td><td>Atualize o resultado quando o cliente decidir.</td></tr></tbody></table></div></section>

  <section class="card" id="p-erros"><h2>12. Problemas comuns</h2>
   <details><summary>A página recarregou e perdi o preenchimento</summary><p>Clique de novo em <b>Preencher no portal</b>: ele refaz o preenchimento em segundos. Para quem digita direto no portal, a extensão salva o progresso a cada 20 s e oferece <b>Restaurar progresso</b> após a recarga.</p></details>
   <details><summary>Estado/Província não carrega</summary><p>Selecione o País primeiro (Brazil). A lista de estados só aparece depois.</p></details>
   <details><summary>Não acho o produto na pesquisa da linha</summary><p>Pesquise pela família, não pelo código (o portal não conhece códigos comerciais). Use a etapa 6 do questionário para descobrir a família de cada código.</p></details>
   <details><summary>Data do pedido inválida</summary><p>A data precisa ser futura. Se o cliente atrasou, atualize a data.</p></details></section>
  </div></div>`;
  const st=lsGet(POPCHK)||{};
  const boxes=[...v.querySelectorAll("[data-pc]")];
  const upd=()=>{const n=boxes.filter(b=>b.checked).length;$("#popBar").style.width=(n/boxes.length*100)+"%";$("#popTxt").textContent=n+" de "+boxes.length+" itens conferidos";};
  boxes.forEach(b=>{b.checked=!!st[b.dataset.pc];b.onchange=()=>{st[b.dataset.pc]=b.checked;lsSet(POPCHK,st);upd();};});
  v.querySelector(".toc").insertAdjacentHTML("beforeend",`<button class="btn small ghost" id="popReset" style="margin:8px">Zerar checklist</button>`);
  $("#popReset").onclick=()=>{boxes.forEach(b=>{b.checked=false;st[b.dataset.pc]=false});lsSet(POPCHK,st);upd();};
  upd();
}


/* ===================== EXTENSÃO ===================== */
function renderBM(){
  const v=$("#view-bm");
  v.innerHTML=`<div class="popbody" style="margin-top:20px">
  <section class="card"><span class="eyebrow">Situação neste navegador</span>
    <h2>${EXT?"Extensão conectada":"Extensão não instalada"}</h2>
    <p>${EXT?`Versão ${esc(EXT)}. Na etapa <b>Revisão e envio</b> de cada oportunidade, o botão <b>Preencher no portal</b> já funciona.`
      :"Sem a extensão, o site não consegue escrever no portal da Schneider (o Chrome bloqueia uma página de mexer em outra). Instale uma vez seguindo os passos abaixo."}</p></section>
  <section class="card"><span class="eyebrow">Instalar (uma vez por computador)</span><h2>Como instalar</h2><ol>
   <li>Copie a pasta <span class="path">extensao</span> (vem junto com o site) para um lugar fixo do computador, por exemplo <span class="path">C:\\S2I\\extensao</span>. Não apague depois.</li>
   <li>No Chrome, abra <span class="path">chrome://extensions</span> (copie e cole na barra de endereço).</li>
   <li>Ligue o <b>Modo do desenvolvedor</b> (canto superior direito).</li>
   <li>Clique em <b>Carregar sem compactação</b> e escolha a pasta <span class="path">extensao</span>.</li>
   <li>Se você abre este site direto do computador (endereço começa com <span class="path">file://</span>): em <b>Detalhes</b> da extensão, ligue <b>Permitir acesso a URLs de arquivo</b>.</li>
   <li>Recarregue esta página (F5). O selo da aba muda para <b>conectada</b>.</li></ol>
   <p class="note">A TI pode instalar para todos de uma vez pela política do Chrome da empresa; o arquivo LEIA-ME explica.</p></section>
  <section class="card"><span class="eyebrow">Usar</span><h2>No dia a dia</h2><ol>
   <li>Abra no Chrome o mySchneider em <b>Oportunidades › Novo Registro › Registro Único</b> e deixe a aba aberta.</li>
   <li>Com integrador: clique lá em <b>Adicionar parceiro da cadeia de valor</b>.</li>
   <li>No sistema, abra a pendente e vá em <b>Revisão e envio › Preencher no portal</b>. O Chrome muda para a aba do portal e preenche.</li>
   <li>Confira o resumo (no site e no painel verde do portal), clique em <b>Salvar como rascunho</b>, depois <b>Próximo</b>. O CNPJ é preenchido sozinho quando a tela aparece.</li>
   <li>Revise e clique em <b>Enviar para aprovação</b>. Nada é enviado sem você clicar.</li><li>Volte ao sistema, informe o nº do registro e clique em <b>Marcar como lançada</b>.</li></ol></section>
  <section class="card"><span class="eyebrow">Contra a recarga do portal</span><h2>Progresso salvo sozinho</h2>
   <p>Com a extensão, a página de Registro Único guarda o que estiver digitado a cada 20 segundos. Se o portal recarregar, o painel verde avisa e oferece <b>Restaurar progresso</b>. Se veio do site, é só clicar de novo em <b>Preencher no portal</b>.</p></section></div>`;
}


boot();
