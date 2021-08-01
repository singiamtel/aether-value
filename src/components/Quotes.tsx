

function Quotes() {

  const sentences = [
    '"An investment in knowledge pays the best interest." — Benjamin Franklin' ,
    '"I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful." — Warren Buffett',
    '"It\'s not whether you\'re right or wrong that\'s important, but how much money you make when you\'re right and how much you lose when you\'re wrong." — George Soros',
    '"Don\'t look for the needle in the haystack. Just buy the haystack!" — John Bogle',
    '"The individual investor should act consistently as an investor and not as a speculator." — Ben Graham',
    '"Know what you own, and know why you own it." — Peter Lynch ',
    '"The four most dangerous words in investing are, it’s different this time." — Sir John Templeton',
    '"Wide diversification is only required when investors do not understand what they are doing." — Warren Buffett',
    '"You get recessions, you have stock market declines. If you don\'t understand that\'s going to happen, then you\'re not ready, you won\'t do well in the markets." — Peter Lynch',
    '"The most contrarian thing of all is not to oppose the crowd but to think for yourself." — Peter Thiel ',
    ' “Behind every stock is a company. Find out what it’s doing.” — Peter Lynch',
    '“All intelligent investing is value investing. Acquiring more that you are paying for. You must value the business in order to value the stock.” — Charlie Munger',
    '“Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.” — Paul Samuelson',
    '“The investor’s chief problem — even his worst enemy — is likely to be himself.” — Benjamin Graham',
    '“If you have trouble imagining a 20% loss in the stock market, you shouldn’t be in stocks.” — John Bogle',
    '“Every once in a while, the market does something so stupid it takes your breath away.” — Jim Cramer',
    '“The person who starts simply with the idea of getting rich won’t succeed; you must have a larger ambition.” — John D. Rockefeller',
    '“A market downturn doesn’t bother us. It is an opportunity to increase our ownership of great companies with great management at good prices.” — Warren Buffett',
    '“I can calculate the motions of the heavenly bodies, but not the madness of people.” -Isaac Newton',
    '“A bull market is like sex.  It feels best just before it ends.” -Barton Biggs',
    '“The first rule of investment is: Don’t Lose.  And the second rule of investment is: Don’t forget the first rule.” -Warren Buffett',
    '“I tell my father’s story of the gambler who lost regularly.  One day he hears about a race with only one horse in it, so he bet the rent money.  Halfway around the track, the horse jumped over the fence and ran away.” -Howard Marks',
    '“More people lost money waiting for corrections and anticipating corrections than the actual corrections.” -Peter Lynch',
    '“The time to buy is when there’s blood in the streets.” -Baron Rothschild',
    '“Price is what you pay. Value is what you get.” -Benjamin Graham',
    '“The stock market is filled with individuals who know the price of everything, but the value of nothing.” -Philip Fisher',
    '“In the short-run, the market is a voting machine…but in the long-run, the market is a weighing machine.” -Benjamin Graham',
    '“In fact, when we own portions of outstanding businesses with outstanding managements, our favorite holding period is forever.”  -Warren Buffett',
    '“Buy not on optimism, but on arithmetic.” – Benjamin Graham',
    '“Minimizing downside risk while maximizing the upside is a powerful concept.” – Mohnish Pabrai',
    '“Spend each day trying to be a little wiser than you were when you woke up.” – Charlie Munger',
    '“The desire to perform all the time is usually a barrier to performing over time.” – Robert Olstein',
    '“It is impossible to produce superior performance unless you do something different from the majority.” – John Templeton',
    '“The secret to investing is to figure out the value of something – and then pay a lot less.” Joel Greenblatt',
    '“In many ways, the stock market is like the weather in that if you don’t like the current conditions all you have to do is wait a while.” – Low Simpson',
    '“The stock market is a device for transferring money from the impatient to the patient.” – Warren Buffett',

  ]

  var randomIndex= Math.floor(Math.random() * sentences.length);
	

  return (
          <div>
            <p>{sentences[randomIndex]}</p>
          </div>
  );
}
export default Quotes;
