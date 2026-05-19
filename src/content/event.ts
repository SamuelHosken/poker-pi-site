/**
 * Single source of truth for the Poker Pi event.
 * All UI sections read from this object — no hard-coded copy in components.
 */

export type TimelineItem = {
  time: string;
  title: string;
  subtitle?: string;
  warn?: string;
  highlight?: boolean;
};

export type Structure = {
  id: string;
  name: string;
  price: number;
  unit: string;
  includes: string[];
  featured?: boolean;
};

export type Prize = {
  place: string;
  amount: number;
  medal: string;
  extra?: string;
};

export type Rule = string;

export const event = {
  name: "Poker Pi",
  tagline: "O poker é matemática. O resto é narrativa.",

  // Dates (ISO with Brazilian timezone for clarity)
  date: "2026-05-23",
  dateLabel: "23/05",
  dateDisplay: "23 · MAI · 2026",
  weekday: "Sábado",
  startTime: "17h",
  registrationDeadline: "2026-05-20T23:59:59-03:00",
  registrationDeadlineLabel: "20/05 · Quarta-feira",

  capacity: 30,

  venue: {
    name: "Condomínio Solar da Serra",
    address: "Quadra 1, Casa 14 — Jardim Botânico, Brasília · DF",
    neighborhood: "Jardim Botânico",
    city: "Brasília",
    state: "DF",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+Solar+da+Serra+Jardim+Bot%C3%A2nico+Bras%C3%ADlia",
  },

  contact: {
    pixKey: "pokerpi2026@gmail.com",
    whatsappUrl: "https://chat.whatsapp.com/KJmiMjtr2a26tgr8Tz0Zn9?mode=gi_t",
    organizerName: "João",
  },

  // Mux playback ID for the convite video — served adaptive (HLS) from Mux CDN.
  // Swap for a new one if you upload a different cut.
  videoPlaybackId: "DS2zZkp5Po01Nu9LjFbFKTkdkRkiXx901efyUQg2Gp94g",

  timeline: [
    {
      time: "14h",
      title: "Abertura do evento",
      subtitle: "Recepção, ambientação e início da estrutura",
    },
    {
      time: "15h30",
      title: "Chegada limite",
      warn: "⚠ Todos devem estar no local até este horário",
    },
    {
      time: "15h30",
      title: "Briefing",
      subtitle: "Explicação de regras, organização das mesas e alinhamento",
    },
    {
      time: "17h",
      title: "Início do torneio",
      subtitle: "Cards in the air. Sem atraso.",
      highlight: true,
    },
  ] satisfies TimelineItem[],

  structures: [
    {
      id: "basica",
      name: "Estrutura 01 · Básica",
      price: 45,
      unit: "por pessoa",
      includes: [
        "Jantar completo",
        "Bebidas não alcoólicas",
        "Estrutura do evento",
      ],
    },
    {
      id: "open-bar",
      name: "Estrutura 02 · Open Bar",
      price: 75,
      unit: "por pessoa",
      featured: true,
      includes: [
        "Jantar completo",
        "Open Bar: Whisky Sour",
        "Open Bar: Caipirinha",
        "Open Bar: Cerveja",
        "Estrutura do evento",
      ],
    },
  ] satisfies Structure[],

  menu: [
    "Lasanha de Frango",
    "Lasanha à Bolonhesa",
    "Escondidinho de Frango",
    "Escondidinho de Carne",
  ],

  tournament: {
    buyIn: 25,
    reBuy: 45,
    reBuyNote: "Opcional · Limite de 1 por jogador",
    buyInNote: "Pago no dia, antes da entrega das fichas",
    prizes: [
      { place: "1º lugar", amount: 400, medal: "i.", extra: "+ Troféu" },
      { place: "2º lugar", amount: 150, medal: "ii." },
      { place: "3º lugar", amount: 50, medal: "iii." },
    ] satisfies Prize[],
    rules: [
      "**Re-buy** permitido apenas até o final do **3º nível de blinds**. Após isso, não serão aceitos.",
      "Pagamento de **buy-in e re-buy** realizado apenas no dia do evento, antes da entrega das fichas.",
      "Formas de pagamento no dia: **PIX ou dinheiro**.",
      "Valor da estrutura (R$ 45 ou R$ 75) **NÃO inclui** buy-in.",
    ] satisfies Rule[],
  },

  about: {
    quote:
      "A diferença entre o jogador recreativo e o profissional não é a sorte. É a frequência com que cada um toma a decisão matematicamente correta.",
    paragraphs: [
      "O **Poker Pi** nasceu de uma convicção simples: a de que o poker mereceria ser jogado com a mesma seriedade com que se estuda *matemática, finanças*, ou qualquer ciência da decisão sob incerteza.",
      "Não é cassino. Não é jogatina. É uma noite de torneio fechado, com regras claras, jantar honesto e uma comunidade que leva o jogo a sério — sem perder o bom humor.",
    ],
  },
} as const;

export type EventData = typeof event;
