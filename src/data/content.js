// Single source of truth for every string on the page.
// Edit here — components stay untouched.

export const brand = {
  name: 'SMC India',
  tagline: 'Smart Money Concepts.',
}

export const hero = {
  emoji: '👋',
  headline: ['LEARN SMART', 'MONEY CONCEPTS'],
  // `bold: true` renders the segment in the heavy ink weight, like the reference.
  subhead: [
    { text: 'Understand what institutions actually do on a chart — ' },
    { text: 'liquidity, order blocks, market structure', bold: true },
    { text: '. Taught step by step, in the Indian market context. ' },
    { text: 'Free community, zero noise.', bold: true },
    { text: ' 👇' },
  ],
  cta: {
    label: 'Join the community',
    href: 'https://t.me/smcindiaofficial',
    variant: 'telegram',
  },
  rating: {
    value: 4.7,
    outOf: 5,
    label: '(800+ Traders Trained)',
  },
  strip: 'Covered weekly: Nifty · Bank Nifty · SMC · ICT · Market structure · Liquidity',
  diagram: {
    src: '/retail-vs-smc.jpeg',
    alt:
      'Retail versus SMC entry compared. Retail buys the trendline with a stop just under it — low reward, high risk because that stop is the liquidity. SMC waits for the equal lows to be swept, then enters from the imbalance for a far higher reward and lower risk.',
  },
  funFact: {
    label: 'Ohh !! by the way',
    body:
      'Nearly 30,000 traders follow along across Instagram and Telegram. Post your markup in the group and it gets reviewed.',
  },
}

export const inside = {
  title: 'Inside',
  items: [
    'Live Analysis',
    'Daily chart breakdowns on Nifty & Bank Nifty',
    'SMC/ICT concepts explained from scratch',
    'Free PDFs and cheat sheets',
    'Post your markup, get it reviewed',
    'A lot more perks…',
  ],
  ctaKicker: 'Trade like the Banks',
  cta: {
    label: 'Join the community',
    href: 'https://t.me/smcindiaofficial',
    variant: 'telegram',
  },
}

export const disclaimer =
  'Educational content only. Not investment advice. Not SEBI-registered. Markets carry risk.'
