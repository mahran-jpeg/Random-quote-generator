const listOfQuotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela"
  ,
  "The way to get started is to quit talking and begin doing. -Walt Disney"
  ,
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs"
  ,
  
  "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"
  ,
  
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"
,  
  
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron"
,
 
  "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon."
  ,


  "The road to success is always under construction.- Lily Tomlin"
  ,
"I'm not a self-made man. I've had a lot of help. - Stan Lee"
,
"If you don't build your dream, someone else will hire you to help them build theirs. -Tony Gaskins"
,
"You've got to be in it to win it. -Tony Robbins"
,
"Success is stumbling from failure to failure with no loss of enthusiasm. -Winston Churchill"
,
"People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. -Zig Ziglar"
,
"If you want to make your dreams come true, the first thing you have to do is wake up. -J.M. Power"
,
"The only limit to our realization of tomorrow will be our doubts of today.-Franklin D. Roosevelt"
,
"We may encounter many defeats but we must not be defeated. -Maya Angelou"
,
"Be persistent and never give up hope. -George Lucas"
,
"I have a dream. - Martin Luther King Jr."
,
"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
,

"The way to get started is to quit talking and begin doing. - Walt Disney"
,

"So we beat on, boats against the current, borne back ceaselessly into the past. - F. Scott Fitzgerald"
,

"A journey of a thousand miles begins with a single step. - Lao Tzu"
,

"Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson"
,

"If you want to make your dreams come true, the first thing you have to do is wake up. - J.M. Power"
,
"Life isn’t about finding yourself. Life is about creating yourself. - Mahran Hassan",

"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean"
,
"Believe you can and you're halfway there. - Theodore Roosevelt"
,
"The best and most beautiful things in the world cannot be seen or even heard, but must be felt with the heart. - Helen Keller"
,
"I'm a munch fr fr - Mahran Mohamed Aly Abdelhamied Ahmed Hassan"
]

let quoteBox = document.getElementById("quote-box-js");

 function quoteGenerator(){
  for(let i=0;i<listOfQuotes.length;i++){
  
    let randomIndex = Math.floor (Math.random () * (listOfQuotes.length));
    let randomQuote=listOfQuotes[randomIndex]
    quoteBox.textContent=randomQuote;
  }
 }
 
 document.getElementById("click-btn-js").addEventListener('click',function(){
 quoteGenerator();

})










