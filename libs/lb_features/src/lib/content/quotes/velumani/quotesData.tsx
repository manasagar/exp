import { sadhguruData } from "./sadhguruData";

const velumaniItems = [
  {
    imgNames: [['strength']],
    tags: ['self-help'],
    quote: `<p>The <span style="font-weight: bold; color: #3b82f6;">more problems</span> you solve, the <span>stronger</span> you become. 💪</p>
      `,
    context: null,
    imgPrompts: [
      [
        'Photorealistic cinematic photo of a muscled weightlifter lifting heavy weights',
      ],
    ],
  },
  {
    imgNames: [['meditation', 'Lazyperson']],
    tags: ['self-help'],
    quote: `<p><span style="font-weight: bold;">What is easy</span> is not <span style="font-weight: bold;">right</span> and what is <span style="color: #3b82f6;">right</span> is not <span style="color: #3b82f6;">easy</span>.</p>`,
    context: null,
    imgPrompts: [
      [
        'A realistic photo of a Unhealthy lazy Indian eating pizza while holding remote',
        'A Realistic photo of person doing meditation in a room',
      ],
    ],
  },
  {
    imgNames: [['poverty_power']],
    tags: ['self-help'],
    quote: `<p>When you remain <span style="font-weight: bold;">challenged</span>, either you become <span style="font-weight: bold;">powerful</span> or you <span style="font-weight: bold;">succumb</span>.</p>`,
    context:
      'Reflecting on his early responsibilities, Dr. Velumani highlights the transformative power of facing challenges, suggesting that adversity can either strengthen or weaken individuals. 💪🏼🔥<br/><br/>',
    imgPrompts: [['A person standing tall amidst adversity.']],
  },
  {
    imgNames: [['Pamper']],
    tags: ['self-help'],
    quote: `<p><span style="font-weight: bold;">Parent</span>, don't <span style="font-weight: bold;">pamper</span>. 👨‍👧‍👦💼</p>`,
    context:
      'Dr. Velumani offers succinct advice on parenting, advocating for a balance between nurturing and allowing children to independently solve problems, fostering resilience and self-reliance. <br/><br/>',
    imgPrompts: [['A parent guiding their child.']],
  },

  {
    imgNames: [
      [
        `Generate an image showing a father kneeling down with his hands placed on the ground. His KID boy is stepping onto the father's hands with his bare foot. The setting should be outdoors, with grass or dirt beneath them.`,
      ],
    ],
    tags: ['wealth'],
    quote: `<p style="text-align: base;">The <span style="font-weight: bold; color: #10b981;">more you create</span> and the <span style="font-weight: bold; color: #10b981;">less you consume</span>, the <span style="font-weight: bold; color: #10b981;">richer you become</span>.</p>`,
    context:
      'Dr. Velumani emphasizes the importance of focusing on creation over consumption, suggesting that wealth and success come from productive endeavors rather than excessive spending. <br/><br/>',
    imgPrompts: [['A person building something.']],
  },
  {
    imgNames: [['deciding']],
    tags: ['relationship'],
    quote:
      "<p>You can't <span className='font-bold text-blue-500'>discuss</span> and <span className='font-bold text-blue-500'>decide</span> at the same time. Either you <span className='font-bold text-blue-500'>discuss</span>, or you <span className='font-bold text-blue-500'>decide</span>.</p>",
    context:
      'Velumani received a marriage proposal in Mumbai. Rather than consulting his parents first, he independently accepted the proposal. If he had discussed it with his parents initially, they might have preferred a match from their hometown, leading to a potential disagreement. <br/><br/>',
    imgPrompts: [['A confident looking Indian male.']],
  },
  {
    imgNames: [['marriage-happiness']],
    tags: ['relationship'],
    quote:
      '<p>The cost of the marriage and the happiness out of the marriage are not directly related.</p>',
    context:
      'Velumani decided to limit the guest list for his wedding to keep costs low. Despite spending only a fraction of what is traditionally spent on weddings, the happiness and success of the marriage were not compromised. <br/><br/>',
    imgPrompts: [['A bride and groom happily celebrating.']],
  },
  {
    imgNames: [['business-decision']],
    tags: ['business'],
    quote: '<p>Boys should not do business; only a man should.</p>',
    context:
      'Velumani reflects on his decision to start Thyrocare after years of experience and growth, emphasizing the importance of maturity and readiness in entrepreneurship. <br/><br/>',
    imgPrompts: [['A successful businessman confidently making a decision.']],
  },
  {
    imgNames: [['visionary']],
    tags: ['career'],
    quote:
      "<p>Don't settle in a <span className='font-bold text-blue-500'>comfort zone</span>; break it.</p>",
    context:
      'Velumani reflects on his journey at BRC and realizes the importance of pushing oneself beyond comfort zones to achieve greater success. <br/><br/>',
    imgPrompts: [['A person breaking through a barrier or obstacle.']],
  },
  {
    imgNames: [['discuss']],
    tags: ['relationship'],
    quote:
      '<p>What is easy to do is not right to do; what is right to do is not easy to do.</p>',
    context:
      "Velumani's wife expresses her unwavering support for his decision to resign from his job, highlighting the challenges and sacrifices involved in pursuing what is right. <br/><br/>",
    imgPrompts: [
      [
        'A supportive partner standing beside someone facing a difficult decision.',
      ],
    ],
  },
  {
    imgNames: [['trust']],
    tags: ['relationship'],
    quote:
      "<p>If your spouse <span className='font-bold text-blue-500'>trusts</span> you, your energy is 10x; if they doubt you, your energy is 0x.</p>",
    context:
      "Velumani acknowledges the immense impact of his wife's unwavering trust and support on his entrepreneurial journey, underscoring the importance of spousal trust in achieving success. <br/><br/>",
    imgPrompts: [['A couple sharing a moment of trust and support.']],
  },
  {
    imgNames: [['plan']],
    tags: ['career'],
    quote:
      "<p>If there is a <span className='font-bold text-blue-500'>plan B</span>, plan A doesn't work.</p>",
    context:
      "Velumani reflects on the importance of committing fully to one's primary plan or goal, suggesting that having a backup plan may undermine the determination to succeed in the initial endeavor. <br/><br/>",
    imgPrompts: [["A person tearing up a piece of paper labeled 'Plan B'."]],
  },
  {
    imgNames: [['stumbling']],
    tags: ['career'],
    quote:
      "<p>For the intelligent, every stumbling block is a <span className='font-bold text-blue-500'>stepping stone</span>.</p>",
    context:
      'Velumani describes how obstacles and challenges in his entrepreneurial journey, such as limited resources and expertise, ultimately propelled him forward rather than hindering his progress. <br/><br/>',
    imgPrompts: [
      ['A person using stepping stones to overcome obstacles on a path.'],
    ],
  },
  {
    imgNames: [['stumbling_skepticism']],
    tags: ['career'],
    quote:
      '<p>If everybody appreciates you, that means it was a wrong decision.</p>',
    context:
      'Velumani challenges the notion that unanimous approval indicates a wise decision. He suggests that true innovation and success often face initial skepticism.',
    imgPrompts: [['An image of a person facing skepticism from others']],
  },
  {
    imgNames: [['analytics']],
    tags: ['business'],
    quote:
      "<p><span className='font-bold text-blue-500'>Quantify</span> what is <span className='font-bold text-blue-500'>Quantified</span>, you can <span className='font-bold text-blue-500'>monitor</span>; what is <span className='font-bold text-blue-500'>monitored</span>, you can <span className='font-bold text-blue-500'>improve</span>.</p>",
    context:
      'Velumani emphasizes the importance of analytics and monitoring in business management, advocating for quantifying and tracking key metrics to drive improvement and growth.',
    imgPrompts: [['A person analyzing data on a computer.']],
  },
  {
    imgNames: [['growth']],
    tags: ['business'],
    quote:
      "<p>Growth is a <span className='font-bold text-blue-500'>number</span> that comes into <span className='font-bold text-blue-500'>denominator</span> in every calculation.</p>",
    context:
      'Velumani underscores the critical role of growth in business success, highlighting its pervasive impact on various aspects of financial and operational performance.',
    imgPrompts: [["A mathematical equation with 'growth' as the denominator."]],
  },

  {
    imgNames: [['negotiation']],
    tags: ['business'],
    quote:
      "<p>When you don't want to sell, you get the <span className='font-bold text-blue-500'>maximum value</span>.</p>",
    context:
      'Velumani shares his strategy in negotiating business deals, emphasizing the importance of timing and mindset in maximizing value when considering a sale.',
    imgPrompts: [['A person confidently negotiating a deal.']],
  },
  {
    imgNames: [['strength']],
    tags: ['self-help'],
    quote:
      "<p>When you struggle to come up in life, you may not come up; but when you come up, it's because of that <span className='font-bold text-blue-500'>struggle</span> that <span className='font-bold text-blue-500'>decades back</span> that's making you <span className='font-bold text-blue-500'>powerful</span> today.</p>",
    context:
      'Reflecting on his journey, Velumani acknowledges the transformative power of past struggles in building resilience and strength, shaping his success in the present.',
    imgPrompts: [
      ['A person climbing a mountain, symbolizing overcoming challenges.'],
    ],
  },
  {
    imgNames: [['success_challenge']],
    tags: ['career'],
    quote:
      '<p>Success is never a problem. Sustaining the success is the biggest problem.</p>',
    context:
      "Velumani emphasizes the challenges of maintaining success once it's achieved, suggesting that initial success is not the end of the journey but the beginning of new challenges.",
    imgPrompts: [['A businessman facing uphill challenges.']],
  },
  {
    imgNames: [['pricing']],
    tags: ['business'],
    quote:
      "<p>If you know pricing, you can do business. But if you're not costing, you can disrupt the business.</p>",
    context:
      'Velumani stresses the importance of understanding costs in addition to pricing, suggesting that overlooking costs can have detrimental effects on business operations and profitability.',
    imgPrompts: [['A businessman analyzing financial data.']],
  },
  {
    imgNames: [['mentorship']],
    tags: ['career'],
    quote:
      '<p>Never sit and do the work; teach someone how to do that work.</p>',
    context:
      'Velumani advises against micromanagement and encourages delegation and mentorship as a means of empowering others and fostering growth within the organization.',
    imgPrompts: [['A mentor guiding a protege.']],
  },
  {
    imgNames: [['pricing_risk']],
    tags: ['business'],
    quote:
      '<p>Risk-taking: if you price it high, even success chances are low. If you price it low, success is arrested, but profits may not be that big.</p>',
    context:
      'Velumani underscores the delicate balance of risk-taking in pricing strategies, suggesting that setting prices too high or too low can have differing impacts on success and profitability.',
    imgPrompts: [['A businessman pondering pricing strategies.']],
  },
  {
    imgNames: [['long_term_success']],
    tags: ['career'],
    quote:
      "<p>Business is not a hundred-meter dash. Don't get disappointed too early.</p>",
    context:
      'Velumani urges entrepreneurs to adopt a long-term perspective and remain resilient in the face of setbacks, emphasizing that success in business often requires perseverance and patience.',
    imgPrompts: [['An entrepreneur facing obstacles along the journey.']],
  },
  {
    imgNames: [['mentorship_growth']],
    tags: ['career'],
    quote: '<p>Changing Mentor is not growth.</p>',
    context:
      'Velumani advises against frequently changing mentors, suggesting that true growth comes from dedication, consistency, and learning from experience rather than seeking guidance from multiple sources.',
    imgPrompts: [['An entrepreneur seeking guidance.']],
  },
];

const velumaniData = {
  common: {
    assetPath: 'velumani',
    intro: {},
  },

  items: velumaniItems,
};



export const quotesData = {
  common: {
    assetPath: 'personStories',
  },
  velumani: velumaniData,
  sadhguru: sadhguruData,
};
